import { streamText, convertToModelMessages, stepCountIs, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { CHAT_MODEL, SYSTEM_PROMPT } from "@/lib/ai-config";
import { getMenuItem } from "@/lib/tools";

export async function POST(req: Request) {
  const body = await req.json();
  const messages: UIMessage[] = Array.isArray(body.messages) ? body.messages : [];
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: google(CHAT_MODEL),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
    tools: { getMenuItem },
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse();
}