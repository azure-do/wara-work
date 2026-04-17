import { useCallback, useEffect, useState, type MouseEvent } from 'react'

function EmptyGalleryIcon() {
  return (
    <svg
      className="image-slider__empty-icon"
      viewBox="0 0 64 64"
      width={56}
      height={56}
      aria-hidden
    >
      <defs>
        <linearGradient id="empty-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
      <rect x="8" y="14" width="48" height="36" rx="4" fill="none" stroke="url(#empty-grad)" strokeWidth="2.5" />
      <circle cx="24" cy="28" r="4" fill="url(#empty-grad)" opacity="0.85" />
      <path
        d="M18 40 L28 30 L36 36 L46 26"
        fill="none"
        stroke="url(#empty-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M14 50 L50 14"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  )
}

type Props = {
  imageUrls: string[]
  /** スライド画像クリック（カード上で詳細モーダルを開く等） */
  onSlideClick?: () => void
  variant?: 'card' | 'modal'
  className?: string
}

export function ImageSlider({ imageUrls, onSlideClick, variant = 'card', className = '' }: Props) {
  const urls = imageUrls.filter(Boolean)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [urls.join('|')])

  const n = urls.length
  const go = useCallback(
    (delta: number, e?: MouseEvent) => {
      e?.stopPropagation()
      if (n <= 1) return
      setIndex((i) => (i + delta + n) % n)
    },
    [n],
  )

  useEffect(() => {
    if (variant !== 'modal' || n <= 1) return
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'ArrowLeft') go(-1)
      if (ev.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [variant, n, go])

  const sizeClass = variant === 'modal' ? 'image-slider--lg' : 'image-slider--sm'

  if (n === 0) {
    return (
      <div
        className={`image-slider ${sizeClass} image-slider--empty ${className}`}
        role="img"
        aria-label="プレビュー画像はありません"
      >
        <div className="image-slider__empty-inner">
          <EmptyGalleryIcon />
          <span className="image-slider__empty-title">画像なし</span>
          <span className="image-slider__empty-hint">スクリーンショット未登録、またはプレビューを表示できません</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`image-slider ${sizeClass} ${className}`}>
      <div className="image-slider__viewport">
        <div
          className="image-slider__track"
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${(index * 100) / n}%)`,
          }}
        >
          {urls.map((url) => (
            <div
              key={url}
              className="image-slider__slide"
              style={{ width: `${100 / n}%` }}
            >
              <div
                className="image-slider__slide-hit"
                role={onSlideClick ? 'button' : undefined}
                tabIndex={onSlideClick ? 0 : undefined}
                onClick={onSlideClick}
                onKeyDown={
                  onSlideClick
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          onSlideClick()
                        }
                      }
                    : undefined
                }
              >
                <img className="image-slider__img" src={url} alt="" loading="lazy" decoding="async" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {n > 1 && (
        <>
          <button
            type="button"
            className="image-slider__nav image-slider__nav--prev"
            aria-label="前の画像"
            onClick={(e) => go(-1, e)}
          >
            ‹
          </button>
          <button
            type="button"
            className="image-slider__nav image-slider__nav--next"
            aria-label="次の画像"
            onClick={(e) => go(1, e)}
          >
            ›
          </button>
          <div className="image-slider__dots" aria-hidden>
            {urls.map((_, i) => (
              <span key={i} className={`image-slider__dot ${i === index ? 'is-active' : ''}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
