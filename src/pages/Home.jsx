import React from "react";
// import useUsernameStore from "../store";
import styles from "./Home.module.css";
import Layout from "../components/layout";

function Home() {
 // const { username } = useUsernameStore();

  return (
    <Layout>
      <div className={styles.homecontainer}>
        <div className={styles.innerCont}>
          <div className={styles.inner}>
          <br />
            <h2>
              Adopt Animals
              <br />
              Adopt Family
            </h2>
            <p>포인핸드는 사지 않고 입양하는 문화를 만듭니다.</p>
            <br /><br />
          </div>
        </div>
      </div>

      {/* <div className={workStyles.container}>

            <div className={workStyles.pagename}>
                <div className={workStyles.flexStart}>
                    <IoHomeOutline />
                    <div className={workStyles.marginRight10}></div>
                    <div>HOME</div>
                </div>
                <div className={workStyles.username}>
                    Hi, {username}
                </div>
            </div>

            <div>
                <h3>This is example for Polytech lesson</h3>
                <div className={styles.techspecTitle}>
                    <h4>Tech spec</h4>
                    <FaRegArrowAltCircleDown />
                </div>
                <li>Create-react-app</li>
                <li>React - useEffect</li>
                <li>Fetch data(json)</li>
                <li>React-router-dom</li>
                <li>Zustand</li>
                <li>CSS module</li>
                <li>React-icons</li>

            </div>
        </div> */}
    </Layout>
  );
}

export default Home;
