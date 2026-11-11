import { Pause, Play } from 'lucide-react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface MotionContextValue {
  paused: boolean
  reduced: boolean
  toggle: () => void
}

const MotionContext = createContext<MotionContextValue>({
  paused: false,
  reduced: false,
  toggle: () => undefined,
})

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [manuallyPaused, setManuallyPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const value = useMemo(
    () => ({
      paused: manuallyPaused || reduced,
      reduced,
      toggle: () => setManuallyPaused((value) => !value),
    }),
    [manuallyPaused, reduced],
  )

  return (
    <MotionContext.Provider value={value}>
      <div data-motion-paused={value.paused}>{children}</div>
    </MotionContext.Provider>
  )
}

// Shared hook intentionally lives with its provider to keep motion policy in one place.
// eslint-disable-next-line react-refresh/only-export-components
export function useMotionControl() {
  return useContext(MotionContext)
}

export function MotionToggle() {
  const { paused, reduced, toggle } = useMotionControl()

  return (
    <button
      type="button"
      onClick={toggle}
      className="motion-toggle"
      aria-label={paused ? 'Resume decorative animation' : 'Pause decorative animation'}
      aria-pressed={paused}
      title={reduced ? 'Animation reduced by your system preference' : undefined}
    >
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{paused ? 'Play motion' : 'Pause motion'}</span>
    </button>
  )
}
