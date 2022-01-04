import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CommentSection, { Comment } from "./CommentSection";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";

const Post = ({ image, caption, userImg, username, time, id, img }) => {
  const { data: session } = useSession();

  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  console.log(hasLiked);

  return (
    <>
      <Flex
        maxHeight="inherit"
        maxWidth="inherit"
        flex="0 0 auto"
        justifyContent="center"
        align="stretch"
        alignContent="stretch"
        direction="column"
        p="0"
        pos="relative"
        flexWrap="nowrap"
        mb={{ md: "24px", lg: "24px", xl: "24px" }}
        border={{
          md: "1px solid rgba(var(--b6a,219,219,219),1)",
          lg: "1px solid rgba(var(--b6a,219,219,219),1)",
          xl: "1px solid rgba(var(--b6a,))",
        }}
        borderRadius={{ md: "3px", lg: "3px", xl: "3px" }}
        bg={{
          md: "rgba(var(--d87,255,255,255),1)",
          lg: "rgba(var(--d87,255,255))",
          xl: "rgba(var(--d87,255,255))",
        }}
        ml={{ md: "-1px", lg: "-1px", xl: "-1px" }}
        mr={{ md: "-1px", lg: "-1px", xl: "-1px" }}
      >
        <PostHeader userImage={userImg} username={username} />
        <section className="post__media">
          <Box
            display="block"
            cursor="pointer"
            bottom="0"
            left="0"
            right="0"
            top="0"
            d="column"
            pointerEvents="auto"
          >
            <Image src={image} alt="hey" />
          </Box>
        </section>
        {hasLiked ? (
          <PostButtons likepost={likePost} color="red" />
        ) : (
          <PostButtons likepost={likePost} color="gray" />
        )}
        <Box
          ml="18px"
          display="flex"
          flex="1 1 auto"
          minHeight="0"
          minWidth="0"
          justifyContent="flex-start"
          alignItems="stretch"
          alignContent="stretch"
        >
          <Link
            color="rgba(var(--i1d,38,38,38),1)"
            textDecoration="none"
            fontWeight="600"
            whiteSpace="pre"
            pointerEvents="auto"
          >
            
            <Text>{likes.length > 0 && <span>{likes.length} {likes.length>1 ? 'likes' :'like'}</span>}</Text>
          </Link>
        </Box>

        <Flex flex="0 0 auto" pl="16px">
          <section>
            <Box
              display="flex"
              flex="1 1 auto"
              minHeight="0"
              minWidth="0"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="stretch"
            >
              <Link
                color="rgba(var(--i1d,38,38,38),1)"
                textDecoration="none"
                fontWeight="600"
                whiteSpace="pre"
                pointerEvents="auto"
              >
                <span>{username} </span>
                more
              </Link>
              <Link ml="5px">
                <Text>{caption}</Text>
              </Link>
            </Box>
            <Box display="flex" mb="4px" flex="0 0 auto">
              <Link
                _visited={{
                  background: " 0 0 ",
                  border: 0,
                  color: "#8e8e8e",
                  color: "rgba(var(--f52,142,142,142),1)",
                  lineHeight: "inherit",
                  margin: 0,
                  padding: 0,
                }}
              >
                <span>view more comments</span>
              </Link>
            </Box>

            <Box mb="16px" display="block" pointerEvents="auto">
              <Link
                color="rgba(var(--f52,142,142,142),1)"
                textTransform="uppercase"
                mb="5px"
                textDecoration="none"
                letterSpacing="0.2px"
              >
                <span>{time}</span>
              </Link>
            </Box>
          </section>
        </Flex>
        <CommentSection id={id} />
      </Flex>
    </>
  );
};

export default Post;
