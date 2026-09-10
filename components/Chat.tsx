"use client";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { ToolCard } from "./ToolCard";

export function Chat() {
  const { messages, sendMessage, status, stop, error } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(true);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setPinned(el.scrollHeight - el.scrollTop - el.clientHeight < 40);
  }

  useEffect(() => {
    if (pinned) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, pinned]);

  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="mx-auto flex h-[80dvh] max-w-2xl flex-col p-4">
      <div ref={scrollRef} onScroll={onScroll} className="relative flex-1 space-y-3 overflow-y-auto pb-4">
        {messages.length === 0 && (
          <p className="text-sm text-stone-500">
            Ask me anything — &quot;what&apos;s good with coffee?&quot;, &quot;how much is the red velvet?&quot;, &quot;something under Rs 300?&quot;
          </p>
        )}
        {messages.map((m) => (
          <div key={m.id}
            className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-2 text-sm ${
              m.role === "user" ? "ml-auto bg-stone-900 text-amber-50" : "bg-white text-stone-900 shadow-sm"
            }`}>
            {m.parts.map((part, i) => {
              if (part.type === "text") return <span key={i}>{part.text}</span>;
              if (part.type === "tool-getMenuItem") return <ToolCard key={i} part={part} />;
              return null;
            })}
          </div>
        ))}
        {status === "submitted" && (
          <div className="max-w-[85%] rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
            <span className="animate-pulse">●●●</span>
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="mb-2 rounded bg-red-50 px-3 py-2 text-sm text-red-700">
          Something went wrong talking to the assistant.
          <button onClick={() => window.location.reload()} className="ml-2 underline">Reload</button>
        </p>
      )}

      {!pinned && (
        <button
          onClick={() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); setPinned(true); }}
          className="mx-auto -mt-2 mb-2 rounded-full border bg-white px-3 py-1 text-xs shadow">
          ↓ Jump to latest
        </button>
      )}

      <form onSubmit={(e) => { e.preventDefault(); if (!input.trim() || busy) return; sendMessage({ text: input }); setInput(""); }}
        className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Ask HappyPie…" aria-label="Chat message"
          className="min-w-0 flex-1 rounded border bg-white px-3 py-2 text-sm" />
        {busy ? (
          <button type="button" onClick={stop} className="rounded bg-red-700 px-4 py-2 text-sm text-white">Stop</button>
        ) : (
          <button type="submit" className="rounded bg-amber-700 px-4 py-2 text-sm text-white">Send</button>
        )}
      </form>
    </div>
  );
}