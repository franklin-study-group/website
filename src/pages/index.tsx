import Navbar from "components/Navbar"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Franklin Study Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/RegisterPage">
        <a>Register</a>
      </Link>

      <div className="">
        <Navbar />
      </div>
    </div>
  )
}
