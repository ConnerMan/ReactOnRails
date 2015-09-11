var PostForm = React.createClass({
  getInitialState: function() {
    return({post: this.props.post || {}});
  },
  handleChange: function() {
    this.setState({post: {
      title: React.findDOMNode(this.refs.title).value,
      contents: React.findDOMNode(this.refs.contents).value
    }});
  },
  render: function() {
    return(
      <div className='new-post'>
        <form action={this.props.action} method='POST'>
          <input type='hidden' name='_method' value={this.props.method} />
          <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
          <div className='form-group'>
            <input name='post[title]'
                ref='title'
                className='form-control'
                type='text'
                placeholder='Title'
                onChange={this.handleChange}
                value={this.state.post.title} />
          </div>
          <div className='form-group'>
            <textarea name='post[contents]'
                ref='contents'
                className='form-control'
                placeholder="Contents"
                rows='5'
                onChange={this.handleChange}
                value={this.state.post.contents} />
          </div>
          <input className='btn btn-primary' type='submit' value='Save'/>
        </form>
        <Post post={this.state.post}/>
      </div>
    );
  }
});
