import { Box, Heading, HStack, Image } from "@chakra-ui/react"
import Link from "next/link"
import { FunctionComponent } from "react"
import { ButtonLogin } from "./ButtonLogin"

export const BoxHeader: FunctionComponent = () => {
  return (
    <Box p={4}>
      <HStack justify={"space-between"} align={"center"}>
        <HStack>
          <Link href={"/"}>
            <a>
              <Image
                src={"/icon.svg"}
                alt={"Segun Adebayo"}
                w={10}
                h={10}
                ignoreFallback={true}
              />
            </a>
          </Link>
          <Heading fontSize={"lg"} letterSpacing={"1px"}>
            {"Haruta.dev"}
          </Heading>
        </HStack>
        <ButtonLogin />
      </HStack>
    </Box>
  )
}
