// import { useEffect } from "react";
import // auth,
// signInWithGoogleRedirect,
"../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function go() {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       //   console.log(response);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     } catch (err) {
  //       console.log("error with redirect sign in", err);
  //     }
  //   }
  //   go();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
