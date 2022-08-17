import { useRouter } from "next/router"
import React from "react"
import HeadDetails from "../components/HeadDetails"
import useFetchData from "../hooks/useFetchData"
import slugStyles from "../styles/SlugStyles.module.css"
const { htmlToText } = require("html-to-text")
import Link from "next/link"

function Article() {
  const allArticles = useFetchData()

  const router = useRouter()
  const { slug } = router.query

  const displayArticle = allArticles[0].find((one) => {
    return one.slug === slug
  })

  return (
    <div className={slugStyles.slugContainer}>
      <HeadDetails
        titleOfPage={displayArticle?.title}
        description={displayArticle?.excerpt}
        keywords="example, example, example, example, example..."
      />
      <img
        src={`https://www.alpha-orbital.com/assets/images/post_img/${displayArticle?.post_image}`}
        alt={displayArticle?.title}
        draggable="false"
      />
      <div className={slugStyles.slugInnerDiv}>
        <h1>{displayArticle?.title}</h1>
        <p style={{ color: "grey" }}>
          {displayArticle != null &&
            new Intl.DateTimeFormat("hr").format(
              new Date(displayArticle?.date)
            )}
        </p>
        <p>{htmlToText(displayArticle?.excerpt)}</p>
        <Link href="/all">
          <a>Back to all articles list</a>
        </Link>
      </div>
    </div>
  )
}

export default Article
