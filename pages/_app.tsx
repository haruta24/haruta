import { ChakraProvider } from "@chakra-ui/react"
import { getAnalytics, logEvent, setCurrentScreen } from "firebase/analytics"
import { getApps, initializeApp } from "firebase/app"
import { AppProps } from "next/app"
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

    const analytics = getAnalytics()

    router.events.on("routeChangeComplete", (url) => {
      setCurrentScreen(analytics, url)
      logEvent(analytics, "screen_view")
    })

    setCurrentScreen(analytics, window.location.pathname)

    logEvent(analytics, "screen_view")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * 全部のページに表示される
   * appに書いたらclick.js chonter.jsに<BoxHeader>書かなくていい
   */
  return (
    <ChakraProvider>
      <BoxHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
