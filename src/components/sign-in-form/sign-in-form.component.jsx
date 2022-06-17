import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const SignInWIthGoogle = async () => {
    try {
      await signInWithGooglePopup();
      // await createUserDocumentFromAuth(user); we are no storing user in UserContext
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" onClick={SignInWIthGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
