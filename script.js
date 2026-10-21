const sourceText = document.getElementById('sourceText');
const resultText = document.getElementById('resultText');
const rewriteBtn = document.getElementById('rewriteBtn');
const resetBtn = document.getElementById('resetBtn');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

const defaultText = `In today’s fast-paced digital landscape, it is important to note that our platform seamlessly empowers businesses to unlock new opportunities through innovative solutions that drive measurable results.`;

function humanizeText(text) {
  const normalized = text
    .replace(/\s+/g, ' ')
    .replace(/\b(It is important to note that|In today’s fast-paced digital landscape,|In today’s fast-paced world,|In order to|It should be noted that|It is worth noting that)\b/gi, '')
    .replace(/\bseamlessly\b/gi, 'smoothly')
    .replace(/\bempowers\b/gi, 'helps')
    .replace(/\bunlock new opportunities\b/gi, 'open new doors')
    .replace(/\binnovative solutions\b/gi, 'practical solutions')
    .replace(/\bdrive measurable results\b/gi, 'deliver real results')
    .replace(/\bplatform\b/gi, 'platform')
    .trim();

  if (!normalized) return '';

  const first = normalized.charAt(0).toUpperCase();
  const rest = normalized.slice(1);
  const sentence = `${first}${rest}.`;

  return sentence.replace(/\s+\./g, '.');
}

rewriteBtn.addEventListener('click', () => {
  const value = sourceText.value.trim();
  resultText.value = value ? humanizeText(value) : 'Add a sentence to rewrite.';
});

resetBtn.addEventListener('click', () => {
  sourceText.value = defaultText;
  resultText.value = 'Our platform helps businesses move faster, make smarter decisions, and turn new ideas into measurable results.';
});

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navActions.style.display = isOpen ? 'none' : 'flex';
    mobileToggle.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen) {
      navLinks.style.position = 'absolute';
      navLinks.style.top = '78px';
      navLinks.style.left = '16px';
      navLinks.style.right = '16px';
      navLinks.style.background = 'rgba(12, 23, 35, 0.96)';
      navLinks.style.border = '1px solid rgba(148, 163, 184, 0.18)';
      navLinks.style.borderRadius = '14px';
      navLinks.style.padding = '16px';
      navLinks.style.flexDirection = 'column';
      navLinks.style.alignItems = 'flex-start';
      navActions.style.position = 'absolute';
      navActions.style.top = 'calc(78px + 170px)';
      navActions.style.left = '16px';
      navActions.style.right = '16px';
      navActions.style.background = 'rgba(12, 23, 35, 0.96)';
      navActions.style.border = '1px solid rgba(148, 163, 184, 0.18)';
      navActions.style.borderRadius = '14px';
      navActions.style.padding = '12px 16px';
      navActions.style.flexDirection = 'column';
      navActions.style.alignItems = 'stretch';
    } else {
      navLinks.style.position = '';
      navLinks.style.top = '';
      navLinks.style.left = '';
      navLinks.style.right = '';
      navLinks.style.background = '';
      navLinks.style.border = '';
      navLinks.style.borderRadius = '';
      navLinks.style.padding = '';
      navLinks.style.flexDirection = '';
      navLinks.style.alignItems = '';
      navActions.style.position = '';
      navActions.style.top = '';
      navActions.style.left = '';
      navActions.style.right = '';
      navActions.style.background = '';
      navActions.style.border = '';
      navActions.style.borderRadius = '';
      navActions.style.padding = '';
      navActions.style.flexDirection = '';
      navActions.style.alignItems = '';
    }
  });
}

resultText.value = 'Our platform helps businesses move faster, make smarter decisions, and turn new ideas into measurable results.';
