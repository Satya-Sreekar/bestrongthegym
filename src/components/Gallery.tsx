import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from '../content'
import { EASE, Reveal, SectionHead, asset } from '../ui'

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>('All')
  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  const shown = category === 'All' ? GALLERY : GALLERY.filter((p) => p.cat === category)

  const close = useCallback(() => {
    setIndex(null)
    openerRef.current?.focus()
  }, [])

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + shown.length) % shown.length)),
    [shown.length],
  )

  useEffect(() => {
    if (index === null) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, step])

  const current = index === null ? null : shown[index]

  return (
    <section className="section section--raised" id="gallery">
      <div className="wrap">
        <SectionHead
          eyebrow="Gallery"
          title="Inside the gym."
          lead="Real photographs of the floor, the equipment and the people who train here."
        />

        <Reveal>
          <div className="chips chips--filter" role="group" aria-label="Filter photographs">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className="chip"
                aria-pressed={category === cat}
                onClick={() => {
                  setCategory(cat)
                  setIndex(null)
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="grid">
          {shown.map((photo, i) => (
            <li key={photo.src}>
              <button
                type="button"
                className="grid__item"
                onClick={(e) => {
                  openerRef.current = e.currentTarget
                  setIndex(i)
                }}
              >
                <img
                  src={asset(`img/photo/${photo.src}.webp`)}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr">View larger</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="lightbox__scrim" aria-label="Close gallery" onClick={close} />

            <button ref={closeRef} className="lightbox__btn lightbox__close" onClick={close}>
              <X aria-hidden="true" />
              <span className="sr">Close</span>
            </button>

            <button className="lightbox__btn lightbox__prev" onClick={() => step(-1)}>
              <ChevronLeft aria-hidden="true" />
              <span className="sr">Previous photograph</span>
            </button>

            <motion.figure
              className="lightbox__figure"
              key={current.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <img src={asset(`img/photo/${current.src}.webp`)} alt={current.alt} />
              <figcaption>
                {current.alt}
                <span>
                  {(index ?? 0) + 1} of {shown.length}
                </span>
              </figcaption>
            </motion.figure>

            <button className="lightbox__btn lightbox__next" onClick={() => step(1)}>
              <ChevronRight aria-hidden="true" />
              <span className="sr">Next photograph</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
