import jwt from "JsonWebToken";

export const jwtService = {};

jwtService.sign = (payload) => jwt.sign(payload, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});
