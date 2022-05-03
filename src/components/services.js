import React from 'react'
import head from './../assets/servicebg.png';
import style from './../styles/service.module.css';
import icon1 from './../assets/oil-tanker 1.png'
import icon2 from './../assets/recycle 1.png'
import icon3 from './../assets/truck 1.png'
import icon4 from './../assets/oil-refinery 1.png'

export default function Services() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.service}>
        <nav>
                <figure>
                    <img src={icon1} alt="" />
                </figure>
                 <h4>Petroleum Supplies & Distribution</h4>
                <p>We at Translog Energy have gained mastery of the logistics network required to supply petroleum products from the refineries to the end-users. We ensure prompt deliveries of shipments through channels that apply while constantly training and sensitizing our drivers to employ the best practices on the road to eliminate potential threats to other roads users and the environment.</p>
            </nav><nav>
                <figure>
                    <img src={icon2} alt="" />
                </figure>
                 <h4>Surface/Underground Tank Fabrication and Industrial welding </h4>
                <p>We at Translog Energy have gained mastery of the logistics network required to supply petroleum products from the refineries to the end-users. We ensure prompt deliveries of shipments through channels that apply while constantly training and sensitizing our drivers to employ the best practices on the road to eliminate potential threats to other roads users and the environment.</p>
            </nav>
            <nav>
                <figure>
                    <img src={icon3} alt="" />
                </figure>
                 <h4>Trucking/Fleet management </h4>
                <p>Translog Energy provides fleets of secured and manned trucks in compliance with various regulatory bodies to help clients and logistics companies move their petroleum products from either refineries or depots to the end-users in a fast, reliable, and cost-effective method.</p>
            </nav><nav>
                <figure>
                    <img src={icon4} alt="" />
                </figure>
                 <h4>Crude Oil prospecting/Minning </h4>
                <p>Translog Energy engages in all aspects of hydrocarbon exploration and assessment of prospective oil field sites. </p>
            </nav>
        </section>
    </div>
  )
}
