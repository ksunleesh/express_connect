import {jwtService} from "../services/jwt.service.js";
import {createError} from "../utils/create-error.js";

export const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    createError(400, "Authorization is missing");
  }
  if (!authorization.startsWith("bearer ")) {
    createError(400, "Invalid authorization scheme");
  }
  const token = authorization.split(" ")[1];

  try {
    const payload = jwtService.verify(token);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      createError(401, "Token expired");
    }
    if (err.name === "JsonWebTokenError") {
      createError(401, "Invalid token");
    }
    throw err;
  }
};
