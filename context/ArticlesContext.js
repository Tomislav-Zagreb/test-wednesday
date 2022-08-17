// DIDN'T HAVE ENOUGH TIME TO IMPLEMENT CONTEXT
// IT WOULD BE MUCH FASTER AND BETTER SOLUTION AND SHOULD BE USED IN THIS KIND OF TASKS
// (BECAUSE STATE IS "SCATTERED" OVER THE APP)

/* import { useContext, createContext, useState, useEffect } from "react"

export function useArticlesContext() {
  return useContext(ArticlesContext)
}

function ArticlesContext({ children }) {
  const DataContext = createContext()
  const NEWS_API = "https://www.alpha-orbital.com/last-100-news.json"

  const [errorMessage, setErrorMessage] = useState("")
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    axios
      .get(NEWS_API)
      .then((response) => {
        setAllArticles(response.data)
      })
      .catch((e) => setErrorMessage(e.response.data.error))
  }, [NEWS_API])

  let storingArray = []

  allArticles.map((item) => {
    if (item.post_category_id != null) storingArray.push(item.post_category_id)
  })

  const removingEquals = new Set(storingArray)

  let listOfAllCategoryNumbers = Array.from(removingEquals)

  const filteredByCategory = (allArticles, category) => {
    return allArticles.filter((single) => {
      return single.post_category_id === category
    })
  }

  return (
    <DataContext.Provider
      value={{ allArticles, errorMessage, filteredByCategory }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default ArticlesContext
 */
