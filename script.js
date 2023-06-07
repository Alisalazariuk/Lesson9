const par = document.getElementById('par')
par.style.color = 'red';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const arrName = [firstName, lastName];
for (let i = 0; i < arrName.length; i++) {
    arrName[i].style.color = 'green';
}

const citiOfUsa = document.getElementById('citiOfUsa');
const citiOfUkr = document.getElementById('citiOfUkr')
const arrCity = [citiOfUsa, citiOfUkr];
for (let i = 0; i < arrCity.length; i++) {
    arrCity[0].style.color = 'pink';
    arrCity[1].style.color = 'blue';
}


