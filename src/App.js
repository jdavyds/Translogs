import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Faq from './components/faq';
import Blog from './components/blog';
import Foundation from './components/foundation';
import Career from './components/career';
import Worries from './components/worries';
import Committed from './components/committed';
import Career2 from './components/career2';
import Invest from './components/invest';
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] = useState({
    data: null
  })
  const callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  useEffect(() => {
    callBackendAPI()
      .then(res => setState({ data: res }))
      .then(console.log(state))
      .catch(err => console.log(err));
  })
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/foundation" element={<Foundation/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/Worries-over-potential-$150-billion-losses-by-African-oil-producers" element={<Worries/>} />
        <Route path="/commited-to-promoting-good-corporate-citizenship-across-the-globe" element={<Committed/>} />
        <Route path="/career-history" element={<Career2/>} />
        <Route path="/invest-with-us" element={<Invest/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
