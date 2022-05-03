import React from 'react'
import style from './../styles/foundation.module.css';
import head from './../assets/foundation.png';
import { Link } from 'react-router-dom';
import f1 from './../assets/foundation1.png';
import f2 from './../assets/foundation2.png';
import f3 from './../assets/foundation3.png';
import f4 from './../assets/foundation4.png';
import dots from './../assets/dots.png'

export default function Foundation() {
  return (
    <div>
      <section className={style.headbg}>
            <img src={head} alt="" />
      </section>
      <section className={style.fpost}>
      <img src={dots} alt=""  className={style.dot}/>
        <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
          <h3>At the heart of Translog’s business objectives, lies an unwavering commitment to promoting good corporate citizenship across the globe.</h3>
        <img src={f1} alt="" className={style.fr}/>
          <p>This is achieved through Translog Foundation – the vehicle for the Group’s Personal and Corporate Social Responsibility (PCSR initiatives. With a vision to promote activities targeting sustained (impact driven) societal wellbeing and touching lives through transformative partnerships, Translog Foundation recently realigned its focus areas to 2 key pillars for all interventions going forward. This was borne out of the necessity for the Foundation to take ownership of a particular space and align with Group’s vision.</p>
        </Link>
        <img src={f1} alt="" className={style.ff}/>
      </section>
      <section className={style.gpost}>
        <h2>How We Are Making A Difference</h2>
        <div>
          <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
            <img src={f2} alt="" />
            <h3>Translog Foundation Volunteer of the Month - January 2022</h3>
            <p>The Sustainable Development Goals (SDGs) are attainable. We can be able to achieve them by creating awareness to both the young and old people in the community. The information needs to be shared far and wide on the importance of achieving all the 17 goals to make the world a better place.</p>
          </Link>
          <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
            <img src={f3} alt="" />
            <h3>Translog FOUNDATION UNVEILS STRP TO COMBAT CLIMATE CHANGE, BOOST EMPLOYMENT</h3>
            <p>Translog Foundation, the corporate citizenship vehicle of energy conglomerate, Translog Group, has launched its inaugural Translog Regenerator Technical Program (STRP) to promote capacity building among youths in Edo, Lagos and Rivers.</p>
          </Link>
          <Link to='/commited-to-promoting-good-corporate-citizenship-across-the-globe'>
            <img src={f4} alt="" />
            <h3>COMMITTED TO MAKING A DIFFERENCE: WORLD BOOK DAY 2021</h3>
            <p>As we celebrate the 2021 World Book Day, it is critical to take the time to read on your own or with your children. It is a time to celebrate the importance of reading.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
