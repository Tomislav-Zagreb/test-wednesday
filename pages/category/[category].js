import React from "react"
import { useRouter } from "next/router"
import useFetchData from "../../hooks/useFetchData"
import SingleArticle from "../../components/SingleArticle"
import Navigation from "../../components/Navigation"
import SearchBar from "../../components/SearchBar"
import HeadDetails from "../../components/HeadDetails"

import singleStyles from "../../styles/SingleStyles.module.css"

function CategoryArticles() {
  const router = useRouter()
  const { category } = router.query

  const [allArticles, setAllArticles, errorMessage] = useFetchData()

  let storingArray = []

  allArticles?.map((item) => {
    if (item.post_category_id != null) storingArray.push(item.post_category_id)
  })

  const removingEquals = new Set(storingArray)

  let listOfAllCategoryNumbers = Array.from(removingEquals)

  const filteredByCategory = allArticles.filter((single) => {
    return single.post_category_id === category
  })

  return (
    <>
      <HeadDetails
        titleOfPage={`Category ${category}`}
        description="Test app displaying articles from selected API on the home page"
        keywords="example, example, example, example, example..."
      />
      <Navigation
        listOfAllCategoryNumbers={listOfAllCategoryNumbers.sort()}
        /* filteredByCategory={filteredByCategory} DIDN'T HAVE TIME TO FINISH
        allArticles={allArticles} */
      />
      <SearchBar setAllArticles={setAllArticles} />

      <div style={{ padding: "3rem", display: "grid", gap: "2rem" }}>
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
          {`Current category: ${category}. Number of results: ${filteredByCategory.length}`}
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

        {filteredByCategory.length > 0
          ? filteredByCategory.map((singleArticle, index) => {
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
    </>
  )
}

export default CategoryArticles
