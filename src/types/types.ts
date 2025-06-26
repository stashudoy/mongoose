import {WithId} from 'mongodb'   // Тип таблицы users в БД

export type UserDBType = WithId<{
    
    login: string
    email: string
    passwordHash: string
    passwordSalt: string
    addedAt: Date
}>