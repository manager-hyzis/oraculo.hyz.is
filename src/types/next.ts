export interface LayoutProps<T extends string = string> {
  children: React.ReactNode
  params?: Promise<any>
}

export interface PageProps<T extends string = string> {
  params?: Promise<any>
  searchParams?: Promise<Record<string, string | string[]>>
}
