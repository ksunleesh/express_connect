import {createError} from "../utils/create-error.js";
import {hashService} from "./hash.service.js";
import {userService} from "./user.service.js";

export const authService = {};

authService.register = async (input) => {
  //hash password
  const hash = await hashService.hash(input.password);

  // insert new user
  await userService.create({email: input.email, password: hash});
};

authService.login = async (email, password) => {
  // find user by email
  const user = await userService.findByEmail(email);
  if (!user) {
    createError(401, "Invalid email or password");
  }
  // compare password
  const isMatch = await hashService.compare(password, user.password);
  if (!isMatch) {
    createError(401, "Invalid email or password");
  }
  // gen access token
  // return access_token, user object
};
