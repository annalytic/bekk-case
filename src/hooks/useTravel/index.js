/**
* External dependencies
*/
import { useState } from 'react';

const initValue = { km: '', antall: '' };

function useTravel() {
	let [ value, setValue ] = useState([]);

	const handleEdit = ( id, obj ) => {
		const newValues = [ ...value ];
		newValues[id] = obj;
		setValue(newValues);
	}

	const handleAdd = () => {
		const newValues = [ ...value, initValue ];
		setValue(newValues);
	}

	const handleDelete = () => {
		let newValues = [ ...value ];
		newValues.pop();
		setValue(newValues);
	}

	return {
		value,
		setValue,
		handleEdit,
		handleAdd,
		handleDelete,
	};
}

export default useTravel;
