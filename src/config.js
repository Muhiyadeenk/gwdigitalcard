// ============================================================
//  Golden Wings — site configuration
//  Edit the values in this file only. No other code changes needed.
// ============================================================

// ---- INSTAGRAM -------------------------------------------------
// Official Instagram profile. To disable the button again, set this to
// "ADD_YOUR_INSTAGRAM_URL" and it shows "Instagram profile coming soon."
export const INSTAGRAM_URL = "https://www.instagram.com/goldenwings.ae/";

// ---- WEBSITE ---------------------------------------------------
export const WEBSITE_URL = "https://www.goldenwingsac.com/uae";

// ---- WHATSAPP --------------------------------------------------
export const WHATSAPP_NUMBER = "971569955748"; // +971 56 995 5748
export const WHATSAPP_MESSAGE =
  "Hello Golden Wings, I would like to know more about your services.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// ---- COUNTRY WEBSITES ------------------------------------------
// Use "#" for countries that do not have an official link yet.
// Those options stay disabled until a real https:// link is added.
export const COUNTRY_LINKS = {
  India: "#",
  UAE: "https://www.goldenwingsac.com/uae",
  KSA: "#",
  Oman: "#",
};

// Display order for the country lists.
export const COUNTRIES = [
  { key: "India", label: "INDIA" },
  { key: "UAE", label: "UAE" },
  { key: "KSA", label: "KSA" },
  { key: "Oman", label: "OMAN" },
];

// A link counts as configured only if it is a real web address.
export const isConfigured = (url) => /^https?:\/\//i.test(url || "");
