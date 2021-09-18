import { useEffect,useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export const Forgetpassoword = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailvalue, setEmailValue] = useState('');
  const history = useHistory();

  return success ? (
    <div className="content-container">
      <h1> Success </h1>
      <p>check the email for a rest link</p>
    </div>
  ) : (
    <div className="conyemt-container">
      <h1>forget password</h1>
      <p>enter you email and send you a reset link</p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailvalue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <button disable={!emailvalue} onClick={onsubmit}>
        sent reset link
      </button>
    </div>
  );
};
