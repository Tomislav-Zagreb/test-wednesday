import axios from "axios"
import { useEffect, useState } from "react"

function useFetchData() {
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

  return [allArticles, setAllArticles, errorMessage]
}

export default useFetchData
