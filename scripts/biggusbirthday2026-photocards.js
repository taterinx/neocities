const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

const passwordSections = {
    oaoi2s: "card-one",
    o7is0a: "card-two",
    o9i4ii: "card-three",
    is23ia: "card-four",
    t3o9ia: "card-five",
    tsosi9: "card-six",
    isi6i6: "card-seven",
    osoito: "card-eight",
    toisi6: "card-nine",
    oii9ii: "card-ten",
    i9o9to: "card-eleven",
    o7osto: "card-twelve",
    oaoi2sisi6i6o9i4iitoisi6t3o9iai9o9to: "birthday-video"
};

passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide every section
    document.querySelectorAll(".secret-content").forEach(function (section) {
        section.style.display = "none";
    });

    const enteredPassword = passwordInput.value;
    const sectionId = passwordSections[enteredPassword];

    if (sectionId) {
        document.getElementById(sectionId).style.display = "block";
        message.textContent = "";
    } else {
        message.textContent = "Incorrect password.";
    }
});