import React from 'react';

function PostItem({ post }) {
  return (
    <div className="post" key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p className="footer">
        <span>
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </span>
        <span>❤️ {" "} {post.reactions}</span>
      </p>
    </div>
  );
}

export default PostItem;
