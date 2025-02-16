document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "h") {
        event.preventDefault();
        window.location.replace("/");
    }
    if (event.ctrlKey && event.key === "m") {
        event.preventDefault();
        document.querySelector("header > nav > ul").classList.toggle("show");
    }
});

document.querySelector("header > nav > button:nth-child(1)").addEventListener("click", function () {
    window.location.replace("/");
});

document.querySelector("header > nav > button:nth-child(2)").addEventListener("click", function () {
    document.querySelector("header > nav > ul").classList.toggle("show");
});
document.addEventListener("click", (event) => {
    if (!document.querySelector("header > nav > ul").contains(event.target) && !document.querySelector("header > nav > button:nth-child(2)").contains(event.target)) {
        document.querySelector("header > nav > ul").classList.remove("show");
    }
});

if (window.location.href.includes("employee")) {
    document.getElementById("employee-search").addEventListener("submit", function (event) {
        event.preventDefault();
        const employeeId = document.getElementById("employee-id-input").value.trim();
        searchEmployeeById(employeeId);
    });
    function searchEmployeeById(employeeId) {
        const searchInfo = document.getElementById("employee-search-info");
        const idPattern = /^\d{9}$/;
        searchInfo.textContent = "";
        if (idPattern.test(employeeId)) {
            fetch("/asset/json/employee.json")
                .then((response) => response.json())
                .then((data) => {
                    const employee = data.find((emp) => emp.id === employeeId);
                    if (employee) {
                        displayEmployeeDetails(employee);
                        window.history.pushState({}, "", `?id=${employeeId}`);
                        searchInfo.parentElement.style.display = "none";
                    } else {
                        handleError("Employee data not found!");
                    }
                })
                .catch(() => {
                    handleError("Failed to fetch employee data. Please try again later.");
                });
        } else {
            handleError("Please enter a valid 9-digit numeric Employee ID!");
        }
    }
    function displayEmployeeDetails(employee) {
        document.querySelector('[data-type="employee-detail"]').style.display = "block";
        document.getElementById("employee-name").textContent = employee.name;
        document.getElementById("employee-title").textContent = employee.title;
        document.getElementById("employee-id").textContent = employee.id;
        document.getElementById("employee-status").textContent = employee.status;
        document.getElementById("employee-id-input").value = employee.id;
    }
    function handleError(message) {
        const searchInfo = document.getElementById("employee-search-info");
        searchInfo.textContent = message;
        searchInfo.parentElement.style.display = "block";
        document.querySelector('[data-type="employee-detail"]').style.display = "none";
        window.history.pushState({}, "", "?id=not-found");
    }
    window.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const employeeId = urlParams.get("id");
        if (employeeId) {
            searchEmployeeById(employeeId);
        }
    });
}
