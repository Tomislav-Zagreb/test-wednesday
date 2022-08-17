import Link from "next/link"
import navigationStyles from "../styles/Navigation.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import DropdownList from "./DropdownList"

function Navigation({
  listOfAllCategoryNumbers,
  /* filteredByCategory,
  allArticles, */
}) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={navigationStyles.linksContainer}>
      <GiHamburgerMenu
        className={navigationStyles.hamburgerIcon}
        onClick={() => setToggle(!toggle)}
      />

      {toggle ? (
        <DropdownList
          listOfAllCategoryNumbers={listOfAllCategoryNumbers.sort()}
          /* filteredByCategory={filteredByCategory} DIDN'T HAVE TIME TO FINISH
          allArticles={allArticles} */
        />
      ) : null}

      {listOfAllCategoryNumbers.map((number, index) => {
        return (
          <Link href={`/category/${number}`} key={index}>
            <a>Category {number}</a>
          </Link>
        )
      })}
      <Link href="/all">Show all</Link>
    </div>
  )
}

export default Navigation
