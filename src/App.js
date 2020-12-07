import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movies from './Movies';
function App() {
	const [isLoading,setIsLoading] = useState(true);
	const [movies,setMovies] =useState([]);
	useEffect(()=>{
		async function getMovie(){
			const movie = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');	
			console.log(movie.data.data.movies)
			setMovies(movie.data.data.movies);
			setIsLoading(false);	
		}
		getMovie();
	},[]);
	useEffect(()=>{
		console.log('movies : '+movies);
	},[movies]);
	const movieMap = ()=>{
		movies.map( movies=>{
			return <Movies id={movies.id} title={movies.title}/>
		})
	}
	return (
		<div className="App">
			{isLoading ? 'isLoading' :}
		</div>
	);
}

export default App;
