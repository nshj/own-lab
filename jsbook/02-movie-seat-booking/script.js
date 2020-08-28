const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // querySelectorAll返回的是 匹配的所有元素的NodeList，不是真正的数组
    // 需要将其转换为数组，通过调用 Array.from 即   let a = Array.from(selectedSeats);
    // [...selectedSeats]应该是相同的作用
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    //LocalStorage，sessionStorage 键和值都必须是字符串,可以用JSON来存储其他类型
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSearsCount = selectedSeats.length;

    count.innerText = selectedSearsCount;
    total.innerText = selectedSearsCount * ticketPrice;


}

// Get data from localstorage and populate UI
// 注意forEach的方法中arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
// 可以传几个参数
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
     if (selectedSeats !== null && selectedSeats.length >0) {
         seats.forEach((seat, index) => {
             if (selectedSeats.indexOf(index) > -1) {
                 seat.classList.add('selected');
             }
         });
     }

     const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

     if (selectedMovieIndex !== null) {
         //select框选中的索引
         movieSelect.selectedIndex = selectedMovieIndex;
     }
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click',e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

//Initial count and total set
updateSelectedCount();
