var name;

var nameChecker = function nameChecker() {
    name = prompt("What is your name");
};

nameChecker();

var blankChecker = function blankChecker() {
    if (name === '') {
        name = prompt("Forreal Doe");
    blankChecker();
    }

    document.querySelector("h1").textContent = `Welcome ${name}`;
}

blankChecker();
