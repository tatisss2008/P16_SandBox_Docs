
import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

import App from './Router'

//Crear un objeto  de la clase App

const program=new App()
program.start()


 