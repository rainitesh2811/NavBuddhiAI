import { useEffect, useState } from "react";
import { supabase } from "../../supabaseclient";

export default function Payment() {
  const [user, setUser] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const price = params.get("price");
  const category = params.get("category");

  // ✅ get logged-in user
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  // ✅ load Razorpay script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const loadRazorpay = async () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }

    try {
      // 🔐 create order (authorized)
      const res = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Number(price.replace("₹", "")),
            userId: user.id,
            courseTitle: title,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "Failed to create order");
        return;
      }

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Digital Skill Sathi",
        description: title,
        order_id: order.id,

        handler: async function (response) {
          // 🔐 verify payment
          const verifyRes = await fetch(
            "http://localhost:5000/api/payment/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: user.id,
                courseTitle: title,
                category,
                amount: Number(price.replace("₹", "")),
              }),
            }
          );

          if (verifyRes.ok) {
            alert("Payment successful 🎉 Course unlocked!");
          } else {
            alert("Payment verification failed");
          }
        },

        theme: { color: "#0F2C54" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full space-y-4">

        <h2 className="text-2xl font-bold">Course Payment</h2>

        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Course:</strong> {title}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Price:</strong> {price}</p>
        </div>

        <button
          onClick={loadRazorpay}
          className="w-full py-3 bg-black text-white rounded-md"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
