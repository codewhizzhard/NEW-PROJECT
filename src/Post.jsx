import PostBlog from "./PostBlog"

const Post = ({ posts } ) => {
  return (
    <div>
      {posts.map((post) => (
       <ul key={post.id}> <PostBlog post={post} /> </ul>
      ))}
    </div>
  )
}

export default Post
