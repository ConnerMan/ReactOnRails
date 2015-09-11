var PostForm = React.createClass({
  // Return an object representing the initial state of the
  // component
  getInitialState: function() {
    return({
      post: this.props.post || {}
    });
  }
  //...
});


// Later we can access our state inside of our component like so...
this.state.post // > {title: "My New Post", contents: "Thoughts about things.."}
this.state.post.title // > "My New Post"

// State is mutable...
this.setState({post: {
  title:"My new post (revised)",
  contents: " My New Post contents"
})
