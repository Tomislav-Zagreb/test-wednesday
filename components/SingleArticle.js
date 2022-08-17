import React from "react"
import singleStyles from "../styles/SingleStyles.module.css"
import Link from "next/link"
const { htmlToText } = require("html-to-text")
import { MdDelete } from "react-icons/md"

function SingleArticle({
  title,
  slug,
  date,
  excerpt,
  post_image,
  setAllArticles,
}) {
  const formatted =
    date != null && new Intl.DateTimeFormat("hr").format(new Date(date))

  function removeItem() {
    setAllArticles((prev) => prev.filter((pr) => pr.title !== title))
  }

  return (
    <>
      <div className={singleStyles.articleContainer}>
        <Link href={`/${slug}`} className={singleStyles.imageBox}>
          <img
            src={`https://www.alpha-orbital.com/assets/images/post_img/${post_image}`}
            alt={excerpt}
          />
        </Link>
        <div className={singleStyles.textBox}>
          <Link href={`/${slug}`}>
            <h1>{title}</h1>
          </Link>
          <p style={{ color: "grey" }}>{formatted}</p>
          <p>{htmlToText(excerpt)}</p>
          <Link href={`/${slug}`}>
            <a className={singleStyles.fullLink}>Full article</a>
          </Link>
        </div>
        <MdDelete
          className={singleStyles.deleteIcon}
          onClick={() => removeItem(title)}
        />
      </div>
      <hr
        style={{
          height: "3px",
          width: "100%",
          backgroundColor: "rgb(146, 219, 255)",
          opacity: ".5",
        }}
      />
    </>
  )
}

export default SingleArticle
