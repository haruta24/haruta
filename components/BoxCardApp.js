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

export const BoxCardApp = (props) => {
  return (
    <Box
      _hover={{ bg: "gray.300" }}
      h={"100%"}
      bg={"gray.200"}
      rounded={"lg"}
      h={"100%"}
      p={4}
    >
      <Stack spacing={0}>
        <Text align={"center"}>{props.title}</Text>
        <Text align={"center"}>{props.description}</Text>
      </Stack>
    </Box>
  )
}
