import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ success: false, message: "not authorized" });
  }

  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    if (!userId) {
      return res.json({ success: false, message: "not authorized" });
    }
    req.user = await User.findBtId(userId).select("-password");
    next();
  } catch (error) {
    console.log(error.message)
    return res.json({ success: false, message: "not authorized" });
  }
};
 