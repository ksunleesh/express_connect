export const checkRole =
  (...allowedRoles) =>
  (req, res, next) => {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      createError(403, "Insufficent role to perform this action");
    }
    next();
  };
