const submit_btn = document.querySelector('.submit');
const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');
const rating = document.querySelectorAll('.rating');
var score = document.querySelector('.score');
let value_rating = 3; //default value


submit_btn.addEventListener('click', onsubmit);
rating.forEach ( btn => {
    btn.addEventListener('click', handleRatingClick);
});
function onsubmit() {
    ratingState.classList.add('hide');
    score.textContent = value_rating;
    thankyouState.classList.remove('hide');
    
}

function handleRatingClick(event) {
    rating.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    //console.log('rating btn clicked');

    value_rating = event.target.textContent;
    console.log(value_rating);
}

//console.log(rating);