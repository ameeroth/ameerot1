
// const contacts = [];

// function addcontact() {
//     const nameInput = document.getElementById("firstName").value;
//     const lastNameInput = document.getElementById("lastName").value;
//     const ageInput = document.getElementById("age").value;
//     const statusSelect = document.getElementById("statusSelect").value;

//     const newContact = createNewObj(nameInput, lastNameInput, ageInput, statusSelect);
//     contacts.push(newContact);
//     drawContacts();
// }

// function createNewObj(firstName, lastName, age, status){
//     const obj = {
//         firstName,
//         lastName,
//         age,
//         status,
//     }

//     return obj;
// }

// function drawContacts(){

//     const tableBody = document.getElementById("tableBody");
//     tableBody.innerHTML = "";

//     for (const contact of contacts){
//         const tableRow = document.createElement("tr");
//         for (const prop in contact) {
//             const tableData = document.createElement("td")
//             tableData.innerHTML = contact[prop];
//             tableRow.appendChild(tableData);
//         }
//         tableBody.appendChild(tableRow);
//     }   
// }