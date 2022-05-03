const refs = {
    form: document.querySelector(".login-form"),
    inputEmail: document.getElementsByName('email'),
    inputPassword: document.getElementsByName('password'),
    submit: document.querySelector('[type="submit"]'),
}

let formObject = {};
// console.log(refs.inputEmail);
// console.log(refs.inputPassword);
// console.log(refs.submit);
refs.form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    formObject.email = email.value;
    formObject.password = password.value;
   
       if (email.value === "" || password.value === "") {
        alert("Всі поля мають бути заповнені!");
        
    } else 
    {
        // console.log(`Email: ${ formObject.email }, Password: ${formObject.password}`);
        console.log(formObject);
    }

     event.currentTarget.reset();

}
