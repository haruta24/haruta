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
import { BoxHeader } from "../components/BoxHeader"
import { BoxCardApp } from "../components/BoxCardApp"

const Home = () => {
  return (
    <>
      <BoxHeader />
      <Stack as={"main"} p={4} spacing={16}>
        <SimpleGrid minChildWidth={"280px"} spacing={10}>
          <Link href={"/apps/counter"}>
            <a>
              <BoxCardApp
                title={"カウンター"}
                description={"クリックするとカウントが増える"}
              />
            </a>
          </Link>
          <Link href={"/apps/clock"}>
            <a>
              <BoxCardApp title={"時計"} description={"時刻を表示する"} />
            </a>
          </Link>
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default Home
