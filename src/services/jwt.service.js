import jwt from "JsonWebToken";

export const jwtService = {};

jwtService.sign = payload = jwt.sign(payload, JWT_SECRET, JWT_EXPIRES_IN);
