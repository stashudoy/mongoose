import { ObjectId } from "mongodb"
import { UserDBType } from "../types/types"
import { usersCollection } from "./db"

export const usersRepository = {

        async getUsers(): Promise<UserDBType[]> {
            return usersCollection.find({}).toArray()                   //usersRepository.getUsers()
        },
    
        async getUser(id: ObjectId): Promise<UserDBType | null> {
            return usersCollection.findOne({_id: id})                   //usersRepository.getUser(id)
        },
    
        async createUser(user: UserDBType): Promise<UserDBType> {
            const res = usersCollection.insertOne(user)
            return user
        },
            
    
        async deleteUser(id: ObjectId): Promise<boolean> {
            const result = await usersCollection.deleteOne({_id: id})
            return result.deletedCount === 1
        },
    
        async updateUser(id: ObjectId, userName: string, email: string ): Promise<boolean> {
            return true
        }, 

        async findByLogin(login: string): Promise<UserDBType | null> {
            const user = await usersCollection.findOne({login: login})  // findOne({$or: [{email: loginOrEmail}, {login: loginOrEmail},  ]})
            return user
        }
}