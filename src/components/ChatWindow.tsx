import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const N8N_CSS_ID = "n8n-chat-style";
const N8N_SCRIPT_ID = "n8n-chat-script";
const N8N_WEBHOOK_URL =
  "https://mattyang8.app.n8n.cloud/webhook/9f9f23bd-17fc-40e8-bd10-f53c42aee42f/chat";

export const ChatWindow: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject CSS if not already present
    if (!document.getElementById(N8N_CSS_ID)) {
      const link = document.createElement("link");
      link.id = N8N_CSS_ID;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // Remove any previous script to allow re-initialization if needed
    const prevScript = document.getElementById(N8N_SCRIPT_ID);
    if (prevScript) {
      prevScript.remove();
    }

    // Inject script if not already present
    if (chatContainerRef.current) {
      const script = document.createElement("script");
      script.id = N8N_SCRIPT_ID;
      script.type = "module";
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        createChat({
          webhookUrl: '${N8N_WEBHOOK_URL}',
          mode: "fullscreen",
          target: "#n8n-chat-fullscreen",
          initialMessages: [
            "Hi there! 👋",
            "What do you want to know about Matt or when do you want to talk with him?"
          ],
          i18n: {
            en: {
              title: "Hi there! 👋",
              subtitle: "Matt built me to answer your questions or book an intro call.",
              footer: "",
              getStarted: "New Conversation",
              inputPlaceholder: "Type your question.."
            }
          }
        });
      `;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Card
      className="w-full h-full flex flex-col shadow-xl"
      style={{
        maxWidth: 530,
        maxHeight: 560,
        minWidth: 320,
        minHeight: 320,
        width: "clamp(320px, 45vw, 530px)",
        height: "clamp(320px, 63vw, 560px)",
        boxShadow:
          "0 4px 24px 0 rgba(0,0,0,0.10), 0 2px 8px 0 rgba(0,0,0,0.08)",
        borderRadius: 0,
      }}
    >
      <CardContent className="p-0 flex-1 flex flex-col">
        <div
          id="n8n-chat-fullscreen"
          ref={chatContainerRef}
          className="w-full h-full bg-white"
          style={{
            height: "100%",
            minHeight: 320,
            maxHeight: 560,
            borderRadius: 0,
            overflow: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        />
      </CardContent>
    </Card>
  );
};