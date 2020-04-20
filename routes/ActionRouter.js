const express = require('express');
const router = express.Router();
const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel.js');

// Get all actions
router.get('/', async (req, res, next) => {
	try {
		const data = await actions.get();
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});
//working

//Action by project Id
router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const data = await actions.get(id);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});

//working

//POST - adds new actions
router.post('/:id', async (req, res, next) => {
	const newAction = { ...req.body, project_id: req.params.id };

	try {
		const data = await actions.insert(newAction);
		res.status(201).json(data);
	} catch (error) {
		next(error);
		res.status(500).json({ message: 'Could not add action' });
	}
});
// router.post('/:id', async (req, res, next) => {
// 	// const newAction = { ...req.body, project_id: req.params.id };
// 	try {
// 		const data = await actions.insert(req.body, req.params.id);
// 		res.status(201).json(data);
// 	} catch (error) {
// 		next(error);
// 		res.status(500).json({ message: 'Could not add action' });
// 	}
// });
//working

// PUT  use insert to update/change actions
router.put('/:id', async (req, res, next) => {
	try {
		const data = await actions.update(req.params.id, req.body);
		res.status(201).json(data);
	} catch (err) {
		next(err);
	}
});
//working

// DELETE remove actions by id
router.delete('/:id', async (req, res, next) => {
	try {
		await actions.remove(req.params.id);
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});
//working

//middleware function
function validateActionId(req, res, next) {
	const id = req.params.actionId;
	projects
		.getProjectActions(id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ error: 'Internal Server Error - Could Not Retrieve Actions' });
		});
}

module.exports = router;
