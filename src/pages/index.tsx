import Navbar from "components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Franklin Study Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
      </div>
    </div>
  )
}
