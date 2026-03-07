export const companyConfig = {
    name: "Adam Tours & Travels",
    phone: "+91 XXXXX XXXXX", // TODO: Replace with your actual phone number
    phoneSecondary: "+91 XXXXX XXXXX", // TODO: Replace with secondary phone
    email: "bookings@adamtours.com", // TODO: Replace with your business email
    emailSupport: "support@adamtours.com", // TODO: Replace with support email
    address: "[YOUR_OFFICE_ADDRESS_HERE], Kerala, India", // TODO: Update office address
    whatsapp: "91XXXXXXXXXX", // TODO: Replace with WhatsApp number (digits only)
    googleMapsUrl: "https://maps.app.goo.gl/example", // TODO: Link to your Google Maps listing
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.311756535574!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514ab3e3c5%3A0x6fb86b51c890bf7c!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708450000000!5m2!1sen!2sin", // TODO: Update Map Embed URL
    social: {
        facebook: "https://facebook.com/adamtours",
        instagram: "https://instagram.com/adamtours",
    }
};

export const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};
