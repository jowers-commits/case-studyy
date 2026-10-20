function calculateAge() {

    let birthdate = new Date(document.getElementById("birthdate").value);
    let today = new Date();

    if (!document.getElementById("birthdate").value) {
        document.getElementById("result").textContent = "--";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();

    let month = today.getMonth() - birthdate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthdate.getDate())
    ) {
        age--;
    }

    document.getElementById("result").textContent =
        age + " years old";
}