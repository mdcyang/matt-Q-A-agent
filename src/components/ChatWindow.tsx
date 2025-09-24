import React, { useEffect, useRef } from "react";

export const ChatWindow: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Keep the chat iframe scrolled to bottom
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      container.scrollTop = container.scrollHeight;
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Prevent anchor jumps, hash changes, and scroll chaining
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    // Stop in-widget "#" links from scrolling page
    const preventAnchorNav = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor && container.contains(anchor)) {
        e.preventDefault();
      }
    };
    container.addEventListener("click", preventAnchorNav);

    // Prevent scroll chaining to the page
    const stopScrollChain = (e: WheelEvent) => {
      e.stopPropagation();
    };
    container.addEventListener("wheel", stopScrollChain, { passive: false });

    return () => {
      container.removeEventListener("click", preventAnchorNav);
      container.removeEventListener("wheel", stopScrollChain);
    };
  }, []);

  // Placeholder chat UI
  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full bg-gray-100 rounded-xl shadow-inner overflow-y-auto p-4 flex flex-col"
      style={{ minHeight: 320, minWidth: 320, maxHeight: 560, maxWidth: 530 }}
    >
      {/* Replace this with your actual chat iframe or chat UI */}
      <div className="flex-1 flex flex-col justify-end">
        <div className="text-gray-500 text-center my-auto">
          Chat agent coming soon!
        </div>
      </div>
    </div>
  );
};