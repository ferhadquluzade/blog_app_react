import React from 'react';
import PostList from '../components/PostList';
import LoadMore from '../components/LoadMore';
import Summary from '../components/Summary';
import { usePosts } from '../hooks/usePosts';

function PostsPage() {
  const [posts, total, loading, error, loadMore] = usePosts();
  return (
    <div className="container">
      <h1 className="section-title">My personal blog</h1>
      <Summary total={total} />
      <PostList
        loading={loading}
        error={error}
        posts={posts}
      />
      <LoadMore
        itemsSize={posts.length}
        total={total}
        onLoadMore={loadMore}
        loading={loading}
      />
    </div>
  );
}

export default PostsPage;
