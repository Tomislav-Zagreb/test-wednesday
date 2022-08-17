import { useEffect } from "react"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push("/all"), 1250)
  }, [])

  return (
    <div className={styles.container}>
      <h1>ARTICLES</h1>
      <h3>Loading...</h3>
    </div>
  )
}
