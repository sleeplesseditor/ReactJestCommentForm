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
            <div className="comment-section">
                <form>
                    <h4>Add a Comment</h4>
                    <textarea className="form-control comment-form" onChange={this.handleChange} value={this.state.comment} />
                </form>
                <Button className="btn btn-outline-success submit-comments" onClick={this.handleSubmit}>Submit Comment</Button>
                <Button className="btn btn-outline-danger fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</Button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);