'use client';

import styles from './indicators.module.css'
import Navigation from '../components/navigation/navig'
import { useRef } from 'react';

export default function Indicators() {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('open')
        navRef.current.classList.contains('open') ? navRef.current.style.display = 'block' : navRef.current.style.display = 'none'
    }

    return (
        <main className={styles.indicators}>
            <div className={styles.first_screen}>
                <div className={styles.bot_part}>
                    <div className={styles.ami_decoration}>
                        <div className={styles.ami_container}>
                            <div className={styles.ami_top}>
                                <div>
                                    <p className={styles.ami_header}>О НАС</p>
                                    <p className={styles.ami_desc}>Наша цель – стать самым 
                                    высокодоходным 
                                    инвестиционным фондом 
                                    в мире</p>
                                </div>
                                <div className={styles.links}>
                                    <button className={`${styles.link} ${styles.link_h}`} onClick={showNav}>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", width: "20px", height: "auto"}}><g class=""><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill='#88878A'></path></g></svg>
                                    </button>
                                    <button className={styles.link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                                        <path opacity="0.5" d="M6.59199 9.22688L6.31409 13.1357C6.71169 13.1357 6.88389 12.9649 7.09039 12.7598L8.95448 10.9783L12.8171 13.807C13.5254 14.2018 14.0245 13.9939 14.2156 13.1553L16.751 1.27492L16.7517 1.27422C16.9764 0.227022 16.373 -0.182476 15.6828 0.0744224L0.77992 5.78009C-0.237174 6.17489 -0.221774 6.74189 0.607021 6.99879L4.4171 8.18388L13.2672 2.64621C13.6836 2.37041 14.0623 2.52301 13.7508 2.79881L6.59199 9.22688Z" fill="white"/>
                                    </svg>
                                    </button>
                                    <button className={styles.link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                                        <path d="M12.3529 -6.10352e-05H4.11765C1.64706 -6.10352e-05 0 1.23523 0 4.11759V9.88229C0 12.7646 1.64706 13.9999 4.11765 13.9999H12.3529C14.8235 13.9999 16.4706 12.7646 16.4706 9.88229V4.11759C16.4706 1.23523 14.8235 -6.10352e-05 12.3529 -6.10352e-05ZM12.74 5.01523L10.1624 7.07406C9.61882 7.51053 8.92706 7.72465 8.23529 7.72465C7.54353 7.72465 6.84353 7.51053 6.30824 7.07406L3.73059 5.01523C3.46706 4.80112 3.42588 4.40582 3.63176 4.14229C3.84588 3.87876 4.23294 3.82935 4.49647 4.04347L7.07412 6.10229C7.7 6.60464 8.76235 6.60464 9.38824 6.10229L11.9659 4.04347C12.2294 3.82935 12.6247 3.87053 12.8306 4.14229C13.0447 4.40582 13.0035 4.80112 12.74 5.01523Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    </button>
                                    <button className={styles.link}>
                                    <p>RU</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" viewBox="0 0 7 5" fill="none">
                                        <path opacity="0.5" d="M3.5 4.99994L0.468912 0.499938L6.53109 0.499939L3.5 4.99994Z" fill="white"/>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.ami_down}>
                                <p className={styles.ami_txt}><span>AMI FINANCE</span> – закрытое сообщество, которое помогает своим клиентам сохранять и приумножать капитал</p>
                                <button className={styles.ami_button}>
                                    <span>Перейти в личный кабинет</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path opacity="0.25" d="M17.7635 0.736483C17.7635 0.460341 17.5396 0.236484 17.2635 0.236483L12.7635 0.236483C12.4873 0.236483 12.2635 0.46034 12.2635 0.736483C12.2635 1.01263 12.4873 1.23648 12.7635 1.23648L16.7635 1.23648L16.7635 5.23648C16.7635 5.51263 16.9873 5.73648 17.2635 5.73648C17.5396 5.73648 17.7635 5.51263 17.7635 5.23648L17.7635 0.736483ZM1.35355 17.3535L17.617 1.09004L16.9099 0.38293L0.646447 16.6464L1.35355 17.3535Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.nav_part} ref={navRef}>
                    <Navigation />
                </div>
            </div>
            <div className={styles.second_screen}>
                <div className={styles.bot_part}>
                    <div className={styles.ami_decoration}>
                    <div className={styles.ami_container}>
                        <div className={styles.key_top}>
                            <p className={styles.key_header}>AMI FINANCE</p>
                            <p className={styles.key_desc}>является первым и единственным
                                фондом, открывающим физическим 
                                лицам доступ в мир высокодоходных 
                                финансовых инструментов</p>
                            <p className={styles.key_txt}>
                            Наша команда профессиональных трейдеров 
                            и аналитиков стабильно генерирует прибыль 
                            как через классический фондовый рынок, 
                            так&nbsp;и через рынок цифровых активов
                            </p>
                        </div>
                        <div className={styles.key_down}>
                            <p className={styles.key_txt}>
                            Наша миссия – мы помогаем почувствовать 
                            уверенность в завтрашнем дне, реализовать 
                            свои мечты и ощутить свободу через 
                            повышение качества жизни
                            </p>
                            <button className={styles.key_button}>
                                <span>Перейти в личный кабинет</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path opacity="0.25" d="M17.7635 0.736544C17.7635 0.460402 17.5396 0.236545 17.2635 0.236544L12.7635 0.236544C12.4873 0.236544 12.2635 0.460401 12.2635 0.736544C12.2635 1.01269 12.4873 1.23654 12.7635 1.23654L16.7635 1.23654L16.7635 5.23654C16.7635 5.51269 16.9873 5.73654 17.2635 5.73654C17.5396 5.73654 17.7635 5.51269 17.7635 5.23654L17.7635 0.736544ZM1.35355 17.3536L17.617 1.0901L16.9099 0.382991L0.646447 16.6464L1.35355 17.3536Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.nav_part}>
                    <Navigation />
                </div>
            </div>
            <div className={styles.third_screen}>
                <div className={styles.bot_part}>
                    <div className={styles.ami_decoration}>
                        <p className={styles.digital_header}>
                        ОБ <span>AMI FINANCE</span> В ЦИФРАХ
                        </p>
                        <div className={styles.digit_container}>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>10</p>
                                    <p className={styles.digit_crit_txt}>ЛЕТ <br /> НА РЫНКЕ</p>
                                </div>
                            </div>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>25 791</p>
                                    <div className={styles.digit_crit}>
                                    <svg style={{opacity: '0.6'}} xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                        <path d="M17.1299 37.7502V17.0069C17.1299 16.1902 17.3749 15.394 17.824 14.7202L23.3978 6.43107C24.2757 5.10398 26.4603 4.16482 28.3182 4.85898C30.319 5.53273 31.6461 7.77857 31.2174 9.7794L30.1557 16.4557C30.074 17.0682 30.2374 17.6194 30.5845 18.0482C30.9315 18.4361 31.442 18.6811 31.9932 18.6811H40.3845C41.9974 18.6811 43.3857 19.3344 44.2024 20.4777C44.9782 21.5802 45.1211 23.0094 44.6107 24.459L39.5882 39.7511C38.9553 42.2827 36.199 44.3448 33.4632 44.3448H25.5007C24.1328 44.3448 22.2136 43.8752 21.3357 42.9973L18.7224 40.9761C17.722 40.2206 17.1299 39.0161 17.1299 37.7502Z" fill="black"/>
                                        <path d="M10.6368 13.0259H8.53384C5.36926 13.0259 4.08301 14.2509 4.08301 17.2725V37.8117C4.08301 40.8334 5.36926 42.0584 8.53384 42.0584H10.6368C13.8013 42.0584 15.0876 40.8334 15.0876 37.8117V17.2725C15.0876 14.2509 13.8013 13.0259 10.6368 13.0259Z" fill="black"/>
                                    </svg>
                                        <p className={styles.digit_crit_txt}>ДОВОЛЬНЫХ <br /> ИНВЕСТОРОВ</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>27%</p>
                                    <p className={styles.digit_crit_txt}>ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ</p>
                                </div>
                            </div>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>$10 789 675</p>
                                    <p className={styles.digit_crit_txt}>ДОХОД <br /> ИНВЕСТОРОВ</p>
                                </div>
                            </div>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>100%</p>
                                    <p className={styles.digit_crit_txt}>ЗАЩИТА <br /> КАПИТАЛА</p>
                                </div>
                            </div>
                            <div className={styles.digit_block}>
                                <div className={styles.digit_block_container}>
                                    <p className={styles.digit_header}>8+</p>
                                    <p className={styles.digit_crit_txt}>ПРОФЕССИОНАЛЬНЫХ <br /> ИНВЕСТОРОВ И АНАЛИТИКОВ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.nav_part}>
                    <Navigation />
                </div>
            </div>
            <div className={styles.fourth_screen}>
                <div className={styles.bot_part}>
                    <div className={styles.ami_decoration}>
                        <div className={styles.ami_container}>
                            <div className={styles.sal_top}>
                                <p className={styles.sal_header}>НАШИ ИНВЕСТОРЫ 
                                ЗАРАБОТАЛИ БОЛЕЕ <br />
                                <span>$10 000 000</span></p>
                            </div>
                            <div className={styles.sal_low}>
                                <div className={styles.sal_block}>
                                    <span className={styles.sal_block_txt}>10%+</span> <br />
                                    <span className={styles.sal_block_dec}>стабильная <br /> ежемесячная <br /> доходность</span>
                                </div>
                                <div className={styles.sal_block}>
                                    <span className={styles.sal_block_txt}>100%</span> <br />
                                    <span className={styles.sal_block_dec}>защита <br /> инвестиций</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.nav_part}>
                    <Navigation />
                </div>
            </div>
            <div className={styles.fifth_screen}>
                <div className={styles.bot_part}>
                    <div className={styles.ami_decoration}>
                        <div className={styles.ami_container}>
                            <p className={styles.robot_header}>
                            ИСПОЛЬЗУЕМ <br />
                            <span>
                            ИСКУССТВЕН<wbr></wbr>НЫЙ 
                            ИНТЕЛЛЕКТ 
                            </span> <br />
                            В ТОРГОВЫХ 
                            СТРАТЕГИЯХ
                            </p>
                            <button className={styles.robot_button}>
                                <span>Перейти в личный кабинет</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path opacity="0.25" d="M17.7635 0.736544C17.7635 0.460402 17.5396 0.236545 17.2635 0.236544L12.7635 0.236544C12.4873 0.236544 12.2635 0.460401 12.2635 0.736544C12.2635 1.01269 12.4873 1.23654 12.7635 1.23654L16.7635 1.23654L16.7635 5.23654C16.7635 5.51269 16.9873 5.73654 17.2635 5.73654C17.5396 5.73654 17.7635 5.51269 17.7635 5.23654L17.7635 0.736544ZM1.35355 17.3536L17.617 1.0901L16.9099 0.382991L0.646447 16.6464L1.35355 17.3536Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.nav_part}>
                    <Navigation />
                </div>
            </div>
        </main>
    )
}