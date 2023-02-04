import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import  {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails} from './components';
import './App.css'
const App = () => {
  return (
   
      <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className='main'>
         <Layout>
            <div className="routes">
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route exact path="/Cryptocurrencies" element={<Cryptocurrencies />}/>
                    <Route exact path="/CryptoDetails" element={<CryptoDetails />}/>
                    <Route exact path="/Exchanges" element={<Exchanges/>}/>
                    <Route exact path="/News" element={<News/>}/>
                </Routes>
            </div>
         </Layout>
      
        <div className='footer' >
        <Typography.Title level={5} style={{color:'White',textAlign:'Center'}}>
            Cryptoworld<br/>
            All rights reserved
        </Typography.Title>
        <space className="footer-space" >
            <Link to="/">Home</Link>
            <Link to="/Exchanges">Exchanges</Link>
            <Link to="/News">News</Link>
           
        </space>
        </div>
        </div>
      </div>

   
  );
}

export default App
