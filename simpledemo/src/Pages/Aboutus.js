import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./about.module.css";
const Aboutus = (props) => {
  const [Data, setdata] = useState([]);
  const [loading,setloading]=useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((newdata) => {setdata(newdata.data.posts)}).catch((error)=>setdata(error.posts));
      setloading(false)
  }, []);
  return (
    <section className={styles["about-section"]}>
      {loading && <h1>Loading...</h1>}
      {!loading && Data.map((value, index) => {
        const {title,id,body}=value
        return (
          <div key={id} className={styles.post_wrapper}>
            <h4><h1>Blog :- {id}</h1> {title}</h4>
            <button onClick={()=>navigate(`/Postdetails/${id}`)} className={styles['button']}>More Details</button>
          </div>
        );
      })}
    </section>
  );
};

export default Aboutus;
