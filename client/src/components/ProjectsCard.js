import React from 'react';
import { connect } from 'react-redux';
import { deleteProject, setCurrent } from '../actions/index';
import M from 'materialize-css/dist/js/materialize.min.js';

const ProjectsCard = (props) => {
	const onDelete = () => {
		props.deleteProject(props.id);
		M.toast({ html: 'Project Deleted' });
	};

	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.description}</p>
			<p>{props.completed}</p>
			<a href='#!' onClick={onDelete} className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</div>
	);
};

export default connect(null, { deleteProject, setCurrent })(ProjectsCard);
