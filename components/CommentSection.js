import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { db } from "../firebase";
import Moment from "react-moment";

const CommentSection = ({ id }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }),
    [db,id];

  const postComment = async (e) => {
    e.preventDefault();

    const commentToPost = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToPost,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <>
      {comments.length > 0 && (
        <Box>
          {comments.map((comment) => (
            <Flex
              mb="10px"
              ml="18px"
              key={comment.id}
              flex="1 1 auto"
              minHeight="0"
              minWidth="0"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="stretch"
            >
              <Img
                h="7"
                rounded="full"
                src={comment.data().userImage}
                alt=""
                mr="5px"
              />
              <Text>
                {/*<span>{comment.data().username}</span> */}
                <span>{comment.data().comment}</span>
              </Text>
              <Spacer/>
           <Box display="flex"  fontSize="14px" mr="10px">  <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment> </Box>
            </Flex>
          ))}
        </Box>
      )}
      {session &&
        <Flex
          flex="0 0 auto"
          justifyContent="flex-start"
          alignItems="stretch"
          alignContent="stretch"
          direction="column"
        >
          <section>
            <HStack
              flexGrow="1"
              pos="relative"
              flexShrink="0"
              border="0 solid black"
              alignItems="stretch"
            >
              <InputGroup>
                <InputLeftAddon
                  align="center"
                  border="0"
                  p="18px 16px 8px 0"
                  cursor="pointer"
                  h="24"
                  w="24"
                  display="block"
                  overflow="hidden"
                  bg="0 0"
                >
                  <BsEmojiSmile
                    color="rgb(38, 38, 38)"
                    size="1.5rem"
                    fill="rgb(38, 38, 38)"
                  />
                </InputLeftAddon>

                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  color="rgba(var(--i1d,38,38,38),1)"
                  bg="0 0"
                  flexGrow="1"
                  border="0"
                  p="0"
                  outline="none"
                  maxHeight="80px"
                  resize="none"
                  fontSize="inherit"
                  lineHeight="18px"
                  w="0"
                  h="18px !important"
                  overflowWrap="break-word"
                  _disabled={{ opacity: "0.3" }}
                  placeholder="Add a comment..."
                />
                <InputRightAddon
                  w="auto"
                  variant="outline"
                  display="inline"
                  p="0"
                  type="submit"
                  pos="relative"
                  textOverflow="ellipsis"
                  textTransform="inherit"
                  fontWeight="600"
                  textAlign="center"
                  cursor="pointer"
                  color="rgba(var(--d69,0,149,246),1)"
                  border="0"
                  bg="0 0"
                  appearance="none"
                  _disabled={{ opacity: "0.3" }}
                >
                  <Button
                    type="submit"
                    onClick={postComment}
                    bg="0 0"
                    disabled={!comment}
                  >
                    Post
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </HStack>
          </section>
        </Flex>}
    </>
  );
};

export default CommentSection;
