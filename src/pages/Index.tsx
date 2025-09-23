import { MadeWithDyad } from "@/components/made-with-dyad";
import { ChatWindow } from "@/components/ChatWindow";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <ChatWindow />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;