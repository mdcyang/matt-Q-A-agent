import React, { useEffect, useRef } from "react";

export const ChatWindow: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Keep the chat container scrolled to bottom when new nodes appear,
  // but only if the user is already near the bottom.
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      const nearBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight < 40;
      if (nearBottom) {
        container.scrollTop = container.scrollHeight;
      }
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Neutralize hash/anchor behaviors that cause page jumps,
  // without blocking normal scrolling.
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    // Stop in-widget "#" links from changing the page scroll position
    const preventAnchorNav = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor && container.contains(anchor)) {
        e.preventDefault();
      }
    };
    container.addEventListener("click", preventAnchorNav);

    // If any script (widget or otherwise) sets a location hash, clear it immediately
    const onHashChange = () => {
      if (location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      container.removeEventListener("click", preventAnchorNav);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      id="n8n-chat-fullscreen"
      ref={chatContainerRef}
      className="w-full h-full bg-white rounded-2xl"
      style={{
        height: "100%",
        minHeight: 320,
        maxHeight: 560,
        // Allow normal scroll chaining so you can scroll the page even with the
        // chat input focused. We’re only preventing jump-on-Enter, not scrolling.
        overscrollBehavior: "auto",
      }}
    >
      <iframe
        src="https://n8n-chat.vercel.app"
        title="Chat Window"
        className="w-full h-full border-0 rounded-2xl"
        allow="clipboard-write; clipboard-read"
      />
    </div>
  );
};

export default ChatWindow;
