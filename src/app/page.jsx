"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/navigation/navig";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function Home() {
  const navRef = useRef();

  const showNav = () => {
    // console.log(navRef.current)
    navRef.current.classList.toggle("open");
    navRef.current.classList.contains("open")
      ? (navRef.current.style.display = "block")
      : (navRef.current.style.display = "none");
  };

  return (
    <Fullpage>
      <main className={styles.main}>
        <FullPageSections>
          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.first_screen}>
              <div className={styles.info_part}>
                <div className={styles.info_container}>
                  <div className={styles.info_high}>
                    <p className={styles.info_title}>
                      Цифровая платформа сохранения и приумножения активов
                    </p>
                    <div className={styles.links}>
                      <button
                        className={`${styles.link} ${styles.link_h}`}
                        onClick={showNav}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                          style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "20px",
                            height: "auto",
                          }}
                        >
                          <g class="">
                            <path
                              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                              fill="#88878A"
                            ></path>
                          </g>
                        </svg>
                      </button>
                      <button className={styles.link}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                        >
                          <path
                            opacity="0.5"
                            d="M6.59199 9.22688L6.31409 13.1357C6.71169 13.1357 6.88389 12.9649 7.09039 12.7598L8.95448 10.9783L12.8171 13.807C13.5254 14.2018 14.0245 13.9939 14.2156 13.1553L16.751 1.27492L16.7517 1.27422C16.9764 0.227022 16.373 -0.182476 15.6828 0.0744224L0.77992 5.78009C-0.237174 6.17489 -0.221774 6.74189 0.607021 6.99879L4.4171 8.18388L13.2672 2.64621C13.6836 2.37041 14.0623 2.52301 13.7508 2.79881L6.59199 9.22688Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <button className={styles.link}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                        >
                          <path
                            d="M12.3529 -6.10352e-05H4.11765C1.64706 -6.10352e-05 0 1.23523 0 4.11759V9.88229C0 12.7646 1.64706 13.9999 4.11765 13.9999H12.3529C14.8235 13.9999 16.4706 12.7646 16.4706 9.88229V4.11759C16.4706 1.23523 14.8235 -6.10352e-05 12.3529 -6.10352e-05ZM12.74 5.01523L10.1624 7.07406C9.61882 7.51053 8.92706 7.72465 8.23529 7.72465C7.54353 7.72465 6.84353 7.51053 6.30824 7.07406L3.73059 5.01523C3.46706 4.80112 3.42588 4.40582 3.63176 4.14229C3.84588 3.87876 4.23294 3.82935 4.49647 4.04347L7.07412 6.10229C7.7 6.60464 8.76235 6.60464 9.38824 6.10229L11.9659 4.04347C12.2294 3.82935 12.6247 3.87053 12.8306 4.14229C13.0447 4.40582 13.0035 4.80112 12.74 5.01523Z"
                            fill="white"
                            fill-opacity="0.5"
                          />
                        </svg>
                      </button>
                      <button className={styles.link}>
                        <p>RU</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="5"
                          viewBox="0 0 7 5"
                          fill="none"
                        >
                          <path
                            opacity="0.5"
                            d="M3.5 4.99994L0.468912 0.499938L6.53109 0.499939L3.5 4.99994Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.info_brand}>
                    <span className={styles.info_name}>AMI</span>
                    <span className={styles.info_subname}>FINANCE</span>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part} ref={navRef}>
                <Navigation />
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.second_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decoration}>
                  <div className={styles.bot_text_block}>
                    <div className={styles.bot_title_block}>
                      <span className={styles.bot_title}>ТОРГОВЫЙ БОТ</span>{" "}
                      <br />
                      <span className={styles.bot_title}>
                        на основе искусст<wbr></wbr>венного интеллекта
                      </span>
                    </div>
                    <button className={styles.more}>
                      <span>Подробнее о Торговом боте</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          opacity="0.25"
                          d="M17.7635 0.736544C17.7635 0.460402 17.5396 0.236545 17.2635 0.236544L12.7635 0.236544C12.4873 0.236544 12.2635 0.460401 12.2635 0.736544C12.2635 1.01269 12.4873 1.23654 12.7635 1.23654L16.7635 1.23654L16.7635 5.23654C16.7635 5.51269 16.9873 5.73654 17.2635 5.73654C17.5396 5.73654 17.7635 5.51269 17.7635 5.23654L17.7635 0.736544ZM1.35355 17.3536L17.617 1.0901L16.9099 0.382991L0.646447 16.6464L1.35355 17.3536Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part}>{/* <Navigation /> */}</div>
            </div>
          </FullpageSection>
        </FullPageSections>
        <div className={styles.static}>
          <Navigation />
        </div>
      </main>
    </Fullpage>
  );
}
