import {env} from "../config/env.js";
import jwt from "JsonWebToken";

export const jwtService = {};

jwtService.sign = (payload) => jwt.sign(payload, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});

jwtService.verify = (token) => jwt.verify(tokoen, env.JWT_SECRET);
