import React from 'react'
import style from './../styles/career.module.css';
import head from './../assets/career.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import dots from './../assets/dots.png'
import { Link } from 'react-router-dom';

export default function Career() {
  return (
    <div>
        <section className={style.headbg}>
          <img src={head} alt="" />
        </section>
        <section className={style.career}>
          <img src={dots} alt=""  className={style.dot}/>
          <h3>Enter Your Bio Data</h3>
          <form action="post">
            <div>
              <label htmlFor="">
                <span>Full Name</span>
                <input type="text" />
              </label>
              <label htmlFor="">
                <span>Email</span>
                <input type="email" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>Address</span>
                <input type="text" />
              </label>
              <label htmlFor="">
                <span>Phone Number</span>
                <input type="tel" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>Sex</span>
                <select name="" >
                  <option value="" selected disabled> </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Binary">Binary</option>
                </select>
              </label>
              <label htmlFor="">
                <span>Upload CV</span>
                <button><FontAwesomeIcon icon={ faUpload } /> Upload CV
                      <input type="file" />
                </button>
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>Age</span>
                <input type="number" />
              </label>
              <label htmlFor="">
                <span>Date Or Birth</span>
                <input type="date" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>State Of Origin</span>
                <input type="text" />
              </label>
              <label htmlFor="">
                <span>Local Government of Origin</span>
                <input type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>Highest Qualification Obtained</span>
                <select>
                  <option value='' selected disabled></option>
                  <option value="Bsc">Bsc</option>
                  <option value="Masters">Masters</option>
                  <option value="Phd">Phd</option>
                  <option value="O'level">O'Level</option>
                </select>
              </label>
              <label htmlFor="">
                <span>Year Of Qualification Obtained</span>
                <input type="date" name="" id="" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <span>Marital Status</span>
                <select>
                  <option value="" selected disabled></option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </label>
              <label htmlFor="">
                <span>Position Applied For</span>
                <select>
                  <option value="" selected='selected' disabled></option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                </select>
              </label>
            </div>
            <button className={style.submit}>
            <Link to='/career-history'> Next </Link>
            </button>
          </form>
        </section>
    </div>
  )
}
