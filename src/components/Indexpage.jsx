import Post from "./Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://bloggie-bkrf.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
      <>
          <Post _id={post._id} title={post.title} cover={post.cover} summary={post.summary} content={post.content} createdAt={post.createdAt} author={post.author}  />
          </>
      ))}
    </>
  );
}
