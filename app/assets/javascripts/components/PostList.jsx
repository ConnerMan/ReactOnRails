var PostList = React.createClass({
  render: function() {
    var posts = this.props.posts,
        createPost = function(post){
          return <Post post={post} key={'post-' + post.id} showActions={true} />;
        },
        postList;
    
    if(posts.length == 0) {
      postList = (
        <div className='alert alert-info'>No posts. Get started!</div>
      );
    } else {
      postList = posts.map(createPost);
    }
  
    return(
      <div className='post-list'>
        {postList}
      </div>
    );
  }
});
