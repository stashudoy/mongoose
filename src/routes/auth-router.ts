import {usersService} from '../application/users.service'
import {Request, Response, Router} from 'express'



export const authRouter = Router({})


authRouter.post('/',
    async (req: Request, res: Response) => {
        const checkResult = await usersService.checkCredentials(req.body.login, req.body.password)
        res.status(201).send("Good")
    }
)