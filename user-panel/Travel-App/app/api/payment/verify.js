import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { paymentId, orderId, signature } = req.body;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  // Generate expected signature
  const generated_signature = crypto
    .createHmac("sha256", key_secret)
    .update(orderId + "|" + paymentId)
    .digest("hex");

  if (generated_signature === signature) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
}
