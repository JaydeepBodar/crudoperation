import React from "react";
import styles from "./Input.module.css";
const Inputform = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div className={styles["form-group"]}>
        <label>{props.label}</label>
        <input name={props.name} type={props.type} value={props.value} onChange={props.eventhandler} />
      </div>
    </React.Fragment>
  );
};

export default Inputform;
