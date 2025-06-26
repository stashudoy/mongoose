import express, {Request, Response} from 'express'
import {runDB} from './repositories/db'
import { usersRouter } from './routes/users-router'
import { authRouter } from './routes/auth-router'

const app = express() 
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/users', usersRouter)

app.use('/login', authRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('hello, tester!')
})

const startApp =  async () => {
     await runDB
    app.listen(port, () => {
        console.log(`Example app listen on port: ${port}`)
    })
}

startApp()



