import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  
  const clickHandler = () => {
    setTitle('Updated !')
    console.log({title});
    
    // title = "updated !"; // this will not work as we expected as this way is not
    // the corrct way of  calling the function.
    // console.log("Clicked the Button !!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amout}</div>
      </div>
      {
        // Below line is the example of annonymus arrow Function.
        // to call any event handlers we use 'on'then the event name
        // but this are the default names so we can search for it.
        /* <button onClick={() => {console.log("clicked");}}>Click me</button> */
      }
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
