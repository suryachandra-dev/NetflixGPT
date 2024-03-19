import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Utils/firebase";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef(undefined);
  let emailID;
  const takeToLoginPage = () => {
    navigate("/");
  };

  const handleResetLink = (e) => {
    e.preventDefault();

    // Navigate to CheckYourMail component with emailRef as a query parameter
    emailID = emailRef?.current?.value;

        sendPasswordResetEmail(auth, emailID)
        .then(() => {
          // Password reset email sent!
          navigate(`/checkyourmail/:${emailID}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    }
    
  return (
    <div className=" w-1/3  mx-auto my-24 p-8 text-center">
      <h1 className=" text-3xl font-bold mb-2">Reset your password</h1>
      <form>
        <p className="mb-2 p-8 mx-4">
          To reset your password, enter the email address you use to log in.
        </p>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border border-black border-opacity-60 rounded-md "
        />
        <button
          onClick={handleResetLink}
          className="bg-[#8EFBF7] w-full p-2   rounded-md mb-2"
        >
          Get reset link
        </button>
      </form>
      {/* {errorMessage && <p className="text-red-700 font-bold">{errorMessage}</p>} */}
      <p>
        Never mind!
        <span
          onClick={takeToLoginPage}
          className="underline hover:no-underline cursor-pointer"
        >
          Take me back to login
        </span>{" "}
      </p>
    </div>
  );
};
export default ForgotPassword;
