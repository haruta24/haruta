import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"
import { FunctionComponent } from "react"
import { FaTwitter } from "react-icons/fa"

export const ButtonLogin: FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const onLogin = async () => {
    try {
      const auth = getAuth()
      const provider = new TwitterAuthProvider()
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "失敗しました",
        status: "error",
      })
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
          <ModalBody>{"こんにちは"}</ModalBody>
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
