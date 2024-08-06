import React, { useState } from "react";
import { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {

  const [items, itemshandler] = useState([])
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(Response => Response.json())
      .then(data => itemshandler(data))
  }, [])
 


  // const [newItems, newItemsHandler] = useState("")
  function handleChange(event) {
    // console.log(event.target.value)
    setWord(event.target.value)
  }
    const filterFunction = items.filter((item) => {
      if(item.category.toLowerCase().includes(word.toLowerCase())) return item
      else if (word==="") return true
    })
  function addFunctions(event){
    event.preventDefault();

    let dataObject= {
      date: event.target.date.value,
      description: event.target.description.value,
      category: event.target.category.value,
      amount: event.target.amount.value,
      id:items.length+1
    }
    let updatedDataObject = [...items, dataObject];
    itemshandler(updatedDataObject)
  fetch("http://localhost:8001/transactions",{
    method: "POST",
    body:JSON.stringify(dataObject),
    header:{
      'content-type':'application/json'
    }

  })
  .then(res=>{
    // if(res.ok===true){itemshandler(dataObject)}
  })
  event.target.reset()
  }

  return (
    <div>
      <Search searchFunction={handleChange} />
      <AddTransactionForm addfunction={addFunctions}/>
      <TransactionsList commodities={filterFunction} />
    </div>
  );

}
export default AccountContainer;
