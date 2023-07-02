"use client";

import styles from "./about.module.css";
import Navigation from "../components/navigation/navig";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function About() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("open");
    navRef.current.classList.contains("open")
      ? (navRef.current.style.display = "block")
      : (navRef.current.style.display = "none");
  };

  return (
    <Fullpage>
      <main className={styles.about}>
        <FullPageSections>
          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.first_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
                  <div className={styles.bot_container}>
                    <div className={styles.bot_high}>
                      <div className={styles.bot_title_block}>
                        <span className={styles.bot_title}>
                          ТОРГОВЫЙ БОТ AMI FINANCE
                        </span>{" "}
                        <br />
                        <span className={styles.bot_title}>
                          Управление вашими активами искусственным интеллектом
                        </span>
                      </div>
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
                    <div className={styles.bot_low}>
                      <div className={styles.option}>
                        <button className={styles.option_btn}>
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.1 7.21994C16.29 7.21994 15.55 5.93994 16.45 4.36994C16.97 3.45994 16.66 2.29994 15.75 1.77994L14.02 0.789936C13.23 0.319936 12.21 0.599937 11.74 1.38994L11.63 1.57994C10.73 3.14994 9.25 3.14994 8.34 1.57994L8.23 1.38994C7.78 0.599937 6.76 0.319936 5.97 0.789936L4.24 1.77994C3.33 2.29994 3.02 3.46994 3.54 4.37994C4.45 5.93994 3.71 7.21994 1.9 7.21994C0.86 7.21994 0 8.06994 0 9.11994V10.8799C0 11.9199 0.85 12.7799 1.9 12.7799C3.71 12.7799 4.45 14.0599 3.54 15.6299C3.02 16.5399 3.33 17.6999 4.24 18.2199L5.97 19.2099C6.76 19.6799 7.78 19.3999 8.25 18.6099L8.36 18.4199C9.26 16.8499 10.74 16.8499 11.65 18.4199L11.76 18.6099C12.23 19.3999 13.25 19.6799 14.04 19.2099L15.77 18.2199C16.68 17.6999 16.99 16.5299 16.47 15.6299C15.56 14.0599 16.3 12.7799 18.11 12.7799C19.15 12.7799 20.01 11.9299 20.01 10.8799V9.11994C20 8.07994 19.15 7.21994 18.1 7.21994ZM10 13.2499C8.21 13.2499 6.75 11.7899 6.75 9.99994C6.75 8.20994 8.21 6.74994 10 6.74994C11.79 6.74994 13.25 8.20994 13.25 9.99994C13.25 11.7899 11.79 13.2499 10 13.2499Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                          </svg>
                        </button>
                        <span className={styles.option_txt}>
                          ПОЛНАЯ <br />
                          АВТОМАТИЗАЦИЯ
                        </span>
                      </div>
                      <div className={styles.option}>
                        <button className={styles.option_btn}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 14.9999C2.79 14.9999 1 16.7899 1 18.9999C1 19.7499 1.21 20.4599 1.58 21.0599C2.27 22.2199 3.54 22.9999 5 22.9999C6.46 22.9999 7.73 22.2199 8.42 21.0599C8.79 20.4599 9 19.7499 9 18.9999C9 16.7899 7.21 14.9999 5 14.9999ZM6.49 19.7299H5.75V20.5099C5.75 20.9199 5.41 21.2599 5 21.2599C4.59 21.2599 4.25 20.9199 4.25 20.5099V19.7299H3.51C3.1 19.7299 2.76 19.3899 2.76 18.9799C2.76 18.5699 3.1 18.2299 3.51 18.2299H4.25V17.5199C4.25 17.1099 4.59 16.7699 5 16.7699C5.41 16.7699 5.75 17.1099 5.75 17.5199V18.2299H6.49C6.9 18.2299 7.24 18.5699 7.24 18.9799C7.24 19.3899 6.91 19.7299 6.49 19.7299Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M21.5 12.4999H19C17.9 12.4999 17 13.3999 17 14.4999C17 15.5999 17.9 16.4999 19 16.4999H21.5C21.78 16.4999 22 16.2799 22 15.9999V12.9999C22 12.7199 21.78 12.4999 21.5 12.4999Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M16.53 5.39994C16.83 5.68994 16.58 6.13994 16.16 6.13994L7.87996 6.12994C7.39996 6.12994 7.15996 5.54994 7.49996 5.20994L9.24996 3.44994C10.73 1.97994 13.12 1.97994 14.6 3.44994L16.49 5.35994C16.5 5.36994 16.52 5.38994 16.53 5.39994Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M21.87 18.6599C21.26 20.7199 19.5 21.9999 17.1 21.9999H10.6C10.21 21.9999 9.95999 21.5699 10.12 21.2099C10.42 20.5099 10.61 19.7199 10.61 18.9999C10.61 15.9699 8.13999 13.4999 5.10999 13.4999C4.34999 13.4999 3.60999 13.6599 2.92999 13.9599C2.55999 14.1199 2.10999 13.8699 2.10999 13.4699V11.9999C2.10999 9.27994 3.74999 7.37994 6.29999 7.05994C6.54999 7.01994 6.81998 6.99994 7.09999 6.99994H17.1C17.36 6.99994 17.61 7.00994 17.85 7.04994C19.87 7.27994 21.33 8.50994 21.87 10.3399C21.97 10.6699 21.73 10.9999 21.39 10.9999H19.1C16.93 10.9999 15.21 12.9799 15.68 15.2299C16.01 16.8699 17.53 17.9999 19.2 17.9999H21.39C21.74 17.9999 21.97 18.3399 21.87 18.6599Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                          </svg>
                        </button>
                        <span className={styles.option_txt}>
                          ВЫСОКИЙ <br />
                          ДОХОД
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part} ref={navRef}>
                <Navigation />
              </div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.second_screen}>
              <div className={styles.bot_part}>
                <div className={styles.second_decoration}>
                  <div className={styles.coin_decoration}>
                    <div className={styles.coin_block}>
                      <div className={styles.coin_top}>
                        <div className={styles.coin_title_block}>
                          <span className={styles.coin_title}>
                            ПОДКЛЮЧИМ ТОРГОВОГО БОТА
                          </span>{" "}
                          <br />
                          <span className={styles.coin_title}>
                            ЛУЧШИМ КРИПТО<wbr></wbr>СЕРВИСАМ
                          </span>
                        </div>
                        <span className={styles.coin_txt}>
                          с помощью API-интеграции
                        </span>
                      </div>
                      <div className={styles.coin_low}>
                        <p className={styles.coin_desc}>
                          Вы сможете доверить сделки умному боту, работа
                          которого основана на искусственном интеллекте
                        </p>
                        <button className={styles.coin_button}>
                          <span className={styles.coin_button_txt}>
                            Подключить бота
                          </span>
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
                </div>
              </div>
              <div className={styles.nav_part}>{/* <Navigation /> */}</div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "auto" }}>
            <div className={styles.third_screen}>
              <div className={styles.bot_part}>
                <div className={styles.digit_decoration}>
                  <div className={styles.digit_container}>
                    <div className={styles.digit_text_block}>
                      <span className={styles.digit_text}>ТОРГОВЫЙ БОТ</span>{" "}
                      <br />
                      <span className={styles.digit_text}>
                        AMI FINANCE
                      </span>{" "}
                      <br />
                      <span className={styles.digit_text}>В ЦИФРАХ</span>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>256%</p>
                        <div className={styles.digit_crit}>
                          <svg
                            style={{ opacity: "0.6" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                          >
                            <path
                              d="M29.0546 0.083374H11.9455C4.51379 0.083374 0.083374 4.51379 0.083374 11.9455V29.0342C0.083374 36.4863 4.51379 40.9167 11.9455 40.9167H29.0342C36.4659 40.9167 40.8963 36.4863 40.8963 29.0546V11.9455C40.9167 4.51379 36.4863 0.083374 29.0546 0.083374ZM14.5996 30.5042C14.5996 31.0759 14.1505 31.525 13.5788 31.525H7.88254C7.31087 31.525 6.86171 31.0759 6.86171 30.5042V21.0717C6.86171 19.7855 7.90296 18.7442 9.18921 18.7442H13.5788C14.1505 18.7442 14.5996 19.1934 14.5996 19.765V30.5042ZM24.3588 30.5042C24.3588 31.0759 23.9096 31.525 23.338 31.525H17.6417C17.07 31.525 16.6209 31.0759 16.6209 30.5042V11.8025C16.6209 10.5163 17.6621 9.47504 18.9484 9.47504H22.0517C23.338 9.47504 24.3792 10.5163 24.3792 11.8025V30.5042H24.3588ZM34.1384 30.5042C34.1384 31.0759 33.6892 31.525 33.1175 31.525H27.4213C26.8496 31.525 26.4005 31.0759 26.4005 30.5042V23.2563C26.4005 22.6846 26.8496 22.2355 27.4213 22.2355H31.8109C33.0971 22.2355 34.1384 23.2767 34.1384 24.563V30.5042Z"
                              fill="white"
                            />
                          </svg>
                          <p className={styles.digit_crit_txt}>
                            ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>100%</p>
                        <p className={styles.digit_crit_txt}>
                          ЗАЩИТА <br /> КАПИТАЛА
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>20</p>
                        <p className={styles.digit_crit_txt}>
                          ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>84%</p>
                        <p className={styles.digit_crit_txt}>
                          ЗАШИТА КАПИТАЛА <br /> КАПИТАЛА
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>1041</p>
                        <p className={styles.digit_crit_txt}>
                          ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part}>{/* <Navigation /> */}</div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.fourth_screen}>
              <div className={styles.fourth_scheme}>
                <div className={styles.bot_part}>
                  <div className={styles.button_block}>
                    <img
                      className={styles.button_img}
                      src="./img/button.png"
                      alt="button"
                    />
                    <img
                      className={styles.button_on_f}
                      src="./img/btn-on1.png"
                      alt="btn"
                    />
                    <img
                      className={styles.button_on_s}
                      src="./img/btn-on2.png"
                      alt="btn"
                    />

                    <img
                      src="./img/robot_hand.png"
                      alt="Robot hand"
                      className={styles.but_on_hand}
                    />
                  </div>

                  <div className={styles.but_decoration}>
                    <div className={styles.but_container}>
                      <p className={styles.but_header}>
                        ПОДКЛЮЧИТЬСЯ К ТОРГОВОМУ БОТУ AMI FINANCE
                      </p>
                      <button className={styles.but_button}>
                        <span className={styles.but_button_txt}>НАЧАТЬ</span>
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
            </div>
          </FullpageSection>
        </FullPageSections>
      </main>
      <div className={styles.static}>
        <Navigation />
      </div>
    </Fullpage>
  );
}
