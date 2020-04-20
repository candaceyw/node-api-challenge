import React from 'react';
import { connect } from 'react-redux';

const ProjectsCard = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.description}</p>
			<p>{props.completed}</p>
		</div>
	);
};

export default ProjectsCard;
