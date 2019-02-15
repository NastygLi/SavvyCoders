
        var namechecker = function () {
            var name = prompt("What is your name");

            if (name === "") {

                name = prompt("Forreal Doe");
            } else {
                document.querySelector("h1").textContent = `Welcome ${name}`;
            }
        }
namechecker();
