import React from "react";
import propTypes from 'prop-types';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./simpleCounter";
import { calCount } from "../lib";

//create your first component
const Home = ({count}) => {
	return (
		<>
		<SimpleCounter
		sixDigit={calCount(count,100000)}
		fiveDigit={calCount(count,10000)}
		fourDigit={calCount(count,1000)}
		threeDigit={calCount(count,100)}
		twoDigit={calCount(count,10)}
		oneDigit={calCount(count,1)}/>
		</>
	);
};

Home.propTypes = {
	count: propTypes.number
}

export default Home;
