import React from 'react'
import style from './../styles/articles.module.css';
import head from './../assets/blog.png';
import blog1 from './../assets/blog1.png';
import blog3 from './../assets/blog3.png';
import blog4 from './../assets/blog4.png';
import blog5 from './../assets/blog5.png';
import blog6 from './../assets/blog6.png';
import { Link } from 'react-router-dom';
import dots from './../assets/dots.png'
export default function Worries() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.post}>
        <img src={dots} alt=""  className={style.dot}/>
            <div>
                <nav>
                    <img src={blog1} alt="" />
                    <h4>Worries Over Potential $150 Billion Losses By African Oil Producers</h4>
                    <p>In line with its commitment to sustainably drive human capital transformation in the power sector, Egbin Power Plc, Africa’s largest privately run thermal plant has inducted 30 young graduate engineers into an intensive power generation program at the Energy Training Centre.</p>
                    <p>Egbin, a subsidiary of the Sahara Power Group, has so far inducted over 200 graduate trainee engineers as it continues to “proactively, responsibly and sustainably shape Nigeria’s power narrative for socio-economic advancement and industrialization,” said Kola Adesina, Group Managing Director, Sahara Power Group.</p>
                    <p>“More than 200 young graduate engineers from all over Nigeria have been employed through this program since inception in 2014 in fulfillment of our resolve to empower our youths and develop capacity in the power sector. Sahara Power is delighted to lead the transformation process that will secure a sustainable future for Africa’s power sector through the expertise of these engineers,” Adesina added.</p>
                    <p>He noted that the upgrades, investment in technology, expansion initiatives, and innovative achievements at Egbin Power requires a corresponding human capital profile to ensure optimal performance and profitability of the plant.</p>
                    <p>“The plan at Sahara Power Group to ensure the achievements we have recorded across the sector through Egbin, Ikeja Electric and First Independent Power Limited are optimized by top talent. These young engineers will have the opportunities of hands-on, rotational trainings and pupillage with first hand exposure to strategic operations, generation modules, technical projects and leadership trainings before their final onboarding at Egbin Power Plc.</p>
                </nav>
            </div>
            <aside>
            <h4>Popular Post</h4>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog3} alt="" />
                    <p>How Stakeholders Seek Transparency In Administration Of 13% Derivation Scheme</p>
                </Link>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog4} alt="" />
                    <p>Way Forward In Tracking Towards Investment In Oil, Gas Sector</p>
                </Link>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog5} alt="" />
                    <p>How Nigeria Can Tap $53Trillion Global ESG Fund For Oil Projects</p>
                </Link>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog6} alt="" />
                    <p>Stakeholders Seek Transparency In Administration Of 13% Derivation Scheme</p>
                </Link>
            </aside>
        </section>
        <section className={style.comment}>
            <h3>Comments</h3>
            <label htmlFor="" className={style.com}>
                <span>Comment</span>
                <textarea ></textarea>
            </label>
            <div>
                <label htmlFor="">
                    <span>Name</span>
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <span>Email</span>
                    <input type="email" />
                </label>
            </div>
            <button>Next</button>
        </section>
    </div>
  )
}
