import React, { useState } from 'react'
import head from './../assets/contact.png';
import style from './../styles/contact.module.css';
import icon1 from './../assets/location.png'
import icon2 from './../assets/call.png'
import icon3 from './../assets/email.png'
import img from './../assets/45 1.png'
import dots from './../assets/dots.png'
import axios from 'axios'
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  function handleSubmit(e) {
      e.preventDefault();
      let data = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            message: state.message
      }
      setTimeout(() => {
          setSent(true);
          handleReset()
      } , 3000);
      axios.post('/api/contact', data)
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
        message: '',
    })
  }
  return (
    <div className={style.contact}>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.info}>
            <nav>
                <img src={icon1} alt="" />
                <h3>Head Office</h3>
                <p>Benin-Agbor Expressway, By Precious Wealth Petrol Station, Ekhor-Niro, Benin City, Edo State.</p>
            </nav>
            <nav>
                <img src={icon1} alt="" />
                <h3>Desk Office:</h3>
                <p>Suite 108, KU-Plaza, Benin-Sapele Road, Beside NIPCO Filling Station, By PZ junction, Benin City, Edo State</p>
            </nav>
            <nav>
                <img src={icon1} alt="" />
                <h3>Abuja Office:</h3>
                <p>Suite A19, Annon Plaza, Joseph Gomwalk Street, Gudu, Abuja</p>
            </nav>
            <nav>
                <img src={icon2} alt="" />
                <p> 0915 207 5211 <br /> 0802 892 2836</p>
            </nav>
            <nav>
                <img src={icon3} alt="" />
                <p>info@translogenergy.com <br />info.translogenergy@gmail.com</p>
            </nav>
        </section>
        <section className={style.form}>
            <div>
                <h2>GET IN TOUCH</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <span>Name</span>
                        <input type="text" value={state.name}  onChange={(e) => setState((state) => { return {...state, name: e.target.value}})}/>
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
                        <span>Message</span>
                        <input type="text" value={state.message}  onChange={(e) => setState((state) => { return {...state, message: e.target.value}})}/>
                    </label>
                    <button type="submit">Send</button>
                    { sent && <div className={style.sent}> Message has been sent</div>}
                </form>
            </div>
            <div className={style.investImg}>
                <img src={img} alt="" />
            </div>
            <img src={dots} alt=""  className={style.dot}/>
        </section>
    </div>
  )
}
