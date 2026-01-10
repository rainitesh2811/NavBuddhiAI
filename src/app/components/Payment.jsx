import { useEffect } from "react";

export default function Payment() {
  const params = new URLSearchParams(window.location.search);

  const title = params.get("title");
  const price = params.get("price");
  const category = params.get("category");

  const loadRazorpay = async () => {
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(price.replace("₹", "")),
      }),
    });

    const order = await res.json();

    const options = {
      key: "RAZORPAY_KEY_ID", // test key
      amount: order.amount,
      currency: "INR",
      name: "Digital Skill Sathi",
      description: title,
      order_id: order.id,
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      },
      theme: {
        color: "#0F2C54",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
