import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/index';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddProject = ({ addProject }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [created, setCreated] = useState('');

	const onSubmit = () => {
		if (name === '' || description === '') {
			M.toast({ html: 'Please enter information in all fields' });
		} else {
			const newProject = {
				name,
				description,
			};
			console.log(newProject);
			addProject(newProject);

			// Clear Fields
			setName('');
			setDescription('');
		}
	};
	const dateToFormat = Date.now();

	return (
		<div id='add-project-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter New Post</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							title='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='name' className='active'>
							Name:
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<label htmlFor='description' className='active'>
							description:
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect blue waves-light btn'
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%',
};

export default connect(null, { addProject })(AddProject);
