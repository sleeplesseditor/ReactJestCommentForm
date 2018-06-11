import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import '../style/style.css';

export default () => {
    return (
        <div>
            <CommentBox />
            <br />
            <CommentList />
        </div>
    )
};
