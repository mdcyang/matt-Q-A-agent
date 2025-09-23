import { MadeWithDyad } from "@/components/made-with-dyad";
import { ChatWindow } from "@/components/ChatWindow";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f6f3] py-8">
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#1a1a1a] drop-shadow-lg">
            I'm Matt Yang <span className="inline-block animate-bounce">🍕</span>
            <br />
            <span className="text-xl font-semibold text-[#3b82f6]">and this is my Agent</span>
          </h1>
          <img
            src="/src/assets/matt-yang.png"
            alt="Matt Yang smiling with pizzas"
            className="rounded-3xl w-full object-cover shadow-xl border-4 border-white"
            style={{ maxHeight: 400 }}
          />
        </div>
        <ChatWindow />
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;