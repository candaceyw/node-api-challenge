const router = require('express').Router();
const projects = require('../data/helpers/projectModel');

// Create an /actions subroute
const actionRoutes = require('./ActionRouter');
router.use('/:id/actions', actionRoutes);

// GET return all projects
router.get('/', async (req, res, next) => {
	try {
		const data = await projects.get();
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});
//working

// GET return project by Id
router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const data = await projects.get(id);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});
//working

// POST insert new project
router.post('/', async (req, res, next) => {
	try {
		const data = await projects.insert(req.body);
		res.status(201).json(data);
	} catch (error) {
		next(error);
	}
});
//working

// PUT update project by id
router.put('/:id', async (req, res, next) => {
	try {
		const data = await projects.update(req.params.id, req.body);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});
//working

// DELETE remove project by id
router.delete('/:id', async (req, res, next) => {
	try {
		await projects.remove(req.params.id);
		res.status(204).end();
	} catch (error) {
		next(error);
	}
});
//working

module.exports = router;
