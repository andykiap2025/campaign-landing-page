import { useEffect, useRef } from 'react'

// ====== CONTACT — edit these in one place ======
const CONTACT = {
  name: 'Andy Kiap',
  phone: '83122058',
  phoneIntl: '+675 8312 2058',
  email: 'andykiap10@gmail.com',
  // WhatsApp link uses international format without + or spaces
  whatsapp: '67583122058',
  whatsappMsg:
    "Hello Andy, I'm interested in the Political Campaign Management & Voter Intelligence System. Please send me more details.",
}

const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMsg,
)}`
const emailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  'Enquiry — Campaign Management System',
)}&body=${encodeURIComponent(
  "Hello Andy,\n\nMy name is ____.\nI am running in ____ (electorate).\nMy phone number is ____.\n\nI would like to know more about the Political Campaign Management & Voter Intelligence System.\n\nThank you.",
)}`

// ====== Data ======
const WEB_SHOTS = [
  { n: '01', src: '/screenshots/web-01-dashboard.png', label: 'Admin Dashboard' },
  { n: '02', src: '/screenshots/web-02-progress.png', label: 'Progress Tracker' },
  { n: '03', src: '/screenshots/web-03-coordinators.png', label: 'Coordinator Management' },
  { n: '04', src: '/screenshots/web-04-add-coordinator.png', label: 'Provision Coordinator' },
  { n: '05', src: '/screenshots/web-05-reports.png', label: 'PDF Reports' },
  { n: '06', src: '/screenshots/web-06-messaging.png', label: 'Messaging Centre' },
]

const MOBILE_SHOTS = [
  { src: '/screenshots/mob-01-login.jpg', sub: 'Step 01', label: 'Secure Login' },
  { src: '/screenshots/mob-02-dashboard.jpg', sub: 'Step 02', label: 'Coordinator Dashboard' },
  { src: '/screenshots/mob-03-wards.jpg', sub: 'Step 03', label: 'Ward Progress' },
  { src: '/screenshots/mob-04-polling.jpg', sub: 'Step 04', label: 'Polling Place View' },
  { src: '/screenshots/mob-05-team.jpg', sub: 'Step 05', label: 'Manage Team' },
  { src: '/screenshots/mob-06-add.jpg', sub: 'Step 06', label: 'Add Coordinator' },
  { src: '/screenshots/mob-07-reports.jpg', sub: 'Step 07', label: 'Field Reports' },
  { src: '/screenshots/mob-08-messages.jpg', sub: 'Step 08', label: 'Messaging' },
  { src: '/screenshots/mob-09-newmsg.jpg', sub: 'Step 09', label: 'New Broadcast' },
]

const FEATURES = [
  { i: '01', t: 'Mobile Voter Registration', d: 'Field coordinators register supporters straight from their phone — name, number, vote preference, location.' },
  { i: '02', t: 'Coordinator Hierarchy', d: 'LLG → Ward → Village structure mirrors how PNG campaigns actually run on the ground.' },
  { i: '03', t: 'Real-Time Progress', d: 'Watch registrations and targets update live across every ward and village.' },
  { i: '04', t: 'Individual Targets', d: 'Each coordinator knows exactly how many supporters they must register to win.' },
  { i: '05', t: 'Built-In Messaging', d: 'Direct message individuals or broadcast to a ward, an LLG, or the entire team.' },
  { i: '06', t: 'Supporter Database', d: 'A clean, searchable record of every confirmed supporter — never lose data again.' },
  { i: '07', t: 'Performance Dashboard', d: 'Identify hardworking coordinators and surface inactive ones immediately.' },
  { i: '08', t: 'Committee Management', d: 'Track ward and polling-place committees and their members in one place.' },
  { i: '09', t: 'PDF Reports', d: 'Generate full district, LLG, or single-ward reports for offline use and printing.' },
  { i: '10', t: 'Role-Based Access', d: 'Each coordinator sees only what they need — clean, simple, secure.' },
  { i: '11', t: 'PNG-Ready', d: 'Built for unreliable connections, Tok Pisin where it matters, and low-end Android devices.' },
]

const BENEFITS = [
  { n: '01', t: 'Real Ground Truth', d: 'Stop relying on assumptions and unverified reports. See exactly what is happening on the ground, in real time, from your laptop.' },
  { n: '02', t: 'Smarter Resource Allocation', d: 'Direct fuel, transport, allowances and campaign materials to the wards and villages that are actually performing.' },
  { n: '03', t: 'Better Coordination', d: 'Headquarters and the field stay in constant contact through the built-in messaging system — no more confused chains of phone calls.' },
  { n: '04', t: 'Genuine Accountability', d: 'Inactive coordinators are visible immediately. Hardworking ones can be recognised and rewarded.' },
  { n: '05', t: 'Sharper Election Planning', d: 'Pinpoint strong areas, weak areas, undecided voters, and zones that need more campaigning before it is too late.' },
  { n: '06', t: 'Greater Chance of Winning', d: 'Real data, strategic targets, and disciplined monitoring give you a measurable, defensible path to 50% + 1.' },
]

// ====== Reveal on scroll ======
function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ====== Components ======
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          Campaign <span className="accent">Intelligence</span>
        </a>
        <a href="#contact" className="nav-cta">Request Demo</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="reveal">
          <div className="hero-eyebrow">
            <span className="dot" />
            Built · Deployed · Ready for 2027
          </div>
          <h1 className="hero-title">
            Win your seat with <em>data</em>,<br />
            not guesswork.
          </h1>
          <p className="hero-sub">
            A mobile and web-based <strong style={{ color: 'var(--cream)' }}>Political Campaign Management
            &amp; Voter Intelligence System</strong> built specifically for Papua New Guinea elections.
            Track every coordinator. Verify every supporter. Hit 50% + 1.
          </p>
          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Request a Demo
              <span aria-hidden>→</span>
            </a>
            <a href="#how" className="btn btn-ghost">See How It Works</a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="num">4</div>
              <div className="lbl">Coord Tiers</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">11+</div>
              <div className="lbl">Live Features</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">100%</div>
              <div className="lbl">Built for PNG</div>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="badge">Live System</div>
          <div className="web-mock">
            <img src="/screenshots/web-01-dashboard.png" alt="" />
          </div>
          <div className="phone-mock">
            <img src="/screenshots/mob-02-dashboard.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="problem">
      <div className="container problem-grid">
        <div className="problem-card reveal">
          <div className="problem-num">01</div>
          <h3>Fake reports from the field?</h3>
          <p>Coordinators tell you what you want to hear. Numbers can&rsquo;t lie.</p>
        </div>
        <div className="problem-card reveal">
          <div className="problem-num">02</div>
          <h3>Money spent in the wrong wards?</h3>
          <p>Stop pouring fuel, food and allowances into areas that aren&rsquo;t actually performing.</p>
        </div>
        <div className="problem-card reveal">
          <div className="problem-num">03</div>
          <h3>No idea who&rsquo;s really voting for you?</h3>
          <p>Build a verified supporter database your campaign can actually trust.</p>
        </div>
      </div>
    </section>
  )
}

function Hierarchy() {
  const tiers = [
    { n: 'I', tag: 'HQ', t: 'Administrator (Candidate HQ)', d: 'You. Live stats, full visibility, broadcast to anyone, generate reports.' },
    { n: 'II', tag: 'LLG', t: 'LLG Coordinator', d: 'Supervises all wards in one Local-Level Government area.' },
    { n: 'III', tag: 'WARD', t: 'Ward Coordinator', d: 'Supervises villages, suburbs or zones inside a single ward.' },
    { n: 'IV', tag: 'FIELD', t: 'Village / Suburb / Zone Coordinator', d: 'On the ground, registering supporters from a mobile phone.' },
  ]
  return (
    <section className="section hierarchy" id="how">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">
            Four tiers. <em>One chain</em> of command.
          </h2>
          <p className="section-lede">
            The system mirrors how PNG campaigns actually run — so it fits your team
            instead of forcing them to change how they work.
          </p>
        </div>

        <div className="hierarchy-diagram">
          {tiers.map((tier) => (
            <div className="tier reveal" key={tier.n}>
              <div className="tier-num">{tier.n}</div>
              <div className="tier-body">
                <h4>{tier.t}</h4>
                <p>{tier.d}</p>
              </div>
              <div className="tier-tag">{tier.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebGallery() {
  return (
    <section className="section web-section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">From the candidate&rsquo;s desk</div>
          <h2 className="section-title">
            The <em>Admin Dashboard</em>.<br />Already built, already running.
          </h2>
          <p className="section-lede">
            These are not mock-ups. Every screen below is from the live, deployed system —
            ready to be customised for your electorate.
          </p>
        </div>

        <div className="web-gallery">
          {WEB_SHOTS.map((shot) => (
            <div className="web-shot reveal" key={shot.n}>
              <div className="web-shot-img">
                <img src={shot.src} alt={shot.label} loading="lazy" />
              </div>
              <div className="web-shot-meta">
                <span className="num">FIG · {shot.n}</span>
                <span className="label">{shot.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileGallery() {
  return (
    <section className="section mobile-section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">In the hands of every coordinator</div>
          <h2 className="section-title">
            The <em>mobile app</em>, on every village phone.
          </h2>
          <p className="section-lede">
            Built for low-end Android, unreliable connections, and coordinators who
            haven&rsquo;t touched a piece of software like this before.
          </p>
        </div>

        <div className="mobile-grid">
          {MOBILE_SHOTS.map((shot, idx) => (
            <div className="reveal" key={idx}>
              <div className="phone-frame">
                <div className="phone-screen">
                  <img src={shot.src} alt={shot.label} loading="lazy" />
                </div>
              </div>
              <div className="phone-caption">
                <span className="phone-caption-sub">{shot.sub}</span>
                {shot.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Strategy() {
  return (
    <section className="section strategy">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">The strategy</div>
          <h2 className="section-title">
            Every win starts with <em>one formula</em>.
          </h2>
          <p className="section-lede">
            The system takes the Electoral Commission&rsquo;s voter data and the population
            of your electorate, and breaks the winning number down to the individual coordinator.
          </p>
        </div>

        <div className="strategy-grid">
          <div className="formula reveal">
            <div className="label">The Winning Formula</div>
            <div className="equation">
              50% <em>+ 1</em>
            </div>
            <p className="note">
              Allocated by LLG, then by ward, then by village, then to each
              coordinator — every person on your team knows their number.
            </p>
          </div>

          <ul className="cascade reveal">
            <li>
              <span className="tier-label">Tier I</span>
              <span className="tier-name">Total Target</span>
              <span className="tier-arrow">→</span>
            </li>
            <li>
              <span className="tier-label">Tier II</span>
              <span className="tier-name">Per LLG</span>
              <span className="tier-arrow">→</span>
            </li>
            <li>
              <span className="tier-label">Tier III</span>
              <span className="tier-name">Per Ward</span>
              <span className="tier-arrow">→</span>
            </li>
            <li>
              <span className="tier-label">Tier IV</span>
              <span className="tier-name">Per Village</span>
              <span className="tier-arrow">→</span>
            </li>
            <li>
              <span className="tier-label">Tier V</span>
              <span className="tier-name">Per Coordinator</span>
              <span className="tier-arrow">✓</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section features">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">What&rsquo;s inside</div>
          <h2 className="section-title">
            Eleven features, all <em>already shipped</em>.
          </h2>
          <p className="section-lede">
            Everything below is built and working today — not a roadmap, not a promise.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature reveal" key={f.i}>
              <div className="feature-icon">{f.i}</div>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section benefits">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head reveal">
          <div className="eyebrow">Why it matters</div>
          <h2 className="section-title">
            What you actually <em>get</em>.
          </h2>
        </div>

        <div className="benefits-list">
          {BENEFITS.map((b) => (
            <div className="benefit reveal" key={b.n}>
              <div className="benefit-num">{b.n}</div>
              <div>
                <h4>{b.t}</h4>
                <p>{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="container cta-inner reveal">
        <div className="eyebrow">Ready to talk?</div>
        <h2>
          Let&rsquo;s build your <em>campaign command centre</em>.
        </h2>
        <p>
          Demos, partnership discussions, full deployment for your electorate, and
          custom features — get in touch and we&rsquo;ll walk through it together.
        </p>
        <div className="cta-actions">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            <span aria-hidden>💬</span>
            WhatsApp {CONTACT.phoneIntl}
          </a>
          <a href={emailLink} className="btn btn-dark" style={{ background: '#06122B' }}>
            <span aria-hidden>✉</span>
            Email {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            Political Campaign Management <span className="accent">&amp;</span> Voter Intelligence System
          </div>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6 }}>
            Built in Papua New Guinea, for Papua New Guinea. Designed by {CONTACT.name}.
          </p>
        </div>

        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href={`tel:${CONTACT.phoneIntl.replace(/\s/g, '')}`}>{CONTACT.phoneIntl}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h5>Explore</h5>
          <ul>
            <li><a href="#how">How it works</a></li>
            <li><a href="#contact">Request demo</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</div>
        <div>Port Moresby · Papua New Guinea</div>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Hierarchy />
      <WebGallery />
      <MobileGallery />
      <Strategy />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </>
  )
}
