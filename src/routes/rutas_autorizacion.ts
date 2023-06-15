
import express, { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const router:Router=Router()

//1. DEfinir las rutas
router.get(
	'/login',
	(req:Request, res:Response)=>{

		//Obtener desde BD (No colocar datos sensibles y/o importantes)
		const payload={
			id:'user_id',
			username:'Ana'
			//password:"123"
		}
        
		const options={
			expiresIn:'2h'
		}

		const secretKey=process.env.SECRET_KEY

		if(typeof secretKey=='string'){
			const token =jwt.sign(payload,secretKey,options)
			res.json({token})
		}

	}
)


export default router