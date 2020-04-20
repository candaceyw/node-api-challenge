import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Projects from './components/Projects';
import AddProject from './components/AddProject';
import AddBtn from './components/layout/AddBtn';

function App() {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});

	return (
		<div className='App'>
			<Projects />
			<AddProject />
			<AddBtn />
		</div>
	);
}

export default App;
