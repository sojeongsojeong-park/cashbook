import { useState } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
      setEnteredValue("");
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' onChange={inputHandler} value={enteredValue} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
