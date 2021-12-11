const User = require("../models/User");
// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        strjwt(user, 200, res);
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error,
        });
    }
};

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(401).json({
                success: false,
                message: "Enter Email and Password",
            });
        }
        // Validating usr ext
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).json({
                success: false,
                message: "Invalid Credentials",
            });
        }
        // validating password if usr ext
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            res.status(401).json({
                success: false,
                message: "Enter Email and Password",
            });
        }

        strjwt(user, 200, res);
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error,
        });
    }
};

const strjwt = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    console.log(token);
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === "production") {
        options.secure = true;
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
    });
};
