import React from 'react'
import dots from './../assets/dots.png'
import { Link } from 'react-router-dom';
import style from './../styles/articles.module.css';
import head from './../assets/foundation.png';
import found1 from './../assets/found1.png';
import found2 from './../assets/found2.png';
import found3 from './../assets/found3.png';
import found4 from './../assets/found4.png';
import found5 from './../assets/found5.png';

export default function Committed() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.post}>
        <img src={dots} alt=""  className={style.dot}/>
            <div>
                <nav>
                    <img src={found1} alt="" />
                    <h4>COMMITTED TO MAKING A DIFFERENCE: WORLD BOOK DAY 2021</h4>
                    <p>Let us remember: One book, one pen, one child, and one teacher can change the world” – Malala Yousafzai.</p>
                    <p>During the COVID-19 pandemic, books provided an avenue to combat isolation and learn widely. But in a nation like Nigeria (and other developing countries) with a low reading culture, and with schools under lock and key, many were left without books, without reading.</p>
                    <p>As the world returns to normal, Translog remains resolute in our goal to ensure that students have access to quality education and their libraries are very well equipped. In February 2016, Translog Foundation partnered with Education for Change on the ‘Book for Change Campaign’. The objective of this project was to make books and educational materials donations to underserved children in Benue State. Through this initiative, over 3,000 children now have access to story books, audio books and other educational materials.</p>
                    <p>In 2019, we renovated the UMC Primary School library in Ibadan while in Tanzania, in a quest to contribute towards the Tanzanian Education Sector Plan, we upgraded the library at Pugu Secondary School with the provision of shelves, tables and chairs and fans to make it more conducive for learners. About 970 students including teachers were provided access to modern library facility with the teachers trained to increase their effectiveness.</p>
                </nav>
            </div>
            <aside>
            <h4>Popular Post</h4>
                <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
                    <img src={found2} alt="" />
                    <p>Translog Foundation Volunteer of the Month - January 2022</p>
                </Link>
                <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
                    <img src={found3} alt="" />
                    <p>Translog FOUNDATION UNVEILS STRP TO COMBAT CLIMATE CHANGE, BOOST EMPLOYMENT</p>
                </Link>
                <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
                    <img src={found4} alt="" />
                    <p>How Nigeria can tap $53trillion global ESG fund for oil projects</p>
                </Link>
                <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
                    <img src={found5} alt="" />
                    <p>Stakeholders seek transparency in administration of 13% derivation scheme</p>
                </Link>
            </aside>
        </section>
    </div>
  )
}
