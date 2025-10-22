import { ChatRequest, ChatResponse } from "../types";
import { http } from "./http";

export async function uploadFile(file: File) {
  const fd = new FormData();
  fd.append("file", file);
  const { data } = await http.post("/api/upload/", fd);
  return data.file; // {id, filename, filepath, isIndexed}
}


export async function sendChatMessage(req: ChatRequest, signal?: AbortSignal): Promise<ChatResponse> {
  const res = await http.post<ChatResponse>("/api/chat/", req, { signal, timeout: 0 });
  return res.data;
}