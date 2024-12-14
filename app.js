let submit = document.querySelector('.submit-btn');
let space = document.querySelector('.grocery-list');
let input = document.querySelector('.grocery');
let clearAll = document.querySelector('.clear-btn');
//let deleteBtnAll = document.querySelectorAll('.delete-btn');

submit.addEventListener("click" , (e) => {
    e.preventDefault();
    let value = input.value;
    if (value != '') {

        space.innerHTML +=
        `<div class="grocery-item">
         <p class="grocery-text">${value}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>`
        input.value = '';
    let deleteBtnAll = document.querySelectorAll('.delete-btn');
        deleteBtnAll.forEach((delBtn) => {
            delBtn.addEventListener("click", (e) => {
                    e.target.parentElement.remove(); 
            });
        })
    
    let editBtnsAll = document.querySelectorAll('.edit-btn');
        editBtnsAll.forEach((edit) => {
            edit.addEventListener("click", (e)=> {
                let groceryText = document.querySelector('.grocery-text');
                input.value = groceryText.textContent;
                groceryText.parentElement.remove();
            })
        })
    }
})


clearAll.addEventListener("click", () => {
    space.textContent = '';
})

