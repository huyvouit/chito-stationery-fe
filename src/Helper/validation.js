export const Validation = (registerForm) => {
  let errors = {};
  console.log("run valiedate");

  //validate fullname
  if (!registerForm.fullname) {
    console.log("fullname troongs");
    errors.fullname = "Please enter your fullname.";
  } else if (
    registerForm.fullname.length < 3 ||
    registerForm.fullname.length > 35
  ) {
    console.log("fullname sai");
    errors.fullname = "fullname must be from 3 to 35 character.";
  }

  //validate email
  if (!registerForm.email) {
    console.log("email troongs");
    errors.email = "Please enter your email.";
  } else if (!/\S+@\S+/.test(registerForm.email)) {
    console.log("email sai");
    errors.email = "Email is invalid.";
  }

  //validate password
  if (!registerForm.password) {
    console.log("pass troongs");
    errors.password = "Please enter your password.";
  } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(registerForm.password)) {
    console.log("pass sai");
    errors.password = "Password must have character, number and at least 6.";
  }
  console.log("valie err:", errors);
  return errors;
};
