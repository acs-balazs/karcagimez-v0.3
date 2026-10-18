import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res) {
	try {
		const { username, password } = req.body;

		// find user
		const admin = await prisma.admins.findUnique({ where: { username } });
		if (!admin)
			return res.status(404).json("Hibás felhasználónév vagy jelszó.");

		// check password
		const isPasswordValid = await bcrypt.compare(password, admin.passwordHash);
		if (!isPasswordValid)
			return res.status(400).json("Hibás felhasználónév vagy jelszó.");

		// generate token for a day
		const token = jwt.sign(
			{ id: admin.id, username: admin.username },
			process.env.JWT_SECRET,
			{
				expiresIn: "1d",
			},
		);

		return res.status(200).json({ token });
	} catch (error) {
		console.error(error);
		return res.status(500).json("Szerverhiba történt.");
	}
}
