import {
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react"
import Link from "next/link"

const Home = () => {
  return (
    <Stack as={"main"} p={4} spacing={16}>
      <Heading fontSize={"2xl"}>{"Haruta.dev"}</Heading>
      <Link href={"/apps/counter"}>
        <a>{"カウンター"}</a>
      </Link>
    </Stack>
  )
}

export default Home
