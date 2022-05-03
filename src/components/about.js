import React from 'react'
import head from './../assets/aboutbg.png';
import dots from './../assets/abt-dots.png';
import vision from './../assets/Glassy card (1).png';
import mission from './../assets/Glassy card.png';
import style from './../styles/about.module.css';
import about1 from './../assets/33 (2) 1.png';
import about2 from './../assets/45 2.png';
import about3 from './../assets/Group 7.png';
import about4 from './../assets/Group 8.png';
import about5 from './../assets/Ellipse 31.png';
import icon1 from './../assets/teamwork 2.png'
import icon2 from './../assets/responsibility 1.png'
import icon3 from './../assets/target (1) 1.png'
import icon4 from './../assets/networking 1.png'
import icon5 from './../assets/support 1.png'
import icon6 from './../assets/learning 1.png'
import icon7 from './../assets/ownership 1.png'
import icon8 from './../assets/goal (1) 1.png'
import team1 from './../assets/image 62.png';
import team2 from './../assets/image 64.png';
import team3 from './../assets/image 65.png';
import team4 from './../assets/image 66.png';
import team5 from './../assets/image 67.png';
import team6 from './../assets/image 68.png';
import team7 from './../assets/image 69.png';
import facebook from './../assets/Vector.png';
import linkedin from './../assets/Vector (1).png';

export default function About() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.about}>  
                <div>
                    <img src={about1} className={style.abnf} alt="" />
                    <nav>
                        <h3>About The Company</h3>
                        <img src={about1} className={style.abnr} alt="" />
                        <p>TRANSLOG Energy is a fast-growing petroleum haulage service provider with expertise in facilitating large-scale transport services for products such as Aviation fuel (Jet-A1), Premium Motor Spirit (PMS), Automotive Gas Oil (AGO), as well as Dual-purpose/Household Kerosenes across Nigeria and the West African sub-region prospectively.</p>
                        <button>Read More</button>
                    </nav>
                </div>
                <div>
                    <p> Amidst numerous oil-transportation challenges most importantly spillage/pollution and security, our company, TRANSLOG Energy strategically positions itself to execute petroleum logistics and haulage services, guaranteeing multi-dimensional safety; for the product and the environment. </p>
                    <img src={about2} alt="" />
                </div>
                <img src={about4} className={style.abr} alt="" />
                <img src={about3} className={style.abl} alt="" />
                <img src={about5} className={style.abe} alt="" />
        </section>
        <section className={style.statements}>
            <img src={vision} alt="" />
            <img src={mission} alt="" />
            <img src={dots} className={style.dts} alt="" />
        </section>
        <section className={style.values}>
            <h2>Our Core Values</h2>
            <div>
                <nav>
                    <figure>
                        <img src={icon1} alt="" />
                    </figure>
                    <h4>Transparency & Teamwork</h4>
                    <p>Showing respect for rules & regulations, constituted authorities, individuals and groups is a key requirement to maintaining a balanced relationship in what we do; we take the initiative to do and act right at the right time.</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon2} alt="" />
                    </figure>
                    <h4>Responsibility</h4>
                    <p>Showing respect for rules & regulations, constituted authorities, individuals and groups is a key requirement to maintaining a balanced relationship in what we do; we take the initiative to do and act right at the right time.</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon3} alt="" />
                    </figure>
                    <h4>Ambition</h4>
                    <p>To be better every day and continually evolve into the best, is to achieve more and never let up on available possibilities; armed with hope we aspire to greater possibilities as individuals and a group</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon4} alt="" />
                    </figure>
                    <h4>Networking</h4>
                    <p>Co-operating with willing partners to strive for a common purpose is who we are and it is indispensable to our processes. We recognize the need for each other as a corollary to our success story.</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon5} alt="" />
                    </figure>
                    <h4>Support</h4>
                    <p>Being open in all our business dealings and transactions demonstrates how we value our partners and stakeholders which is the hallmark of our business, everyone is important and in our relationship value -chain</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon6} alt="" />
                    </figure>
                    <h4>Learning</h4>
                    <p>Showing respect for rules & regulations, constituted authorities, individuals and groups is a key requirement to maintaining a balanced relationship in what we do; we take the initiative to do and act right at the right time.</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon7} alt="" />
                    </figure>
                    <h4>Ownership mentality</h4>
                    <p>Taking charge of the situation and proffering solution is encapsulated in our Organization Citizens Behaviour (OCB) profile, at TRANSLOG everyone takes ownership of their equipment, work-space, facility, responsibilities and outcome</p>
                </nav>
                <nav>
                    <figure>
                        <img src={icon8} alt="" />
                    </figure>
                    <h4>Goals</h4>
                    <p>Focus drives performance and unlocks the energy for targetdriven achievement which is the whole essence of what we do, “Common goal makes a common people”.</p>
                </nav>
            </div>
        </section>
        <section className={style.team}>
            <h2>Our Team</h2>
            <div>
                <nav>
                    <img src={team1} alt="" />
                    <h4>Jude Osaluwe <br />CHIEF EXECUTIVE OFFICER</h4>
                    <p>Jude Osaluwe is a serial Entrepreneur with over 25 years work experience across industries including manufacturing, hospitality, Fast Moving Consumer Goods (FMCG), among others. He has managed several corporate entities in his entrepreneurial quest including a key player in the Nigeria Oil and Gas downstream sector from where he went on to pioneer Translog Energy Limited with his team...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav>
                <nav>
                    <img src={team2} alt="" />
                    <h4>Ms. Omonefe E. Osaluwe <br /> EXECUTIVE DIRECTOR, Finance and Administration</h4>
                    <p>Ms. Omonefe E. Osaluwe is a professional Administrator and manager with over 15 years managerial experience across various industries including Banking, Oil and Gas (downstream) among others...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav><nav>
                    <img src={team3} alt="" />
                    <h4>Osezua Iluobe, <br /> EXECUTIVE DIRECTOR, Operations </h4>
                    <p>Osezua Iluobe is a trained civil engineer with several years of industry experience, he pursued his career in civil engineering and surveying which he is passionate about...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav><nav>
                    <img src={team4} alt="" />
                    <h4>Fayodeka A. Emmanuel <br /> EXECUTIVE DIRECTOR, Trade & Investment</h4>
                    <p>Fayodeka Emmanuel is a consummate realtor and investment portfolio manager, he studied at London College of Communication, United Kingdom...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav><nav>
                    <img src={team5} alt="" />
                    <h4>Ms. Dinah Iliya <br /> MANAGEMENT TRAINEE Administration </h4>
                    <p>Dinah Iliya is a thorough-bred Kaduna born entrepreneur, She studied Business Education from the National Open University of Nigeria (NOUN) and has been involved in providing assistance for entrepreneurship capacity building... </p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav><nav>
                    <img src={team6} alt="" />
                    <h4>Egboh Benard <br /> MANAGEMENT TRAINEE - Accounts</h4>
                    <p>Egboh Benard is a passionate Account officer with multiple industry exposure, his experience span across insurance and Pharmaceuticals among others. He is currently registered with the Institute of Chartered Accountants of Nigeria ...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav><nav>
                    <img src={team7} alt="" />
                    <h4>Benedict Anogwi <br /> PROJECT COORDINATOR </h4>
                    <p>Benedict Anogwi is a trained field engineer with background in Mechanical and Production Engineering. He studied in University of Benin at graduate and post-graduate level with a B.Eng in Mechanical Engineering and M.Sc in Engineering Management ...</p>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </nav>
            </div>
        </section>
    </div>
  )
}
