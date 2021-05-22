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
import { useAnalytics } from "reactfire"

const Home = () => {
  const apps = [
    {
      href: "/apps/click",
      title: "クリック",
      description: "クリックするとカウントが増える",
    },
    {
      href: "/apps/clock",
      title: "時計",
      description: "時刻を表示する",
    },
    {
      href: "/apps/text",
      title: "入力",
      description: "文字を入力する",
    },

    {
      href: "/apps/nanoid",
      title: "NaN0-1D",
      description: "nanoidを表示する",
    },
  ]

  return (
    <>
      <BoxHeader />
      <Stack as={"main"} p={4} spacing={100}>
        <SimpleGrid minChildWidth={"350px"} spacing={4}>
          {apps.map((app) => (
            <Link href={app.href} key={app.href}>
              <a>
                <BoxCardApp title={app.title} description={app.description} />
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default Home
