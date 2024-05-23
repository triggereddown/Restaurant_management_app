// document.addEventListener("DOMContentLoaded", function() {
//     const button1 = document.getElementById("button1");
//     const personDataDiv = document.getElementById("personData");

//     button1.addEventListener("click", () => {
//         fetch('/person')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Display person data in the div
//             data.forEach(person => {
//                 personDataDiv.innerHTML += `
//                     <h2>Person Data</h2>
//                     <p>Name: ${person.name}</p>
//                     <p>Age: ${person.age}</p>
//                     <p>Work: ${person.work}</p>
//                 `;
//             });
//         })
//         .catch(error => console.error('Error fetching person data:', error));
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const button1 = document.getElementById("button2");
//     const personDataDiv = document.getElementById("menuData");

//     button1.addEventListener("click", () => {
//         fetch('/menu')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Display person data in the div
//             data.forEach(person => {
//                 personDataDiv.innerHTML += `
//                     <h2>Person Data</h2>
//                     <p>Name: ${person.name}</p>
//                     <p>Price: ${person.price}</p>
//                     <p>Taste: ${person.taste}</p>
//                 `;
//             });
//         })
//         .catch(error => console.error('Error fetching person data:', error));
//     });
// });
