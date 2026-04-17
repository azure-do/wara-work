import { useEffect, useMemo, useState } from 'react'
import { fetchWorks } from '../api/works'
import { site } from '../content/site'
import type { WorkProject } from '../types/works'
import { driveThumbnailUrl, extractGoogleDriveFileIds } from '../utils/drive'
import { ImageSlider } from './ImageSlider'
import { WorkDetailModal } from './WorkDetailModal'

export function Works() {
  const [items, setItems] = useState<WorkProject[]>([])
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState<WorkProject | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await fetchWorks()
        if (!cancelled) setItems(data.projects ?? [])
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : '読み込みに失敗しました')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const activeUrls = useMemo(() => urlsForProject(active), [active])

  return (
    <section className="section works-section" id="works" aria-labelledby="works-title">
      <div className="section-head">
        <h2 id="works-title" className="section__title">
          {site.worksTitle}
        </h2>
        <p className="section__subtitle">{site.worksSubtitle}</p>
      </div>
      {loading && <p className="status">読み込み中…</p>}
      {err && <p className="status status--error">{err}</p>}
      {!loading && !err && items.length === 0 && (
        <p className="status">表示できる実績がありません。</p>
      )}
      <ul className="work-grid">
        {items.map((w, i) => (
          <li key={w.no != null ? `w-${w.no}` : `w-${i}-${w.period ?? ''}`}>
            <WorkTile project={w} onOpen={() => setActive(w)} />
          </li>
        ))}
      </ul>
      <WorkDetailModal project={active} imageUrls={activeUrls} onClose={() => setActive(null)} />
    </section>
  )
}

function urlsForProject(p: WorkProject | null): string[] {
  if (!p?.screenshot) return []
  const ids = extractGoogleDriveFileIds(p.screenshot)
  return ids.map((id) => driveThumbnailUrl(id, 1600))
}

function WorkTile({ project, onOpen }: { project: WorkProject; onOpen: () => void }) {
  const firstLine = stripStars(project.summary?.split('\n')[0] ?? '').trim()
  const title = firstLine.slice(0, 100) || '（概要なし）'
  const ids = extractGoogleDriveFileIds(project.screenshot ?? '')
  const imageUrls = ids.map((id) => driveThumbnailUrl(id, 800))

  return (
    <article className="work-tile">
      <div className="work-tile__media" onClick={(e) => e.stopPropagation()}>
        <ImageSlider imageUrls={imageUrls} variant="card" />
      </div>
      <button type="button" className="work-tile__body" onClick={onOpen}>
        <span className="work-tile__badges">
          {project.no != null && <span className="work-tile__no">#{project.no}</span>}
          <span className="work-tile__period">{project.period}</span>
        </span>
        <h3 className="work-tile__title">{title}</h3>
        <span className="work-tile__cta">詳細を見る</span>
      </button>
    </article>
  )
}

function stripStars(s: string) {
  return s.replace(/\*/g, '')
}
