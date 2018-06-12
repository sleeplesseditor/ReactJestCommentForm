import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import '../style/style.css';

class App extends Component {     
    renderButton() {
        if (this.props.auth) {
            return(
                <Button className="btn btn-outline-danger">
                    Sign Out
                </Button>
            );
        } else {
            return (
                <Button className="btn btn-outline-success">
                    Sign In
                </Button>
            );
        }
    }
    
    renderHeader() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link to="/" className="navbar-brand">Comments</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link  to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post" className="nav-link">Post</Link>
                        </li>
                        <li className="nav-item">
                            {this.renderButton()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(App);
