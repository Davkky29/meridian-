import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

function heuristicHumanize(text, tone = 'natural', intent = 'general') {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';

  const map = {
    corporate: [
      [/\bIn today’s fast-paced digital landscape,\b/gi, ''],
      [/\bit is important to note that\b/gi, ''],
      [/\bIt should be noted that\b/gi, ''],
      [/\bIn order to\b/gi, 'To'],
      [/\bseamlessly\b/gi, 'smoothly'],
      [/\bempowers\b/gi, 'helps'],
      [/\bunlock new opportunities\b/gi, 'open new opportunities'],
      [/\binnovative solutions\b/gi, 'practical solutions'],
      [/\bdrive measurable results\b/gi, 'deliver real results'],
    ],
    friendly: [
      [/\bIn today’s fast-paced digital landscape,\b/gi, ''],
      [/\bit is important to note that\b/gi, ''],
      [/\bTo be honest,\b/gi, ''],
      [/\bwe believe\b/gi, 'we know'],
      [/\butilize\b/gi, 'use'],
      [/\bstate-of-the-art\b/gi, 'modern'],
      [/\btransformative\b/gi, 'game-changing'],
    ],
    luxury: [
      [/\bIn today’s fast-paced digital landscape,\b/gi, ''],
      [/\bIt is important to note that\b/gi, ''],
      [/\bIn order to\b/gi, 'To'],
      [/\butilize\b/gi, 'use'],
      [/\bseamlessly\b/gi, 'effortlessly'],
      [/\bsubstantial\b/gi, 'meaningful'],
      [/\brobust\b/gi, 'refined'],
      [/\bcutting-edge\b/gi, 'premium'],
    ],
  };

  let humanized = clean;
  const rules = map[tone] || map.corporate;

  for (const [pattern, replacement] of rules) {
    humanized = humanized.replace(pattern, replacement);
  }

  humanized = humanized
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();

  const first = humanized.charAt(0).toUpperCase();
  const rest = humanized.slice(1);

  return `${first}${rest}.`;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'humanizer-ai', mode: openai ? 'openai' : 'local-fallback' });
});

app.post('/api/humanize', async (req, res) => {
  const { text, tone = 'natural', intent = 'general' } = req.body || {};

  if (!text || !String(text).trim()) {
    return res.status(400).json({ message: 'Text is required.' });
  }

  try {
    if (openai) {
      const prompt = `Rewrite the following text so it sounds natural, polished, and persuasive for a ${tone} tone. Keep the core meaning, remove robotic phrases, and make it sound premium and human.\n\nText:\n${text}`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content: 'You are a high-end copy editor. Rewrite text so it feels natural, confident, premium, and distinctly human without changing the meaning.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const output = response.choices?.[0]?.message?.content?.trim();
      if (output) {
        return res.json({ text: output });
      }
    }

    return res.json({ text: heuristicHumanize(text, tone, intent) });
  } catch (error) {
    console.error('Humanize error:', error);
    return res.json({ text: heuristicHumanize(text, tone, intent) });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  console.log('[contact-form]', { name, email, company, message, receivedAt: new Date().toISOString() });

  return res.json({
    ok: true,
    message: 'Thanks! Your request has been received. We will be in touch shortly.',
  });
});

const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }

  return res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Humanizer server running on http://localhost:${port}`);
});
