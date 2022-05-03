import React, {useState} from 'react'
import style from './../styles/invest.module.css';
import invest from './../assets/invest.png';
import axios from 'axios'

export default function Invest() {
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
        <section className={style.bg}>
            INVEST WITH US
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
    </div>
  )
}
