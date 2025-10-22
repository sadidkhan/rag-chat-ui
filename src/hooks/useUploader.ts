// src/hooks/useUploader.ts
import { useState } from "react";
import { uploadFile } from "../lib/api";
import { UploadedFileMeta } from "../types";

export function useUploader() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFileMeta[]>([]);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setSelectedFiles(Array.from(e.target.files));
            // reset input so selecting the same file again still triggers onChange
            e.currentTarget.value = "";
        }
    }

    async function handleUpload() {
        if (!selectedFiles.length) return;
        setBusy(true);
        setError(null);
        try {
            // simple sequential; switch to Promise.allSettled for parallel
            const metas: UploadedFileMeta[] = [];
            for (const f of selectedFiles) {
                const meta = await uploadFile(f);
                metas.push(meta);
            }
            setUploadedFiles(prev => [...prev, ...metas]);
            setSelectedFiles([]);
        } catch (err: any) {
            setError(err?.message ?? "Upload failed");
        } finally {
            setBusy(false);
        }
    }

    return { selectedFiles, uploadedFiles, busy, error, handleFileSelect, handleUpload };
}
