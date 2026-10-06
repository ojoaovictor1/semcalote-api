import jwt from 'jsonwebtoken';
export function RetornarIdUsuarioDoToken(req) {
    return jwt.decode(req.headers['x-access-token']).userId;
}