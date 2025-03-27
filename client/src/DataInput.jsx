import { useState } from "react"






function DataInput(){
    const [category,setCategory] = useState("FoodDrinks")    
    const [amount,setAmount] = useState("")





    return(
        <>
            <div>
                <input type="number" onChange={(e) =>setAmount(e.target.value)} value={category} placeholder="Enter Price Here..."></input>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value={"FoodDrinks"}>Food / Drinks</option>
                    <option value={"Entertainment"}>Entertainment</option>
                    <option value={"Bills"}>Bills</option>
                    <option value={"Miscellaneous"}>Miscellaneous</option>
                    <option value={"Medical"}>Health And Medical</option>

                </select>
                <button>Upload </button>
            </div>
        </>
    )
}

export default DataInput