import React from "react";

function Transaction({items}) {
  function handleDelete(event){
    console.log(event.target.value)
    let id=event.target.value
    fetch(`http://localhost:8001/transactions/${id}`,{
      method:"DELETE",
      headers:{"content-type":"application/json"}

    })
    .then(response=>response.json())
    .then(data=>{
    console.log(data)
    window.location.reload()
  })
  }
const displayItems=items.map((item)=>{
return(
  <tr key={item.id}>
  <td>{item.date}</td>
  <td>{item.description}</td>
  <td>{item.category}</td>
  <td>{item.amount}</td>
  <td><button value={item.id} onClick={handleDelete}>Delete</button></td>
</tr>
)
})
  return (
    <>
  {displayItems} 
  </>
  );
}

export default Transaction;
