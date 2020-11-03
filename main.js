const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

// titleCase field Name
let getFieldLabel = (elem) => {
    let text = elem.parentElement.getElementsByTagName("label")[0].innerText;
    return text;
}

// Check if has any value
let checkRequired = (elems) => {
    elems.forEach((elem) => {
        if (!elem.value.trim().length) {
            showFailure(elem, `${getFieldLabel(elem)} is required!`);
        } else {
            showSuccess(elem);
        }

    })

}

let checkLength = (elems) => {
    elems.forEach((elem) => {

        if (elem[0].value.length < elem[1]) {
            showFailure(elem[0], `${getFieldLabel(elem[0])} can not be shorter than ${elem[1]}.`);
        } else if (elem[0].value.length > elem[2]) {
            showFailure(elem[0], `${getFieldLabel(elem[0])} can not be longer than ${elem[2]}.`);
        } else {
            showSuccess(elem[0]);
        }
    })
}
// Show Failure msg
let showFailure = (elem, msg) => {
    const formControl = elem.parentElement;
    formControl.className = "form-control failure";
    const small = formControl.getElementsByTagName("small")[0];
    small.innerText = msg;
}

// Show Success Outline
let showSuccess = (elem) => {
    const formControl = elem.parentElement;
    formControl.className = "form-control success";
}

// Email Validation
let emailValidation = (email) => {
    let validEmailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (validEmailRegEx.test(email.value)) {
        showSuccess(email);
    } else (
        showFailure(email, `${getFieldLabel(email)} is not valid.`)
    )

}

// Check if value is duplicate
let checkDuplicate = (elem1, elem2) => {
    if (elem1.value === elem2.value) {
        showSuccess(elem1);
        showSuccess(elem2);
    }
    else {
        showFailure(elem2, `${getFieldLabel(elem2)} is not same as ${getFieldLabel(elem1)}.`)
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, repassword]);
    checkLength([
        [username, 8, 32],
        [password, 8, 16]]);
    emailValidation(email);
    checkDuplicate(password, repassword);


})
        // if (!username.value.length) {
        //     showFailure(username, "Username Required!");
        // } else {
        //     showSuccess(username);
        // }

        // if (!email.value.length) {
        //     showFailure(email, "Email Required!");
        // } else {
        //     if (emailValidation(email.value)) {
        //         showSuccess(email);
        //     } else {
        //         showFailure(email, "Enter a vaild Email Address!");
        //     }
        // }

        // if (!password.value.length) {
        //     showFailure(password, "Password Required!");
        // } else {
        //     showSuccess(username);
        // }

        // if (!repassword.value.length) {
        //     showFailure(repassword, "Confirm Password!");
        // } else {
        //     showSuccess(username);
        // }