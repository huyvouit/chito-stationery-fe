export const Validation = (registerForm) => {
  let errors = {};
  console.log("run valiedate");

  //validate fullname
  if (!registerForm.fullname) {
    errors.fullname = "Please input your fullname.";
  } else if (
    registerForm.fullname.length < 3 ||
    registerForm.fullname.length > 35
  ) {
    errors.fullname = "fullname must be from 3 to 35 character.";
  }

  //validate email
  if (!registerForm.email) {
    errors.email = "Please input your email.";
  } else if (!/\S+@\S+/.test(registerForm.email)) {
    errors.email = "Email is invalid.";
  }

  //validate password
  if (!registerForm.password) {
    errors.password = "Please input your password.";
  } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(registerForm.password)) {
    errors.password = "Password must have character, number and at least 6.";
  }

  return errors;
};
