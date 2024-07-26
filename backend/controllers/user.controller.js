import { User } from "../modals/user.modal.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    await User.create({ fullname, email, phoneNumber, password, role });
    res.status(200).json({
      message: "Account Created Succesfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    if (password == user.password) {
      res.status(200).json({
        messsage: "you are successfully logedIn",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
