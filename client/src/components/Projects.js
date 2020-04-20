import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProject } from '../actions/index';
import ProjectsCard from './ProjectsCard';

const Projects = ({ projects, loading, getProject }) => {
	useEffect(() => {
		getProject();
		//eslint-disable-next-line
	}, []);
	if (loading || projects === null) {
		return 'Loading...';
	}

	return (
		<div>
			<h1 className='center'>Projects</h1>
			<div>
				{!loading && projects.length === 0 ? (
					<p className='center'>No project available... </p>
				) : (
					projects.map((project) => (
						<ProjectsCard
							name={project.name}
							description={project.description}
							completed={project.completed}
							id={project.id}
							key={project.id}
						/>
					))
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		projects: state.projects,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getProject })(Projects);
