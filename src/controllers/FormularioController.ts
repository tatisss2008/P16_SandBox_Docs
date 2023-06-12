import express, { Request, Response } from 'express'

import * as jsonSchema from '../ json-schema.json' 

type jsonSchema = Record<string, any>

class FormularioController{
	obtenerDefinicion(req:Request, res:Response){
        
		//1. Extraer el nombre del formulario
		const {formulario}= req.params

		const miEsquema:jsonSchema=jsonSchema

		if(miEsquema.definitions[formulario]){
			res.json(miEsquema.definitions[formulario])
		}else{
			res.status(400)
			res.json({error:`No encontro el formulario ${formulario}`})
		}
	}
}

export default FormularioController