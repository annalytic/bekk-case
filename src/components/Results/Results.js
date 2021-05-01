function Results( { result } ) {
	return (
		<div className="fradrag">
			{ ( result >= 0 && result !== null ) && (
				<>
					<h3>Ditt reisefradrag:</h3>
					<span>{ result } kr</span>
				</>
			) }

			{ result === null && (
				<h3>Feil</h3>
			) }
		</div>
	);
}

export default Results;
