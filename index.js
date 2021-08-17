// // TOP TOAST
// const toastTop =  document.querySelector('.toast-top');

// const toastTopButton = document.querySelector('.toast-btn-top');

// toastTopButton.addEventListener('click', () => {
//         toastTop.style.transform = 'translateY(0%)';
//         setTimeout(() => {
//             toastTop.style.transform = 'translateY(-200%)';
//         }, 5000);
// })


// // BOTTOM TOAST
// const toastBottom =  document.querySelector('.toast-bottom');

// const toastBottomButton = document.querySelector('.toast-btn-bottom');

// toastBottomButton.addEventListener('click', () => {
//         toastBottom.style.transform = 'translateY(0%)';
//         setTimeout(() => {
//             toastBottom.style.transform = 'translateY(200%)';
//         }, 5000);
// })

// // // ----------------------------//



// // MODAL
// const modalBox = document.querySelector('.modal');
// const modalBtnShow = document.getElementById('modal-btn-show')
// const modalBtnClose = document.getElementById('modal-btn-close')

// modalBtnShow.addEventListener('click', () => {
//     modalBox.style.transform = 'translateY(0%)';
// })

// modalBtnClose.addEventListener('click', () => {
//     modalBox.style.transform = 'translateY(-200%)';
// })




// MENU TOGGLE BUTTON
const menuBtn = document.querySelector('.menu-btn')
const sideMenu = document.querySelector('.side-menu')

menuBtn.addEventListener('click', (e) => {
    sideMenu.classList.toggle('side-menu-toggle')
})