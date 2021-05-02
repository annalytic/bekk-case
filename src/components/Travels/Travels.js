import React, { useState } from 'react';

function Travels( { id, handleEdit } ) {
	/**
	* States
	*/
	const [ data, setData ] = useState( { km: '', antall: '' } );

	/* ------------------------------ */

	/**
	* Functions
	*/
	/* Handles when user types in input fields. */
	const handleChange = ( e ) => {
		let value = e.target.value;
		let name = e.target.name;

		setData( { ...data, [name]: value } );
		handleEdit( id, { ...data, [name]: value } );
	}

	/* ------------------------------ */

	/**
	* Render
	*/
	return (
		<li data-id={ id }>
			<div className="field-group floating-label">
				<input
					type="number"
					name="km"
					min="0"
					max="75000"
					placeholder="Km"
					pattern="[0-9]*"
					value={ data.km }
					onChange={ handleChange }
				/>
				<label htmlFor="km">Km</label>
			</div>

			<div className="field-group floating-label">
				<input
					type="number"
					name="antall"
					min="0"
					placeholder="Antall"
					pattern="[0-9]*"
					value={ data.antall }
					onChange={ handleChange }
				/>
				<label htmlFor="antall">Antall</label>
			</div>
		</li>
	);
}

export default Travels;
