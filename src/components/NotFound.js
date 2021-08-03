import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='not-found'>
			<h2>404</h2>
			<h5>Page not found</h5>
			<p>sorry the requested page was not found</p>
			<Link to='/'>Back to homepage</Link>
		</div>
	);
};

export default NotFound;
