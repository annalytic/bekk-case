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
  const [ arbeidsreiser, setArbeidsreiser ] = useState([{ km: '', antall: ''}]);

  useEffect(() => {
    console.log(arbeidsreiser);
  }, [arbeidsreiser]);


  const handleUpdateAR = ( id, obj ) => {
    const newArbeidsreiser = [...arbeidsreiser];
    newArbeidsreiser[id] = obj;
    setArbeidsreiser(newArbeidsreiser);
  }

  const handleAddAR = () => {
    const newArbeidsreiser = [...arbeidsreiser];
    newArbeidsreiser[newArbeidsreiser.length] = {};

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
        <ul className="arbeidsreiser">
          Arbeidsreiser
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

        <ul className="besoeksreiser">
          Besoeksreiser
        </ul>

        <label htmlFor="utgifter">Utgifter</label>
        <input type="text" name="utgifter" />

        <input type="submit" value="submit" />
      </form>
      </main>
    </div>
  );
}

export default App;
