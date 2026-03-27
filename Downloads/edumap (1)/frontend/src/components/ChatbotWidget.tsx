import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: number;
}

const WELCOME_MESSAGE: Message = {
  role: 'bot',
  text: "👋 Hi! I'm EduMap's AI assistant. Ask me anything about colleges!",
  timestamp: Date.now(),
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    };

  const collegeDatabase = {
  engineering: {
    maharashtra: [
      "IIT Bombay", "COEP Pune", "VJTI Mumbai", "ICT Mumbai",
      "VNIT Nagpur", "MIT WPU Pune", "PICT Pune", "Walchand College",
      "SPIT Mumbai", "DJ Sanghvi", "KJ Somaiya", "Sinhgad College",
      "PCCOE Pune", "VIT Pune", "Fr. CRCE Mumbai"
    ],
    india: [
      "IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kanpur",
      "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati",
      "IISc Bangalore", "BITS Pilani", "NIT Trichy",
      "IIIT Hyderabad", "DTU Delhi", "NSUT Delhi"
    ],
    world: [
      "MIT (USA)", "Stanford University (USA)", "Harvard University (USA)",
      "University of Oxford (UK)", "University of Cambridge (UK)",
      "ETH Zurich (Switzerland)", "Caltech (USA)",
      "University of Toronto (Canada)", "NUS Singapore"
    ]
  },

  medical: {
    india: [
      "AIIMS Delhi", "PGIMER Chandigarh", "CMC Vellore",
      "JIPMER Puducherry", "KGMU Lucknow", "AFMC Pune"
    ],
    world: [
      "Harvard Medical School", "Johns Hopkins University",
      "University of Oxford", "Stanford Medicine"
    ]
  },

  law: {
    india: [
      "NLSIU Bangalore", "NLU Delhi", "NALSAR Hyderabad",
      "WBNUJS Kolkata", "GNLU Gujarat"
    ],
    world: [
      "Harvard Law School", "Yale Law School",
      "Oxford Law", "Cambridge Law"
    ]
  },

  commerce: {
    india: [
      "SRCC Delhi", "St. Xavier’s Mumbai", "Christ University",
      "Loyola College Chennai", "NM College Mumbai"
    ]
  },

  arts: {
    india: [
      "Lady Shri Ram College", "St. Stephen’s College",
      "Fergusson College Pune", "Sophia College Mumbai"
    ]
  }
};

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const lower = trimmed.toLowerCase();

      let reply = "";

      // 🔥 ENGINEERING
      if (lower.includes("engineering") && lower.includes("maharashtra")) {
        reply = "🎓 Top Engineering Colleges in Maharashtra:\n\n" +
          collegeDatabase.engineering.maharashtra.join(", ");
      }

      else if (lower.includes("engineering") && lower.includes("india")) {
        reply = "🇮🇳 Top Engineering Colleges in India:\n\n" +
          collegeDatabase.engineering.india.join(", ");
      }

      else if (lower.includes("engineering") && (lower.includes("world") || lower.includes("abroad"))) {
        reply = "🌍 Top Engineering Colleges Worldwide:\n\n" +
          collegeDatabase.engineering.world.join(", ");
      }

      // 🔥 MEDICAL
      else if (lower.includes("medical") && lower.includes("india")) {
        reply = "🏥 Top Medical Colleges in India:\n\n" +
          collegeDatabase.medical.india.join(", ");
      }

      else if (lower.includes("medical") && (lower.includes("world") || lower.includes("abroad"))) {
        reply = "🌍 Top Medical Colleges Worldwide:\n\n" +
          collegeDatabase.medical.world.join(", ");
      }

      // 🔥 LAW
      else if (lower.includes("law")) {
        reply = "⚖️ Top Law Colleges:\n\nIndia:\n" +
          collegeDatabase.law.india.join(", ") +
          "\n\nWorld:\n" +
          collegeDatabase.law.world.join(", ");
      }

      // 🔥 COMMERCE
      else if (lower.includes("commerce")) {
        reply = "📊 Top Commerce Colleges in India:\n\n" +
          collegeDatabase.commerce.india.join(", ");
      }

      // 🔥 ARTS
      else if (lower.includes("arts")) {
        reply = "🎨 Top Arts Colleges in India:\n\n" +
          collegeDatabase.arts.india.join(", ");
      }

      // DEFAULT
      else {
        reply = "Try asking:\n• Top engineering colleges in Maharashtra\n• Best medical colleges in India\n• Top law colleges";
      }

      const botMsg: Message = {
        role: 'bot',
        text: reply,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMsg]);

    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: "Something went wrong. Try again later.",
          timestamp: Date.now(),
        },
      ]);
    }
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border rounded-xl shadow-lg p-3">

          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">EduMap Chat</span>
            <button onClick={() => setIsOpen(false)}>
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-60 overflow-y-auto mb-3 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] ${
                    msg.role === 'user'
                      ? 'bg-teal-700 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                className="border p-2 flex-1 rounded-md"
                placeholder="Type message..."
              />
            <button
              onClick={() => sendMessage(input)}
              className="bg-amber-500 hover:bg-amber-400 text-white px-3 py-2 rounded-md"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* CHATBOT ICON */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-4 right-4 bg-amber-500 hover:bg-amber-400 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
      </button>
    </>
  );
}