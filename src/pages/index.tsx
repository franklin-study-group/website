import Navbar from "components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Study Buddies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <h1> Study Buddies</h1>
        <Navbar />
      </div>
    </div>
  )
}
