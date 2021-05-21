import {
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  Button,
  SimpleGrid,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaTwitter } from "react-icons/fa"

export const BoxHeader = () => {
  return (
    <Box p={4}>
      <HStack justify={"space-between"} align={"center"}>
        <HStack>
          <Link href={"/"}>
            <a>
              <Image
                src={"/icon.svg"}
                alt={"Segun Adebayo"}
                w={12}
                h={12}
                ignoreFallback={true}
              />
            </a>
          </Link>
          <Heading fontSize={"lg"} letterSpacing={"1px"}>
            {"Haruta.dev"}
          </Heading>
        </HStack>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitterでログイン
        </Button>
      </HStack>
    </Box>
  )
}
