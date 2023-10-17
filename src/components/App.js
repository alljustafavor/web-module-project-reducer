import React,{ useReducer } from 'react';
import reducer,{ initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const changeNumberHandler = number => {
    dispatch(applyNumber(number))
  }
  const changeOperationHandler = operation => {
    dispatch(changeOperation(operation))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => changeNumberHandler(1)}/>
              <CalcButton value={2} onClick={() => changeNumberHandler(2)}/>
              <CalcButton value={3} onClick={() => changeNumberHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => changeNumberHandler(4)}/>
              <CalcButton value={5} onClick={() => changeNumberHandler(5)}/>
              <CalcButton value={6} onClick={() => changeNumberHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => changeNumberHandler(7)}/>
              <CalcButton value={8} onClick={() => changeNumberHandler(8)}/>
              <CalcButton value={9} onClick={() => changeNumberHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperationHandler("+")}/>
              <CalcButton value={"*"} onClick={() => changeOperationHandler("*")}/>
              <CalcButton value={"-"} onClick={() => changeOperationHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
