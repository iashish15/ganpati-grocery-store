export const OWNER_WHATSAPP = "919506202625";

export function buildWhatsAppMessage(cartItems) {
  if (!cartItems || cartItems.length === 0) return "";

  const lines = cartItems.map((item) => `  - ${item.name}`);

  const message = [
    "*GANPATI KIRANA STORE*",
    "Maryadpur | Est. 1985",
    "----------------------------",
    "",
    "*New Order Request*",
    "",
    "*Items Required:*",
    ...lines,
    "",
    `*Total Items:* ${cartItems.length}`,
    "",
    "----------------------------",
    "Kindly confirm availability and quantity at your earliest.",
    "",
    "*Note:* If you do not receive a confirmation message,",
    "please call directly on: *+91 95062 02625*",
    "",
    "Thank you.",
  ].join("\n");

  return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
