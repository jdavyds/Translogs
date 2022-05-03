import React from 'react'
import style from './../styles/career.module.css';
import head from './../assets/career.png';
import dots from './../assets/dots.png'

export default function Career2() {
  return (
    <div>
        <section className={style.headbg}>
          <img src={head} alt="" />
        </section>
        <section className={style.career}>
          <img src={dots} alt=""  className={style.dot}/>
          <h3>Employment History</h3>
          <form action="post">
              <div>
                  <label htmlFor="">
                      <span>Name Of Last Employer</span>
                      <input type="text" />
                  </label>
                  <label htmlFor="">
                      <span>Address Of Last Employer</span>
                      <input type="text" />
                  </label>
              </div>
              <div>
                  <label htmlFor="">
                      <span>Phone Number Of Last Employer</span>
                      <input type="tel" name="" id="" />
                  </label>
                  <label htmlFor="">
                      <span>Position Held In Last Employment</span>
                      <input type="text" />
                  </label>
              </div>
              <div>
                  <label htmlFor="">
                      <span>Reason For Leaving</span>
                      <input type="text" />
                  </label>
                  <label htmlFor="">
                      <span>Date Of Disengagement</span>
                      <input type="text" />
                  </label>
              </div>
              <div>
                  <label htmlFor="">
                      <span>Next Of Kin</span>
                      <input type="text" />
                  </label>
                  <label htmlFor="">
                      <span>Next Of Kin Phone Number</span>
                      <input type="tel" name="" id="" />
                  </label>
              </div>
              <button className={style.submit}>Submit</button>
          </form>
        </section>
    </div>
  )
}
