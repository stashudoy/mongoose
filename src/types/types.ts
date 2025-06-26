import {ObjectId, WithId} from 'mongodb'

export type UserDBType = WithId<{
    
    userName: string
    email: string
    addedAt: Date
}>