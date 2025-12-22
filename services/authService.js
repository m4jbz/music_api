const bcrypt = require("bcrypt");
const User = require("../models/userSchema"); const RefreshToken = require("../models/tokenSchema");
const { signAccessToken, signRefreshToken } = require("../utils/jwt");

async function register(username, password) {
    try {
        const hash = await bcrypt.hash(password, 10);
        return User.create({ username, password: hash });
    } catch (err) {
        console.error(error.message)
        return;
    }
}

async function login(username, password) {
    const user = await User.findOne({ username });
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken();

    await RefreshToken.create({
        userId: user._id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    return { accessToken, refreshToken };
}

async function refresh(refreshToken) {
    const stored = await RefreshToken.findOne({ token: refreshToken });
    if (!stored) throw new Error("Invalid refresh token");

    const user = await User.findById(stored.userId);
    if (!user) throw new Error("User not found");

    return signAccessToken(user);
}

module.exports = { register, login, refresh };
