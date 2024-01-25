import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers";
import { ADD_ONE,addOne, CHANGE_OPERATION, APPLY_NUMBER, applyNumber } from "./actions";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (e) => {
    const number = e.target.value;
    dispatch(applyNumber(number));
  };

  const handleOperationChange= (e)=>{
    const operation =e.target.value;
    dispatch({type:"CHANGE_OPERATİON",payload:operation});
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={handleNumberClick}              />
              <CalcButton
                value={2} onClick={handleNumberClick}
              />
              <CalcButton value={3} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumberClick} />
              <CalcButton value={5} onClick={handleNumberClick} />
              <CalcButton value={6} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumberClick} />
              <CalcButton value={8} onClick={handleNumberClick} />
              <CalcButton value={9} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChange}/>
              <CalcButton value={"*"} onClick={handleOperationChange}/>
              <CalcButton value={"-"} onClick={handleOperationChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
