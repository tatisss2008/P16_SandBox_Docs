import swaggerUI from  'swagger-ui-express'
import express, { Application, Request, Response } from 'express'
import { swaggerOption, swaggerSpec } from './swagger.conf'
import { setup } from 'swagger-ui-express'

/**
 *  clase principal de la API. DEfine las rutas de la API
 * 
 *  @autor AnaM
 *  @description Clase inicial de ejemplo para manejar rutas y documentacion
 */
class App{
     
	//Atributos
	public app: any
	private server:any

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

		this.routes()
	}

	private routes():void{
		this.app.get(
			'/',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a typescript')
			}
		) 
        
		this.app.post(
			'/paciente',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a typescript Pacientes')
			}
		)   
	}

	public start():void{
		this.app.listen(
			3000,
			()=>{ console.log('El servidor esta escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}
}

export default App