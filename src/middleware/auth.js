import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Auth = {
    privado: (req, res, next) => {

        let sucesso = false;

        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            const tipo = req.headers.authorization.split(' ')[0];

            if(tipo === 'Bearer'){
                console.log('Token recebido: ', token);
                try {
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
                    console.log('Token verificado: ', decoded);
                    sucesso = true;
                } catch (error) {
                    console.error('Token inválido: ', error);
                }
            }

        }

        if(sucesso){
            next()
        }else{
            res.status(403);
            res.json({ error: 'Não autorizado'})
        }
}
}