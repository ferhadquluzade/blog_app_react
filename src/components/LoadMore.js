import React from 'react';

function LoadMore({ itemsSize, total, onLoadMore, loading }) {
  return (
    <div className="load-more">
      {itemsSize < total && (
        <button disabled={loading} onClick={onLoadMore}>
          {loading ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}

export default LoadMore;
