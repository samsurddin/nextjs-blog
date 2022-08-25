import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import { RecoilRoot } from 'recoil'
import { SessionProvider } from "next-auth/react"

export default function  MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>

    </SessionProvider>
  )
}