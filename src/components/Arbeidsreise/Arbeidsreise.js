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
			<label htmlFor="km" />
			<input
				type="text"
				name="km"
				onChange={ handleChange }
			/>

			<label htmlFor="antall" />
			<input
				type="text"
				name="antall"
				onChange={ handleChange }
			/>
		</li>
	);
}

export default Arbeidsreise;
