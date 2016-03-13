var React = require('react');

let CommentList = React.createClass({
    render: function() {
        let commentList = (this.props.data || []).map((val) => {
            return (
                <Comment author={val.author}>{val.text}</Comment>
            )
        });
        return (
            <div className = "commentList" >
                {commentList}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            < div className = "commentForm" >
                Hello, world!I am a CommentForm.
            < /div>
        );
    }
});
