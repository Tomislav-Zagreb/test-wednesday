import React from "react"
import Link from "next/link"
import singleStyles from "../styles/SingleStyles.module.css"
import Image from "next/image"

function ErrorPage() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        gap: "3rem",
        paddingInline: "5%",
      }}
    >
      <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.25rem" }}>
        Nothing found here
      </h1>
      <Image
        src={require("../public/news.jpeg")}
        alt=""
        height="200px"
        width="400px"
        style={{ objectFit: "cover" }}
      />
      <Link href={`/all`}>
        <a className={singleStyles.fullLink}>GO TO THE HOMEPAGE</a>
      </Link>
    </div>
  )
}

export default ErrorPage
