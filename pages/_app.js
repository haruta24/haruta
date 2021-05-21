import { ChakraProvider } from "@chakra-ui/react"
import { FirebaseAppProvider } from "reactfire"
import { useEffect } from "react"
import { getAnalytics, logEvent, setCurrentScreen } from "firebase/analytics"
import { getApps, initializeApp } from "firebase/app"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }) => {
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

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
