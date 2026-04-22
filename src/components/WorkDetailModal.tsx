import { useEffect, useId } from 'react'
import type { WorkProject } from '../types/works'
import { ImageSlider } from './ImageSlider'

type Props = {
  project: WorkProject | null
  imageUrls: string[]
  onClose: () => void
}

function stripStars(s: string) {
  return s.replace(/\*/g, '')
}

function extractLiveSiteUrl(project: WorkProject): string | null {
  const source = [project.summary, project.duties, project.role, project.stack]
    .filter(Boolean)
    .map((text) => stripStars(text as string))
    .join('\n')
  const match = source.match(/(?:https?:\/\/)?(?:www\.)?[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+(?:\/[^\s"'<>()]*)?/i)
  if (!match) return null
  const trimmed = match[0].replace(/[)\]>,.。!！?？」』）]+$/g, '')
  if (!trimmed) return null
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

export function WorkDetailModal({ project, imageUrls, onClose }: Props) {
  const titleId = useId()
  const liveSiteUrl = project ? extractLiveSiteUrl(project) : null

  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [project])

  useEffect(() => {
    if (!project) return
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="閉じる">
          ×
        </button>
        <div className="modal-dialog__slider">
          <ImageSlider imageUrls={imageUrls} variant="modal" />
        </div>
        <div className="modal-dialog__body">
          <p className="modal-dialog__meta">
            {project.no != null && <span className="modal-dialog__no">#{project.no}</span>}
            <span className="modal-dialog__period">{project.period}</span>
          </p>
          <div className="modal-dialog__title-row">
            <h2 id={titleId} className="modal-dialog__title">
              {(project.summary?.split('\n')[0] ?? '実績詳細').slice(0, 200)}
            </h2>
            {liveSiteUrl && (
              <a
                className="modal-dialog__visit-link"
                href={liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>
            )}
          </div>
          {project.summary && (
            <div className="modal-block">
              <h3 className="modal-block__label">案件概要</h3>
              <p className="modal-block__text pre">{stripStars(project.summary)}</p>
            </div>
          )}
          {project.duties && (
            <div className="modal-block">
              <h3 className="modal-block__label">担当業務</h3>
              <p className="modal-block__text pre">{stripStars(project.duties)}</p>
            </div>
          )}
          {project.role && (
            <div className="modal-block">
              <h3 className="modal-block__label">役割・立ち位置</h3>
              <p className="modal-block__text pre">{stripStars(project.role)}</p>
            </div>
          )}
          {project.stack && (
            <div className="modal-block">
              <h3 className="modal-block__label">使用技術・スタック</h3>
              <p className="modal-block__text pre">{stripStars(project.stack)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
