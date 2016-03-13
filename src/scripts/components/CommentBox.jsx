import * as data '../mockData.js';
var React = require('react');

let CommentBox = React.createClass({
    render: function() {
        return (
            <div className = "commentBox" >
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});
React.render( < CommentBox data={data}/ > ,
    document.getElementById('content')
);
