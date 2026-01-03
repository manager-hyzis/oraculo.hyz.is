declare module 'fumadocs-mdx:collections/server' {
  export const docs: any
}

declare global {
  interface PageData {
    body: any
    toc: any
    full: any
    structuredData: any
  }
}
