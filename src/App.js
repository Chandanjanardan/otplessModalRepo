
import './App.css';
import {useEffect} from "react"

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script);
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      // Your code here
    };
    return () => {
      const divid = document.getElementById("otplessIdScript");
      document.body.removeChild(divid);
    };
  }, []);

  const openModal = () => {
    window.otplessInit();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };

  const closeModal = (e) => {
    const modalContainer = document.getElementById("modalContainer");
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <div id="modalContainer" className="modal-container" onClick={closeModal}>
        <div id="otpless-login-page" className="modal">
         
        </div>
      </div>
    </>
  );
}

export default App;
