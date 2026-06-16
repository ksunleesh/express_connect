import {createError} from "../utils/create-error.js";

export const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    createError(400, "Authorization is missing");
  }
  if (!authorization.startsWith("bearer ")) {
    createError(400, "Invalid authorization scheme");
  }
};
