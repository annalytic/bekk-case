import React, { useState } from 'react';

function Reiser( { id, handleEdit } ) {
	const [ data, setData ] = useState( { km: '', antall: '' } );

	const handleChange = ( e ) => {
		let value = e.target.value;
		let name = e.target.name;

		setData( { ...data, [name]: value } );
		handleEdit( id, { ...data, [name]: value } );
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

			<div className="field-group floating-label">
				<input
					type="number"
					name="antall"
					min="0"
					placeholder="Antall"
					value={ data.antall }
					onChange={ handleChange }
				/>
				<label htmlFor="antall">Antall</label>
			</div>
		</li>
	);
}

export default Reiser;
