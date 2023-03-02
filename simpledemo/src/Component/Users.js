import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Users.module.css";
const Users = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const [Details, setDetails] = useState({
    fullname: "",
    username: "",
    email: "",
    number: "",
    websitename: "",
  });
  // const { fullname, username, email, number, websitename } = Details;
  const dataset = async () => {
    const responsedata = await fetch(
      `http://localhost:4000/users/${id}`
    );
    const data = await responsedata.json();
    console.log(data);
    setDetails(data);
  };
  useEffect(() => {
    dataset();
  }, []);
  return (
    <div className={styles["user-details"]}>
      <div>
        <h2>User id :{id}</h2>
        <div className={styles['form-btn']}>
        <button onClick={()=>navigate('/')} className={styles['button']}>Back</button>
        </div>
      </div>
      <ul className={styles["userlist"]}>
        <li>Name :- {Details?.fullname}</li>
        <li>Username :- {Details?.username}</li>
        <li>Email :- {Details?.email}</li>
        <li>Mobile number :- {Details?.number}</li>
        <li>URL :- {Details?.websitename}</li>
      </ul>
    </div>
  );
};

export default Users;
