import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaTwitter } from "react-icons/fa"
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"

export const ButtonLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onLogin = async () => {
    try {
      const auth = getAuth()
      const provider = new TwitterAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button onClick={onOpen}>{"ログイン"}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{"途中です"}</ModalBody>
          <ModalFooter>
            <Button
              w={"100%"}
              onClick={onLogin}
              colorScheme={"twitter"}
              leftIcon={<FaTwitter />}
            >
              {"Twitterでログイン"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
