// Select popup-overlay, popup-box, popup-btn
var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var popup_btn = document.querySelector(".popup-btn")

popup_btn.addEventListener("click", function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

// Select cancel-popup
var cancel_btn = document.getElementById("cancel-popup")
var form = document.getElementById("form-container")

cancel_btn.addEventListener("click", function(event){
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
    form.reset()
})

// Add book details to the web page
// Select container, add-book, book-title, book-author, book-description
var container = document.querySelector(".container")
var add_book = document.getElementById("add-book")
var title = document.getElementById("book-title")
var author = document.getElementById("book-author")
var description = document.getElementById("book-description")

add_book.addEventListener("click", function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${title.value}</h2>
                     <h3>${author.value}</h3>
                     <p>${description.value}</p>
                     <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
    form.reset()
})

// Delete Book details
function deleteBook(event)
{
    event.preventDefault()
    event.target.parentElement.remove()
}