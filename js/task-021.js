// ========== Події сабміта і форми ====================
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formElements = event.currentTarget.elements;

  // console.dir(formElements);
  // console.log('це сабміт форми');

  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;

  // const formData = {
  //   mail,
  //   password,
  //   subscription,
  // };
  // console.log(formData);
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
    
  });

}
 




