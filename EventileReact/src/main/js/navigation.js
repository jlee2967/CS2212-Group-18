import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import auth from './auth';

class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    componentWillMount() {
        auth.sub(this);
    }

    componentWillUnmount() {
        auth.unsub(this);
    }

    onAuth(loggedIn) {
        this.setState({loggedIn: loggedIn});
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        { this.state.loggedIn ? <Link to="/home" className="navbar-brand">Eventile</Link>
                            :
                            <Link to="/welcome" className="navbar-brand">Eventile</Link>
                        }
                    </div>
                    { this.state.loggedIn ?
                        <ul className="nav navbar-nav">
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/create-event">Create Event</Link></li>
                        </ul> : null
                    }

                    { this.state.loggedIn ?
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/logout">Log out</Link></li>
                        </ul> : null
                    }

                    { this.state.loggedIn ? null :
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup">Register</Link></li>
                        </ul>
                    }

                    { this.state.loggedIn ? <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/user-page">Profile</Link></li>
                        </ul>:
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signin">Login</Link></li>
                        </ul>
                    }
                </div>
            </nav>
        )
    }
}

export default Navigation;


