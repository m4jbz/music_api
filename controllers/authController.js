const AuthService = require("../services/authService");
const { ValidationError, ConflictError } = require("../errors");

class AuthController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;
            await AuthService.register(username, password);
            res.status(201).json({ message: "User created"});
        } catch (err) {
            if (err instanceof ValidationError) {
                return res.status(400).json({ message: err.message });
            }

            if (err instanceof ConflictError) {
                return res.status(409).json({ message: err.message });
            }

            res.status(500).json({ message: "Internal server error" });
        }

    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const tokens = await AuthService.login(username, password);
            res.status(200).json(tokens);
        } catch (err) {
            if (err instanceof ValidationError) {
                return res.status(400).json({ message: err.message });
            }

            if (err instanceof ConflictError) {
                return res.status(409).json({ message: err.message });
            }

            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async refresh(req, res) {
        try {
            const { refresh_token } = req.body;
            const accessToken = await AuthService.refresh(refresh_token);
            res.status(200).json({ accessToken });
        } catch (err) {
            if (err instanceof ValidationError) {
                return res.status(400).json({ message: err.message });
            }

            if (err instanceof ConflictError) {
                return res.status(409).json({ message: err.message });
            }

            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = AuthController;
