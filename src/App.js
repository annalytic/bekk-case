/**
* External dependencies
*/
import React, { useState, useEffect } from 'react';

/**
* Internal dependencies
*/
import logo from './logo.svg';
import Arbeidsreise from './components/Arbeidsreise/Arbeidsreise';

function App() {
  const [ arbeidsreiser, setArbeidsreiser ] = useState([{}]);

  useEffect(() => {
    console.log(arbeidsreiser);
  }, [arbeidsreiser]);


  const handleUpdateAR = ( id, obj ) => {
    const newArbeidsreiser = [...arbeidsreiser];
    newArbeidsreiser[id] = obj;
    setArbeidsreiser(newArbeidsreiser);
  }

  const handleAddAR = () => {
    const newArbeidsreiser = [...arbeidsreiser, {}];
    setArbeidsreiser(newArbeidsreiser);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <div className="header-content">
          <h1>Reiseregning</h1>
          <p>Beregning av reisefradrag</p>
        </div>
      </header>

      <main>
      <form>
        <h2>Arbeidsreiser</h2>
        <ul className="arbeidsreiser unstyled-list">
          { arbeidsreiser.map( ( arbeidsreise, id ) => {
            return (
              <Arbeidsreise id={ id } handleUpdateAR={ handleUpdateAR }/>
            );
          } )}
        </ul>

        <button
          type="button"
          onClick={ handleAddAR }
        >
          Legg til arbeidsreise
        </button>

        <h2>Besoeksreiser</h2>
        <ul className="besoeksreiser unstyled-list">
        </ul>

        <div className="field-group floating-label">
          <input
            type="number"
            name="utgifter"
            min="0"
            placeholder="0"
          />
          <label htmlFor="utgifter">Utgifter</label>
        </div>
        <input type="submit" value="submit" />
      </form>
      </main>
    </div>
  );
}

export default App;
