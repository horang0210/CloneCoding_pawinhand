import React, { useState } from "react";
import workStyles from "./Works.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "./About.module.css";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import useUsernameStore from "../store";
import Layout from "../components/layout";

function About() {
  const adminUserInfo = {
    id: "admin",
    pw: "1111",
  };
  const { username, updateUsername } = useUsernameStore();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onLogin = () => {
    if (inputId === adminUserInfo.id && inputPw === adminUserInfo.pw) {
      updateUsername(adminUserInfo.id);
      alert(`Hi ${adminUserInfo.id}!`);
    //   setInputId("");
    //   setInputPw("");

    } else {
      alert("Wrong ID or PW");
    }
  };

  const onLogout = () => {
    updateUsername("");
    alert("Bye!");
  };

  return (
    <Layout>
      <div className={workStyles.container}>
        <div className={workStyles.pagename}>
          <div className={styles.flexStart}>
            <IoPersonCircleOutline />
            <div className={workStyles.marginRight10}></div>
            <div>LOGIN</div>
          </div>
          <div className={styles.username}>{username}</div>
        </div>

        <div className={styles.listBox}>
          <div>
            ID
            <input
              className={styles.margin}
              onChange={(e) => setInputId(e.target.value)}
            />
          </div>
          <div>
            PW
            <input
              className={styles.margin}
              onChange={(e) => setInputPw(e.target.value)}
            />
          </div>
          {username ? ( 
            <button onClick={onLogout} className={workStyles.toggleButton}>
              <RiLogoutBoxLine />
            </button>
          ) : (
            <button onClick={onLogin} className={workStyles.toggleButton}>
              <RiLoginBoxLine />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default About;
