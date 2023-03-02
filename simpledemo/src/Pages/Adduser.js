import React, { useState } from "react";
import styles from "./Adduser.module.css";
import { useNavigate } from "react-router-dom";
import Inputform from "../Component/Inputform";
const Adduser = (props) => {
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    number: "",
    websitename: "",
  });
  const { fullname, username, email, number, websitename } = Input;
  const Datahandlechange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
    console.log({ ...Input });
  };
  const Formsubmit = (event) => {
    event.preventDefault();
    const data = { ...Input };
    const datapost = async () => {
      const responsedata = await fetch("http://localhost:4000/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const newdata = await responsedata.json();
      console.log(newdata);
    };
    if (
      fullname.trim().length !== "" &&
      username.trim().length !== "" &&
      email.trim().length !== "" &&
      number.trim().length !== "" &&
      websitename.trim().length !== ""
    ) {
      datapost(); 
    }
    else{
      navigate(-1); 
    }
  };
  return (
    <section className={styles["form-section"]}>
      <form className={styles["form-wrapper"]} onSubmit={Formsubmit}>
        <Inputform
          label="Fullname"
          value={fullname}
          eventhandler={Datahandlechange}
          type="text"
          name="fullname"
        />
        <Inputform
          label="Username"
          value={username}
          eventhandler={Datahandlechange}
          type="text"
          name="username"
        />
        <Inputform
          label="Email"
          value={email}
          eventhandler={Datahandlechange}
          type="email"
          name="email"
        />
        <Inputform
          label="Number"
          value={number}
          eventhandler={Datahandlechange}
          type="number"
          name="number"
        />
        <Inputform
          label="Website name"
          value={websitename}
          eventhandler={Datahandlechange}
          type="url"
          name="websitename"
        />
        <div className={styles["form-btn"]}>
          <button className={styles["button"]}>Add user</button>
        </div>
      </form>
    </section>
  );
};

export default Adduser;
