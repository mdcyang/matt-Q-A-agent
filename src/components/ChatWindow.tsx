import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const N8N_CSS_ID = "n8n-chat-style";
const N8N_SCRIPT_ID = "n8n-chat-script";
const N8N_WEBHOOK_URL =
  "https://mattyang8.app.n8n.cloud/webhook/9f9f23bd-17fc-40e8-bd10-f53c42aee42f/chat";

export const ChatWindow: React.FC = () => {
  useEffect(() => {
    // Inject CSS if not already present
    if (!document.getElementById(N8N_CSS_ID)) {
      const link = document.createElement("link");
      link.id = N8N_CSS_ID;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // Inject script if not already present
    if (!document.getElementById(N8N_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = N8N_SCRIPT_ID;
      script.type = "module";
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        createChat({
          webhookUrl: '${N8N_WEBHOOK_URL}'
        });
      `;
      document.body.appendChild(script);
    }

    // No cleanup needed since widget is global and persistent
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Chat with our Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[500px] flex items-center justify-center">
          {/* n8n chat widget will appear as a floating widget on the page */}
          <span className="text-gray-500 text-sm">
            The chat widget will appear in the bottom right corner.
          </span>
        </div>
      </CardContent>
    </Card>
  );
};