import { useState } from "react"

export default function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5])
  const [inputValue, setInputValue] = useState("")

  const filteredItems = 
          inputValue === "" ? items : items.filter(item => item < inputValue)

  return (
    <>
    <label htmlFor="lessThan">Show Less Than</label>
    <input 
    id="lessThan"
    type="number"
    onChange={e=> setInputValue(e.target.valueAsNumber)}
    value={inputValue}
    />
    <br />
    <br />
    <br />
    <div>{filteredItems.join(", ")}</div>
    <br />
    <button onClick={() => setItems(i=> [...i, 2.5])}>
       add 2.5 To List
    </button>
    </>
  )
}


