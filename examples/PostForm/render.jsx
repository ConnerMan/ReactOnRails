//..
render: function() {
  return(
    <div className='new-post'>
      <form action={this.props.action} remote='true' method='POST'>
        <input type='hidden'
            name='authenticity_token'
            value={this.props.authenticity_token} />
        <input type='text'
            name='post[title]'
            ref='title'
            onChange={this.handleChange}
            value={this.state.post.title} />
        <textarea name='post[contents]'
            ref='contents'
            onChange={this.handleChange}
            value={this.state.post.contents} />
        <input type='submit' value='Save'/>
      </form>
      <Post post={this.state.post}/>
    </div>
  );
}
//..
