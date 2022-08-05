import { SimpleGrid, Stack } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import * as THREE from "three"
import { BoxCardApp } from "../app/components/BoxCardApp"

const Home = () => {
  const apps = [
    {
      href: "/apps/click",
      title: "クリック",
      emoji: "🪬",
    },
    {
      href: "/apps/clock",
      title: "時計",
      emoji: "⏰",
    },
    {
      href: "/apps/text",
      title: "入力",
      emoji: "✒️",
    },
    {
      href: "/apps/nanoid",
      title: "NaN0-1D",
      emoji: "🔑",
    },
    {
      href: "/apps/gestalt",
      title: "間違い探し",
      emoji: "🔍",
    },
    {
      href: "/apps/dice",
      title: "サイコロ",
      emoji: "🎲",
    },
    {
      href: "/apps/vocaloid",
      title: "ボカロ",
      emoji: "🎧",
    },
    {
      href: "/apps/min2sec",
      title: "分から秒",
      emoji: "🕛",
    },
    {
      href: "/apps/caculator",
      title: "電卓",
      emoji: "🧮",
    },
    {
      href: "/apps/cube",
      title: "キューブが回る",
      emoji: "🔄",
    },
  ]

  console.log(THREE)

  return (
    <>
      <Head>
        <title>{"ハルタ"}</title>
      </Head>
      <Stack as={"main"} px={4} pb={4} spacing={4}>
        <SimpleGrid minChildWidth={"6rem"} spacing={4}>
          {apps.map((app) => (
            <Link href={app.href} key={app.href}>
              <a>
                <BoxCardApp title={app.title} emoji={app.emoji} />
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default Home
