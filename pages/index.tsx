import { SimpleGrid, Stack } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { BoxCardApp } from "../components/BoxCardApp"

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
    {
      href: "/apps/aaa",
      title: "間違い探し",
      description: "違う漢字を見つける",
    },
    {
      href: "/apps/dice",
      title: "サイコロ",
      description: "サイコロを振る",
    },
    {
      href: "/apps/vocaloid",
      title: "ボカロ",
      description: "🎧",
    },
  ]

  return (
    <>
      <Head>
        <title>{"はるた"}</title>
      </Head>
      <Stack as={"main"} px={4} pb={4} spacing={4}>
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
