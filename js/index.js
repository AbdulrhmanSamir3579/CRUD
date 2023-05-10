// Global
var docHtml = document;
var siteName = docHtml.getElementById("siteName"),
    siteUrl = docHtml.getElementById("siteUrl"),
    btnAdd = docHtml.getElementById("btnAdd"),
    btnUpdate = docHtml.getElementById("btnUpdate"),
    booksContainer = [];

// When Start
if (localStorage.getItem("books") != null) {
    booksContainer = JSON.parse(localStorage.getItem("books"));
    displayData();
}
// Start Events
btnAdd.addEventListener("click", addBook);

// Add Fun
function addBook() {
    var book = {
        name: siteName.value,
        url: siteUrl.value,
    };
    booksContainer.push(book);
    localStorage.setItem("books", JSON.stringify(booksContainer));
    displayData();
    clearInputs();
}

// Display Fun

function displayData() {
    tableData = "";
    for (i = 0; i < booksContainer.length; i++) {
        tableData += `
    <tr>
        <td scope="col">${[i + 1]}</td>
        <td scope="col">${booksContainer[i].name}</td>
        <td scope="col">${booksContainer[i].url}</td>
        <td scope="col">
                <a class="btn btn-dark" style="background-color: #0477b5;" href="${booksContainer[i].url
            }" role="button" target="_blank"><i class="fas fa-eye"></i></a>
                <button class="btn btn-dark" style="background-color: #ffc107;" role="button"><i class="fas fa-edit"></i></button>
                <button onclick = "deleteData(${[
                i,
            ]})" class="btn btn-dark" style="background-color: rgb(255, 66, 66);" role="button"><i class="fas fa-trash"></i></button>
        </td>
    </tr> `;
    }
    docHtml.getElementById("tableData").innerHTML = tableData;
}

// Clear Fun

function clearInputs() {
    siteName.value = "";
    siteUrl.value = "";
}

function deleteData(index) {
    booksContainer.splice(index, 1);
    displayData();
}
