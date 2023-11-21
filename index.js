// Function to initialize the user table on page load
function initializeUserTable() {
    const userTableBody = document.getElementById('userTableBody');

    // Loop through localStorage items with keys starting with 'user_'
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith('user_')) {
            const userData = JSON.parse(localStorage.getItem(key));

            if (userData) {
                addRowToTable(userTableBody, userData);
            }
        }
    }
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    const dob = new Date(form.dob.value);
    const age = calculateAge(dob);

    // Validate age
    if (!isValidAge(age)) {
        alert('Age should be between 18 and 55.');
        return;
    }

    const userKey = 'user_' + Date.now();
    const userData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        dob: form.dob.value,
        acceptedTerms: form.acceptedTerms.checked ? 'Yes' : 'No', // Store 'Yes' or 'No'
    };

    // Save user data to localStorage
    saveUserData(userKey, userData);

    // Add the user data to the table
    addRowToTable(document.getElementById('userTableBody'), userData);

    // Reset the form after submission
    form.reset();
}

// Function to save user data to localStorage
function saveUserData(key, userData) {
    localStorage.setItem(key, JSON.stringify(userData));
}

// Function to calculate age based on date of birth
function calculateAge(dateOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - dateOfBirth.getFullYear();
}

// Function to check if the age is within the valid range
function isValidAge(age) {
    return age >= 18 && age <= 55;
}

// Function to add a new user row to the table
function addRowToTable(tableBody, userData) {
    const newRow = tableBody.insertRow();

    // Define a consistent style for all cells
    const cellStyle = 'border border-gray-300 p-2';

    // Add cells for each user data property
    ['name', 'email', 'password', 'dob', 'acceptedTerms'].forEach((property) => {
        const cell = newRow.insertCell();
        cell.textContent = userData[property];
        cell.className = cellStyle;
    });
}

// Add event listeners after DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeUserTable);

// Get the reference to the form
const form = document.getElementById('registrationForm');

// Add event listener for form submission
form.addEventListener('submit', handleFormSubmission);

// Function to initialize the user table on page load
function initializeUserTable() {
    const userTableBody = document.getElementById('userTableBody');

    // Clear existing table rows
    clearTable(userTableBody);

    // Loop through localStorage items with keys starting with 'user_'
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith('user_')) {
            const userData = JSON.parse(localStorage.getItem(key));

            if (userData) {
                addRowToTable(userTableBody, userData);
            }
        }
    }
}

// Function to clear the table
function clearTable(tableBody) {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

// ... (rest of the code remains unchanged)
