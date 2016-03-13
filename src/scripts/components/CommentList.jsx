var React = require('react');

import {Comment} from './Comment.jsx';


let CommentList = React.createClass({
    render: function() {
        let list = this.props.list || [];
        let comments = list.map((val,i) => {
            return (
                <Comment key={i} author={val.author}>{val.text}</Comment>
            )
        });
        return (
            <div className = "commentList" >
                {comments}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className = "commentForm" >
                Hello, world!I am a CommentForm.
            </div>
        );
    }
});

module.exports = {
    'CommentList': CommentList,
    'CommentForm': CommentForm
}
