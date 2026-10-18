import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) return res.status(401).json("Nincs jogosultságod.");

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.status(403).json("Érvénytelen token.");
		req.user = user;
		next();
	});
};
