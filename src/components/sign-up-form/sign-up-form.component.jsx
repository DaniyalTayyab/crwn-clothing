import { async } from "@firebase/util";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormFields({ ...formFields, [name]: value }); // to update the appropriate field we use []
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("Password not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else {
        console.log("error while signing up", error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
