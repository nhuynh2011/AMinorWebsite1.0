import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Nav extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {};
    }*/

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg bg-medium-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <img
                            src="https://shift8-stardothostingin.netdna-ssl.com/wp-content/uploads/2016/01/menu-512.png"/>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active-tab">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Members</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Repertoire</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

setTimeout( () => { ReactDOM.render(<Nav />, document.getElementById('root')); }, 1000);