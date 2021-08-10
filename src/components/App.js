import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Filter from './filter';
import Hog from './hog';

import hogs from "../porkers_data";

import {sorted} from '../utils/funcs';

function App() {

	const [onlyShowGreased, setOnlyShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState('');
	const [hogsForUse, setHogsForUse] = useState(hogs);

	const displayHogDetails = (event) => event.target.classList.toggle('display-details');

	sorted(hogsForUse, sortBy)

	useEffect(() => {
		setHogsForUse(hogs.filter(hog => {
			if(onlyShowGreased) return hog.greased;
			return true;
		}))
	}, [onlyShowGreased]);

	return (
		<div className="App">
			<Nav />
			<Filter
			onlyShowGreased={onlyShowGreased}
			onChangeGreased={() => setOnlyShowGreased(prev => !prev)}
			onChangeSortValue={(sortValue) => setSortBy(sortValue)}
			/>
			<div className='ui grid container' style={{marginTop: '20px'}}>
			{
				hogsForUse.map(hog => {
					return <Hog
					name={hog.name}
					image={hog.image}
					specialty={hog.specialty}
					weight={hog.weight}
					medal={hog['highest medal achieved']}
					displayHogDetails={displayHogDetails}
					/>
				})
			}
			</div>
		</div>
	);
}

export default App;
