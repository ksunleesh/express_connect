import {hashService} from "./hash.service.js";

export const authService = {};

authService.register = async (input) => {
  //hash password
  const hash = await hashService.hash(input.password);
};

// insert new user
