class PostsController < ApplicationController
  
  def index
    @posts = Post.all
    @posts_json = render_to_string(template: 'posts/index.json.jbuilder')

    respond_to do |format|
      format.html
      format.json
    end
  end
  
  def new
    @post = Post.new
  end
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    
    redirect_to posts_url
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render action: :new
    end
  end
  
  private
  
  def post_params
    params.require(:post).permit(
      :title, :contents
    )
  end
end
