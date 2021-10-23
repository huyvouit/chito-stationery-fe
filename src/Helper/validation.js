export const Validation = (registerForm) => {
  let errors = {};
  console.log("run valiedate");

  //validate username
  if (registerForm.username.length === 0) {
    console.log("username troongs");
    errors.username = "Please enter your username.";
  } else if (
    registerForm.username.length < 3 ||
    registerForm.username.length > 35
  ) {
    console.log("username sai");
    errors.username = "Username must be from 3 to 35 character.";
  }

  //validate email
  if (registerForm.email.length === 0) {
    console.log("email troongs");
    errors.email = "Please enter your email.";
  } else if (!/\S+@\S+/.test(registerForm.email)) {
    console.log("email sai");
    errors.email = "Email is invalid.";
  }

  //validate password
  if (registerForm.password.length === 0) {
    console.log("pass troongs");
    errors.password = "Please enter your password.";
  } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(registerForm.password)) {
    console.log("pass sai");
    errors.password =
      "Password must have character, number and at least 6 characters";
  }
  console.log("valie err:", errors);
  return errors;
};
