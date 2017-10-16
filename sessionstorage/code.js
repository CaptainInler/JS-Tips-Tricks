'use strict'


document.addEventListener("DOMContentLoaded", main);


function main() {

    let blabla = JSON.parse(sessionStorage.notiz)
    document.getElementById("title").innerHTML = blabla.firstName;
    document.getElementById("text").innerHTML = blabla.lastName;
}


function save() {

    let person = {};
    person["firstName"] = document.getElementById("noteInputTitle").value;
    person["lastName"] = document.getElementById("noteInputText").value;

    sessionStorage.notiz = JSON.stringify(person);

}