"use strict";

document.addEventListener("DOMContentLoaded", ready);

function ready() {

    let elemte = document.getElementById("entry-template")

    let source   = elemte.innerHTML;
    let template = Handlebars.compile(source);

    let context = [{title: "My New Post", body: "This is my first post!"},
        {title: "My old Post", body: "This is my second post!"}
    ];



    let html    = template(context);

    elemte.insertAdjacentHTML('afterend', html);
}


