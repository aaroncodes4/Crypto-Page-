import "./App.css";
import { FaSearch,FaBitcoin,FaEthereum, FaCoins, FaArrowRight,FaBorderAll } from "react-icons/fa";
import { useState, useRef } from "react";
function App() {

  const [open, setOpen] = useState(false);

  
  return (
    <div className="App">
      <div className="navbar">
        <div className="container1 flex">
          <div className="logo">
            <FaCoins className="fa-icons"/>
            <h1>me<span>Coin</span></h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="http://google.com">App</a>
              </li>
              <li>
                <a href="http://google.com">Exchange</a>
              </li>
              <li>
                <a href="http://google.com">Explorer</a>
              </li>
              <li>
                <a href="http://google.com">Institutional</a>
              </li>
              <li>
                <a href="http://google.com">...</a>
              </li>
            </ul>
          </nav>
          <div className="profile">
            <div className="search">
              <FaSearch className="fa-search" onClick={() => setOpen(!open)}/>
            </div>
            {open && (
              <div className='search-bar'>
                <div className="search-bar-top">
                  <FaSearch/>
                  <input type="text" placeholder="Search"/>
                </div>
                <div className="block">
                  <small>Blocks</small> <hr />
                  <p><FaBorderAll className="bod1"/> BTC Block</p><hr />
                  <p><FaBorderAll className="bod2"/> XLM Block</p><hr />
                  <p><FaBorderAll className="bod3"/> ETH Block</p>
                </div>
                <div className="search-btn">
                  <button className="search-btn1">Prices</button>
                  <button className="search-btn1">Blocks</button>
                  <button className="search-btn1">Transactions</button>
                  <button className="search-btn1">Charts</button>
                </div>
              </div>
            )}
            <button className="log-btn">Log In</button>
            <button className="sign-btn">Sign Up</button>
          </div>
        </div>
      </div>
      {/* demo section */}
      <section className="demo">
        <div className="container">
          <h1>Be early to the future of finance</h1>
          <h2>
            Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a<br />
            platform trusted by millions.
          </h2>
          <div className="demo-sign">
            <input type="text" placeholder="Email Address" />
            <button className="demo-btn">Get Started</button>
          </div>
          {/* coin showcase */}
          <div className="coin-show">
            {/* bitcoin */}
            <div className="coin-info">
              <div className="coin-top">
                <div className="coin-logo">
                  <FaBitcoin className="fa-icons btc"/>
                </div>
                <div className="coin-nav">
                  <button className="coin-btn-buy">Buy</button>
                  <button className="coin-btn-sell">Sell</button>
                </div>
              </div>
              <div className="coin-bottom">
                <div className="coin-name">
                  <h3>Bitcoin</h3>
                  <p>BTC</p>
                </div>
                <div className="coin-price">
                  <h3>$ 33,000</h3>
                  <p>+0.17%</p>
                </div>
              </div>
            </div>
            {/* ethereum */}
            <div className="coin-info">
              <div className="coin-top">
                <div className="coin-logo">
                  <FaEthereum className="fa-icons ether"/>
                </div>
                <div className="coin-nav">
                  <button className="coin-btn-buy">Buy</button>
                  <button className="coin-btn-sell">Sell</button>
                </div>
              </div>
              <div className="coin-bottom">
                <div className="coin-name">
                  <h3>Bitcoin</h3>
                  <p>BTC</p>
                </div>
                <div className="coin-price">
                  <h3>$ 33,000</h3>
                  <p>+0.17%</p>
                </div>
              </div>
            </div>
            {/* stella */}
            <div className="coin-info">
              <div className="coin-top">
                <div className="coin-logo">
                  <FaBitcoin className="fa-icons btc"/>
                </div>
                <div className="coin-nav">
                  <button className="coin-btn-buy">Buy</button>
                  <button className="coin-btn-sell">Sell</button>
                </div>
              </div>
              <div className="coin-bottom">
                <div className="coin-name">
                  <h3>Bitcoin</h3>
                  <p>BTC</p>
                </div>
                <div className="coin-price">
                  <h3>$ 33,000</h3>
                  <p>+0.17%</p>
                </div>
              </div>
            </div>
            {/* solana */}
            <div className="coin-info">
              <div className="coin-top">
                <div className="coin-logo">
                  <FaEthereum className="fa-icons ether"/>
                </div>
                <div className="coin-nav">
                  <button className="coin-btn-buy">Buy</button>
                  <button className="coin-btn-sell">Sell</button>
                </div>
              </div>
              <div className="coin-bottom">
                <div className="coin-name">
                  <h3>Bitcoin</h3>
                  <p>BTC</p>
                </div>
                <div className="coin-price">
                  <h3>$ 33,000</h3>
                  <p>+0.17%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="more-link">
            <a href="http://google.com">View more prices</a>
            <FaArrowRight />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
