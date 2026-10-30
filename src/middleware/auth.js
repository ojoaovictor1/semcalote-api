export const Auth = {
    privado: (req, res, next) => {

        let sucesso = true;

        if(sucesso){
            next()
        }else{
            res.status(403);
            res.json({ error: 'Não autorizado'})
        }
}
}