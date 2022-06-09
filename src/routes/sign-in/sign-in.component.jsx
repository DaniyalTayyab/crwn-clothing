import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    async function go() {
      try {
        const response = await getRedirectResult(auth);
        //   console.log(response);
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      } catch (err) {
        console.log("error with redirect sign in", err);
      }
    }
    go();
  }, []);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      //   console.log(response);
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
