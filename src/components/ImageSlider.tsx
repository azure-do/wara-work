import { useCallback, useEffect, useState, type MouseEvent } from 'react'

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

  if (n === 0) {
    return (
      <div className={`image-slider image-slider--empty ${className}`}>
        <span className="image-slider__placeholder">画像なし</span>
      </div>
    )
  }

  const sizeClass = variant === 'modal' ? 'image-slider--lg' : 'image-slider--sm'

  return (
    <div className={`image-slider ${sizeClass} ${className}`}>
      <div
        className="image-slider__frame"
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
        <img
          className="image-slider__img"
          src={urls[index]}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
        />
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
