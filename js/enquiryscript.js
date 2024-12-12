// Enquiry Form Script

// Update the minimum checkout date based on the selected check-in date
function updateCheckoutMinDate() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout");
    checkout.disabled = false;
    checkout.min = checkin; // Ensure check-out date cannot be before check-in date
}

// Handle form submission and send details to WhatsApp
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const rooms = document.getElementById("rooms").value;
    const guests = parseInt(document.getElementById("guests").value, 10); // Parse as an integer
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // Validate guest count (must be at least 1)
    if (guests < 1 || isNaN(guests)) {
        alert("Number of guests must be at least 1.");
        return;
    }

    // Format the WhatsApp message
    const message = `Hey May Villa Team, I would like to make an enquiry:%0a` +
        `Check-in Date: ${checkin}%0a` +
        `Check-out Date: ${checkout}%0a` +
        `Room: ${rooms}%0a` +
        `No. of Guests: ${guests}%0a` +
        `Name: ${name}%0a` +
        `Email: ${email}%0a` +
        `Phone: ${phone}`;

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/918524035315?text=${message}`;
    window.location.href = whatsappURL;
}
