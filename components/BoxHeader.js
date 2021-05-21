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

export const BoxHeader = () => {
  return (
    <Box>
      <HStack>
        <Link href={"/"}>
          <a>
            <Image
              src={"/icon.svg"}
              alt={"Segun Adebayo"}
              w={12}
              h={12}
              margin={4}
            />
          </a>
        </Link>
        <Heading fontSize={"lg"} letterSpacing={"1px"}>
          {"Haruta.dev"}
        </Heading>
      </HStack>
    </Box>
  )
}
