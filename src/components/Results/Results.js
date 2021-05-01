function Results( { result } ) {
	if ( result === null ) {
		return (
			<h3>Noe gikk galt</h3>
		);
	} else {
		return (
			<>
				<h3>Ditt reisefradrag:</h3>
				<span>{ result } kr</span>
			</>
		);
	}
}

export default Results;
