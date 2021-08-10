import React from 'react';

function Hog({name, image, specialty, weight, medal, displayHogDetails}){
  return (
    <div className='each-tile ui four wide column'>
			<h1>{name}</h1>
			<div style={{backgroundImage: `url(${image})`}} className='hog-image'>
				<div className='tile-details' onClick={displayHogDetails}>
					<p>Specialty: {specialty}</p>
					<p>Weight: {weight}</p>
					<p>Highest Medal Achieved: {medal}</p>
				</div>
			</div>
		</div>
  )
}

export default Hog;