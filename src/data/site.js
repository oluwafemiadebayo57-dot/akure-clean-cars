// Central config — one place to update the dealer's real details
export const site = {
  brandName: "Akure Clean Cars",
  phone: "+2349150759847",       // from your packaging: 09150759847
  phoneDisplay: "0915 075 9847",
  whatsapp: "2349150759847",     // no + sign, no leading zeros
  email: "hello@akurecleancars.com",
  address: "Oba-Ile Road, Akure, Ondo State",
};

/**
 * Build a WhatsApp link with an optional pre-filled message.
 * @param {string} message — the prefilled text (URL-encoded automatically)
 * @returns {string} full wa.me link
 */
export const whatsappLink = (message = "") => {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};