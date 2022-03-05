import React from "react";
import "./list.css";

const List = (props) => {
  return (
    <>
      <div className="list">
        <div className="txt-section">
          <p>{props.text}</p>
        </div>
        <div className="option-section">
          <div className="icon-items">
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => {
                props.actionFun(props.id);
              }}
            ></i>
          </div>
          <div className="radioBtn-items">
            <input
              type="radio"
              name="priority"
              value="Low"
              id={`low${props.key}`}
            />
            <label htmlFor={`low-${props.key}`}>Low</label>
            <input
              type="radio"
              name="priority"
              value="Medium"
              id={`med-${props.key}`}
            />
            <label htmlFor={`med-{props.key}`}>Medium</label>
            <input
              type="radio"
              name="priority"
              value="High"
              id={`${props.key}`}
            />
            <label htmlFor={`${props.key}`}>High</label>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
