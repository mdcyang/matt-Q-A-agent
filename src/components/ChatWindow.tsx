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
    container.addEventListener("wheel", stopScrollChain, { passive:
