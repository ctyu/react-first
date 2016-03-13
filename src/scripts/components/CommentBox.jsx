import {data} from '../mockData.js';
var React = require('react');
var ReactDom = require('react-dom');

import {CommentForm, CommentList} from './CommentList.jsx';

let CommentBox = React.createClass({
    render: function() {
        return (
            <div className = "commentBox" >
                <h1>Comments</h1>
                <CommentList list={this.props.list}/>
                <CommentForm />
            </div>
        );
    }
});
ReactDom.render( < CommentBox list={data}/ > ,
    document.getElementById('content')
);
