import { ChatWindow } from "@/components/ChatWindow";

const IMAGE_BOX_WIDTH = 650; // px (30% wider)
const IMAGE_BOX_HEIGHT = 750; // px (50% taller)

const workflowImages = [
  // Replace these with your actual image paths
  "/src/assets/agent-orchestration.png",
  "/src/assets/qa-agent.png",
  "/src/assets/calendar-agent.png",
];

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
      <main className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[1400px] mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden"
            style={{
              width: IMAGE_BOX_WIDTH,
              height: IMAGE_BOX_HEIGHT,
              minWidth: IMAGE_BOX_WIDTH,
              minHeight: IMAGE_BOX_HEIGHT,
              maxWidth: IMAGE_BOX_WIDTH,
              maxHeight: IMAGE_BOX_HEIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/src/assets/matt-yang.png"
              alt="Matt Yang smiling with pizzas"
              className="w-full h-full object-cover"
              style={{ background: "#f8f6f3" }}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center" id="chat">
          <div
            style={{
              width: IMAGE_BOX_WIDTH,
              height: IMAGE_BOX_HEIGHT,
              minWidth: IMAGE_BOX_WIDTH,
              minHeight: IMAGE_BOX_HEIGHT,
              maxWidth: IMAGE_BOX_WIDTH,
              maxHeight: IMAGE_BOX_HEIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChatWindow />
          </div>
        </div>
      </main>
      {/* Info Section */}
      <section
        className="w-full flex flex-col items-center bg-white rounded-2xl shadow-lg mt-12 px-8 py-10"
        style={{
          maxWidth: 2 * IMAGE_BOX_WIDTH + 64, // 2x width + gap
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
          Building an Orchestration Agent for Q&amp;A and Calendar Booking
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl">
          I designed and deployed a multi-agent system that can both answer questions about me and assist with booking intro calls directly on my calendar.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Architecture</h3>
            <p className="text-gray-700 mb-2">
              The solution is built around an <b>Orchestration Agent</b> that intelligently routes requests to specialized sub-agents:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-2">
              <li>Q&amp;A Agent – handles questions about me using RAG (retrieval-augmented generation).</li>
              <li>Calendar Agent – checks availability and books meetings in Google Calendar.</li>
            </ol>
            <p className="text-gray-700">
              The orchestration agent ensures that the correct tool is invoked based on user intent, rather than overloading one model with multiple roles.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Core Components</h3>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>
                <b>Orchestration Agent:</b> Built with OpenAI’s LLM, uses memory, and routes to:
                <ul className="list-disc ml-6">
                  <li>Q&amp;A Agent</li>
                  <li>Calendar Agent</li>
                  <li>Think Tool (for reasoning)</li>
                </ul>
                <span className="block mt-1 text-gray-500 text-sm">
                  Prompting strategy: orchestrator only routes, never executes tasks.
                </span>
              </li>
              <li>
                <b>Q&amp;A Agent (with RAG):</b>
                <ul className="list-disc ml-6">
                  <li>Uploads docs from Google Drive, chunks &amp; embeds with OpenAI, stores in vector DB.</li>
                  <li>Retrieves relevant chunks for grounded answers.</li>
                  <li>Prompt ensures professional, on-topic responses.</li>
                </ul>
              </li>
              <li>
                <b>Calendar Agent:</b>
                <ul className="list-disc ml-6">
                  <li>Checks availability and books via Google Calendar (OAuth secured).</li>
                  <li>Never commits to availability without checking.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Deployment</h3>
            <p className="text-gray-700 mb-2">
              The final agent was embedded via CDN directly onto a website I built using Dyad’s Vibe coding environment.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Recruiters can ask questions (Q&amp;A agent)</li>
              <li>Book intro calls (Calendar agent)</li>
            </ul>
            <p className="text-gray-700">
              This creates a seamless, interactive experience that demonstrates my technical abilities while making it easy for recruiters to connect with me.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Key Technical Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Agent orchestration: clean separation of concerns</li>
              <li>RAG (vector search): grounded, context-aware answers</li>
              <li>OAuth integration: secure Google Calendar access</li>
              <li>Memory management: natural, flowing conversations</li>
              <li>Web deployment: embedded agent, minimal overhead</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-4">Agent Workflow</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {workflowImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Agent workflow step ${idx + 1}`}
                className="rounded-lg shadow-md max-h-72 object-contain bg-gray-100"
                style={{ maxWidth: 320 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;