document.addEventListener('DOMContentLoaded', function () {
    // Get form and input elements
    const qrForm = document.getElementById('qrForm');
    const inputField = document.getElementById('data');
    const qrCodeContainer = document.getElementById('qrcode');

    // Listen for form submission
    qrForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const data = inputField.value.trim(); // Remove any leading/trailing whitespace

        // Clear any previous QR code
        qrCodeContainer.innerHTML = "";

        // Validate input data
        if (data === "") {
            alert("Please enter text or URL to generate a QR code!");
            return;
        }

        // Validate that the input data is a valid string (optional: could extend further)
        if (typeof data !== 'string' || data.length === 0) {
            alert("Invalid data entered. Please provide a valid text or URL.");
            return;
        }

        // Generate QR Code using the QRCode library
        QRCode.toCanvas(qrCodeContainer, data, function (error) {
            if (error) {
                console.error("Error generating QR Code:", error);
                alert("There was an error generating the QR Code. Please check your input.");
            } else {
                console.log("QR Code generated successfully!");
            }
        });
    });
});
