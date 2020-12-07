import react from 'react';

function Movies({id, title}){
	return(
		<div>
			<h3>{title}</h3>
			<h4>{id}</h4>	
		</div>
	);
}

export default Movies;