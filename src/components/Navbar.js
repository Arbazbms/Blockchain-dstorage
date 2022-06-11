import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-3">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 text-warning"
          href="#"
          rel="noopener noreferrer"
        >
          &lt; DStorage for Educational Resources /&gt;
        </a>
        <ul className="navbar-nav px-3">
          <li>
            <span id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account ? this.props.account.substring(0,6) : '0x0'}...{this.props.account ? this.props.account.substring(36,42) : '0x0'}
              </a>
            </span>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;