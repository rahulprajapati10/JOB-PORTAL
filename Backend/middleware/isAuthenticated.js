import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"; // make sure the path is correct

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ message: "No token provided", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    req.user = user;
      req.id = decoded.userId;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(500).json({ message: "Authentication failed", success: false });
  }
};

export default authenticateToken;
