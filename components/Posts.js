import {  Flex,  } from "@chakra-ui/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, []);
  console.log(posts);

  return (
    <>
      <Flex
        direction="column"
        pb="15200px"
        pt="0px"
        boreder="0 solid black"
        alignContent="normal"
        justifyContent="normal"
        alignItems="stretch"
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            image={post.data().image}
            caption={post.data().caption}
            username={post.data().username}
            userImg={post.data().profileImage}
          />
        ))}
      </Flex>
    </>
  );
};

export default Posts;
