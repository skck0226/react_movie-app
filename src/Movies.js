import react from 'react';

function Movies({id, title}){
	return(
		<div>
			<h3>{title} {id}</h3>	
		</div>
	);
}

export default Movies;