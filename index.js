let tables = document.querySelector("table")
let button = document.querySelector("button")

button.addEventListener("click", function(){
    alert("Your results will be sent to your email!!")
})

fetch("data.json")
    .then(response=>response.json()) //turn into a js format
    .then(values=>{
        values.forEach(value=> {
            let color = ""; // determine color inside JS before adding the row
            if (value.category === "Reaction") {
                color = "hsl(0, 100%, 67%)";
            } else if (value.category === "Memory") {
                color = "hsl(39, 100%, 56%)";
            } else if (value.category === "Verbal") {
                color = "hsl(166, 100%, 37%)";
            } else if (value.category === "Visual") {
                color = "hsl(234, 85%, 45%)";
            }
            // directly apply it using style="color: "
            tables.innerHTML+=`
                <tr>
                    <td>
                        <img class=icons src=${value.icon}>
                    <td>
                    <td class="category" style="color: ${color};">${value.category}</td>
                    <td class="score">${value.score}<span>/100</span></td>
                <tr>
            `
        })
    }) //from the values we get log them out
    .catch(error=>console.log(error)) // catch an error  