import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Adduser.module.css";
import Inputform from "../Component/Inputform";
import axios from 'axios'
const Updateuser = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    number: "",
    websitename: ""
  });
  useEffect(() => {
    datapost();
  }, []);
  const { fullname, username, email, number, websitename } = Input;
  const Datahandlechange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
    console.log({ ...Input });
  };
  const Formsubmit = async (event) => {
    event.preventDefault();
    // const responsedata = await fetch(
    //   `http://localhost:4000/userupdate/${id}`,
    //   { data:{...Input},method: "put", headers: { "Content-type": "application/json" } }
    // );
    // const retuurndata=await responsedata.json()
    await axios.put(`http://localhost:4000/userupdate/${id}`,Input
    ,{headers: { "Content-type": "application/json" }}).then((r)=>console.log(r))
     navigate(-1)
  };
  const datapost = async () => {
    const responsedata = await fetch(`http://localhost:4000/users/${id}`);
    const newdata = await responsedata.json();
    setInput(newdata);
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
          <button className={styles["button"]}>Update user</button>
        </div>
      </form>
    </section>
  );
};

export default Updateuser;
