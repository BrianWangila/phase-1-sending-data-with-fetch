// Add your code here

// fetch("destinationURL", configurationObject)
/*
const configurationObject = {
  method: "POST",
  headers: {"Content-Type": "application/json", Accept: "application/json"},
  body: JSON.stringify({
    dogName: "Byrone",
    dogBreed: "Poodle"
  })
}
fetch("http://localhost:3000/dogs", configurationObject)
*/

// //or

/*
const dogObj = {
  dogName: "Jill",
  dogBreed: "German"
}
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {"Content-Type": "application/json", Accept: "application/json"},
  body: JSON.stringify(dogObj)
})
*/


// //or 
/*
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {"Content-Type": "application/json", Accept: "application/json"},
  body: JSON.stringify({
    dogName: "Charlie",
    dogBreed: "Chihuahua"
  })
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((error) => {
    alert("Bad things! Ragnarock!")
    console.log(error.message)
  })
})
*/



function submitData (name, email){
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify ({
        name,
        email
        })
      })
      .then((resp) => resp.json())
      .then((data) => document.body.innerHTML = data["id"])
      .catch((errors) => {
        document.body.innerHTML = errors.message
        })
  
  
}
submitData("Brian Wangila", "name@gmail.com")
submitData("Ravvy", "ravvy@gmail.com")





