import React, { useState } from 'react';

function Travels( { id, handleEdit } ) {
	/* Can set initial antall to 1. */
	const [ data, setData ] = useState( { km: '', antall: '' } );
	const [ error, setError ] = useState( false );

	/* Handles when user types in input fields */
	const handleChange = ( e ) => {
		let value = e.target.value;
		let name = e.target.name;

		setData( { ...data, [name]: value } );
		handleEdit( id, { ...data, [name]: value } );

		if ( name === 'antall' && value.length > 0 ) {
			setError(false);
		}

		if ( name === 'antall' && value.length === 0 ) {
			setError(true);
		}
	}

	return (
		<li data-id={ id }>
			<div className="field-group floating-label">
				<input
					type="number"
					name="km"
					min="0"
					max="75000"
					placeholder="Km"
					value={ data.km }
					onChange={ handleChange }
				/>
				<label htmlFor="km">Km</label>
			</div>

			<div className={ "field-group floating-label"  + ( error ? ' error' : '' ) }>
				<input
					type="number"
					name="antall"
					min="0"
					placeholder="Antall"
					value={ data.antall }
					onChange={ handleChange }
				/>
				<label htmlFor="antall">Antall</label>
				{ error && <span className="error-message">Fyll ut antall</span> }
			</div>
		</li>
	);
}

export default Travels;
