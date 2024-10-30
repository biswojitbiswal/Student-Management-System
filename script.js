import { data } from "./data.js";
// console.log(data);

let searchInput = document.getElementById("search-input")
let searchBtn = document.getElementById("search-btn");
let sortAZ = document.getElementById("sort-AZ");
let sortZA = document.getElementById("sort-ZA");
let sortMarks = document.getElementById("sort-marks");
let passBtn = document.getElementById("sort-passing");
let sortClass = document.getElementById("sort-class");
let sortGender = document.getElementById("sort-gender");
let tableBody = document.getElementsByTagName("tbody")[0];
let maleTableBody = document.getElementById("male-table-body");
let femaleTableBody = document.getElementById("female-table-body");


function renderStudents(arr){

    
    document.getElementById("gender-tables").style.display = "none";
    document.getElementById("all-students-table").style.display = "block";


    tableBody.innerHTML = "";

    if(arr.length === 0){
        let row = document.createElement("tr");
        row.innerHTML = `
            <td colspan="7" style="text-align: center;">Not Found!</td>
        `;
        tableBody.appendChild(row);
        return;
    }
    
    arr.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td class="student-name">
                    <img src=${item.img_src} alt="" class="student-image">
                    <span>${item.first_name} ${item.last_name}</span>
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passing" : "Failed"}</td>
            <td>${item.email}</td>
        `;

        tableBody.appendChild(row);
    })
}

renderStudents(data);

function searchStudent(){
    let query = searchInput.value;

    const searchArr = data.filter((item) => {
        return (
            item.first_name.toLowerCase().includes(query.toLowerCase()) ||
            item.last_name.toLowerCase().includes(query.toLowerCase()) ||
            item.email.toLowerCase().includes(query.toLowerCase())
        );
    })

    renderStudents(searchArr);
}

function sortAtoZ(){
    const sortedArr = data.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
    });

    renderStudents(sortedArr);
}

function sortZtoA(){
    const sortedArr = data.sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
    })

    renderStudents(sortedArr);
}

function sortStudentMarks(){
    const sortedArr = data.sort((a, b) => {
        return a.marks - b.marks;
    });

    renderStudents(sortedArr);
}

function showPassing(){
    const arr = data.filter((item) => item.passing);

    renderStudents(arr);
}

function sortByClass(){
    const sortedArr = data.sort((a, b) => {
        return a.class - b.class;
    })

    renderStudents(sortedArr);
}

function showByGender(){
    const maleArr = data.filter((item) => item.gender === "Male");

    const femaleArr = data.filter((item) => item.gender === "Female");

    maleArr.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td class="student-name">
                    <img src=${item.img_src} alt="" class="student-image">
                    <span>${item.first_name} ${item.last_name}</span>
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passing" : "Failed"}</td>
            <td>${item.email}</td>
        `;

        maleTableBody.appendChild(row);
    })

    femaleArr.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td class="student-name">
                    <img src=${item.img_src} alt="" class="student-image">
                    <span>${item.first_name} ${item.last_name}</span>
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passing" : "Failed"}</td>
            <td>${item.email}</td>
        `;

        femaleTableBody.appendChild(row);
    })

    
}

searchInput.addEventListener("input", (e) => {
    searchStudent();
})

searchBtn.addEventListener("click", (e) => {
    searchStudent();
})

sortAZ.addEventListener("click", (e) => {
    sortAtoZ();
})

sortZA.addEventListener("click", (e) => {
    sortZtoA();
})

sortMarks.addEventListener("click", (e) => {
    sortStudentMarks();
})

passBtn.addEventListener("click", (e) => {
    showPassing();
})

sortClass.addEventListener("click", (e) => {
    sortByClass();
})

sortGender.addEventListener("click", (e) => {
    document.getElementById("all-students-table").style.display = "none";

    document.getElementById("gender-tables").style.display = "block";

    showByGender();
})




