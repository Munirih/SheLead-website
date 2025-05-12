const form = document.getElementById("volunteer-form");

function handleFormSubmit(event) {
     
    const firstName = document.querySelector("#volunteer-name").value;
    const lastName = document.querySelector("#volunteer-surame").value;        
    const email = document.querySelector("#volunteer-email").value;
    const role = document.querySelector("#volunteer-role").value;
    const message = document.querySelector("#volunteer-message").value;
    const submittedData = document.querySelector(".contact");

    event.preventDefault();
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        message: message,
    };

    
     submittedData.innerHTML = `
        <div id="submitted-data">
            <h2>Confirming your inputs</h2>
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Role:</strong> ${userData.role}</p>
            <p><strong>Message:</strong> ${userData.message}</p>
        </div>
    `;


    setTimeout(() => {
        window.location.href = "confirmation.html"; 
    }, 15000);
}

form.addEventListener("submit", handleFormSubmit);