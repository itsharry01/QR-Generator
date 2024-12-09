document.addEventListener('DOMContentLoaded', function () {
    // Get form and input elements
    const qrForm = document.getElementById('qrForm');
    const inputField = document.getElementById('data');
    const qrCodeContainer = document.getElementById('qrcode');

    // Listen for form submission
    qrForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const data = inputField.value.trim();

        // Clear any previous QR code
        qrCodeContainer.innerHTML = "";

        // Check if input is empty
        if (data === "") {
            alert("Please enter text or URL to generate a QR code!");
            return;
        }

        // Generate QR Code using the QRCode library
        QRCode.toCanvas(qrCodeContainer, data, function (error) {
            if (error) {
                console.error("Error generating QR Code:", error);
            } else {
                console.log("QR Code generated successfully!");
            }
        });
    });
});
