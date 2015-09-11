var Post = React.createClass({
  render: function() {
    var post = this.props.post,
        actions;
        
    if(this.props.showActions) {
      // if passed showActions, display actions that we can take on a post.
      // just "edit" for now
      actions = (
        <div className='actions col-md-2'>
          <a href={post.edit_url}>
            <span className='glyphicon glyphicon-edit'/>
          </a>
        </div>
      );
    }
    
    return(
      <div className='post'>
        <div className='row'>
          <div className='col-md-10'>
            <h1 className='post-title'>{post.title}</h1>
          </div>
          {actions}
        </div>
        <hr/>
        <div
          className='post-body'
          dangerouslySetInnerHTML={{
            __html: marked(post.contents || '', {sanitize: true})
          }}/>
      </div>
    );
  }
});
