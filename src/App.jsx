:root {
  --bg: #060d17;
  --bg-strong: #0a1725;
  --panel: rgba(16, 27, 39, 0.82);
  --panel-strong: #101d2b;
  --panel-soft: rgba(14, 22, 32, 0.7);
  --line: rgba(199, 207, 220, 0.12);
  --text: #edf3ff;
  --muted: #a9b8cc;
  --primary: #90f0d4;
  --primary-strong: #59d7b0;
  --secondary: #c8a7ff;
  --gold: #f3d89b;
  --shadow: 0 30px 80px rgba(11, 20, 35, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(144, 240, 212, 0.12), transparent 28%),
    radial-gradient(circle at top right, rgba(200, 167, 255, 0.12), transparent 26%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(10, 17, 26, 0.8);
  color: var(--text);
  padding: 0.9rem 1rem;
}

input:focus,
textarea:focus,
select:focus {
  outline: 2px solid rgba(144, 240, 212, 0.3);
  border-color: rgba(144, 240, 212, 0.3);
}

textarea {
  resize: vertical;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.alt-bg {
  background: rgba(7, 15, 25, 0.7);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(18px);
  background: rgba(6, 13, 23, 0.72);
  border-bottom: 1px solid var(--line);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #071018;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(144, 240, 212, 0.25);
}

.nav-links,
.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links a,
.link-button {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.link-button:hover,
.inline-link:hover {
  color: var(--text);
}

.primary-button,
.secondary-button,
.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.85rem 1.3rem;
  border-radius: 12px;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--gold));
  color: #071018;
  box-shadow: 0 18px 28px rgba(144, 240, 212, 0.18);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--line);
}

.ghost-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--line);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.full-width {
  width: 100%;
}

.hero {
  padding: 72px 0 56px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 34px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(144, 240, 212, 0.08);
  border: 1px solid rgba(144, 240, 212, 0.22);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-copy h1,
.section-header h2,
.contact-copy h2,
.auth-header h2,
.dashboard-header h2 {
  margin: 18px 0 18px;
  letter-spacing: -0.07em;
  line-height: 0.98;
}

.hero-copy h1 {
  font-size: clamp(3.1rem, 5vw, 5.2rem);
}

.hero-copy p,
.feature-card p,
.step-card p,
.review-card p,
.contact-copy p,
.site-footer p,
.price-card li,
.muted-text {
  color: var(--muted);
  line-height: 1.7;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 28px 0 20px;
}

.trust-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  color: var(--muted);
}

.trust-list li {
  position: relative;
  padding-left: 20px;
}

.trust-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: 0 0 16px rgba(144, 240, 212, 0.5);
}

.demo-panel {
  padding: 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(15, 27, 39, 0.95), rgba(11, 19, 31, 0.92));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.panel-head {
  margin-bottom: 18px;
}

.status-pill {
  display: inline-flex;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(144, 240, 212, 0.08);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tone-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
  color: var(--muted);
}

.tone-row label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

textarea {
  margin-top: 10px;
}

.panel-actions {
  display: flex;
  gap: 12px;
  margin: 16px 0;
}

.save-button {
  margin-top: 14px;
}

.logo-strip {
  padding: 18px 0;
  background: rgba(7, 15, 25, 0.7);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.strip-items {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  text-align: center;
  color: rgba(169, 184, 204, 0.78);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.section-header {
  max-width: 720px;
  margin: 0 auto 42px;
  text-align: center;
}

.section-header.left {
  margin-left: 0;
  text-align: left;
}

.section-header h2,
.contact-copy h2 {
  font-size: clamp(2.5rem, 4vw, 3.6rem);
}

.feature-grid,
.pricing-grid,
.review-grid,
.stats-grid,
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.feature-card,
.step-card,
.review-card,
.price-card,
.contact-form,
.dashboard-panel,
.stat-card,
.auth-card {
  background: rgba(15, 25, 38, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px 22px;
}

.feature-card .icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 12px;
  background: rgba(144, 240, 212, 0.08);
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 800;
}

.feature-card h3,
.step-card h3,
.plan-name,
.dashboard-panel h3 {
  margin: 0 0 12px;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.step-card {
  position: relative;
}

.step-number {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.12em;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.price-card.featured {
  background: linear-gradient(180deg, rgba(12, 26, 24, 0.9), rgba(11, 18, 31, 0.85));
  border-color: rgba(144, 240, 212, 0.45);
  box-shadow: 0 24px 40px rgba(144, 240, 212, 0.08);
}

.featured-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(144, 240, 212, 0.25);
  background: rgba(144, 240, 212, 0.08);
  color: var(--primary);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.price-line {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price-line span {
  font-size: 2.7rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.price-line small {
  color: var(--muted);
}

.price-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.price-card li {
  position: relative;
  padding-left: 16px;
}

.price-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
}

.review-card {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
}

.review-card footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--text);
}

.contact-section {
  padding-bottom: 86px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: center;
}

.contact-form {
  display: grid;
  gap: 14px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.status-message {
  color: var(--primary);
  margin: 0;
}

.status-message.error {
  color: #ffb1a6;
}

.auth-shell,
.dashboard-shell,
.dashboard-empty {
  padding: 80px 0;
}

.auth-card {
  width: min(520px, calc(100% - 32px));
  margin: 0 auto;
}

.auth-header {
  margin-bottom: 18px;
}

.auth-form {
  display: grid;
  gap: 14px;
}

.switch-link {
  margin-top: 18px;
  text-align: center;
  color: var(--muted);
}

.inline-link {
  border: none;
  background: transparent;
  color: var(--primary);
  font: inherit;
  cursor: pointer;
  padding: 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat-card strong {
  font-size: 2.1rem;
  letter-spacing: -0.06em;
}

.dashboard-panel {
  min-height: 220px;
}

.rewrite-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.rewrite-list li {
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(9, 18, 30, 0.7);
}

.rewrite-tag {
  display: inline-block;
  margin-bottom: 8px;
  color: var(--primary);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.rewrite-list p {
  margin: 0 0 8px;
  line-height: 1.6;
  color: var(--text);
}

.rewrite-list small {
  color: var(--muted);
}

.site-footer {
  padding: 22px 0 42px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.footer-brand {
  min-width: max-content;
}

@media (max-width: 900px) {
  .hero-grid,
  .feature-grid,
  .timeline,
  .pricing-grid,
  .review-grid,
  .stats-grid,
  .dashboard-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .strip-items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 700px) {
  .nav-links,
  .nav-actions {
    display: none;
  }

  .panel-actions,
  .cta-row,
  .field-row {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
    transition: none !important;
  }
}
