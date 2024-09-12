import {  useState } from "react";
import useAuth from "../hooks/useAuth";


const ResetPasswordModal = () => {
    const {forgetPass} = useAuth()
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    forgetPass()
  };
 
  return (
    <div>
      <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
      <dialog id="my_modal_2" className="modal">
        <div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
        {/* Close button without wrapping in a form */}
        <button onClick={() => document.getElementById("my_modal_2").close()}>
          Close
        </button>
      </dialog>
    </div>
  );
};

export default ResetPasswordModal;
