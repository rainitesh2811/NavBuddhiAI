import { useState } from "react";
import agentIcon from "../../Assets/Images/AIagent.jpg";


const AIAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // dummy bot reply (replace later with real AI)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! I'll get back to you on that 😊" },
      ]);
    }, 600);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <button
  onClick={() => setOpen(true)}
  className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl overflow-hidden"
>
  <img
    src={agentIcon}
    alt="AI Assistant"
    className="w-full h-full object-cover"
  />
</button>

      )}

      {/* CHAT POPUP */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col">

          {/* HEADER */}
          <div className="p-3 bg-blue-600 text-white rounded-t-2xl flex justify-between">
            <span className="font-semibold">AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.sender === "user"
                    ? "text-right"
                    : "text-left"
                }
              >
                <span
                  className={
                    m.sender === "user"
                      ? "inline-block bg-blue-100 px-3 py-2 rounded-xl"
                      : "inline-block bg-gray-100 px-3 py-2 rounded-xl"
                  }
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2 outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAgent;
