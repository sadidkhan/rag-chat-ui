// src/types.ts
export type UploadedFileMeta = {
  id: string;
  filename: string;
  filepath: string;
  isIndexed: boolean;
};


export interface ChatMessageDTO {
    role: "user" | "assistant" | "system";
    content: string;
}

export interface ChatRequest {
    message: string;
    history?: ChatMessageDTO[];
}

export interface ChatResponse {
    reply: string;
}