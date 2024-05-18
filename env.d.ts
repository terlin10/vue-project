/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
