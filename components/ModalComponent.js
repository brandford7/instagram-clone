import React, { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  onClose,
  Button,
  Text,
  isCentered,
  Textarea,
  Icon,
  IconButton,
  Img,
  Input,
  Box,
  FormLabel,
} from "@chakra-ui/react";

import { isOpen, isClose } from "../redux/Slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaPhotoVideo } from "react-icons/fa";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";

const ModalComponent = () => {
  const open = useSelector((state) => state.modal.value);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState();

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const uploadPost = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImage: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("new post added", docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/images`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), { image: downloadURL });
      }
    );
    dispatch(isClose);
    setLoading(false);
    setSelectedFile(null);
  };

  return (
    <>
      {open && (
        <Modal isOpen={isOpen} onClose={isClose} isCentered>
          <ModalContent
            display="flex"
            alignItems="stretch"
            flex="1 1 auto"
            minHeight="391px"
            minWidth="348px"
            maxHeight="855px"
            maxWidth="667px"
            borderRadius="10px"
          >
            {/*  <ModalCloseButton onClick={() => dispatch(isClose())} /> */}
            <ModalHeader
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex="0 0 auto"
              borderBottom="0.5px solid grey"
              maxWidth="667px"
              maxHeight="43px"
              fontSize="16px"
              w="100%"
              lineHeight="24px"
              textAlign="center"
            >
              Create new post
            </ModalHeader>
            <ModalBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              maxHeight="667px"
              maxWidth="667px"
            >
              {selectedFile ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                  {" "}
                  <Img
                    h="md"
                    w="full"
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile}
                    alt=""
                  />
                </Box>
              ) : (
                <>
                  <Icon
                    h="77"
                    w="96"
                    boxSize="50px"
                    color="rgb(38, 38, 38)"
                    fill="rgb(38, 38, 38)"
                    viewBox="0 0 97.6 77.3"
                    as={FaPhotoVideo}
                  />
                  <Box>
                    <Text
                      m="-4px 0 -5px"
                      lineHeight="26px"
                      fontWeight="300"
                      fontSize="22px"
                    >
                      Drag photos and videos here
                    </Text>
                  </Box>
                </>
              )}
              <Box>
                <Textarea
                  mt="20px"
                  ref={captionRef}
                  placeholder="Add a caption"
                />
              </Box>

              {selectedFile ? (
                <Button
                  onClick={uploadPost}
                  mt="24px"
                  borderRadius="5px"
                  p="5px 9px"
                  fontSize="14px"
                  lineHeight="18px"
                  fontWeight="600"
                  maxWidth="170.02px"
                  w="auto"
                  h="38px"
                  textAlign="center"
                  bg={loading ? 'grey' : 'rgba(var(--d69,0,149,246),1)'}
                  color="white"
                  _hover={{ bg: "rgba(var(--d69,0,149,246),1)" }}
                >
                  {loading ? "uploading..." : " Upload Post"}
                </Button>
              ) : (
                <Box onClick={() => filePickerRef.current.click()}>
                  <FormLabel
                    mt="24px"
                    borderRadius="5px"
                    p="5px 9px"
                    fontSize="14px"
                    lineHeight="18px"
                    fontWeight="600"
                    maxWidth="170.02px"
                    w="auto"
                    h="38px"
                    textAlign="center"
                    bg="rgba(var(--d69,0,149,246),1)"
                    color="white"
                    _hover={{
                      bg: "rgba(var(--d69,0,149,246),1)",
                      cursor: "pointer",
                    }}
                  >
                    Select From Computer
                    <Input
                      ref={filePickerRef}
                      visibility="hidden"
                      onChange={addImageToPost}
                      type="file"
                    />
                  </FormLabel>
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
