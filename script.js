// Function to generate the QR code when form is submitted
document.getElementById("qrForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const qrCodeContainer = document.getElementById("qrcode");
    const data = document.getElementById("data").value;

    // Clear any previous QR code
    qrCodeContainer.innerHTML = "";

    // Check if the input is not empty
    if (data.trim() === "") {
        alert("Please enter text or a URL to generate a QR code!");
        return;
    }

    // Generate QR Code using qrcode.js
    QRCode.toCanvas(qrCodeContainer, data, function(error) {
        if (error) {
            console.error("Error generating QR Code:", error);
        } else {
            console.log("QR Code generated successfully!");
        }
    });
});
