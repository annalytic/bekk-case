import React, { useState, useEffect } from 'react';

function Arbeidsreise( { id, handleUpdateAR } ) {
	const [ info, setInfo ] = useState( {} );

	const handleChange = ( e ) => {
		const value = e.target.value;
		const name = e.target.name;

		setInfo( { ...info, [name]: value } );
		handleUpdateAR( id, info );
	}

	return (
		<li data-id={ id }>
			<div className="field-group floating-label">
				<input
					type="number"
					name="km"
					min="0"
					placeholder="Km"
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
					onChange={ handleChange }
				/>
				<label htmlFor="antall">Antall</label>
			</div>
		</li>
	);
}

export default Arbeidsreise;
