const step1 = document.querySelector(".step1"),
    step2 = document.querySelector(".step2"),
    step3 = document.querySelector(".step3"),
    emailAddress = document.getElementById("emailAddress"),
    verifyEmail = document.getElementById("verifyEmail"),
    inputs = document.querySelectorAll(".otp-group input"),
    nextButton = document.querySelector(".nextButton"),
    verifyButton = document.querySelector(".verifyButton");

let OTP = "";

window.addEventListener("load", () => {
    emailjs.init("IUXvo5TowxULAJKF-");  // Corrected initialization syntax
    step2.style.display = "none";
    step3.style.display = "none";
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");  // Corrected verifyButton class
});

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;  // Corrected email regex pattern
    if (re.test(email)) {
        nextButton.classList.remove("disable");
    } else {
        nextButton.classList.add("disable");
    }
};

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

inputs.forEach((input) => {
    input.addEventListener("keyup", function (e) {
        if (this.value.length >= 1) {
            e.target.value = e.target.value.substr(0, 1);
        }

        if (inputs[0].value != "" && inputs[1].value != ""
            && inputs[2].value != "" && inputs[3].value != "") {
            verifyButton.classList.remove("disable");
        } else {
            verifyButton.classList.add("disable");
        }

    });
});

const serviceID = "service_5u5lb5m";  // Replace with your actual service ID
const templateID = "template_o5ai42j";  // Replace with your actual template ID

OTP = generateOTP();

nextButton.addEventListener("click", () => {

    nextButton.innerHTML = "&#9889; sending...";

    let templateParameters = {
        from_name: "thadijoshua@gmail.com",  // You should populate this with actual data
        OTP: OTP,       // You should populate this with actual data
        message: "Please check the OTP",   // You should populate this with actual data
        reply_to: emailAddress.value,
    };

    emailjs.send(serviceID, templateID, templateParameters)
        .then((res) => {
            console.log("Email sent successfully:", res);
            nextButton.innerHTML = "Next &rarr";
            step1.style.display = "none";
            step2.style.display = "block";
            step3.style.display = "none";
        })
        .catch((err) => {
            console.error("Error sending email:", err);
        });
});

verifyButton.addEventListener("click", () => {
    let values = "";
    inputs.forEach((input) => {
        values += input.value;
    });

    if (OTP == values) {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
    } else {
        verifyButton.classList.add("error-shake")
    }

    setTimeout(() => {
        verifyButton.classList.remove("error-shake")
    }, 1000);

});

function changeMyEmail() {
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
}