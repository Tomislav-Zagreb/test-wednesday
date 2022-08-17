import { useEffect, useState } from "react"
import HeadDetails from "../components/HeadDetails"
import useFetchData from "../hooks/useFetchData"
import Navigation from "../components/Navigation"
import SearchBar from "../components/SearchBar"
import SingleArticle from "../components/SingleArticle"
import { useRouter } from "next/router"

import singleStyles from "../styles/SingleStyles.module.css"
import styles from "../styles/Home.module.css"

export default function AllArticles() {
  const router = useRouter()

  const [allArticles, setAllArticles, errorMessage] = useFetchData()

  let storingArray = []

  allArticles.map((item) => {
    if (item.post_category_id != null) storingArray.push(item.post_category_id)
  })

  const removingEquals = new Set(storingArray)

  let listOfAllCategoryNumbers = Array.from(removingEquals)

  useEffect(() => {
    router.push("/all")
  }, [])

  console.log(allArticles)

  return (
    <div className={styles.container}>
      <HeadDetails
        titleOfPage="Articles | Home"
        description="Test app displaying articles from selected API on the home page"
        keywords="example, example, example, example, example..."
      />

      <Navigation listOfAllCategoryNumbers={listOfAllCategoryNumbers.sort()} />
      <SearchBar setAllArticles={setAllArticles} />

      <div
        style={{
          padding: "3rem",
          display: "grid",
          gap: "2rem",
        }}
      >
        <h4
          style={{
            color: "rgb(146, 219, 255)",
            borderBlock: "1px solid silver",
            width: "fit-content",
            justifySelf: "flex-end",
            padding: "1rem 3rem",
            textAlign: "right",
          }}
        >
          {`All categories displayed. Number of results: ${allArticles.length}`}
        </h4>

        <button
          className={singleStyles.fullLink}
          onClick={() => router.reload()}
          style={{ cursor: "pointer" }}
        >
          REFETCH/RELOAD DATA
        </button>
        <br />
        <br />

        {allArticles.length > 0
          ? allArticles.map((singleArticle, index) => {
              return (
                <SingleArticle
                  key={index}
                  {...singleArticle}
                  setAllArticles={setAllArticles}
                />
              )
            })
          : "Nothing to show here. Try again."}
      </div>
    </div>
  )
}
