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
  bg,
} from "@chakra-ui/react"
import Link from "next/link"

const Home = () => {
  return (
    <Stack as={"main"} p={4} spacing={16}>
      <Heading fontSize={"2xl"}>{"Haruta.dev"}</Heading>
      <SimpleGrid minChildWidth={"280px"} spacing={10}>
        <Link href={"/apps/counter"}>
          <a>
            <Box
              _hover={{ bg: "gray.300" }}
              h={"100%"}
              bg={"gray.200"}
              rounded={"lg"}
              h={"100%"}
              p={4}
            >
              <Stack spacing={0}>
                <Text align={"center"}>{"カウンター"}</Text>
                <Text align={"center"}>{"クリックするとカウントが増える"}</Text>
              </Stack>
            </Box>
          </a>
        </Link>
        <Link href={"/apps/clock"}>
          <a>
            <Box
              _hover={{ bg: "gray.300" }}
              h={"100%"}
              bg={"gray.200"}
              rounded={"lg"}
              h={"100%"}
              p={4}
            >
              <Stack spacing={0}>
                <Text align={"center"}>{"時計"}</Text>
                <Text align={"center"}>{"時計を表示する"}</Text>
              </Stack>
            </Box>
          </a>
        </Link>
      </SimpleGrid>
    </Stack>
  )
}

export default Home
