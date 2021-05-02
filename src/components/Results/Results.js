function Results( { result } ) {
	if ( result === null ) {
		return (
			<div className="info">
				<h3>Noe gikk galt</h3>
			</div>
		);
	} else {
		return (
			<div className="info">
				<h3>Ditt reisefradrag:</h3>
				<span className="number">{ result } kr</span>
			</div>
		);
	}
}

export default Results;
