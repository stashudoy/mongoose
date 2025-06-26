import {ObjectId} from 'mongodb'
import {usersRepository} from '../repositories/users-repository'
import {UserDBType} from '../types/types'
import bcrypt from 'bcrypt'

export const usersService = {

    async getUsers(): Promise<UserDBType[]> {
        return usersRepository.getUsers()
    },

    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return usersRepository.getUser(id)
    },

    async createUser(login: string, email: string, password: string): Promise<UserDBType>
     {  
        const passwordSalt = await bcrypt.genSalt(10)
        const passwordHash = await this._generateHash(password, passwordSalt)
        let user = {_id: new ObjectId(), login, email, passwordHash, passwordSalt, addedAt: new Date()}
        return usersRepository.createUser(user)
    },

    async deleteUser(id: ObjectId): Promise<boolean> {
        return usersRepository.deleteUser(id)
    },

    async updateUser(id: ObjectId, login: string, email: string): Promise<boolean> {
        return usersRepository.updateUser(id, login, email)
    },

    async checkCredentials(login: string, password: string) {
        const user = await usersRepository.findByLogin(login)
        if(!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        
        if(user.passwordHash !== passwordHash){
            return false
        }
        
        return true
    },

    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt)
        return hash
    }

}