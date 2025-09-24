import { ChatWindow } from "@/components/ChatWindow";

// Responsive sizes: scale down smoothly, never cut off
const IMAGE_BOX_MAX_WIDTH = 530;
const IMAGE_BOX_MAX_HEIGHT = 560;
const IMAGE_BOX_MIN_WIDTH = 320;
const IMAGE_BOX_MIN_HEIGHT = 320;

const workflowImages = [
  "/src/assets/Orchestration.png",
  "/src/assets/Q&A Agent.png",
  "/src/assets/Calendar Agent.png",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8f6f3] py-8">
      <header className="w-full max-w-6xl mx-auto mb-8">
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
      <main
        className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mx-auto px-2"
        style={{
          maxWidth: `min(100vw, ${2 * IMAGE_BOX_MAX_WIDTH + 64}px)`,
        }}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <div
            className="bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden flex items-center justify-center"
            style={{
              width: "clamp(320px, 45vw, 530px)",
              height: "clamp(320px, 63vw, 560px)",
              minWidth: IMAGE_BOX_MIN_WIDTH,
              minHeight: IMAGE_BOX_MIN_HEIGHT,
              maxWidth: IMAGE_BOX_MAX_WIDTH,
              maxHeight: IMAGE_BOX_MAX_HEIGHT,
            }}
          >
            <img
              src="/src/assets/matt-yang.png"
              alt="Matt Yang smiling with pizzas"
              className="w-full h-full object-cover rounded-2xl"
              style={{ background: "#f8f6f3" }}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full" id="chat">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              width: "clamp(320px, 45vw, 530px)",
              height: "clamp(320px, 63vw, 560px)",
              minWidth: IMAGE_BOX_MIN_WIDTH,
              minHeight: IMAGE_BOX_MIN_HEIGHT,
              maxWidth: IMAGE_BOX_MAX_WIDTH,
              maxHeight: IMAGE_BOX_MAX_HEIGHT,
            }}
          >
            <ChatWindow />
          </div>
        </div>
      </main>
      {/* Spacer for mobile: ensures info section never overlaps chat window */}
      <div className="block md:hidden" style={{ minHeight: 24 }}></div>
      {/* Info Section */}
      <section
        className="w-full flex flex-col items-center bg-white rounded-2xl shadow-lg mt-6 md:mt-12 px-4 sm:px-8 py-10"
        style={{
          maxWidth: `min(100vw, ${2 * IMAGE_BOX_MAX_WIDTH + 64}px)`,
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Building an Orchestration Agent for Q&amp;A and Calendar Booking
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl">
          I designed and deployed a multi-agent system that can both answer questions about me and assist with booking intro calls directly on my calendar.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-blue-700">Architecture</h3>
            <p className="text-gray-700 mb-3">
              The solution is built around an <b>Orchestration Agent</b> that intelligently routes requests to specialized sub-agents:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-3 space-y-1">
              <li>Q&amp;A Agent – handles questions about me using RAG (retrieval-augmented generation).</li>
              <li>Calendar Agent – checks availability and books meetings in Google Calendar.</li>
            </ol>
            <p className="text-gray-700">
              The orchestration agent ensures that the correct tool is invoked based on user intent, rather than overloading one model with multiple roles.
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-blue-700">Core Components</h3>
            <div className="mb-2">
              <span className="font-bold">Orchestration Agent:</span>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Built with OpenAI’s LLM as the underlying chat model.</li>
                <li>Uses a Simple Memory module for context across turns.</li>
                <li>Tools: Q&amp;A Agent, Calendar Agent, Think Tool (for reasoning).</li>
                <li>Prompting strategy: orchestrator only routes, never executes tasks.</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-bold">Q&amp;A Agent (with RAG):</span>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Docs uploaded from Google Drive, chunked &amp; embedded with OpenAI, stored in vector DB.</li>
                <li>Retrieves relevant chunks for grounded answers.</li>
                <li>Prompt ensures professional, on-topic responses.</li>
              </ul>
            </div>
            <div>
              <span className="font-bold">Calendar Agent:</span>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Checks availability and books via Google Calendar (OAuth secured).</li>
                <li>Never commits to availability without checking.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-blue-700">Deployment</h3>
            <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
              <li>Embedded via CDN onto a website built with Dyad’s Vibe coding environment.</li>
              <li>Recruiters can ask questions (Q&amp;A agent) and book intro calls (Calendar agent).</li>
            </ul>
            <p className="text-gray-700">
              This creates a seamless, interactive experience that demonstrates my technical abilities while making it easy for recruiters to connect with me.
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-blue-700">Key Technical Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Agent orchestration: Decoupled routing logic ensures clean separation of concerns.</li>
              <li>RAG (vector search): Provides grounded, context-aware answers.</li>
              <li>OAuth integration: Secured Google Calendar access for real scheduling.</li>
              <li>Memory management: Maintains natural, flowing conversations across turns.</li>
              <li>Web deployment: Embedded agent on a public-facing site with minimal developer overhead.</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-6 text-blue-700">Agent Workflow</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {workflowImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Agent workflow step ${idx + 1}`}
                className="rounded-lg shadow-md max-h-80 object-contain bg-gray-100 border border-gray-200"
                style={{ maxWidth: 420 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;