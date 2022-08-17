import { useRef, useState } from "react"
import useFetchData from "../hooks/useFetchData"
import searchStyles from "../styles/SearchStyles.module.css"

function SearchBar({ setAllArticles }) {
  const inputRef = useRef()
  const allArticles = useFetchData()

  const [inputValue, setInputValue] = useState("")

  function onSubmit(e) {
    e.preventDefault()
    if (inputValue.length < 3) return

    setAllArticles(...allArticles)

    setAllArticles((prev) => {
      return prev.filter(
        (pr) =>
          pr.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
          pr.excerpt?.toLowerCase().includes(inputValue.toLowerCase())
      )
    })

    setInputValue("")
  }

  return (
    <form onSubmit={onSubmit} className={searchStyles.formContainer}>
      <input
        type="search"
        placeholder="Search movies in this category..."
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">SEARCH</button>
    </form>
  )
}

export default SearchBar
