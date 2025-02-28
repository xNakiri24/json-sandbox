(async () =>{
    fetch("https://sandbox.nakiri.space/data/people.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            console.log("Name :" + user.name)
            console.log("Age :" + user.age)
        })
    })    
    .catch(error => {
        console.error("Error fetching data:", error);
    });
})();