import swaggerUI from  'swagger-ui-express'
import express, { Application, Request, Response } from 'express'
import { swaggerOption, swaggerSpec } from './swagger.conf'
import { setup } from 'swagger-ui-express'
import PacienteRouter from './routes/PacienteRouter'
import MedicoRouter from './routes/MedicoRouter'
import FormularioController from './controllers/FormularioController'
import FormularioRouter from './routes/FormularioRouter'

import passport from 'passport'	
import dotenv from 'dotenv'
dotenv.config()
import rutas_auth from  './routes/rutas_autorizacion'
import miEstrategia from './config/passport'

//Use cors
import cors from 'cors'



// import { PrismaClient } from '@prisma/client'

/**
 *  clase principal de la API. DEfine las rutas de la API
 * 
 *  @autor AnaM
 *  @description Clase inicial de ejemplo para manejar rutas y documentacion
 */
class App{
     
	//Atributos
	public app: Application
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private server:any
	// private prismaClient:PrismaClient


	

	/**
     *  Metodo constructor de la clase
     */
	constructor(){

		/**
         *  Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app= express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUI.serve,
			swaggerUI.setup(swaggerSpec)
		)		
	
		// this.prismaClient= new PrismaClient()
		this.app.use(cors())
		this.routes()
	}

	private routes():void{

		this.app.use('/auth',rutas_auth)

		//Proteger las rutas siguientes
		passport.use(miEstrategia)
		this.app.use(passport.initialize())

		this.app.get(
			'/',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a typescript')
			}
		) 
        

		//implementar las rutas
		this.app.use('/', passport.authenticate('jwt',{session:false}), PacienteRouter)
		this.app.use('/', passport.authenticate('jwt',{session:false}), MedicoRouter)
		this.app.use('/', passport.authenticate('jwt',{session:false}), FormularioRouter)


		// this.app.use('/',PacienteRouter)
		//this.app.use('/',MedicoRouter)
		//this.app.use('/',FormularioRouter)


		// this.app.get(
		// 	'/pacientes',
		// 	async (req:Request, res:Response)=>{
		// 		const pacientes=await this.prismaClient.paciente.findMany()
		// 		res.json(pacientes)
		// 	}
		// ) 

		// this.app.post(
		// 	'/crear_paciente',
		// 	async (req:Request, res:Response)=>{
		// 		try {
		// 			const {
		// 				cedula,
		// 				nombre,
		// 				apellido,
		// 				fechaNacimiento_,
		// 				telefono
		// 			}=req.body

		// 			const fechaNacimiento = new Date(fechaNacimiento_) 
		// 			const paciente= await this.prismaClient.paciente.create({
		// 				data:{
		// 					cedula,
		// 					nombre,
		// 					apellido,
		// 					fechaNacimiento,
		// 					telefono
		// 				}
		// 			}
		// 			)

				
		// 			res.json(paciente)	
		// 		}catch(e:any){
		// 			res.status(400)
		// 			res.json({error:e.message})
		// 		}			
		// 		//res.json(req.body)
		// 		// res.send('Crear Pacientes OK')

		// 	}
			
		// )   
	}

	public start():void{
		this.server=this.app.listen(
			3000,
			()=>{ console.log('El servidor esta escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}
}

export default App