import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Home.module.css";
const Home = (props) => {
  const [User, setUser] = useState([]);
  const [filterdata, searchfilterdata] = useState([]);
  const [filter, searchfilter] = useState("");
  const [loading, setLoading] = useState(true);
  const shownavigate = useNavigate();
  const editnavigate = useNavigate();
  const setData = async () => {
    const responsedata = await fetch("http://localhost:4000/");
    const data = await responsedata.json();
    const pushdata = [];
    for (let key in data) {
      pushdata.push({
        id: data[key]?._id,
        fullname: data[key]?.fullname,
        username: data[key]?.username,
        email: data[key]?.email,
      });
    }
    setUser(pushdata);
    searchfilterdata(pushdata);
    setLoading(false);
  };
  const Deletdata = async (id) => {
    await axios.delete(`http://localhost:4000/deleteuser/${id}`);
    setData();
  };
  useEffect(() => {
    setData();
  }, []);
  const filterhandle = (e) => {
    const search = e.target.value;
    if (search.length > 0) {
      const resultdata = User.filter((item) =>
        item.fullname.toLowerCase().includes(search)
      );
      setUser(resultdata);
    } else {
      setUser(filterdata);
    }
    searchfilter(search);
  };
  return (
    <section
      className={loading ? styles["datasection"] : styles["data-section"]}
    >
      {loading && (
        <h1 style={{ textAlign: "center", margin: "10px 0" }}>Loading...</h1>
      )}
      {!loading && (
        <React.Fragment>
          <div className={styles["search-data"]}>
            <label>
              <h3>Search Record by Name:-</h3>
            </label>
            <input type="text" onChange={filterhandle} value={filter} />
          </div>
          <table className={styles["table-wrapper"]}>
            <thead className={styles["table-header"]}>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className={styles["table-body"]}>
              {User?.map((value, index) => {
                const { fullname, username, email, id } = value;
                return (
                  <tr key={id} className={styles.tablerow}>
                    <td>{index + 1}</td>
                    <td>{fullname}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>
                      <div className={styles["action-btn"]}>
                        <button
                          className={styles["button"]}
                          onClick={() => shownavigate(`/users/${id}`)}
                        >
                          View
                        </button>
                        <button
                          className={styles["button"]}
                          onClick={() => editnavigate(`/updateuser/${id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className={styles["button"]}
                          onClick={() => {
                            const data = window.confirm(
                              "Are you sure to delete user ? if yes then click ok otherwise click cancle"
                            );
                            if(data===true){
                              Deletdata(id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </section>
  );
};

export default Home;
