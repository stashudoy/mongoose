import {ObjectId} from 'mongodb'
import {usersRepository} from '../repositories/users-repository'
import {UserDBType} from '../types/types'

export const usersService = {

    async getUsers(): Promise<UserDBType[]> {
        return usersRepository.getUsers()
    },

    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return usersRepository.getUser(id)
    },

    async createUser(userName: string, email: string): Promise<UserDBType>
     {
        let user = {_id: new ObjectId(), userName, email, addedAt: new Date()}
        return usersRepository.createUser(user)
    },

    async deleteUser(id: ObjectId): Promise<boolean> {
        return usersRepository.deleteUser(id)
    },

    async updateUser(id: ObjectId, userName: string, email: string ): Promise<boolean> {
        return usersRepository.updateUser(id, userName, email)
    }

}