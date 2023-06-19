import Users from "../model/userModel.js";

const registerUser = async (req, res) => {
  const {
    name,
    email,
    username,
    dob,
    phone,
    password,
    confirmPassword,
    gender,
  } = req.body;
  if (password.length >= 5) {
    if (password == confirmPassword) {
      const user = await Users.create({
        name,
        email,
        username,
        dob: Date(dob),
        phone,
        password,
        gender,
      });

      if (!user) {
        res.status(200).json({
          status: false,
          message: "Something went wrong!",
        });
      }

      res.status(200).json({
        status: true,
        message: "User created successfully",
        result: user,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Password does not match.",
      });
    }
  } else {
    res.status(200).json({
      status: false,
      message: "Password must be greater than 5 characters.",
    });
  }
};

export default {
  registerUser,
};
