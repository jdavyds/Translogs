import React, { useState} from 'react'
import style from './../styles/faq.module.css';
import head from './../assets/faq.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import dots from './../assets/dots.png'

export default function Faq() {
  const [ one, setOne] = useState(false)
  const [ two, setTwo] = useState(false)
  const [ three, setThree] = useState(false)
  const [ four, setFour] = useState(false)
  const [ five, setFive] = useState(false)
  const [ six, setSix] = useState(false)
  const [ seven, setSeven] = useState(false)
  const [ eight, setEight] = useState(false)
  const [ nine, setNine] = useState(false)
  const [ ten, setTen] = useState(false)
  const [ eleven, setEleven] = useState(false)
  const [ twelve, setTwelve] = useState(false)

  function handleOne() {
    setOne(!one)
  }
  function handleTwo() {
    setTwo(!two)
  }
  function handleThree() {
    setThree(!three)
  }
  function handleFour() {
    setFour(!four)
  }
  function handleFive() {
    setFive(!five)
  }
  function handleSix() {
    setSix(!six)
  }
  function handleSeven() {
    setSeven(!seven)
  }
  function handleEight() {
    setEight(!eight)
  }
  function handleNine() {
    setNine(!nine)
  }
  function handleTen() {
    setTen(!ten)
  }
  function handleEleven() {
    setEleven(!eleven)
  }
  function handleTwelve() {
    setTwelve(!twelve)
  }
  return (
    <div>
      <section className={style.headbg}>
            <img src={head} alt="" />
      </section>
      <section className={style.faq}>
      <img src={dots} alt=""  className={style.dot}/>
        <div>
          <nav onClick={handleOne}> What is Translog? <FontAwesomeIcon icon={ faChevronDown } className={one ? style.trans : ''} /></nav>
          <p className={one ? '' : style.show}> Translog is a private limited liability company registered with the Nigeria Corporate Affairs Commission.</p>
        </div>
        <div>
          <nav onClick={handleTwo}>What does translog offer? <FontAwesomeIcon icon={ faChevronDown } className={two ? style.trans : ''} /></nav>
          <p className={ two ? '' : style.show}>Translog is a private limited liability company registered with the Nigeria Corporate Affairs Commission.</p>
        </div>
        <div>
          <nav onClick={handleThree}>What are the benefits of investing with the company? <FontAwesomeIcon icon={ faChevronDown } className={three ? style.trans : ''} /></nav>
          <p className={ three ? '' : style.show}>Translog offers it's Trade partners good percentage return-on-investment (RoI) in line with market realities.</p>
        </div>
        <div>
          <nav onClick={handleFour}>When did  translog start operating? <FontAwesomeIcon icon={ faChevronDown } className={four ? style.trans : ''} /></nav>
          <p className={ four ? '' : style.show}>Translog started operation in 2021. </p>
        </div>
        <div>
          <nav onClick={handleFive}>How does Translog help the society? <FontAwesomeIcon icon={ faChevronDown } className={five ? style.trans : ''} /></nav>
          <p className={ five ? '' : style.show}>Translog supports communities through it's Corporate Social Responsibility effort on a case-by-case basis delivered through it's Foundation.</p>
        </div>
        <div>
          <nav onClick={handleSix}>Does translog have any pending litigation?  <FontAwesomeIcon icon={ faChevronDown } className={six ? style.trans : ''} /></nav>
          <p className={ six ? '' : style.show}>No</p>
        </div>
        <div>
          <nav onClick={handleSeven}>Is Translog an international business brand? <FontAwesomeIcon icon={ faChevronDown } className={seven ? style.trans : ''}/></nav>
          <p className={ seven ? '' : style.show}>Yes</p>
        </div>
        <div>
          <nav onClick={handleEight}>Does Translog welcome new investors? <FontAwesomeIcon icon={ faChevronDown } className={eight ? style.trans : ''} /></nav>
          <p className={ eight ? '' : style.show}>Yes, Trade partnership proposals are received throughout the year.</p>
        </div>
        <div>
          <nav onClick={handleNine}>Where is translog office located? <FontAwesomeIcon icon={ faChevronDown } className={nine ? style.trans : ''} /></nav>
          <p className={ nine ? '' : style.show}>Currently Translog operation span across the country with activities coordinated from Benin City, Lagos and Abuja respectively.</p>
        </div>
        <div>
          <nav onClick={handleTen}>What is the name of the Translog CEO? <FontAwesomeIcon icon={ faChevronDown } className={ten ? style.trans : ''} /></nav>
          <p className={ ten ? '' : style.show}>Jude Osaluwe</p>
        </div>
        <div>
          <nav onClick={handleEleven}>Where will Translog be in the next 5 years? <FontAwesomeIcon icon={ faChevronDown } className={eleven ? style.trans : ''}/></nav>
          <p className={ eleven ? '' : style.show}>Translog as a corporate entity is growing exponentially and looks to expand it's operation and services globally within the next 5 years.</p>
        </div>
        <div>
          <nav onClick={handleTwelve}>What is Translog vision? <FontAwesomeIcon icon={ faChevronDown } className={twelve ? style.trans : ''} /></nav>
          <p className={ twelve ? '' : style.show}>To be a source of affordable and improved livelihood to communities and peoples in our environment.</p>
        </div>
      </section>
    </div>
  )
}
