<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(8px);
            display: none;
            justify-content: center;
            align-items: center;
        }

        .modal {
            height: fit-content;
            width: fit-content;
            border-radius: 10px;
            backdrop-filter: blur(2px);
        }

        button {
            padding: 10px 20px;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div>
        <div class="modal-container" id="modalContainer">
            <div class="modal" id="otpless-login-page">
                <script src="https://otpless.com/auth.js"></script> 
                <script> 
                    function otpless(otplessUser)
                        {alert(JSON.stringify(otplessUser));}
                        </script>
                <p>This is the modal content.</p>
                <button id="closeBtn">Close</button>
            </div>
        </div>
        <button id="loginBtn">Login</button>
    </div>

    <script>
        const openModal = () => {
            const modalContainer = document.getElementById('modalContainer');
            const modal = document.getElementById('otpless-login-page');
            modalContainer.style.display = 'flex';
            modal.style.display = 'block';
        };

        const closeModal = (e) => {
            const modalContainer = document.getElementById('modalContainer');
            if (e.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        };

        const closeBtn = document.getElementById('closeBtn');
        const loginBtn = document.getElementById('loginBtn');

        closeBtn.addEventListener('click', () => {
            const modalContainer = document.getElementById('modalContainer');
            const modal = document.getElementById('otpless-login-page');
            modal.style.display = 'none';
            modalContainer.style.display = 'none';
        });

        loginBtn.addEventListener('click', openModal);
        modalContainer.addEventListener('click', closeModal);
    </script>
</body>
</html>
