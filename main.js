import 'normalize.css';
import './index.less';

let myButton = document.getElementById('form-bottom__button');
let invalidCityInput = document.getElementById('invalid-city-input');
let invalidFamNameInput = document.getElementById('invalid-fam-name-input');
let select = document.getElementById('city-select');
let nameInput = document.getElementById('fam-name-input');

//add event listener on form
myButton.addEventListener('click', async _ => {

    let allFieldsIsCorrect = true;
    if (select.value == "") {
        select.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
        invalidCityInput.style.visibility = 'visible';
        allFieldsIsCorrect = false;
    } else {
        select.style.backgroundColor = '#ECF1F7';
        invalidCityInput.style.visibility = 'hidden';
    }

    if (nameInput.value == "") {
        nameInput.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
        invalidFamNameInput.style.visibility = 'visible';
        allFieldsIsCorrect = false;
    } else {
        nameInput.style.backgroundColor = '#ECF1F7';
        invalidFamNameInput.style.visibility = 'hidden';
    }

    if (!allFieldsIsCorrect) return;

         
    const response = await fetch('https://www.wikipedia.org/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            city: select.value,
            name: nameInput.value,
            is_agree: isActiveCheckbox
        })
    })
    .then(console.log('Completed!', response))
    .catch(error => {
        alert(error); // Error: Not Found
    });
});

// scroll user to form
let previewButton = document.getElementById('preview-button');
previewButton.addEventListener('click', function() {
    document.getElementById("Fqno2RbMWY5Iv2apqjvYcQAlU9ds1").scrollIntoView({behavior: "smooth"});
    //window.scrollTo(1000, 1000);
});


// custom checkbox for form
let checkbox = document.getElementById('checkbox');
let checkBoxImage = document.getElementById('checkbox__check-image');
let isActiveCheckbox = false;
checkbox.addEventListener('click', () => {
    if (isActiveCheckbox) {
        checkBoxImage.style.visibility = 'hidden';
        checkbox.style.backgroundColor = '#ECF1F7';
    } else {
        checkBoxImage.style.visibility = 'visible';
        checkbox.style.backgroundColor = '#FFDD2D';
    }
    isActiveCheckbox = !isActiveCheckbox;
});