const btn = document.getElementById("btn");
const birthday = document.getElementById("dob");
const result = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthday.value;
    const age = getAge(birthdayValue);
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    }
    else if(age < 2){
        
        result.innerText = `Your age is ${age} year old.`
    }
    else {
        result.innerText = `Your age is ${age} years old.`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }
    return age
}

btn.addEventListener("click", calculateAge)