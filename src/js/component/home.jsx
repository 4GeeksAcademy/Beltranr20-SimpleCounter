import React, { useEffect, useState } from "react";
import Digit from "./Digit";

//create your first component
const Home = () => {
	let [counter, setCounter] = useState(0)
	useEffect(()=> {
		setInterval(() => {
			setCounter(counter++)
		}, 1000);
	},[]) 
	return (
		// making the counter visible with 8 digits
		<div className="text-center">
			<Digit alpha= {Math.floor(counter/10000000)}/>
			<Digit alpha= {Math.floor(counter/1000000)}/>
			<Digit alpha= {Math.floor(counter/100000)}/>
			<Digit alpha= {Math.floor(counter/10000)}/>
			<Digit alpha= {Math.floor(counter/1000)}/>
			<Digit alpha= {Math.floor(counter/100)}/>
			<Digit alpha= {Math.floor(counter/10)}/>
			<Digit alpha= {Math.floor(counter/1)}/>
		</div>
	);
};

export default Home;