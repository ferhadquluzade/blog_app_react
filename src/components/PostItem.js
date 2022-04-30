import React from 'react';

function PostItem({ post, onLike }) {
  return (
    <div className="post">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p className="footer">
        <span>
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </span>
        <span>❤️{" "}{post.reactions}</span>
      </p>
    </div>
  );
}

export default PostItem;
