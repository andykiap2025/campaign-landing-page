import { useEffect } from 'react'

// ====== CONTACT ======
const CONTACT = {
  name: 'Skyworks Systems',
  phone: '83122058',
  phoneIntl: '+675 8312 2058',
  email: 'skyworkssystems@gmail.com',
  whatsapp: '67583122058',
  whatsappMsg:
    "Hello Skyworks Systems, I'm interested in the Political Campaign Management & Voter Intelligence System. Please send me more details.",
}

const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMsg)}`
const emailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  'Enquiry — Campaign Management System',
)}&body=${encodeURIComponent(
  "Hello Skyworks Systems,\n\nMy name is ____.\nI am running in ____ (electorate).\nMy phone number is ____.\n\nI would like to know more about the Political Campaign Management & Voter Intelligence System.\n\nThank you.",
)}`

// ====== Marketing imagery ======
const M = {
  heroBanner: '/marketing/hero-banner.webp',
  heroHierarchy: '/marketing/hero-hierarchy.webp',
  strategyTablet: '/marketing/strategy-tablet.webp',
  strategyTree: '/marketing/strategy-tree.webp',
  hierarchyChart: '/marketing/hierarchy-chart.webp',
  mobileVillage: '/marketing/mobile-village.webp',
  progressTablet: '/marketing/progress-tablet.webp',
  analyticsDesk: '/marketing/feature-analytics-desk.webp',
  resource: '/marketing/feature-resource.webp',
  accountability: '/marketing/feature-accountability.webp',
  reportsMobile: '/marketing/feature-reports-mobile.webp',
  messaging: '/marketing/feature-messaging.webp',
  targeting: '/marketing/expansion-targeting.webp',
}

// Raw product screenshots
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

// ====== Reveal on scroll ======
function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ====== UI bits ======
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          Campaign <span className="accent">Intelligence</span>
        </a>
        <div className="nav-links">
          <a href="#purpose">Purpose</a>
          <a href="#core">The Core</a>
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact" className="nav-cta">Request Demo</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero hero-banner" id="top">
      <div className="hero-banner-image">
        <img src={M.heroBanner} alt="Political Campaign Management System" loading="eager" fetchpriority="high" />
      </div>
      <div className="container hero-banner-content">
        <div className="reveal">
          <div className="hero-eyebrow">
            <span className="dot" />
            Built · Deployed · Ready for the 2027 Elections
          </div>
          <h1 className="hero-title">
            Register every supporter.<br/>
            <em>Hit every target. Win with real numbers</em>.
          </h1>
          <p className="hero-sub">
            Village coordinators register supporters from a mobile phone. Each coordinator,
            each ward, and each LLG has a target. Headquarters watches every number climb in
            real time — so the candidate knows <strong>exactly how many votes they already
            have</strong>, and exactly how many more they need to win.
          </p>
          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Request a Demo
              <span aria-hidden>→</span>
            </a>
            <a href="#purpose" className="btn btn-ghost">Learn More</a>
          </div>
          <div className="hero-pillars">
            <div><span className="dot-pill" />Voter Intelligence</div>
            <div><span className="dot-pill" />Real-Time Analytics</div>
            <div><span className="dot-pill" />Targeted Outreach</div>
            <div><span className="dot-pill" />Mobile Solutions</div>
            <div><span className="dot-pill" />Secure &amp; Reliable</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Introduction() {
  return (
    <section className="section intro-section" id="purpose">
      <div className="container">
        <div className="section-head reveal centered">
          <div className="eyebrow">Introduction</div>
          <h2 className="section-title">
            The end of <em>guesswork</em> in PNG elections.
          </h2>
          <p className="section-lede big">
            Modern elections are no longer won through guesswork, assumptions, or unverified
            reports from the field. Successful campaigns need accurate voter data, proper coordination,
            accountability, communication, and real-time monitoring of campaign performance.
          </p>
          <p className="section-lede big">
            To answer that need, we&rsquo;ve built a mobile and web-based platform purpose-designed
            for Papua New Guinea election environments — so candidates can monitor campaign activity
            from a laptop while coordinators collect voter support data directly from the field
            using mobile phones.
          </p>
        </div>
      </div>
    </section>
  )
}

function CoreMechanic() {
  return (
    <section className="section core-mechanic" id="core">
      <div className="container">
        <div className="section-head reveal centered">
          <div className="eyebrow">The core of the system</div>
          <h2 className="section-title">
            How the candidate <em>knows the numbers</em>.
          </h2>
          <p className="section-lede big">
            This is what the whole platform is built around. Every village coordinator has
            a target. Every ward has a target. Every LLG has a target. As coordinators
            register supporters in the field, the numbers climb. The candidate sees the
            entire campaign add up to victory — or to the gap that still needs to close.
          </p>
        </div>

        <div className="mechanic-flow reveal">
          <div className="mechanic-step">
            <div className="mechanic-step-num">01</div>
            <h3>Set the winning number</h3>
            <p>
              The system takes the Electoral Commission&rsquo;s voter roll for your electorate,
              applies the <strong>50% + 1</strong> winning formula, and produces your overall target.
            </p>
            <div className="mechanic-example">
              <span className="mex-label">Example</span>
              <span className="mex-line">Electorate: <b>50,000 voters</b></span>
              <span className="mex-line">To win: <b>25,001 supporters</b></span>
            </div>
          </div>

          <div className="mechanic-arrow" aria-hidden="true">↓</div>

          <div className="mechanic-step">
            <div className="mechanic-step-num">02</div>
            <h3>Cascade the target down</h3>
            <p>
              That overall target is automatically distributed across your LLGs, then across
              the wards inside each LLG, then to the villages, then to each individual coordinator
              — proportional to the number of voters in each area.
            </p>
            <div className="mechanic-example">
              <span className="mex-label">Example cascade</span>
              <span className="mex-line">LLG 1 target: <b>10,000</b> &nbsp;·&nbsp; LLG 2: <b>9,000</b> &nbsp;·&nbsp; LLG 3: <b>6,001</b></span>
              <span className="mex-line">A ward inside LLG 1: <b>1,200 supporters</b></span>
              <span className="mex-line">A village coordinator in that ward: <b>100 supporters</b></span>
            </div>
          </div>

          <div className="mechanic-arrow" aria-hidden="true">↓</div>

          <div className="mechanic-step">
            <div className="mechanic-step-num">03</div>
            <h3>Coordinators register supporters in the field</h3>
            <p>
              Each village coordinator opens the app, sees their personal target (e.g.
              <em> &ldquo;100 supporters&rdquo;</em>) and starts registering. They capture
              the supporter&rsquo;s <strong>name</strong>, <strong>phone number</strong>,
              <strong> village</strong>, and <strong>voting preference</strong> — one supporter
              at a time. Their personal counter climbs <em>1 / 100, 2 / 100, 3 / 100…</em>
            </p>
            <div className="mechanic-example">
              <span className="mex-label">What gets captured per supporter</span>
              <span className="mex-line">✓ Full name</span>
              <span className="mex-line">✓ Phone number</span>
              <span className="mex-line">✓ Village / polling place</span>
              <span className="mex-line">✓ Voting preference (1st / 2nd / 3rd)</span>
              <span className="mex-line">✓ Registered by which coordinator</span>
            </div>
          </div>

          <div className="mechanic-arrow" aria-hidden="true">↓</div>

          <div className="mechanic-step">
            <div className="mechanic-step-num">04</div>
            <h3>Numbers roll up to headquarters — live</h3>
            <p>
              Every supporter registered in the field instantly adds to the village total,
              the ward total, the LLG total, and the overall campaign total. The candidate
              sees three numbers that matter at every level: <strong>target</strong>,
              <strong> registered so far</strong>, and <strong>the gap remaining</strong>.
            </p>
            <div className="mechanic-example light">
              <span className="mex-label">What the candidate sees on the dashboard</span>
              <table className="mex-table">
                <thead>
                  <tr><th>Level</th><th>Target</th><th>Registered</th><th>Gap</th></tr>
                </thead>
                <tbody>
                  <tr><td>Whole electorate</td><td>25,001</td><td>18,420</td><td className="gap">6,581</td></tr>
                  <tr><td>LLG 1</td><td>10,000</td><td>8,150</td><td className="gap">1,850</td></tr>
                  <tr><td>Ward 4 (LLG 1)</td><td>1,200</td><td>980</td><td className="gap">220</td></tr>
                  <tr><td>Village coord. — Mary</td><td>100</td><td>87</td><td className="gap">13</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mechanic-bottom-line reveal">
          <div className="mbl-icon" aria-hidden="true">✓</div>
          <div>
            <h4>No more guessing. No more inflated reports.</h4>
            <p>
              The candidate knows, to the supporter, what the campaign has secured and what
              it still needs. Resources, time, and attention can be directed exactly where
              the gap is biggest — and the coordinators who are hitting their numbers can be
              rewarded while the ones who aren&rsquo;t can be replaced.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Purpose() {
  const purposes = [
    { t: 'Build verified supporter databases', d: 'Every supporter recorded by name, phone, village and voting preference — no more inflated headcounts or imaginary numbers.' },
    { t: 'Track campaign progress in real time', d: 'Live registrations stream from the field into the admin dashboard, with progress bars per coordinator, ward, LLG and electorate.' },
    { t: 'Monitor coordinator performance', d: 'Every coordinator has a measurable target. Performance is visible at a glance — both strong performers and inactive ones.' },
    { t: 'Eliminate fake or misleading reports', d: 'When numbers are recorded in-system instead of relayed over phone calls, false reports simply disappear.' },
    { t: 'Allocate campaign resources properly', d: 'Direct fuel, transport, food, allowances and campaign materials to the wards that are actually performing.' },
    { t: 'Improve communication with the team', d: 'A built-in messaging centre keeps HQ and the entire field network in constant, organised contact.' },
    { t: 'Plan strategically toward 50% + 1', d: 'The winning formula is built into the system — broken down to each coordinator so everyone knows their personal contribution.' },
  ]
  return (
    <section className="section purpose-section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Purpose</div>
          <h2 className="section-title">
            What this system <em>is for</em>.
          </h2>
          <p className="section-lede">
            The system exists to give candidates the seven things every serious campaign in PNG needs —
            and that traditional, phone-based campaign management cannot reliably deliver.
          </p>
        </div>

        <div className="purpose-grid">
          {purposes.map((p, i) => (
            <div className="purpose-card reveal" key={i}>
              <div className="purpose-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const tiers = [
    {
      level: 'I', tag: 'CANDIDATE HQ', title: 'Administrator (Candidate HQ)',
      body: 'The candidate or campaign headquarters — the highest level of access. Monitors every coordinator, sees live campaign statistics, tracks voter registration progress across the entire electorate, sends messages to coordinators (individually, by ward, by LLG, or to everyone), and generates reports and analytics. The administrator works from a desktop or laptop dashboard.',
      duties: [
        'Monitor all coordinators',
        'View live campaign statistics',
        'Track voter registration progress',
        'Send messages to coordinators',
        'Monitor inactive or underperforming teams',
        'Compare performance between LLGs, wards, and villages',
        'Generate reports and analytics',
      ],
    },
    {
      level: 'II', tag: 'LLG', title: 'LLG Coordinators',
      body: 'Each LLG coordinator supervises all the wards under one Local-Level Government. They are the bridge between headquarters and the wards — making sure ward coordinators are active, ward targets are realistic, and weaker areas get the support they need.',
      duties: [
        'Monitor ward coordinators',
        'Track LLG-level targets',
        'Support weaker wards in their LLG',
        'Report progress upward to headquarters',
      ],
    },
    {
      level: 'III', tag: 'WARD', title: 'Ward Coordinators',
      body: 'Ward coordinators supervise the villages, suburbs or zones inside a single ward. They are the closest tier of management to the actual field — making sure village coordinators are recording supporters, hitting their targets, and not disappearing for weeks at a time.',
      duties: [
        'Monitor village coordinators',
        'Ensure voter data is actually being collected',
        'Track ward-level progress against target',
        'Support field coordinators with materials and direction',
      ],
    },
    {
      level: 'IV', tag: 'FIELD', title: 'Village / Suburb / Zone Coordinators',
      body: 'These are the field workers — the people walking the village paths and the urban suburbs with the mobile app open. They register supporters, collect names and phone numbers, capture voting preferences, track their personal target, and build the grassroots database the entire campaign depends on. Each village or suburb may have multiple coordinators working in parallel.',
      duties: [
        'Register supporters from a mobile phone',
        'Collect names, phone numbers and locations',
        'Record voting preferences',
        'Track progress against personal targets',
        'Build the grassroots supporter network',
      ],
    },
  ]
  return (
    <section className="section hierarchy" id="how">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">
            One chain of command. <em>Four tiers</em>.
          </h2>
          <p className="section-lede">
            The system mirrors the structure every PNG campaign already uses — Headquarters,
            LLG, Ward, and Field — so it fits your team instead of forcing your team to change
            how they work.
          </p>
        </div>

        <div className="hierarchy-visual reveal">
          <img src={M.hierarchyChart} alt="Coordinator Hierarchy" loading="lazy" />
        </div>

        <div className="tiers-detail">
          {tiers.map((tier) => (
            <div className="tier-detail reveal" key={tier.level}>
              <div className="tier-detail-head">
                <span className="tier-detail-level">Tier {tier.level}</span>
                <span className="tier-detail-tag">{tier.tag}</span>
              </div>
              <h3>{tier.title}</h3>
              <p>{tier.body}</p>
              <ul className="duties">
                {tier.duties.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TargetStrategy() {
  return (
    <section className="section strategy strategy-v2">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Target-based strategy</div>
          <h2 className="section-title">
            Targets create <em>accountability</em>.
          </h2>
          <p className="section-lede">
            When every coordinator has a number — and every ward and LLG has one too — the
            entire campaign becomes measurable. You can see who is delivering. You can see
            which areas are strong. You can see, in advance, whether you are going to win or
            lose — and you still have time to do something about it.
          </p>
        </div>

        <div className="strategy-split">
          <div className="reveal strategy-img-wrap">
            <img src={M.strategyTablet} alt="Strategic target allocation tablet view" loading="lazy" />
          </div>
          <div className="reveal">
            <div className="formula compact">
              <div className="label">The Winning Formula</div>
              <div className="equation">50% <em>+ 1</em></div>
              <p className="note">
                Allocated by LLG, then by ward, then by village, then to each individual
                coordinator — every person on your team knows their number.
              </p>
            </div>
            <div className="strategy-callout">
              <h4>Why it matters</h4>
              <p>
                This creates accountability and measurable campaign performance.
                Every coordinator knows exactly how many supporters they must register,
                and the candidate can instantly see where the campaign is on track —
                and where it is falling behind.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 60 }}>
          <img className="strategy-tree-img" src={M.strategyTree} alt="Target allocation cascade" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function FeatureDeepDive() {
  const features = [
    {
      img: M.progressTablet,
      title: 'Real-Time Progress Tracking',
      lede: 'Watch your campaign breathe — live.',
      body: 'The admin dashboard updates the moment a coordinator registers a new supporter in the field. You see live counts of total expected voters, the 50% + 1 target, registered supporters so far, and the number of active coordinators — at any moment of the day or night.',
      bullets: [
        'Live voter registration counter',
        'Per-ward and per-LLG progress bars',
        'Coordinator activity timeline',
        'Vote-preference distribution chart',
      ],
    },
    {
      img: M.accountability,
      title: 'Coordinator Accountability',
      lede: 'See who is working, instantly.',
      body: 'The system identifies inactive coordinators automatically — the ones submitting zero reports, logging in once a month, or producing suspiciously low numbers. Hardworking coordinators, on the other hand, surface naturally to the top of the leaderboard, ready to be recognised and rewarded.',
      bullets: [
        'Last-login and last-activity tracking',
        'Performance rank against target',
        'Activity trend charts (30-day rolling)',
        'Block, suspend, reset PIN, or delete with one tap',
      ],
    },
    {
      img: M.resource,
      title: 'Smart Resource Allocation',
      lede: 'Stop spending money in the wrong wards.',
      body: 'Campaign resources — fuel, transport, food, allowances, campaign materials — are limited. The performance dashboard tells you exactly which zones are producing real results and which are absorbing resources without delivering supporters. You can then redirect what you have to where it counts.',
      bullets: [
        'Per-zone performance percentages',
        'Resource-vs-result comparisons',
        'Identify high-opportunity wards',
        'Identify wards that need extra attention',
      ],
    },
    {
      img: M.analyticsDesk,
      title: 'Advanced Analytics & Reports',
      lede: 'Reports your team can actually print.',
      body: 'The server generates clean, professional PDF reports for the entire electorate, a specific LLG, or a single ward. Take them offline, print them, hand them to a senior committee, or carry them on a stick to a campaign meeting in an area without internet.',
      bullets: [
        'Voter Roll report — every registered supporter',
        'Coordinator Performance report — ranked against target',
        'Filter by ward or LLG before printing',
        'Server-rendered for consistent layout every time',
      ],
    },
    {
      img: M.reportsMobile,
      title: 'On-the-Go Reporting',
      lede: 'The same reports — from your phone.',
      body: 'Headquarters does not have to be a building. The mobile app generates the same Full District, LLG, and Single Ward PDF reports as the web dashboard — so the candidate or a campaign manager can pull a fresh report on the road, in a meeting, or in a remote area.',
      bullets: [
        'Full District report',
        'LLG-level report',
        'Single Ward report',
        'Share directly via WhatsApp, email or Bluetooth',
      ],
    },
    {
      img: M.messaging,
      title: 'Integrated Messaging Centre',
      lede: 'One place. Every conversation.',
      body: 'Stop juggling Facebook Messenger, WhatsApp groups, SMS, and phone calls. The messaging centre lets headquarters send a message to one coordinator, to every coordinator in a single ward, to a whole LLG, or to every active coordinator at once — with text, images or PDF attachments.',
      bullets: [
        'Direct message a single coordinator',
        'Broadcast to a ward, an LLG, or everyone',
        'Attach photos, gallery images, or PDF files',
        'Toggle whether coordinators receive committee messages',
      ],
    },
  ]
  return (
    <section className="section feature-deepdive" id="features">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Features in detail</div>
          <h2 className="section-title">
            Eleven capabilities — <em>already shipped</em>.
          </h2>
          <p className="section-lede">
            Everything below is built and running today. Not a roadmap. Not a promise.
            Each capability is paired with an explanation of exactly what it does and why
            it matters for your campaign.
          </p>
        </div>

        <div className="deepdive-list">
          {features.map((f, i) => (
            <div className={`deepdive-row reveal ${i % 2 === 1 ? 'reverse' : ''}`} key={i}>
              <div className="deepdive-img">
                <img src={f.img} alt={f.title} loading="lazy" />
              </div>
              <div className="deepdive-text">
                <div className="deepdive-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{f.title}</h3>
                <p className="deepdive-lede">{f.lede}</p>
                <p>{f.body}</p>
                <ul className="check-list compact">
                  {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileSpotlight() {
  return (
    <section className="section mobile-spotlight">
      <div className="container mobile-spotlight-inner">
        <div className="reveal mobile-spotlight-text">
          <div className="eyebrow">Field-first design</div>
          <h2 className="section-title">
            One phone. <em>Every supporter</em>, registered.
          </h2>
          <p className="section-lede">
            Field coordinators build a verified supporter database straight from a phone.
            Works on low-end Android, simple enough for first-time users, and built for the
            connectivity realities of rural PNG.
          </p>
          <p style={{ marginTop: 16, color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.6 }}>
            A village coordinator opens the app, logs in with their phone number and PIN,
            sees their personal target for the day, and starts registering supporters one by one.
            HQ sees each registration appear in the dashboard the moment the phone has signal.
          </p>
          <ul className="check-list" style={{ marginTop: 28 }}>
            <li>Photo-verified coordinator profiles</li>
            <li>Name, phone, village and voting preference per supporter</li>
            <li>Live personal targets and progress bars</li>
            <li>Push messaging from HQ direct to the field</li>
            <li>Runs on low-end Android phones</li>
          </ul>
        </div>

        <div className="reveal mobile-spotlight-img">
          <img src={M.mobileVillage} alt="Coordinator using the mobile app in the village" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    { n: '01', t: 'Accurate Ground Information', d: 'The candidate receives real-time information directly from the field instead of relying on assumptions, exaggeration, or false reports from coordinators trying to look busy.' },
    { n: '02', t: 'Better Resource Allocation', d: 'Campaign resources — fuel, transport, food, allowances, and campaign materials — are distributed according to actual performance instead of personal politics.' },
    { n: '03', t: 'Improved Campaign Coordination', d: 'The built-in messaging system replaces ad-hoc phone trees and confused WhatsApp groups with a single, organised communication channel between HQ and the field.' },
    { n: '04', t: 'Increased Accountability', d: 'Inactive coordinators are visible immediately. Hardworking coordinators are visible just as quickly — so the right people get recognised and the right people get redirected.' },
    { n: '05', t: 'Better Election Planning', d: 'The candidate can identify strong areas, weak areas, undecided voters, and zones requiring more campaign attention — with hard data, before it is too late to act.' },
    { n: '06', t: 'Greater Chance of Winning', d: 'Real data, strategic targets, and disciplined monitoring give the candidate a measurable, defensible path to achieving the 50% + 1 winning margin.' },
  ]
  return (
    <section className="section benefits" id="benefits">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head reveal">
          <div className="eyebrow">Benefits to the candidate</div>
          <h2 className="section-title">
            What you actually <em>get</em>.
          </h2>
          <p className="section-lede" style={{ color: 'rgba(247, 242, 231, 0.72)' }}>
            Six concrete advantages your campaign gains the day you go live with the system.
          </p>
        </div>

        <div className="benefits-list">
          {benefits.map((b) => (
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

function ProductScreens() {
  return (
    <section className="section product-screens">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">The actual product</div>
          <h2 className="section-title">
            Inside the <em>live system</em>.
          </h2>
          <p className="section-lede">
            Raw, unedited screenshots from the production system. This is exactly what your
            campaign team will be using — no mock-ups, no concepts.
          </p>
        </div>

        <h3 className="screens-subhead reveal">Admin Dashboard <span>· web</span></h3>
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

        <h3 className="screens-subhead reveal" style={{ marginTop: 72 }}>Coordinator Mobile App <span>· android</span></h3>
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

function Expansion() {
  return (
    <section className="section expansion">
      <div className="container expansion-inner">
        <div className="reveal expansion-img">
          <img src={M.targeting} alt="Strategic Voter Targeting" loading="lazy" />
        </div>
        <div className="reveal expansion-text">
          <div className="eyebrow">What&rsquo;s next</div>
          <h2 className="section-title">
            Beyond the basics. <em>Smarter targeting</em>.
          </h2>
          <p className="section-lede">
            The current platform already covers the full campaign cycle from registration to
            reporting. The roadmap adds deeper intelligence — designed to help campaigns
            win the margin, not just hit the target.
          </p>
          <ul className="check-list">
            <li><strong>GPS verification</strong> — confirm coordinators are actually in the wards they claim</li>
            <li><strong>Offline data collection</strong> — register supporters where there is no signal, sync later</li>
            <li><strong>Interactive ward &amp; village maps</strong> — visualise support strength geographically</li>
            <li><strong>Duplicate voter detection</strong> — automatically catch the same supporter recorded twice</li>
            <li><strong>Advanced analytics</strong> — segmentation, swing scores, opportunity zones</li>
            <li><strong>Campaign finance tracking</strong> — record every kina spent against every result delivered</li>
            <li><strong>Polling &amp; survey modules</strong> — collect issue priorities from voters directly</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Conclusion() {
  return (
    <section className="section conclusion-section">
      <div className="container">
        <div className="section-head reveal centered">
          <div className="eyebrow">Conclusion</div>
          <h2 className="section-title">
            Built in PNG. <em>For PNG</em>.
          </h2>
          <p className="section-lede big">
            This system is designed to modernise political campaigning in Papua New Guinea
            by introducing technology-driven coordination, accountability and voter intelligence —
            replacing guesswork with the kind of data-driven campaign management that wins
            modern elections.
          </p>
          <p className="section-lede big">
            It is a tool any candidate can use to bring transparency, efficiency, and election
            preparedness to their campaign — and to give themselves a measurable, defensible
            path to victory.
          </p>
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
          Demonstrations, partnership discussions, full deployment for your electorate,
          and customisation for your team — get in touch and we&rsquo;ll walk through
          everything together.
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
            <li><a href="#purpose">Purpose</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
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
      <main>
        <Hero />
        <Introduction />
        <CoreMechanic />
        <Purpose />
        <HowItWorks />
        <TargetStrategy />
        <FeatureDeepDive />
        <MobileSpotlight />
        <Benefits />
        <ProductScreens />
        <Expansion />
        <Conclusion />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
