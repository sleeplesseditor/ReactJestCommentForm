import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CommentBox extends Component {
    state = { comment: '' };

    hangdleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ comment: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <Button className="btn btn-outline-secondary">Submit Comment</Button>
                </div>
            </form>
        );
    }
}

export default CommentBox;