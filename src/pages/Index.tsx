import { ChatWindow } from "@/components/ChatWindow";

// Responsive sizes: scale down smoothly, never cut off
const IMAGE_BOX_MAX_WIDTH = 530;
const IMAGE_BOX_MAX_HEIGHT = 560;
const IMAGE_BOX_MIN_WIDTH = 320;
const IMAGE_BOX_MIN_HEIGHT = 320;

const workflowImages = [
  "/images/orchestration.png",
  "/images/qna-agent.png",
  "/images/calendar-agent.png",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8f6f3] py-8">
      <header className="w-full max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1a1a1a] drop-shadow-lg">
          I'm Matt Yang <span className="inline-block animate-bounce">🍕</span>
          <span className="ml-2 text-xl font-semibold">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("chat")
                  ?.scrollIntoView({ behavior: "auto", block: "start" })
              }
              className="text-[#3b82f6] hover:underline"
              style={{ textDecorationThickness: 2 }}
            >
              and this is my Agent
            </button>
          </span>
        </h1>
      </header>

      <main
        className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mx-auto px-2"
        style={{
          maxWidth: `min(100vw, ${2 * IMAGE_BOX_MAX_WIDTH + 64}px)`,
        }}
      >
        <div
