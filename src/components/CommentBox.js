import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <Button className="btn btn-outline-success" onClick={this.handleSubmit}>Submit Comment</Button>
                    </div>
                </form>
                <Button className="btn btn-outline-danger" onClick={this.props.fetchComments}>Fetch Comments</Button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);