export const authController = {};

authController.register = async (req, res) => {
  res.status(201).json({message: "User registered successfully"});
};
