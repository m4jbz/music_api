const AuthService = require("../services/authService");

class AuthController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;
            await AuthService.register(username, password);
            res.status(201).json({ message: "User created"});
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const tokens = await AuthService.login(username, password);
            res.status(200).json(tokens);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async refresh(req, res) {
        try {
            const { refresh_token } = req.body;
            const accessToken = await AuthService.refresh(refresh_token);
            res.status(200).json({ accessToken });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = AuthController;
