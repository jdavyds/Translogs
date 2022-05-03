import React from 'react'
import style from './../styles/blog.module.css';
import head from './../assets/blog.png';
import blog1 from './../assets/blog1.png';
import blog2 from './../assets/blog2.png';
import blog3 from './../assets/blog3.png';
import blog4 from './../assets/blog4.png';
import blog5 from './../assets/blog5.png';
import blog6 from './../assets/blog6.png';
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.blog}>
            <div>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog1} alt="" />
                    <h4>Worries Over Potential $150 Billion Losses By African Oil Producers</h4>
                    <p>
                    Coming on the backdrop of the Cop26, the African Energy Chamber on the sideline of the Glasgow event, said capital expenditure on the continent’s sector hovers at about $33 billion rebalancings slightly above what it was about a year ago.</p><p>Chairman, African Energy Chamber NJ Ayuk, who referenced the 2022 outlook of the sector noted that the future looks optimistic but insisted that the continent must take advantage of every positive trend and not allow existing oil and gas resources to waste. <i>Read More... {'>>'} </i> </p>
                </Link>
                <Link to='/Worries-over-potential-$150-billion-losses-by-African-oil-producers'>
                    <img src={blog2} alt="" />
                    <h4>How Nigeria Can Tap $53trillion Global ESG Fund For Oil Projects</h4>
                    <p>
                    Projected to hit $53 trillion by 2025, the global Environmental Social and Governance (ESG) assets can provide leeway for most oil and gas projects in Nigeria, especially the private and public sector, to address inherent hindrances.</p><p>Across the world, investors are now shifting attention to ESG, applying the non-financial factors as part of the key analysis process to identify material risks and growth opportunities.At a time when funding for fossil fuel investments is being withdrawn, most analysts see priority for ESG as an escape path to financing projects in the sector. <i>Read More... {'>>'} </i> </p>
                </Link>
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
    </div>
  )
}
