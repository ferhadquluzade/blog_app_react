import PostList from "./components/PostList";
import { usePosts } from "./hooks/usePosts";

function App() {

  const  [posts,total,loading,error,loadMore] = usePosts();
 
  return (
    <div className="container">
      <h1 className="section-title">My personal blog</h1>
      <div>
        <small>Total {total} posts</small>
      </div>
      <PostList loading={loading} error={error} posts={posts} />

      <div className="load-more">
      
        {posts.length < total && (
         
         <button disabled={loading}
            onClick={loadMore}
            type="button"
            className="btn btn-primary w-100 mb-2"
          >
            {loading ? "loading" : "Load more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
