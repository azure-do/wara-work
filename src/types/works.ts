export type WorkProject = {
  no: number | null
  period: string | null
  summary: string | null
  duties: string | null
  role: string | null
  stack: string | null
  screenshot: string | null
}

export type WorksResponse = {
  ok: boolean
  projects: WorkProject[]
}
