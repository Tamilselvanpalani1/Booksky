var addData= document.getElementById('add-popup-button')
//selecting overlay,popup-box,buttons 
var overlay = document.getElementById('popup-overlay')
var popupBox = document.getElementById('popup-box')
var cancelPopup = document.getElementById('cancel-popup')

//Add - Anonymous function
addData.addEventListener('click',function(){
    overlay.style.display = 'block'
    popupBox.style.display = 'block'
})
//Normal function
// function add(){
//     overlay.style.display = 'block'
//     popupBox.style.display = 'block'
// }

//cancel - Anonymous function
cancelPopup.addEventListener('click',function(){
    overlay.style.display = 'none'
    popupBox.style.display = 'none'
})
// function cancel(){
//     overlay.style.display = 'none'
//     popupBox.style.display = 'none'
// }

//select container,add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector('.container')
var addBook = document.getElementById('add-book')
var bookTitleInput = document.getElementById('book-title-input')
var bookAuthorInput = document.getElementById('book-author-input')
var description = document.getElementById('book-description-input')

addBook.addEventListener('click',function(event){
    event.preventDefault()

    //creating container
    var createContainer = document.createElement('div')
    createContainer.setAttribute('class','book-container')
    createContainer.innerHTML = `<h2>${bookTitleInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${description.value}</p>
    <button onclick="Delete(event)">Delete</button>`

    //adding data
    container.append(createContainer)
    //After adding box will hide
    overlay.style.display = 'none'
    popupBox.style.display = 'none'    
})

function Delete(event){
    var deleteContainer = event.target.parentElement
    deleteContainer.remove()
}