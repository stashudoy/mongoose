import { MongoClient } from 'mongodb'
import {UserDBType} from '../types/types'


const mongoUri  = process.env.mongoURI || "mongodb://localhost:27017"   // на мас работает 0.0.0.0 а localhost

const client = new MongoClient(mongoUri)
const db = client.db("users")

export const usersCollection = db.collection<UserDBType>('users')


export async function runDB() {
    try {
        await client.connect()
        await client.db("users").command({ping: 1})
        console.log("Connection successfully to mongo server")        
    } catch (error) {
        console.log("Can't connect to db")
        await client.close()        
    }
 }