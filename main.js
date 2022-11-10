import 'normalize.css';
import './index.less';

let myButton = document.getElementById('form-bottom__button');
let invalidCityInput = document.getElementById('invalid-city-input');
let invalidFamNameInput = document.getElementById('invalid-fam-name-input');
let select = document.getElementById('city-select');
let nameInput = document.getElementById('fam-name-input');
let formCheckbox = document.getElementById('form-checkbox');

//add event listener on form
myButton.addEventListener('click', async _ => {
    console.log(select.value);

    let allFieldsIsCorrect = true;
    if (select.value == "") {
        select.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
        invalidCityInput.style.visibility = 'visible';
        allFieldsIsCorrect = false;
    } else {
        select.style.backgroundColor = '#ECF1F7';
        invalidCityInput.style.visibility = 'hidden';
    }

    console.log(nameInput.value);
    if (nameInput.value == "") {
        nameInput.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
        invalidFamNameInput.style.visibility = 'visible';
        allFieldsIsCorrect = false;
    } else {
        nameInput.style.backgroundColor = '#ECF1F7';
        invalidFamNameInput.style.visibility = 'hidden';
    }

    if (!allFieldsIsCorrect) return;

    try {     
        const response = await fetch('https://www.wikipedia.org/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                city: select.value,
                age: nameInput.value,
                is_agree: formCheckbox.checked
            })
        });
        console.log('Completed!', response);
    } catch(err) {
        console.error(`Error: ${err}`);
    }
});

// scroll user to form
let previewButton = document.getElementById('preview-button');
previewButton.addEventListener('click', function() {
    document.getElementById("Fqno2RbMWY5Iv2apqjvYcQAlU9ds1").scrollIntoView({behavior: "smooth"});
    //window.scrollTo(1000, 1000);
});