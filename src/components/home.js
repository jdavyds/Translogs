import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import style from './../styles/home.module.css';
import acct from './../assets/clipboard 1.png';
import capability from './../assets/capability 1.png';
import excellent from './../assets/excellent 1.png';
import logo from './../assets/logo2.png'
import about1 from './../assets/33 (2) 1.png';
import about2 from './../assets/45 2.png';
import about3 from './../assets/Group 7.png';
import about4 from './../assets/Group 8.png';
import about5 from './../assets/Ellipse 31.png';
import focus2 from './../assets/44 1.png';
import focus3 from './../assets/40 1.png';
import focus4 from './../assets/37 1.png';
import focus5 from './../assets/Frame 7.png';
import focus6 from './../assets/Group 5.png';
import focus7 from './../assets/Group 6.png';
import focus8 from './../assets/Group 2.png';
import focus9 from './../assets/13 (1) (1) 1.png';
import foundation1 from './../assets/image 71.png';
import foundation2 from './../assets/Group 71.png';
import foundationRing from './../assets/Ellipse 94.png';
import dots from './../assets/Dot.png';
import npd from './../assets/npd.png';
import nnpc from './../assets/nnpc.png';
import oando from './../assets/oando.png';
import total from './../assets/total.png';
import chevron from './../assets/chevron.png';
import invest from './../assets/invest.png';
import letter from './../assets/Ellipse 1.png';
import checked from './../assets/checked.png';
import axios from 'axios'
export default function Home() {
    const [sent, setSent] = useState(false);
    const [state, setState] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    })
    function handleSubmit(e) {
        e.preventDefault();
        let data = {
              name: state.name,
              email: state.email,
              phone: state.phone,
              date: state.date,
              message: state.message
        }
        setTimeout(() => {
            setSent(true);
            handleReset()
        } , 3000);
        axios.post('/api/invest', data)
        .then(res => {
              console.log(res);
        })
        .catch(err => {
              console.log(err)
        })
    }
    function handleReset() {
      setState({
          name: '',
          email: '',
          phone: '',
          date: '',
          message: '',
      })
    }
  return (
    <div>
        <section className={style.intro}>
            <section className={style.sell}>
                <h1>TRANSLOG</h1>
                <h3>we go ahead of excellence</h3>
                <span></span>
                <p>Translog Energy Is A Fast Growing Petroleum Haulage Service Provider With Experience In Facilitating Large-Scale Transport Services </p>
                <button><Link to='/about'>Read More</Link></button>
            </section>
            <section className={style.spec}>
                <p>At TRANSLOG we provide Efficient Livelihood Improvement Technologies</p>
                <div>
                    <nav>
                        <img src={acct} alt="" />
                        <span>ACCOUNTABILITY</span>
                    </nav>
                    <nav>
                        <img src={capability} alt="" />
                        <span>DILIGENCE</span>
                    </nav>
                    <nav>
                        <img src={excellent} alt="" />
                        <span>EXCELLENCE</span>
                    </nav>
                </div>
            </section>
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
        <section className={style.focus}>
            <h1>TRANSLOG BUSINESS FOCUS</h1>
            <div>
                <nav>
                        <h3>TRUCKING</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Petroleum haulage</p>
                        <p><img src={checked} className={style.tick} alt="" /> Tank Fabrication</p>
                        <p><img src={checked} className={style.tick} alt="" /> Mechanical Repair Services</p>
                        <p><img src={checked} className={style.tick} alt="" /> Mack Auto-parts Sales</p>
                </nav>
                <img src={focus9} className={style.focusImg} alt="" />
            </div>
            <div>
                <img src={focus2} className={style.focusImg} alt="" />
                <nav>
                        <h3>RETAIL OUTLETS FILLING STATIONS</h3>
                        <p><img src={checked} className={style.tick} alt="" /> ATK, PMS, AGO, DPK/HHK</p>
                        <p><img src={checked} className={style.tick} alt="" /> LPG Gas Plant</p>
                </nav>
            </div>
            <div>
                <nav>
                        <h3>CRUDE OIL PROSPECTING/MINING</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Seismic exploration</p>
                        <p><img src={checked} className={style.tick} alt="" /> Crude Oil Mining</p>
                </nav>
                <img src={focus3} className={style.focusImg} alt="" />
            </div>
            <div>
                <img src={focus4} className={style.focusImg} alt="" />
                <nav>
                        <h3>OTHERS</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Transportation</p>
                        <p><img src={checked} className={style.tick} alt="" /> (carriage Vessels)</p>
                </nav>
            </div>
            <img src={focus5} className={style.tc} alt="" />
            <img src={focus6} className={style.tr} alt="" />
            <img src={focus7} className={style.cl} alt="" />
            <img src={focus8} className={style.br} alt="" />
        </section>
        <section className={style.maps}>
        <section className={style.foundation}>
            {/* <h1>TRANSLOG FOUNDATION</h1> */}
            {/* <span>A light in the tunnel</span> */}
            <img src={logo} className={style.logor} alt="" />
            <div>
                <div className={style.kids}>
                    <img src={foundation1} className={style.kid}  alt="" />
                    <img src={dots} className={style.fdot} alt="" />
                    <img src={foundationRing} className={style.ring} alt="" />
                </div>
                <nav>
                    {/* <img src={logo} className={style.logo} alt="" /> */}
                    <p>At the heart of translog foundation objectives, lies an unwavering commitment to promoting good corporate citizenship across the globe.</p> 
                    <p>This is achieved through Translog Foundation – the vehicle for the foundation’s Personal and Corporate Social Responsibility (PCSR initiatives. The activities of Translog Foundation are aimed at empowering the communities where we operate in a sustainable, transparent and efficient manner.</p>
                    <button><Link to='/foundation'>Learn More </Link></button>
                </nav>
                <div className={style.circle}>
                    <img src={foundation2}  alt={style.circle} />
                </div>
            </div>
        </section>
        <section className={style.clients}>
            <h1>Our Client</h1>
            <nav>
                <img src={npd} alt="" />
                <img src={nnpc} alt="" />
                <img src={oando} alt="" />
                <img src={total} alt="" />
                <img src={chevron} alt="" />
            </nav>
        </section>
        <section className={style.invest}>
            <div>
                <h2>INVEST WITH US</h2>
                <img src={invest} alt="" className={style.investImgR} />
                <p>We welcome valuable collaborative engagements with  substantial tangible benefits to the parties thereto. <br /> Deploy your truck under our supervision for effective management and enjoy stress-free Return-on-investment.you can schedule a pre-operational  inspection of your truck(s) for full assessment and commence documentation process with us at your own time. Our Partners constitute essential part of our business ecosystem and are fully represented in our value system. You too can have a taste of the pie ! Talk to our staff to schedule a meeting.</p>
                <form onSubmit={handleSubmit}>
                <label htmlFor="">
                        <span>Name</span>
                        <input type="text" value={state.name} onChange={(e) => setState((state) => { return {...state, name: e.target.value}})} />
                    </label>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" value={state.email} onChange={(e) => setState((state) => { return {...state, email: e.target.value}})}/>
                    </label>
                    <label htmlFor="">
                        <span>Phone</span>
                        <input type="tel" value={state.phone} onChange={(e) => setState((state) => { return {...state, phone: e.target.value}})} />
                    </label>
                    <label htmlFor="">
                        <span>Desired Date of Meeting</span>
                        <input type="date" value={state.date} onChange={(e) => setState((state) => { return {...state, date: e.target.value}})}  />
                    </label>
                    <label htmlFor="">
                        <span>Message</span>
                        <input type="text" value={state.message} onChange={(e) => setState((state) => { return {...state, message: e.target.value}})}/>
                    </label>
                    <button type="submit">Schedule A Meeting</button>
                    { sent && <div className={style.sent}> Message has been sent</div>}
                </form>
            </div>
            <div className={style.investImg}>
                <img src={invest} alt="" />
            </div>
        </section>
        </section>
        <section className={style.letter}>
            <p>Get Great News from Us</p>
            <label htmlFor="">
                <input type="email" />
                <button type="submit">Subscribe</button>
            </label>
            <img src={letter} alt="" />
        </section>
    </div>
  )
}
