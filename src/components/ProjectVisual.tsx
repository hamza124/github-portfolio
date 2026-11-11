import type { ProjectVisual as ProjectVisualType } from '../data/projects'

function LaundryVisual() {
  const steps = ['Drop-off', 'Tag', 'Wash', 'Assign', 'Detail', 'Bag']
  return (
    <div className="preview-ui laundry-ui" aria-hidden="true">
      <div className="ui-topline"><span>ZIPS / Order 2841</span><b>In progress</b></div>
      <div className="laundry-flow">
        {steps.map((step, index) => (
          <div className={index < 4 ? 'complete' : ''} key={step}>
            <span>{index + 1}</span><small>{step}</small>
          </div>
        ))}
      </div>
      <div className="garment-list">
        <div><i>SH</i><span><b>Oxford shirt</b><small>Blue · Starch</small></span><em>Rack 18</em></div>
        <div><i>JK</i><span><b>Wool jacket</b><small>Charcoal · Detail</small></span><em>Assign</em></div>
      </div>
    </div>
  )
}

function ReportsVisual() {
  return (
    <div className="preview-ui reports-ui" aria-hidden="true">
      <aside><b>WM</b><i /><i /><i /><i /></aside>
      <div className="report-body">
        <div className="ui-topline"><span>Sales summary</span><small>This week⌄</small></div>
        <div className="metric-row"><div><small>Orders</small><b>1,248</b></div><div><small>Avg. ticket</small><b>$42.80</b></div></div>
        <div className="chart-bars">
          {[42, 67, 51, 78, 59, 88, 72].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <div className="chart-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
      </div>
    </div>
  )
}

function MapVisual() {
  return (
    <div className="preview-ui map-ui" aria-hidden="true">
      <div className="map-search">⌕&nbsp;&nbsp; Search delivery area</div>
      <svg viewBox="0 0 500 250" preserveAspectRatio="none">
        <path d="M-10 80 C80 20, 130 160, 220 92 S350 30, 510 110" />
        <path d="M30 270 C110 150, 180 240, 260 145 S410 100, 480 -20" />
        <path d="M-20 190 C100 110, 220 205, 510 170" />
      </svg>
      <span className="map-pin pin-one">4</span><span className="map-pin pin-two">8</span><span className="map-pin pin-three">2</span>
      <div className="map-card"><small>Next delivery</small><b>Oakland Ave.</b><span>8 stops · 12.4 mi</span></div>
    </div>
  )
}

function VideoVisual() {
  return (
    <div className="preview-ui video-ui" aria-hidden="true">
      <div className="video-stage"><span className="play">▶</span><div className="speaker">Teacher view · 08:42</div></div>
      <div className="timeline-ruler"><span>08:20</span><span>08:40</span><span>09:00</span></div>
      <div className="video-track"><i /><i /><i /><i /><i /><i /><i /><i /><b /></div>
      <div className="comment-bubble"><span>MA</span><p><b>Moment tagged</b><small>Can we revisit this question?</small></p></div>
    </div>
  )
}

function PosVisual() {
  const items = ['Margherita', 'Chicken bowl', 'Iced tea', 'Pasta verde']
  return (
    <div className="preview-ui pos-ui" aria-hidden="true">
      <div className="menu-grid">
        {items.map((item, index) => <div key={item}><i>{['🍕', '🥗', '🥤', '🍝'][index]}</i><b>{item}</b><small>${[12, 14, 4, 16][index]}.00</small></div>)}
      </div>
      <div className="order-ticket"><div className="ui-topline"><b>Table 07</b><small>3 items</small></div><p><span>2 × Margherita</span><b>$24</b></p><p><span>1 × Iced tea</span><b>$4</b></p><div className="ticket-total"><span>Total</span><b>$28.00</b></div><button>Send order</button></div>
    </div>
  )
}

function FlightVisual() {
  return (
    <div className="preview-ui flight-ui" aria-hidden="true">
      <div className="flight-head"><div><small>Training calendar</small><b>September 2026</b></div><span>Today</span></div>
      <div className="week-days">{['MON 14', 'TUE 15', 'WED 16', 'THU 17', 'FRI 18'].map((day) => <b key={day}>{day}</b>)}</div>
      <div className="flight-grid">
        <span className="time">08:00</span><span className="time">10:00</span><span className="time">12:00</span>
        <div className="flight-slot slot-a"><small>C-GABC</small><b>Training flight</b><em>08:30 — 10:00</em></div>
        <div className="flight-slot slot-b"><small>C-FLYZ</small><b>Open session</b><em>10:30 — 12:00</em></div>
      </div>
    </div>
  )
}

const visuals: Record<ProjectVisualType, () => JSX.Element> = {
  laundry: LaundryVisual,
  reports: ReportsVisual,
  map: MapVisual,
  video: VideoVisual,
  pos: PosVisual,
  flight: FlightVisual,
}

export function ProjectVisual({ type }: { type: ProjectVisualType }) {
  const Visual = visuals[type]
  return (
    <div className={`project-visual visual-${type}`}>
      <span className="illustrative-label">Illustrative preview</span>
      <Visual />
    </div>
  )
}
