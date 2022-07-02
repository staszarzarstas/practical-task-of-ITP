


/* Выбираем все наши напоминания */
const list = document.querySelectorAll('.select')


// Получаем ивент, проверяем на какой таргет было нажато, передаём currentTarget для его удаленя или  изменения
const listClick = (event) => {
    const temp = event.target.dataset.edit;

    if (temp === 'delete') {
        deleteList(event.currentTarget)
    }
    else if (temp === 'edit') {
        changeList(event.currentTarget)
    }
    event.stopPropagation()
}

// Вешаем слушателя ивентов по клику
list.forEach(items => {
    items.addEventListener('click', listClick)
})






// Получает таргет для удаления
const deleteList = (currentTarget) => {
    currentTarget.remove()
}


// получает таргет для измненеия
const changeList = (currentTarget) => {
    const { value } = remembers;
    currentTarget.innerHTML = value + '<div class="editTrash">\n' +
        '        <img src="img/trash.svg" class ="img" data-edit="delete"> \n' +
        '         <img src="img/edit-2.svg" class="img" data-edit="edit"> </div>';
    document.getElementById('remembers').value = "";
}


// создаём новое напоминание для, также заново вешаем слушателя ивентов по клику
const createDiv = (box, value, i) => {
    box.insertAdjacentHTML('afterbegin', `
         <div class="select" data-check="${i}"> ${value} 
            <div class="editTrash">
                <img src="img/trash.svg" class="img" data-edit="delete">
                <img src="img/edit-2.svg" class="img" data-edit="edit">
            </div>
         </div>
         
     `
    );
    const list = document.querySelectorAll('.select')
    list.forEach(items => {
        items.addEventListener('click', listClick)
    })
}

// Наша строка инпут
const remembers = document.getElementById('remembers');

// Счётчик ( хз как реализовать по другому)
let i = 10;

// Вызов функции создания напоминания, собственно по клику)
 const handleClickInsertButton = () => {
     const box = document.getElementById('box');
     const {value } = remembers;
     document.getElementById('remembers').value = "";
     console.log('-->', value);
     value && createDiv(box, value, i);
     i++;
 };





//
// const tabsRemember = document.querySelectorAll(".select");
//
// tabsRemember.forEach(function (item) {
//     item.addEventListener("click", function(){
//         let allRemember = item;
//
//         tabsRemember.forEach(function (item){
//             item.classList.remove('active');
//         });
//
//         allRemember.classList.add('active');
//     });
// });
//
//
//
//
//
// const handleClickDeleteButton = () => {
//     tabsRemember.forEach(function (item) {
//         let temp = item.getAttribute("class");
//         if (temp === 'select active') {
//             item.remove();
//         }
//     })
// }
//
//
// const handleClickChangeButton = () => {
//     tabsRemember.forEach(function (item) {
//         let temp = item.getAttribute("class");
//         let {value} = remembers;
//         if (temp === 'select active' && value !== "") {
//             item.innerHTML = value;
//         }
//     })
// }