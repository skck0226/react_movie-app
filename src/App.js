import React from 'react';
import PropTypes from 'prop-types';
function Food(props){
	return (
		<div>
			<images src={props.images} alt="food" />
			<h1>{props.name}</h1>
			<h3>{props.ratings}</h3>
		</div>
	);
}
Food.propTypes = {
	images: PropTypes.string.isRequired,
	ratings: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
const foodBox = [
		{
			images:"aaaa",
			ratings:"1.0",
			name:"chicken",
			id:1
		},
		{
			images:"aaaa",
			ratings:"2.0",
			name:"pizza",
			id:2
		},
		{
			images:"aaaa",
			ratings:"3.0",
			name:"hamburger",
			id:3
		},
		{
			images:"aaaa",
			ratings:"4.0",
			name:"ramen",
			id:4
		}
	]
function App() {
  	
	return (
		<div className="App">
			{foodBox.map( food => (
				<Food images={food.images} ratings={food.ratings} name={food.name} key={food.id} />
			))}
		</div>
	);
}

export default App;
