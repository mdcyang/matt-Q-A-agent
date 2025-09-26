import React, { useEffect, useRef } from "react";

export const ChatWindow: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Keep the chat container scrolled to bottom when its children change
  // (this only affects the container's own scroll, not the page)
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      // only auto-scroll if the user is already near the bottom to avoid fighting manual scroll
      const nearBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight < 40;
      if (nearBottom) {
        container.scrollTop = container.scrollHeight;
      }
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Safety: neutralize in-widget hash links so they don't move the page,
  // but do NOT block normal scrolling.
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const preventAnchorNav = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor && container.contains(anchor)) {
        e.preventDefault();
      }
    };
    container.addEventListener("click", preventAnchorNav);

    // If any code tries to set the page hash (e.g., #chat), immediately clear it
    const onHashChange = () => {
      const h = location.hash;
      if (h) history.replaceState(null, "", window.location.pathname + window.location.search);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      container.removeEventListener("click", preventAnchorNav);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      // This ID is just a container identifier; we do NOT link to it with #hash anchors
      id="n8n-chat-fullscreen"
      ref={chatContainerRef}
      className="w-full h-full bg-white rounded-2xl"
      style={{
        height: "100%",
        minHeight: 320,
        maxHeight: 560,
        // Important: allow normal scroll chaining so you can still scroll the page
        // while the chat input is focused.
        overscrollBehavior: "auto",
      }}
    >
      <iframe
        src="https://n8n-chat.vercel.app"
        title="Chat Window"
        className="w-full h-full border-0 rounded-2xl"
        // keep this permissive for paste functionality; doesn't affect scrolling
        allow="clipboard-write; clipboard-read"
      />
    </div>
  );
};

export default ChatWindow;
