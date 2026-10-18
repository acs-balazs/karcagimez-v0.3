import slugify from "slugify";
import prisma from "../config/prisma.js";

// get all products
export async function getAll(req, res) {
	try {
		const products = await prisma.products.findMany();
		res.status(200).json(products);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

// get a single product by slug
export async function getBySlug(req, res) {
	try {
		const product = await prisma.products.findUnique({
			where: { slug: req.params.slug },
		});
		res.status(200).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

// add a product
export async function create(req, res) {
	try {
		const data = {
			...req.body,
			slug: slugify(req.body.name, { lower: true, strict: true }),
		};
		const product = await prisma.products.create({ data });
		res.status(200).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

// update a product
export async function update(req, res) {
	try {
		const data = { ...req.body };
		if (req.body.name) {
			data.slug = slugify(req.body.name, { lower: true, strict: true });
		}
		const updated = await prisma.products.update({
			where: { id: req.params.id },
			data,
		});
		res.status(200).json(updated);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

// delete a product
export async function remove(req, res) {
	try {
		await prisma.products.delete({ where: { id: req.params.id } });
		res.status(200).json("Termék törölve.");
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}
