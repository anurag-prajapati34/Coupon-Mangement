const User = require("../models/user");

const register = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return res.status(409).json({ response: "User already exist !" });
    }

    const newUser = await User({
      name,
      email,
      password,
      isAdmin,
    });

    newUser.save();

    return res
      .status(200)
      .json({ response: "User Registered Successfully !", user: newUser });
  } catch (error) {
    console.log("user creation error", error);
    return res.staus(500).json({ response: "Inernal Server Error !" });
  }
};

const login = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("trying to login");
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ reponse: "User Not found" });
    }

    if (user.password != password) {
      return res.status(401).json({ response: "Wrong Password" });
    }

    return res
      .status(200)
      .json({ response: "Logined Scucessfully", user: user });
  } catch (error) {
    console.log("login error", error);
    return res.statis(500).json({ response: "Inernal Server Error !" });
  }
};

module.exports = { register, login };
