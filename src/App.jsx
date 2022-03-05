//Feature Added
/*
1) Pushes the newly added item on top(at the start) of the array. SO at the time of rendering the new elements are seen on the top.
2) Doesn't adds empty string elements

*/

import React, { useState } from "react";
import "./index.css";
import List from "./List";

const App = () => {
  const [inState, updateInState] = useState("");
  const [cList, updateList] = useState([]);

  const inputFocus = () => {
    const field = document.querySelector("input");
    field.focus();
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    updateInState(event.target.value);
  };

  const outputEvent = () => {
    updateList((prevArray) => {
      if (inState.length !== 0) {
        prevArray.unshift(inState);
        return prevArray;
      } else {
        return prevArray;
      }
    });
    updateInState("");
    inputFocus();
  };

  const deleteItem = (id) => {
    // console.log("Item deleted");
    updateList((prevArray) => {
      return prevArray.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="wall">
        <div className="content">
          <div className="heading">
            <h2>ToDo List</h2>
          </div>
          <div className="input-div">
            <input
              id="inputLine"
              type="text"
              placeholder="Add Tasks Here"
              value={inState}
              onChange={inputEvent}
              autoFocus
            />
            <button onClick={outputEvent}>+</button>
          </div>
          <div className="output-div">
            {cList.map((values, idx) => {
              return (
                <List text={values} id={idx} key={idx} actionFun={deleteItem} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
