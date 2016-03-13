var React = require('react');
var marked = require('marked');

let Comment = React.createClass({
    htmlMarkup: function() {
        let _html = marked(this.props.children.toString(), {sanitize: true});
        return { __html: _html};
    },
    render: function() {
        return (
            <div className = "comment" >
                <h2 className = "commentAuthor" >
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.htmlMarkup()}></span>
            </div>
        );
    }
});

module.exports = {
    'Comment': Comment
}
