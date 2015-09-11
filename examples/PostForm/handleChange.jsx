handleChange: function() {
  this.setState({post: {
    title: React.findDOMNode(this.refs.title).value,
    contents: React.findDOMNode(this.refs.contents).value
  }});
},
render: function() {
  return(
    //...
      <input type='text'
          name='post[title]'
          ref='title'
          onChange={this.handleChange}
          value={this.state.post.title} />
      <textarea name='post[contents]'
          ref='contents'
          onChange={this.handleChange}
          value={this.state.post.contents} />
    //...
    <Post post={this.state.post}/>
  );
}
