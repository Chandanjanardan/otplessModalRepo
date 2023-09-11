import { useEffect } from "react";
import "./Login.css"
const Login = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://otpless.com/auth.js";
      script.id = "otplessIdScript";
      document.body.appendChild(script)
      window.otpless = (otplessUser) => {
        console.log((JSON.stringify(otplessUser)));
        // Your code here
      };
      return () => {
        const divid = document.getElementById("otplessIdScript");
        document.body.removeChild(divid);
      };
    }, []);
  
    const openModal = () =>{
      window.otplessInit()
      const modalContainer = document.getElementById('modalContainer');
      const modal = document.getElementById('otpless-login-page')
      modalContainer.style.display = 'flex';
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    };
  
    const closeModal = (e) => {
      const modalContainer = document.getElementById('modalContainer');
      if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    };
    return (
      <div>
        <div class="modal-container" id="modalContainer" onClick={closeModal}>
          <div className="modal">
            <div id="otpless-login-page" className="login"></div>
          </div>
        </div>
        <button id="loginBtn" onClick={openModal}>Login</button>
      </div>
    );
  };
  

  export default Login