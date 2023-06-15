
import { Strategy, ExtractJwt } from 'passport-jwt'



const opt1={
	jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey:process.env.SECRET_KEY
}

const miEstrategia:Strategy = new Strategy(
	opt1,(payload, done)=>{

		const usuario={
			id:payload.id,
			username:payload.username
		}
		if(usuario){
			return done(null,usuario)
		}else {
			return done(null,false)
		}        
	}
)


export default miEstrategia