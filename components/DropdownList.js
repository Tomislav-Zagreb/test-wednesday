import React from "react"
import dropdownStyles from "../styles/DropdownStyles.module.css"

function DropdownList({
  listOfAllCategoryNumbers,
  /*   allArticles,
   */
}) {
  function removeAllItems() {
    /*   The app should be better organised, probably using Context API to manipulate with the state at one place. That way would make it much simpler when organising this kind of action like that below (removing all the items from a particular category). I have not more time to build the task because it needs to be sent, but I am mentioning that here as a solution that should be implemented in a real project. */
    // allArticles could be filtered to get a particular category
    // filtered value could be reset to empty array, probably by adding setState function
    // Then new value of the array should be updated and passed to the category page...
    /*     This would indeed reset the array to be empty, but after reloading the page, averything would restart and refetched to the actual, starting value. Again, the issue is because I did not used Context and organisied state management on a better way, but in a real project, it is obligation, of course. */
  }

  return (
    <div className={dropdownStyles.dropContainer}>
      <h3>NOT FINISHED</h3>
      <br />
      <br />
      {listOfAllCategoryNumbers &&
        listOfAllCategoryNumbers?.map((number, index) => {
          return (
            <div
              style={{ marginBottom: "3rem", display: "flex", gap: "1rem" }}
              key={index}
            >
              <h3>Category {number}</h3>
              <button onClick={() => removeAllItems()}>Remove all</button>
            </div>
          )
        })}
    </div>
  )
}

export default DropdownList
