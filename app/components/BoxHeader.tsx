import { Box, Heading, HStack, Image } from "@chakra-ui/react"
import Link from "next/link"
import { FunctionComponent } from "react"
import { ButtonDarkMode } from "./ButtonDarkMode"

export const BoxHeader: FunctionComponent = () => {
  return (
    <Box p={4}>
      <HStack justify={"space-between"} align={"center"}>
        <Link href={"/"}>
          <a>
            <HStack>
              <Image
                src={"/icon.svg"}
                alt={"Segun Adebayo"}
                w={10}
                h={10}
                ignoreFallback={true}
              />

              <Heading fontSize={"lg"} letterSpacing={"1px"}>
                {"Haruta.dev"}
              </Heading>
            </HStack>
          </a>
        </Link>
        <ButtonDarkMode />
      </HStack>
    </Box>
  )
}
