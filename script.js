// Select elements
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const vweak = document.querySelector(".vweak");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
const requirementList = document.querySelectorAll('.requirement-list li');


const regExpVweak = /[a-z]/;
const regExpWeak = /[A-Z]/;
const regExpMedium = /\d+/;
const regExpStrong = /[!@#$%^&*(),.?":{}|<>]/;

function trigger() {
    const password = input.value;
    let strength = 0;


    [vweak, weak, medium, strong].forEach(el => el.classList.remove("active"));
    requirementList.forEach(li => li.classList.remove('valid'));
    text.textContent = '';
    text.className = 'text';

    if (password) {
        indicator.style.display = "flex";

        if (password.length >= 8) {
            requirementList[0].classList.add('valid');
        }
        if (regExpMedium.test(password)) {
            requirementList[1].classList.add('valid');
        }
        if (regExpVweak.test(password)) {
            requirementList[2].classList.add('valid');
        }
        if (regExpStrong.test(password)) {
            requirementList[3].classList.add('valid');
        }
        if (regExpWeak.test(password)) {
            requirementList[4].classList.add('valid');
        }


        if (password.length >= 8 && regExpVweak.test(password) && regExpWeak.test(password) && regExpMedium.test(password) && regExpStrong.test(password)) {
            strength = 4;
        } else if (regExpWeak.test(password) && regExpMedium.test(password) && regExpStrong.test(password) ||
        regExpVweak.test(password) && regExpMedium.test(password) && regExpStrong.test(password) ||
        regExpVweak.test(password) && regExpWeak.test(password) && regExpStrong.test(password) ||
        regExpVweak.test(password) && regExpWeak.test(password) && regExpMedium.test(password)) {
            strength = 3;
        } else if (regExpWeak.test(password) && regExpMedium.test(password) ||
        regExpMedium.test(password) && regExpStrong.test(password) ||
        regExpWeak.test(password) && regExpStrong.test(password) ||
        regExpVweak.test(password) && regExpMedium.test(password) ||
        regExpVweak.test(password) && regExpWeak.test(password) ||
        regExpVweak.test(password) && regExpStrong.test(password)) {
            strength = 2;
        } else if (regExpVweak.test(password) || regExpWeak.test(password) || regExpMedium.test(password) || regExpStrong.test(password)) {
            strength = 1;
        }


        switch (strength) {
            case 1:
                vweak.classList.add("active");
                text.textContent = "Your password is too weak";
                text.classList.add("vweak");
                break;
            case 2:
                vweak.classList.add("active");
                weak.classList.add("active");
                text.textContent = "Your password is weak";
                text.classList.add("weak");
                break;
            case 3:
                vweak.classList.add("active");
                weak.classList.add("active");
                medium.classList.add("active");
                text.textContent = "Your password is medium";
                text.classList.add("medium");
                break;
            case 4:
                vweak.classList.add("active");
                weak.classList.add("active");
                medium.classList.add("active");
                strong.classList.add("active");
                text.textContent = "Your password is strong";
                text.classList.add("strong");
                break;
        }

        showBtn.style.display = "block";
        showBtn.onclick = function () {
            if (input.type === "password") {
                input.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.style.color = "#23ad5c";
            } else {
                input.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.style.color = "#000";
            }
        };
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
    }
}
