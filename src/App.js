/**
* External dependencies
*/
import React, { useState } from 'react';

/**
* Internal dependencies
*/
import logo from './logo.svg';
import Travels from './components/Travels/Travels';
import Results from './components/Results/Results';

let resetKey = 0;

function App() {
  /**
  * States
  */
  const [ arbeidsreiser, setArbeidsreiser ] = useState([{}]);
  const [ besoeksreiser, setBesoeksreiser ] = useState([{}]);
  const [ utgifter, setUtgifter ] = useState(0);

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ result, setResult ] = useState(null);
  const [ reset, setReset ] = useState(false);

  /* ------------------------------ */

  /**
  * Functions
  */
  const handleEditAR = ( id, obj ) => {
    const newArbeidsreiser = [...arbeidsreiser];
    newArbeidsreiser[id] = obj;
    setArbeidsreiser(newArbeidsreiser);
  }

  const handleAddAR = () => {
    const newArbeidsreiser = [...arbeidsreiser, {}];
    setArbeidsreiser(newArbeidsreiser);
  }

  const handleEditBR = ( id, obj ) => {
    const newBesoeksreiser = [...besoeksreiser];
    newBesoeksreiser[id] = obj;
    setBesoeksreiser(newBesoeksreiser);
  }

  const handleAddBR = () => {
    const newBesoeksreiser = [...besoeksreiser, {}];
    setBesoeksreiser(newBesoeksreiser);
  }

  const handleReset = () => {
    resetKey+=1;
    setArbeidsreiser([{}]);
    setBesoeksreiser([{}]);
    setReset(true);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setReset(false);

    /* Filters out non-empty objects. */
    const filteredArbeidsreiser = arbeidsreiser.filter(value => Object.keys(value).length !== 0);
    const filteredBesoeksreiser = besoeksreiser.filter(value => Object.keys(value).length !== 0);

    /* Constructs data to post to API */
    const data = {
      'arbeidsreiser': filteredArbeidsreiser,
      'besoeksreiser': filteredBesoeksreiser,
      'utgifterBomFergeEtc': utgifter
    }

    const url = 'https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag';

    setLoading( true );

    /* Posts data to API and handles response. */
    fetch( url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data ),
    } )
      .then( ( res ) => res.json() )
      .then( ( res ) => {
        setLoading( false );
        setResult( res.reisefradrag );
      } )
      .catch( ( error ) => {
        console.error( 'Error', error );
        setError( true );
        setLoading( false );
      });
  }

  /* ------------------------------ */

  /**
  * Render
  */
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <div>
          <h1>Reiseregning</h1>
          <p>Beregning av reisefradrag</p>
        </div>
      </header>

      <main>
        { ( ! reset && ! loading && result >= 0 && result !== null ) && (
          <Results result={ result } />
        ) }

        { ( ! reset && error ) && (
          <div className="info">
            <h3>Noe gikk galt</h3>
            <p>Prøv igjen senere eller ta kontakt med oss.</p>
          </div>
        ) }

        <form onSubmit={ handleSubmit }>
          <h2>Arbeidsreiser</h2>
          <ul className="reiser arbeidsreiser unstyled-list">
            { arbeidsreiser.map( ( arbeidsreise, id ) => {
              return (
                <Travels key={ `${resetKey}-${id}` } id={ id } handleEdit={ handleEditAR } />
              );
            } )}
          </ul>

          <button
            type="button"
            onClick={ handleAddAR }
          >
            Legg til arbeidsreise
          </button>

          <h2>Besøksreiser</h2>
          <ul className="reiser besoeksreiser unstyled-list">
            { besoeksreiser.map( ( besoeksreise, id ) => {
              return (
                <Travels key={ `${resetKey}-${id}` } id={ id } handleEdit={ handleEditBR } />
              );
            } )}
          </ul>

          <button
            type="button"
            onClick={ handleAddBR }
          >
            Legg til besøksreise
          </button>

          <h2>Utgifter</h2>
          <div className="field-group floating-label">
            <input
              type="number"
              name="utgifter"
              min="0"
              placeholder="0"
              onChange={ ( e ) => setUtgifter( e.target.value )}
            />
            <label htmlFor="utgifter">Utgifter</label>
          </div>

          { ! loading && <input type="submit" value="Beregn" /> }

          { loading && <div className="loader"></div> }

          <button
            type="button"
            onClick={ handleReset }
            className="reset"
          >
            Begynn på nytt
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
