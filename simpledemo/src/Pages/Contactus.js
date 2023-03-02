import React from "react";
import styles from './contactus.module.css'
const Contactus = (props) => {
  return (
    <section className={styles["contact-wrapper"]}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.25792223026!2d72.43965508311773!3d23.02018176229379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1675923647951!5m2!1sen!2sin"
        width="350px"
        height="350px"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Contactus;
