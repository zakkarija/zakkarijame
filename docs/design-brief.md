# Design brief — zakkarija.com

Read this completely before writing any CSS or JSX. It exists because this site
has been redesigned five or six times and every attempt came out looking
machine-generated. The failures were not random; they repeat, they are
identifiable, and they are listed here so you do not repeat them a seventh time.

---

## 1. The brief

**Subject.** Zakkarija Micallef, software engineer in Amsterdam. Currently on the
GenAI Engineering team at Booking.com, building the internal agent platform, the
MCP integration platform, and developer tooling. Four years before that at
PhoenixNAP on backend orchestration for a bare-metal cloud. MSc from VU
Amsterdam on industrial MLOps; published at CAIN 2026 (ACM).

**Audience.** Two readers, in this order:

1. Someone with a budget deciding whether to hire him for contract work. May be
   technical, may not be. Skims. Wants to believe this person finishes things.
2. An engineering hiring manager or peer. Will read the detail and will notice
   if anything is padded.

**Job of the page.** Make a competent stranger think *this person is real and I
would trust them with a system*, within about eight seconds, and then let them
verify it with detail. Nothing else.

**Tone.** Senior, specific, unhurried. Not playful, not salesy, not humble-bragging.

**What it must not be.** A costume. A retro pastiche, a game UI, a terminal
emulator, a fake dashboard. Those were tried and rejected — they read as a
hobbyist's toy, not a consultancy.

---

## 2. Why the old site read as AI-generated

This is the specific list. The previous site (`src/styles/grotesque.css`) hits
almost every item, which is why swapping the typeface five times never helped —
**the typeface was never the problem, the structure was.**

| Tell | Where it lived |
| --- | --- |
| Warm cream paper (~`#F4F1EA`) | `--bg: #F4EFE6` |
| Terracotta / warm-clay accent | `--red: oklch(0.50 0.18 25)` — hue 25 is the clay family |
| High-contrast serif display | Fraunces / Instrument Serif |
| Broadsheet layout, hairline rules everywhere | `1px solid var(--rule)` on every section, box and row |
| Tracked-out ALL-CAPS eyebrow above every heading | `.eyebrow { text-transform: uppercase; letter-spacing: .08em }` |
| Numbered markers on things that are not sequences | `01 Experience`, `02 Selected work` |
| Meta strings joined with middle dots | `Software Engineer · GenAI Engineering` |
| Monospace used to decorate small labels | JetBrains Mono on location, tags, nav |
| `→` appended to link text | `DOI →`, `GitHub →`, `Demo →` |
| Exactly one italicised word per headline | `A Systematic Review of *MLOps Tools*` — on 100% of headings |
| Identical rounded cards + `border-radius: 999px` pills | `.services li`, `.tags li` |
| Gradient washes as decoration | two body radial-gradients "for atmosphere" |
| Hover-lift on every card | `translateY(-2px)` plus a transition on everything |
| Big number + small label as the hero stat | `41` / "papers reviewed across…" |

### The rule that generalises

Every one of those is a **default** — a choice that would appear on a page about
anything. A design reads as generated exactly when nothing about it could only
be about this subject. Distinctiveness is not a style; it is specificity.

---

## 3. Why the mockups that followed were still unrefined

The tell-list above was then used as a checklist and four "professional" designs
were produced that avoided all of it. They were still not good. This section is
more useful than section 2, because avoiding clichés is easy and it is not
enough.

**1. Designing by subtraction.** This is the root cause of the rest. The work
became "no cream, no serif, no eyebrows, no arrows" — a list of negatives. You
cannot subtract your way to a good design. Removing every cliché from a page
leaves a page with no positive identity, which reads as bland, which is its own
kind of unrefined. **Decide what the page is trying to be, then use the tell-list
only as a final check — never as the generator.**

**2. A viewport is not a page.** Everything was composed as one fixed 1280×900
frame. Real websites are a scroll with rhythm: sections of different heights,
different densities, moments of air and moments of density. Compressing a whole
site into one screen forces uniform cramped spacing and reads as a slide.
**Design the scroll. Give sections room to differ in height and pace.**

**3. No spacing scale.** Paddings were hand-picked per element — 52, 46, 34, 30,
26, 22. Nothing aligned to anything because there was no system. **Pick a scale
(4px base: 4/8/12/16/24/32/48/64/96/128) and use only those values. If a number
is not on the scale it is a bug.**

**4. Type-scale drift.** Sizes ran 11, 11.5, 12.5, 13, 13.5, 14.5, 15, 16, 16.5.
Half-pixel differences are invisible as hierarchy and visible as sloppiness.
**Six sizes maximum, with real ratio jumps between them. If two things are
different, make them clearly different; if not, make them identical.**

**5. No optical correction.** Big type needs tighter tracking and shorter
leading; small type needs the opposite. Mono and sans have different x-heights,
so a mono label set beside a sans label at the same font-size does not sit on the
same optical line. None of that was done. **Tune tracking and leading per size,
and check mixed-face baselines by eye.**

**6. A flat tonal structure.** One background, one white, one grey, one accent.
Refined interfaces have layered surfaces and deliberate contrast steps, so the
eye knows what sits on top of what. **Build a small ramp — page, raised surface,
sunken surface, border, muted text, body text — and use it consistently.**

**7. One grey doing every secondary job.** Captions, metadata, body copy and
labels were all the same grey, so nothing had rank. **Differentiate secondary
text by size and weight, not only by lightening it.**

**8. Default-shaped components.** A filled rectangle with 9px/18px padding is the
most generic button that exists. No considered corner treatment, no real
focus-visible state, no size difference between primary and secondary.
**Components are where craft is visible. Give them states.**

**9. The accent used as ornament.** Little accent-coloured squares were used as
bullets — meaningless decoration, which is the exact failure the tell-list warns
about. **An accent marks the one thing that matters on a screen. If it appears
six times it marks nothing.**

**10. No real content and no images.** The mockups were four bullet points and a
table. A portfolio with no project imagery, no screenshots, no writing will look
thin no matter how it is set. **Design with the real content in place. If the
content is thin, the fix is content, not more styling.**

**11. Never tested at another width.** A layout that has only ever existed at one
width has not been designed, only drawn. **Build mobile-first or at minimum check
390 / 834 / 1440 as you go.**

---

## 4. The constitution

### Forbidden, without exception

- The entire table in section 2.
- `border-radius: 999px` pills as a content container. (Fine for an actual
  toggle or avatar.)
- Tracked-out uppercase micro-labels as section eyebrows.
- `01` / `02` numbering unless the content is genuinely a sequence.
- `→` or `↗` appended to link or button text. Style the link; do not decorate it.
- Italicising one word in a heading for emphasis.
- Gradient washes, glows, and decorative blurred blobs.
- A grid of identical cards with the same radius, border and shadow.
- Emoji anywhere in the UI.
- Inter, Roboto, Arial, Poppins, Montserrat as the primary face.
- Invented numbers, fake testimonials, logo walls of companies he has not worked with.
- Fade-and-slide-up entrance animations on every section as you scroll.

### Required

**Spacing.** 4px base scale only. One consistent page gutter that changes at
exactly the declared breakpoints.

**Type.** One or two families. If two, make them obviously different in kind —
not two grotesques that look similar. Six sizes maximum. Body measure under 80
characters. Mono is allowed only where it does a real job: code, identifiers,
tabular figures, dates in a table. Mono as decoration on a label is forbidden.

**Colour.** A page ground, two surface steps, a border tone, two text tones, and
**one** accent. The accent marks the primary action and the current item, and
nothing else. Body text ≥ 4.5:1 contrast, large text ≥ 3:1 — check it, do not
assume it.

**Motion.** *One* orchestrated moment on the page, total. Either a page-load
sequence or a single reveal, not both, and never one per section. Motion that
responds to a user action — opening, expanding, confirming — is always welcome
and does not count against the budget. Respect
`@media (prefers-reduced-motion: reduce)` on every animation you write; this is
not optional.

**Structure carries meaning.** A rule, a border, a number or a label goes on the
page only when it encodes something true about the content. If it is there to
look designed, delete it.

**Accessibility floor.** Real `<button>` and `<a href>` elements, never a div with
an onClick. Visible `:focus-visible` on everything interactive. Touch targets
≥ 44px. Alt text on meaningful images, `aria-hidden` on decorative SVG. Keyboard
path through the whole page.

**Quality floor.** Works at 390px. Passes `npm run check` and `npm run build`. No
layout shift on font load. No horizontal scroll at any width.

---

## 5. The visual direction is deliberately not specified

Earlier attempts failed partly because a direction was handed over as a finished
picture and then executed literally. Do not ask for that and do not invent it
alone in one pass either.

**Process:**

1. Read this document and the existing content in `src/data/`.
2. Propose **one** direction in prose, in your reply, before writing code:
   a named idea, a 5–6 value palette with hexes, the typefaces and their roles,
   the layout concept, and what the single memorable element is.
3. State plainly what makes it specific to *this* subject and not reusable for
   any other consultant. If you cannot answer that, the direction is not ready.
4. Check it against section 2 and section 3. Say what you changed after checking.
5. Only then build — and build the real page, in the real repo, at real widths.

**Spend the boldness in one place.** One element is allowed to be memorable.
Everything around it stays quiet and disciplined. A page with four interesting
ideas on it has none.

### Already tried and rejected — do not resurrect

- Cream paper + serif display + clay accent editorial. (The current site.)
- Pixel art, luzzu boats, retro game UI, level-select, sprites, 1-bit dither,
  early-GUI desktop chrome. Liked as character, rejected as unprofessional.
- Architecture diagrams, isometric exploded stacks, node graphs as hero art.
  Rejected — they looked amateurish and cluttered. **Do not put a hand-drawn
  technical diagram in the hero.**
- "Maltese, in Amsterdam" as a positioning line. Removed permanently — it is a
  fun fact, not a reason to trust someone with a budget. Amsterdam alone, as a
  location, is fine.

### Hero requirement

The hero is his **name and his job title**. No marketing headline, no claim
sentence, no tagline above or below it. Whatever visual interest the top of the
page has must come from how the name is set and from the structure around it.

---

## 6. Content, and where it lives

Source of truth is `src/data/` and `src/lib/site-config.ts`. Read from there.

**Facts, all verifiable:**

- Booking.com — Software Engineer, GenAI Engineering, Amsterdam, 2025–present.
  Internal agent platform, MCP integration platform, developer tooling.
- VU Amsterdam & University of Amsterdam — MSc Computer Science, 2023–2025.
  Thesis: industrial anomaly-detection pipelines on CNC machine signals with
  IDEKO, comparing MLflow and Kubeflow.
- PhoenixNAP — Software Engineer, 2021–2025. Backend orchestration for a
  bare-metal cloud: automated RAID configuration, custom OS images, Spring Boot
  provisioning tooling.
- CCBill — Software Engineer intern, 2018–2021.
- University of Malta — BSc Artificial Intelligence, 2018–2021.
- Published: *A Systematic Review of MLOps Tools*. Micallef, Z., Rajenthiram, K.,
  Gerostathopoulos, I. (2026). CAIN '26, ACM, Rio de Janeiro.
- BSc dissertation: saliency-directed product placement, Mask R-CNN, 0.66
  correlation with human attention.
- Contact: zak.micallef27@gmail.com · github.com/zakkarija ·
  linkedin.com/in/zakkarija-micallef

**Consulting areas:** agents and MCP integrations; backend and platform;
cloud, delivery and cost; ML pipelines in production.

**Copy rules.** Active voice. Sentence case. A button names what happens ("Book a
call", not "Submit"), and the same action keeps that name everywhere. Say what
something *is* before saying why it is good. Cut every sentence that would
survive unchanged on a different person's site.

---

## 7. Scope of the rebuild

- `src/styles/grotesque.css` is the old system. It gets **deleted**, not
  extended. Do not add rules to it.
- `src/styles/globals.css` still contains Tailwind-v3-era `@tailwind` directives
  alongside the v4 `@import "tailwindcss"`, plus dead utilities (`.glass-panel`,
  `.shadow-glow`, `.gradient-text`, cyan blur orbs). Clean this out.
- `src/components/Background.tsx` is unused dark-glass/blur-orb leftovers. Delete
  unless something still imports it — check first.
- The blog pages (`src/app/blogs/`) are on a completely different, untouched
  Tailwind look — white background, `text-gray-900`, rounded pills. They must end
  up on the same system as the rest of the site.
- `SHOW_AVAILABLE` in `src/lib/site-config.ts` currently hides the consulting
  section. Since the site is now consulting-facing, decide deliberately whether
  that flag stays and say which you chose.

Work incrementally: get one section right at real widths before starting the
next. A half-finished page that is genuinely good beats a complete page that is
uniformly mediocre.
