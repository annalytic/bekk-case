/**
* External dependencies
*/
import React, { useState } from 'react';

/**
* Components
*/
import logo from './logo.svg';
import FormRow from './components/FormRow';
import Results from './components/Results/';

/**
* Hooks
*/
import useTravel from './hooks/useTravel';

function App() {
  /**
  * States
  */
  const [ utgifter, setUtgifter ] = useState('');

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ result, setResult ] = useState(false);
  const [ reset, setReset ] = useState(false);

  /* ------------------------------ */
  /**
  * Initialize hooks.
  */
  const arbeidsreiser = useTravel();
  const besoeksreiser = useTravel();

  const handleReset = () => {
    arbeidsreiser.setValue([]);
    besoeksreiser.setValue([]);
    setUtgifter('');
    setReset(true);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setReset(false);

    /* Constructs data to post to API. */
    const data = {
      'arbeidsreiser': arbeidsreiser.value,
      'besoeksreiser': besoeksreiser.value,
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
          <h1>Reisefradragskalkulator</h1>
          <p>Beregn reisefradrag for arbeidsreiser og besøksreiser.</p>
        </div>
      </header>

      <main>
        { ( ! reset && ! loading && result >= 0 && result !== false ) && (
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
            { arbeidsreiser.value.map( ( arbeidsreise, id ) => {
              return (
                <FormRow key={ id } id={ id } handleEdit={ arbeidsreiser.handleEdit } />
              );
            } )}
          </ul>

          <button
            type="button"
            onClick={ arbeidsreiser.handleAdd }
          >
            Legg til arbeidsreise
          </button>

          { arbeidsreiser.value.length > 0 && (
            <button
              type="button"
              onClick={ arbeidsreiser.handleDelete }
            >
              Slett siste rad
            </button>
          ) }

          <h2>Besøksreiser</h2>
          <ul className="reiser besoeksreiser unstyled-list">
            { besoeksreiser.value.map( ( besoeksreise, id ) => {
              return (
                <FormRow key={ id } id={ id } handleEdit={ besoeksreiser.handleEdit } />
              );
            } )}
          </ul>

          <button
            type="button"
            onClick={ besoeksreiser.handleAdd }
          >
            Legg til besøksreise
          </button>

        	{ besoeksreiser.value.length > 0 && (
            <button
              type="button"
              onClick={ besoeksreiser.handleDelete }
            >
              Slett siste rad
            </button>
          )}

          <h2>Utgifter til bom, ferge etc.</h2>
          <div className="field-group floating-label">
            <input
              type="number"
              name="utgifter"
              min="0"
              placeholder="Kr"
              pattern="[0-9]*"
              value={ utgifter }
              onChange={ ( e ) => setUtgifter( e.target.value )}
            />
          <label htmlFor="utgifter">Kr</label>
          </div>

          { ! loading && <input type="submit" value="Beregn" /> }

          { loading && <div className="loader"></div> }

          <hr />

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
