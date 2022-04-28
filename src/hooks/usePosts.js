import {useState,useEffect} from 'react';

const BASE_URL = "https://dummyjson.com";
const LIMIT = 5;


export function usePosts(){
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const postsUrl = `${BASE_URL}/posts?limit=${LIMIT}&skip=${skip}`;
      setLoading(true);
      fetch(postsUrl)
        .then((response) => response.json())
        .then((response) => {
          setPosts((posts) => [...posts, ...response.posts]);
          setTotal(response.total);
        })
        .catch(() => {
          setError("Something went wrong!");
        })
        .finally(() => {
          setLoading(false);
        });
    }, [skip]);
  
    function loadMore() {
      setSkip((skip) => skip + LIMIT);
    }

    return [posts,total,loading,error,loadMore];
  
}