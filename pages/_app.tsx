import { ChakraProvider } from "@chakra-ui/react"
import { getAnalytics, logEvent } from "firebase/analytics"
import { getApps, initializeApp } from "firebase/app"
import { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect } from "react"
import { BoxHeader } from "../app/components/BoxHeader"

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  if (typeof window !== "undefined") {
    const apps = getApps()

    if (apps.length === 0) {
      initializeApp({
        apiKey: "AIzaSyBqj2KrgxuYKRQXuTyJeawAIE_elhVZxNY",
        authDomain: "tw4cxcjuobkmyepti.firebaseapp.com",
        projectId: "tw4cxcjuobkmyepti",
        storageBucket: "tw4cxcjuobkmyepti.appspot.com",
        messagingSenderId: "490044439127",
        appId: "1:490044439127:web:1e8c2ab1c2842e3fedc112",
        measurementId: "G-JGT1KS2WMX",
      })
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    if (process.env.NODE_ENV !== "production") return
    router.events.on("routeChangeComplete", (url) => {
      logEvent(getAnalytics(), "page_view", {
        page_location: document.title,
        page_path: window.location.href,
        page_title: window.location.pathname,
      })
    })
    logEvent(getAnalytics(), "page_view", {
      page_location: document.title,
      page_path: window.location.href,
      page_title: window.location.pathname,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * 全部のページに表示される
   * appに書いたらclick.js chonter.jsに<BoxHeader>書かなくていい
   */
  return (
    <>
      <Head>
        <style>{"body { overscroll-behavior: none; }"}</style>
      </Head>
      <ChakraProvider>
        <BoxHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
