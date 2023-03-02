import axios from "axios";
import styles from "./postdetails.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Postdetails = () => {
  const [data, setdata] = useState([]);
  const [read, setread] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((res) => setdata(res.data));
    setloading(false);
  }, []);
  return (
    <>
      {loading && <p>Loading....</p>}
      {!loading && (
        <div className={styles["blog-details"]}>
          <div className={styles["card-wrapper"]}>
            <div className={styles["card-details"]}>
              <h3>Title :- {data.title}</h3>
              <p>Body :- {data.body}</p>
              {read && <p>{data.body}</p>}
              <button
                className={`${styles["button"]} ${styles["btn1"]}`}
                onClick={() => setread(!read)}
              >
                {read ? "Read less" : "Read more"}
              </button>
              <p>Tags :{data.tags}</p>
              <button
                onClick={() => navigate(-1)}
                className={`${styles["button"]} ${styles["btn2"]}`}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Postdetails;
