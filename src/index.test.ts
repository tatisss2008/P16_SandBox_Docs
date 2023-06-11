// 1. importar bibliotecas

import request from 'supertest'
import App from './Router'
import { after } from 'node:test'

describe(
	'GET /',
	()=>{
		let app:App

		beforeAll(
			()=>{
				app= new App()
				app.start()
			}
		) 

		afterAll(
			()=>{
				app.close()
			}
		)

		test(
			'DEbe devolver un msj',
			async ()=>{
				const res=await request(app.app).get('/')
				expect (res.statusCode).toEqual(200)
				expect (res.text).toEqual('Bienvenidos a typescript')
			}
		)


	}
)

