import {prisma} from "../db/prisma.js";

export const userService = {};

userService.Create = (data) => {
  prisma.user.create({data});
};
