import { MadeWithDyad } from "@/components/made-with-dyad";
import { ChatWindow } from "@/components/ChatWindow";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8f6f3] py-8">
      <header className="w-full max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1a1a1a] drop-shadow-lg">
          I'm Matt Yang <span className="inline-block animate-bounce">🍕</span>
          <span className="ml-2 text-xl font-semibold">
            <a
              href="#chat"
              className="text-[#3b82f6] hover:underline"
              style={{ textDecorationThickness: 2 }}
            >
              and this is my Agent
            </a>
          </span>
        </h1>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden max-w-[420px] w-full">
            <img
              src="/src/assets/matt-yang.png"
              alt="Matt Yang smiling with pizzas"
              className="w-full h-[420px] object-contain"
              style={{ background: "#f8f6f3" }}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center" id="chat">
          <ChatWindow />
        </div>
      </main>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;