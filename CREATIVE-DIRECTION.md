# Debut Football — Creative Direction Document

> **Version:** 1.0
> **Date:** March 2026
> **Prepared by:** Creative Director
> **For:** Frontend Developer — Single-Page Landing Page Build
> **Handoff status:** Ready to build. All decisions are final unless noted otherwise.

---

## Preface: What This Page Must Do

This is not a portfolio site. It is not a sports startup. It is not a tech product.

This is a trust document. A parent in Toronto or Miami is going to land on this page while researching whether to hand their child's career to a stranger. Every design decision must serve that single purpose: make Michael Tait feel like the most credible, trustworthy person in a room full of sharks.

The brand already has strong bones. The navy and gold combination is genuinely good. The logo is distinctive. The copy is excellent. The job of this document is to make sure none of those assets are undermined by generic web design decisions.

---

## 1. Brand Analysis

### Logo Analysis

The primary logo (navy/gold on dark background) is the brand's most important asset and must be treated as sacred.

**What the logo communicates:**
- The football graphic uses a technical, network-node aesthetic — connecting the hexagonal pattern with circuit-like dots and lines. This is not a generic sports ball. It suggests intelligence, connectivity, and the idea of a global network. It is well-executed and distinctive.
- The wordmark "debut" is set in a rounded, confident sans-serif. Lowercase for approachability, but the weight is authoritative.
- "FOOTBALL" below in all-caps, tracking, gold — adds formality and international credibility.
- The partial "C" shape of the football creates forward motion. It visually implies emergence, debut, entry into something.

**Two distinct visual identities exist:**

Identity A — Navy/Gold (the primary brand):
- Deep navy background: approximately #0D0F3C (primary mockup) to #1A1F6B (product mockup)
- The logo file shows a background closer to #0E1154 — a true deep navy, not black
- Gold: approximately #C4993F — a warm, muted gold (not yellow, not metallic silver). Think aged coin.
- White: pure #FFFFFF for the "debut" wordmark
- This identity reads as: established, international, premium, trusted. Law firm meets football club.

Identity B — Green/Cyan gradient on light background (the alternate logo):
- Football uses a gradient from lime green (#5EC826 approximate) to cyan (#00B5D8 approximate)
- "debut" wordmark in deep navy (#1A237E approximate)
- "FOOTBALL" in bright cyan (#00B5D8 approximate)
- Background: white/off-white
- This identity reads as: modern, tech-forward, dynamic, growth-oriented.

**Critical observation:** The existing website mockups (both v1 and v2) used Identity B on a stadium photo background. This created a visual problem — the green/cyan logo disappears against a stadium's natural colors (sky blue, grass green). The logo competed with its own background. For the new build, this must be corrected.

**Recommendation:** Identity A (navy/gold) is the primary web identity. Identity B should be used sparingly — potentially as a logo variant on very light section backgrounds only. The hero must use Identity A.

### Business Card and Collateral Analysis

The business card mockups show two card formats:
- Front: Deep navy with centered logo in gold (gold-only version of the logo, no white)
- Back: Medium steel-blue/slate (#3A4A6B approximate) with contact details in white

This two-tone approach — deep navy for brand face, cooler steel-blue for functional information — gives a useful design cue for the website. Dark sections can use the deep navy. Information-heavy sections can use a slightly lighter navy/slate, creating depth without using color for its own sake.

The cup mockup confirms the brand is comfortable in a very saturated, high-contrast environment. The cup sits on a deep cobalt blue (#1A0DB5 approximate) which is slightly brighter than the card navy. This suggests the brand is not locked to a single navy shade — it can use a range from near-black navy to electric cobalt depending on context.

### Brand Personality Summary

Five words: **Credible. International. Grounded. Precise. Ambitious.**

This is not a hype agency. It is not trying to win design awards. It is trying to win trust from parents who have been burned by sports industry grifters. The design must communicate expertise through restraint, not through energy.

---

## 2. Design System Specifications

### Color Palette

```
PRIMARY COLORS
--debut-navy:        #0E1154    — Primary background. Deep navy, almost indigo.
--debut-navy-mid:    #1A2272    — Secondary dark surface. Cards on dark bg.
--debut-navy-light:  #252E7A    — Hover states, subtle borders on dark bg.

SECONDARY COLORS
--debut-slate:       #2C3E6B    — Section variant. Slightly blue-grey, less saturated.
--debut-off-white:   #F5F4F0    — Light section backgrounds. Warm, not cold white.
--debut-white:       #FFFFFF    — Text on dark, logo wordmark.

ACCENT COLORS
--debut-gold:        #C4993F    — Primary accent. CTA buttons, highlights, icon strokes.
--debut-gold-light:  #D4AD5A    — Gold hover state. Slightly lighter, warmer.
--debut-gold-muted:  #A07C2E    — Gold on light backgrounds where full saturation overwhelms.

UTILITY COLORS
--debut-green:       #3DB54A    — From Identity B gradient (start). Use only for Identity B contexts.
--debut-cyan:        #00B4D8    — From Identity B gradient (end). Use only for Identity B contexts.
--debut-text-body:   #1C1C2E    — Body text on light backgrounds. Near-black with blue undertone.
--debut-text-muted:  #6B7280    — Supporting/metadata text. Neutral grey.
--debut-border:      #E5E3DC    — Dividers on light backgrounds.
```

**The 60-30-10 Rule Applied:**
- 60%: #0E1154 (deep navy) — hero, footer, nav, alternating dark sections
- 30%: #F5F4F0 (warm off-white) — About, Services, How It Works, Parents sections
- 10%: #C4993F (gold) — all CTAs, section accents, logo marks, credential badges

Do not add additional colors. The temptation to use the green/cyan across the site must be resisted. Those colors appear only in the Identity B logo variant, and only when that variant is displayed on a light background.

### Typography

**Primary Typeface: Playfair Display**
- Use: Section headlines (H1, H2), the hero headline
- Weight: 700 (Bold) for primary headlines
- Style: Regular (not italic) for most uses. Italic sparingly for pull quotes.
- Why: Playfair has the gravitas of a financial institution or a premium law firm. It is not overused in sports. It says "we take this seriously" without shouting. It works in both navy-on-white and white-on-navy contexts.
- Google Fonts: Yes, available. Self-host for performance.

**Secondary Typeface: Inter**
- Use: Body copy, navigation, service descriptions, all UI elements, credentials bar, buttons
- Weight: 400 (Regular) for body, 500 (Medium) for subheads and labels, 600 (SemiBold) for nav and button text
- Why: Inter is the most readable screen typeface at any size. It pairs well with Playfair without competing. It is neutral and modern without being trendy.
- Google Fonts: Yes, available. Self-host for performance.

**Accent Typeface: Inter (All-caps, tracked)**
- Use: Labels, credentials bar, city names, section eyebrows (e.g., "FIFA LICENSED FOOTBALL AGENT")
- Style: `font-family: Inter; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px`
- Why: Creates hierarchy and formality without a third typeface. The tracking gives it a premium, institutional feel.

**Type Scale (base 16px):**
```
--text-xs:   12px / 1.5  — Labels, metadata, legal line
--text-sm:   14px / 1.6  — Supporting copy, location bar
--text-base: 16px / 1.7  — Body copy (generous line-height is mandatory for trust)
--text-lg:   18px / 1.6  — Lead paragraph, service descriptions
--text-xl:   20px / 1.5  — Card headers
--text-2xl:  24px / 1.4  — Section subheads
--text-3xl:  30px / 1.3  — Section heads (H2)
--text-4xl:  36px / 1.2  — Large section heads
--text-5xl:  48px / 1.1  — Hero headline (desktop)
--text-6xl:  64px / 1.0  — Hero headline (large screens, optional)
```

**Line-height note:** Body copy must use 1.7 minimum. This is not optional. Long-form copy at 1.5 line-height feels cramped and undermines trust. Generous line-height communicates confidence.

### Spacing System

Base unit: 4px (Tailwind's default scale works perfectly here)

```
--space-1:    4px
--space-2:    8px
--space-3:    12px
--space-4:    16px
--space-6:    24px
--space-8:    32px
--space-10:   40px
--space-12:   48px
--space-16:   64px
--space-20:   80px
--space-24:   96px
--space-32:   128px
```

**Section padding (desktop):** `py-24` (96px top and bottom) — this is the minimum between major sections. Some sections may use `py-32` (128px).

**Content max-width:** 1200px (`max-w-6xl` in Tailwind), centered. Never full-bleed for text content.

**Column gutters:** 32px (`gap-8` in Tailwind).

**The 60% whitespace rule applies.** No section should feel "filled in." Empty space communicates premium.

### Border Radius

```
--radius-sm:   4px   — Inputs, small elements
--radius-md:   6px   — Cards, buttons
--radius-lg:   8px   — Large cards, image containers
--radius-none: 0px   — Section dividers, credential bars (intentional sharpness)
```

Do not use `rounded-full` on anything except small pill badges. Rounded-everything is an AI tell and a design crutch. The brand should feel precise.

### Shadow System

```
--shadow-card:    0 1px 3px rgba(14, 17, 84, 0.08), 0 4px 12px rgba(14, 17, 84, 0.06)
--shadow-card-hover: 0 4px 16px rgba(14, 17, 84, 0.14), 0 8px 32px rgba(14, 17, 84, 0.10)
--shadow-gold:    0 0 0 2px rgba(196, 153, 63, 0.3)   — Focus ring on gold CTAs
```

Shadows use the navy tone, not pure black. This keeps them from feeling generic. No box shadows with colored glows. No glassmorphism.

### Button Styles

**Primary Button (Gold CTA):**
```
bg-[#C4993F] text-[#0E1154] font-semibold text-sm tracking-wide uppercase
px-8 py-3.5 rounded-md
hover:bg-[#D4AD5A] active:scale-[0.98]
transition-all duration-200
```

Note: Text on the gold button is navy, not white. This is the correct pairing — white on gold is low contrast and looks cheap. Navy on gold is bold and intentional.

**Secondary Button (Outlined Gold):**
```
border border-[#C4993F] text-[#C4993F] font-semibold text-sm tracking-wide uppercase
px-8 py-3.5 rounded-md bg-transparent
hover:bg-[#C4993F] hover:text-[#0E1154]
transition-all duration-200
```

**Ghost Button (White on Dark):**
```
text-white font-medium text-sm
underline underline-offset-4 decoration-[#C4993F]
hover:text-[#C4993F]
transition-colors duration-150
```

**Arrow CTAs (inline links):**
```
"Contact Us →"
text-[#C4993F] font-semibold text-sm tracking-wide
hover:tracking-wider transition-all duration-150
```
The arrow should shift right on hover using `translateX(4px)` on the arrow character.

---

## 3. Landing Page Section-by-Section Design Direction

### Section 1: Navigation

**Layout:**
Fixed top navbar. Full width. Not sticky-transforming (do not shrink or change color on scroll — this feels cheap and unnecessary).

Desktop: Logo left-aligned. Navigation links right-aligned. No hamburger on desktop.

Mobile: Logo left-aligned. Hamburger right-aligned. Full-screen mobile menu (not a dropdown) that opens as a sliding overlay from the right.

**Visual Treatment:**
Background: `#0E1154` (solid navy). No transparency. No blur/frosted glass.
The nav must feel like a header, not a UI element floating over content.
Height: 72px (`h-18` — add this custom value).
Border bottom: `border-b border-[#1A2272]` — a 1px rule that's barely visible, just enough to ground the nav.

**Logo in Nav:**
Use the white/gold version of the logo (Identity A). Scale to approximately 120px wide. Do not crop.

**Navigation Links:**
`text-white/70 font-medium text-sm tracking-wide hover:text-white transition-colors duration-150`
No underlines. No active state background. Active page is distinguished only by `text-white` (full opacity).

Links: Home | Services | About | Contact

**CTA in Nav (desktop only):**
A small gold outlined button: "Contact Us" — `border border-[#C4993F] text-[#C4993F] text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#C4993F] hover:text-[#0E1154] transition-all duration-200`

**Mobile Menu:**
Full-screen navy overlay (`bg-[#0E1154]`). Links stacked vertically, centered. Large type (24px). Gold accent on the active item.

---

### Section 2: Hero

This is the most important section. It needs to feel like nothing else in sports.

**The Core Problem with the Existing Mockups:**
Both existing hero mockups use the green/cyan gradient logo over a stadium photo. The stadium background (blue sky, green grass, yellow seats) creates a color war with the logo. The result looks like a Google Sites template, not a premium agency.

**What to Do Instead:**

Do not use a full-bleed stadium photo as a background. Use the navy from the brand palette as the dominant surface. The stadium lives as a contained, deliberate photographic element — not a background wash.

**Layout (Desktop):**
Two-column asymmetric grid. NOT equal halves.
- Left column: 55% width. Text content, left-aligned (not centered).
- Right column: 45% width. Stadium/pitch photograph in a contained frame.

The photograph sits in a right-column container with a subtle gold border or frame treatment. `rounded-lg overflow-hidden` with a 2px gold border (`border-2 border-[#C4993F]/30`). This gives the photo intentionality — it is curated, not wallpaper.

**Visual Treatment:**
Background: `#0E1154` (solid deep navy). Full section background. No gradient. No image behind the text.

The gold logo mark from Identity A sits at the section level as a massive watermark behind the text — the football shape at approximately 30% opacity in gold, positioned at the right edge of the text column, scale approximately 400px. This creates texture without adding clutter. `position: absolute; opacity: 0.03` — barely visible, like a watermark on fine paper.

**Typography:**

Eyebrow (above headline):
```
"FIFA LICENSED FOOTBALL AGENCY"
font-family: Inter, font-weight: 500, font-size: 12px, letter-spacing: 0.12em, text-transform: uppercase
color: #C4993F
margin-bottom: 16px
```

Headline:
```
"From First Contract to First Team."
font-family: Playfair Display, font-weight: 700, font-size: 56px (desktop) / 36px (mobile)
color: #FFFFFF
line-height: 1.1
margin-bottom: 24px
```

No period anxiety — keep the period. It's authoritative.

Subheadline:
```
"Where North American Talent Meets Global Opportunity."
font-family: Inter, font-weight: 400, font-size: 20px, color: rgba(255,255,255,0.75)
line-height: 1.5
margin-bottom: 20px
```

Body line:
```
"Debut Football represents emerging players from North America on the path to professional careers at home and overseas. FIFA Licensed. Internationally connected. Built for families who want more than promises."
font-family: Inter, font-weight: 400, font-size: 16px, color: rgba(255,255,255,0.65)
line-height: 1.7
max-width: 520px
margin-bottom: 32px
```

Location bar:
```
"Toronto  ·  Miami  ·  Barcelona  ·  London"
font-family: Inter, font-weight: 500, font-size: 12px, letter-spacing: 0.08em
color: rgba(255,255,255,0.45)
margin-bottom: 40px
```

**CTAs:**
Primary gold button: "Contact Us" (with arrow)
Below it: `"No fees to inquire. No pressure to sign. Just an honest conversation about your future."` in `text-white/40 text-sm italic font-light`

**Right Column Photo:**
Use a stadium/pitch photograph shot from ground level looking up. Ideally the same La Bombonera stadium visible in the existing mockups — the low angle of the grass with stadium in background. This is the right instinct from the existing designs; the execution just needs to change from full-bleed background to contained frame.

Photo treatment: Slight warm overlay to prevent the blue sky from clashing with the navy (`after:` pseudo-element, `bg-[#0E1154]/20`). Do not desaturate. Do not apply heavy filters. Let the photograph breathe.

**Scroll indicator:**
Below the hero, a subtle animated scroll chevron in gold (`text-[#C4993F] opacity-60`) that pulses gently. `animate-bounce` with reduced timing — `animation: bounce 2s ease-in-out infinite`.

**Mobile (below 768px):**
Single column. Photograph moves below the text, displayed as a full-width image with `aspect-[16/9]`. All text left-aligned. Font sizes use the mobile scale.

**Animation on Load:**
Eyebrow fades in (0ms delay, 600ms duration).
Headline fades and slides up 20px (100ms delay, 700ms duration).
Subheadline fades (200ms delay, 700ms duration).
Body + CTA fades (350ms delay, 600ms duration).
Right column image fades in (200ms delay, 900ms duration).

Use Framer Motion's `motion.div` with `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}`.

---

### Section 3: About / The Approach

**Transition from Hero:**
The transition from dark navy (hero) to light (about) must be clean. No diagonal cuts, no wave shapes. A simple `border-t-4 border-[#C4993F]` at the top of this section, functioning as a gold rule, creates the break.

**Background:** `#F5F4F0` (warm off-white). Not pure white — pure white feels clinical. The warm tone reads as comfortable and trustworthy.

**Layout:**
Two columns on desktop. NOT equal.
- Left column (40%): Section label and headline. Left-aligned.
- Right column (60%): Body copy and CTA.

This asymmetry prevents the "brochure" feel of equal 50/50 layouts.

**Section label (eyebrow):**
```
"THE APPROACH"
Inter 500, 11px, letter-spacing 0.14em, uppercase
color: #C4993F
margin-bottom: 12px
```

**Headline:**
```
"Built Around the Player. Not the Deal."
Playfair Display 700, 36px desktop / 28px mobile
color: #0E1154
line-height: 1.2
```

**Body:**
```
Inter 400, 17px, line-height 1.75
color: #1C1C2E
max-width: 600px
```

Paragraphs separated by 20px margin. Do not use `<br>` tags — use proper paragraph spacing.

**Decorative element:**
In the left column, below the headline, a short 40px horizontal gold rule: `<div class="w-10 h-0.5 bg-[#C4993F] mt-6 mb-8">`. This is a design trademark — use it consistently as a section separator throughout the page.

**CTA:** Ghost/inline arrow link style. `text-[#C4993F] font-semibold text-sm` with the arrow. Not a full button — this section is about philosophy, not conversion. Keep the CTA understated.

**Scroll animation:**
Headline slides in from left when the section enters viewport (using Framer Motion `whileInView`). Body fades in with a 150ms delay. No aggressive animations — this section is calm.

**Mobile:**
Single column. Headline and body stacked. Same font sizes, reduced to mobile scale.

---

### Section 4: Michael Tait — Principal Agent

This is the trust section. It must feel like reading about a person, not a product.

**Background:** `#0E1154` (returns to dark navy). This dark-light-dark rhythm gives the page visual structure.

**Layout (Desktop):**
Two columns.
- Left column (40%): Photo. Left-aligned within column.
- Right column (60%): Bio and credentials.

The photo is NOT a centered headshot in a circle. It is a rectangular portrait image, `aspect-[3/4]` ratio, `rounded-lg`, with a subtle gold border treatment: `ring-2 ring-[#C4993F]/30 ring-offset-4 ring-offset-[#0E1154]`. This creates a thin, elegant frame that lifts the photo off the dark background without being heavy-handed.

Photo caption below image:
```
"Michael Tait — Principal Agent"
Inter 500, 12px, letter-spacing 0.08em, text-transform: uppercase
color: rgba(255,255,255,0.45)
margin-top: 12px
```

**Section label:**
```
"PRINCIPAL AGENT"
Inter 500, 11px, letter-spacing 0.14em, uppercase
color: #C4993F
margin-bottom: 12px
```

**Headline:**
```
"Meet Michael Tait"
Playfair Display 700, 36px desktop
color: #FFFFFF
```

**Bio Copy:**
```
Inter 400, 16px, line-height 1.75
color: rgba(255,255,255,0.75)
```

The bio is long. Do not truncate it. Long copy here is an asset, not a problem. Parents who are evaluating trust will read every word. Paragraph breaks should be respected exactly as written.

**Credentials Bar:**
This is a design element, not just text. Three credentials, displayed as a horizontal strip with subtle gold dividers.

```
[FIFA Licensed Football Agent]  |  [LLM, International Sports Law]  |  [UCFB Lecturer]
```

Style:
```
background: rgba(196, 153, 63, 0.08)
border-top: 1px solid rgba(196, 153, 63, 0.2)
border-bottom: 1px solid rgba(196, 153, 63, 0.2)
padding: 16px 0
margin: 32px 0
```

Each credential:
```
Inter 500, 12px, letter-spacing 0.10em, uppercase
color: #C4993F
```

Dividers between credentials: `|` character in `text-[#C4993F]/30`

**LinkedIn link:**
Ghost link style. `text-white/60 hover:text-white font-medium text-sm` with LinkedIn icon (from Lucide React, `size={14}`). Underline on hover.

**Scroll animation:**
Photo slides in from left (`x: -30, opacity: 0`). Bio slides in from right (`x: 30, opacity: 0`). Both animate simultaneously on viewport entry with `whileInView` and `once: true`.

**Mobile:**
Photo appears first, full-width at `aspect-[4/3]`. Bio below. Credentials bar stacks to two lines if needed.

---

### Section 5: Services

**Background:** `#F5F4F0` (warm off-white — returns to light).

**Layout:**
Section header is full-width, left-aligned (not centered).
Below the header: 2x2 grid on desktop. NOT 4 columns side by side. 2x2 is the right call — it gives each service room to breathe.

Grid: `grid grid-cols-1 md:grid-cols-2 gap-8`

**Section label:**
```
"WHAT WE DO"
Inter 500, 11px, letter-spacing 0.14em, uppercase
color: #C4993F
```

**Section Headline:**
```
"Four Ways We Work For You."
Playfair Display 700, 36px
color: #0E1154
```

**Service Card Design:**
This is where most templates fail. Do not use icon-heavy cards with colored backgrounds. These will look generic.

Instead: Each card is a clean white rectangle (`bg-white`) with a left border accent — a 3px solid gold left border: `border-l-4 border-[#C4993F]`. No icon. No gradient. No rounded top corners. The gold left border IS the visual element.

```
Card styles:
bg-white
border-l-4 border-[#C4993F]
p-8
rounded-r-lg rounded-l-none  (sharp left edge from border, soft right)
shadow-[0_1px_3px_rgba(14,17,84,0.08)]
hover:shadow-[0_4px_16px_rgba(14,17,84,0.14)]
hover:-translate-y-1
transition-all duration-300
```

**Inside each card:**

Service number:
```
"01" / "02" / "03" / "04"
Inter 700, 48px, color: rgba(196, 153, 63, 0.12)
position: absolute, top-right of card
line-height: 1
```
This large, washed-out number creates depth and visual interest without competing with the text.

Service tag (bold intro line):
```
"For players ready to go professional."
Inter 600, 13px, letter-spacing 0.04em
color: #C4993F
margin-bottom: 8px
```

Service title:
```
"Player Representation"
Playfair Display 700, 22px
color: #0E1154
margin-bottom: 12px
```

Service body:
```
Inter 400, 15px, line-height 1.7
color: #6B7280
```

No CTA inside individual cards. The overall section CTA (if needed) lives below the grid.

**Scroll animation:**
Cards appear with a stagger — each card delays by 100ms from the previous. `whileInView`, `once: true`.

**Mobile:**
Single column stack. Cards at full width. Left border treatment remains.

---

### Section 6: How It Works (Process)

**Background:** `#0E1154` (returns to dark navy for contrast).

**Layout:**
This section should NOT be a horizontal 4-step timeline. Those look like every SaaS onboarding sequence ever built. Instead: vertical numbered list on one side, with descriptive content on the other.

Desktop: Left column (30%) contains the large step number. Right column (70%) contains the step title and description. Full width of the section, one step per row, separated by a 1px `border-b border-[#1A2272]` rule.

Actually — even better: a single-column layout, each step as a full-width row. This feels more editorial, like reading a process document. Less decorative, more substantive.

Each step row:
```
display: flex
align-items: flex-start
gap: 48px
padding: 40px 0
border-bottom: 1px solid rgba(255,255,255,0.06)
```

Step number:
```
Playfair Display 700, 80px, color: rgba(196, 153, 63, 0.15)
flex-shrink: 0, width: 80px
line-height: 1
```

Step content:
```
flex: 1
```

Step title:
```
Inter 600, 20px
color: #FFFFFF
margin-bottom: 8px
```

Step description:
```
Inter 400, 16px, line-height 1.7
color: rgba(255,255,255,0.65)
max-width: 640px
```

**Section label and headline (above steps):**

```
"THE PROCESS"
Inter 500, 11px, letter-spacing 0.14em, uppercase, color: #C4993F

"How It Works"
Playfair Display 700, 36px, color: #FFFFFF
margin-bottom: 48px
```

**Scroll animation:**
Each step row fades in with a `y: 20` slide as the user scrolls. Staggered by 150ms. `whileInView`, `once: true`.

**Mobile:**
The large step number moves above the step title. Full-width rows. Same visual treatment.

---

### Section 7: For Parents and Families

This is the most emotionally significant section. It must feel like a direct, personal conversation.

**Background:** `#F5F4F0` (warm off-white). The warmth of this background matters here. This is a human moment.

**Layout:**
This section uses a different structure: full-width headline centered (yes, centered — this is the one exception to asymmetry, because centering here signals "I'm speaking directly to you"). Below that, a single column of copy with generous padding. Max-width 700px, centered.

Wait — the copy for this section is structured as six bulleted/bold claims. These should be presented as a clean list design, not paragraph prose. Design them as:

Six-item feature list, displayed in a 2-column grid on desktop, 1-column on mobile. Each item:

```
Item container:
display: flex
align-items: flex-start
gap: 16px
padding: 24px 0
border-bottom: 1px solid #E5E3DC
```

Checkmark icon:
Use a custom gold checkmark (not a generic emoji). A simple SVG circle with a checkmark inside, in gold `#C4993F`, size 20px. Do NOT use a generic checkbox. This should feel like a verification mark, not a form element.

Bold claim (the "We..." statement):
```
Inter 600, 16px
color: #0E1154
```

Supporting text:
```
Inter 400, 15px, line-height 1.65
color: #6B7280
```

**Section label and headline:**
```
"FOR FAMILIES"
Inter 500, 11px, letter-spacing 0.14em, uppercase, color: #C4993F, text-align: center

"A Message for Parents and Families"
Playfair Display 700, 36px, color: #0E1154
text-align: center
margin-bottom: 16px

Intro paragraph (from copy):
"We know this decision carries weight..."
Inter 400, 18px, line-height 1.7, color: #1C1C2E
text-align: center, max-width: 620px, margin: 0 auto 48px
```

**Gold rule divider:** 40px gold bar below the intro paragraph, centered: `<div class="w-10 h-0.5 bg-[#C4993F] mx-auto mb-12">`.

**Scroll animation:**
Section fades in as a whole. Individual list items stagger in with 80ms delay each.

---

### Section 8: Where We Work (Global Reach)

**Background:** `#0E1154` (dark navy).

**Layout:**
This section should be understated, not a design showpiece. Do not build a full-screen map. Do not put city photos. The copy is explicit: "Do not over-emphasize."

A clean horizontal layout on desktop:

Section headline (left), then four city blocks arranged in a row.

Each city block:
```
City name: Playfair Display 600, 24px, color: #FFFFFF, margin-bottom: 6px
Description: Inter 400, 14px, line-height: 1.6, color: rgba(255,255,255,0.55)
```

Between city blocks: a vertical 1px separator in `rgba(196, 153, 63, 0.2)`.

Desktop: `grid grid-cols-4 gap-0` with borders between columns.
Mobile: `grid grid-cols-2 gap-8`.

**Section label and headline:**
```
"GLOBAL REACH"
Inter 500, 11px, letter-spacing 0.14em, uppercase, color: #C4993F

"Where We Work"
Playfair Display 700, 36px, color: #FFFFFF
margin-bottom: 48px
```

Below the four cities, a single understated line:
```
"Representing North American players internationally means being where the opportunities are."
Inter 400, 16px, color: rgba(255,255,255,0.45), margin-bottom: 48px
```

**Optional decorative element:**
A very minimal line-art world map in `rgba(255,255,255,0.03)` as an SVG background behind this section. Barely perceptible — purely textural. Four dots at the approximate geographic positions of the four cities, in `rgba(196, 153, 63, 0.25)`. Do not label the dots — the text content does that work. This is a judgment call for the developer; skip it if the SVG adds too much complexity.

**Scroll animation:**
City blocks fade in with a stagger (100ms each).

---

### Section 9: Contact / Final CTA

**Background:** `#F5F4F0` (warm off-white — returns to light for the final human moment before footer).

**Layout:**
Centered. This is one of the few sections where centering is correct. This is the pitch. Put everything in the center of the stage.

Max-width: 720px, centered.

**Section label:**
```
"GET STARTED"
Inter 500, 11px, letter-spacing 0.14em, uppercase, color: #C4993F, text-align: center
```

**Headline:**
```
"Take the First Step"
Playfair Display 700, 48px desktop / 32px mobile
color: #0E1154
text-align: center
line-height: 1.1
margin-bottom: 20px
```

**Body:**
```
"Whether you're a player exploring your options, a parent figuring out the right path for your child, or a coach who knows someone with real talent, we're here to help you think it through."
Inter 400, 18px, line-height: 1.7
color: #6B7280
text-align: center
max-width: 580px, margin: 0 auto 40px
```

**Primary CTA:**
Large gold button: `bg-[#C4993F] text-[#0E1154] font-semibold text-base tracking-wide uppercase px-12 py-4 rounded-md hover:bg-[#D4AD5A] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`

Text: "Contact Us"

**Secondary contact info (below button):**
```
"Or reach out directly:"
Inter 400, 14px, color: #6B7280, text-align: center

contact@debutfootball.com
Inter 500, 14px, color: #0E1154, text-align: center

Michael Tait  |  LinkedIn →
Inter 400, 14px, color: #6B7280, text-align: center
```

LinkedIn → uses the same gold arrow link style as body CTAs.

**Legal line:**
```
"Debut Football is a FIFA-compliant football agency. All representation agreements follow FIFA Football Agent Regulations."
Inter 400, 12px, color: rgba(0,0,0,0.35), text-align: center
margin-top: 32px
```

**Top decoration:**
Before the headline, a thin 1px gold horizontal rule: `<div class="w-16 h-px bg-[#C4993F] mx-auto mb-8">`. Longer than the others used in-body — this one is more prominent because it's the visual anchor before the final ask.

---

### Section 10: Footer

**Background:** `#0E1154` (deep navy — back to brand dark).
Border-top: `4px solid #C4993F` — a gold rule that caps the footer from the content above.

**Layout:**
Two rows.

Row 1 — Three columns:
- Left: Logo (Identity A — white/gold). Below logo: tagline or city list.
- Center: Quick nav links (stacked vertically, not horizontal).
- Right: Social links + credential badge.

Row 2 — Single row:
`© 2026 Debut Football. All rights reserved.` left-aligned.
`Privacy Policy | Terms of Service` right-aligned.
1px separator line above this row in `rgba(255,255,255,0.08)`.

**Logo in footer:**
Same Identity A logo, but slightly smaller (~100px wide). No navigation label needed — the logo is identification enough.

**City list below footer logo:**
```
"Toronto | Miami | Barcelona | London"
Inter 400, 12px, letter-spacing: 0.06em
color: rgba(255,255,255,0.35)
margin-top: 8px
```

**FIFA Licensed badge:**
A small rectangular badge element, not an icon:
```
"FIFA LICENSED FOOTBALL AGENCY"
background: rgba(196, 153, 63, 0.10)
border: 1px solid rgba(196, 153, 63, 0.25)
padding: 6px 12px
border-radius: 4px
Inter 500, 10px, letter-spacing 0.10em, uppercase
color: rgba(196, 153, 63, 0.8)
display: inline-block
margin-top: 12px
```

**Nav links in footer:**
`text-white/50 hover:text-white text-sm font-medium transition-colors duration-150` — same four links as header.

**Social icons:**
LinkedIn, X/Twitter, Instagram. Use Lucide React icons (`size={18}`). `text-white/40 hover:text-[#C4993F] transition-colors duration-150`.

**Bottom row:**
```
color: rgba(255,255,255,0.3)
font-size: 12px
font-family: Inter 400
```

---

## 4. Visual Mood and Inspiration

### Overall Mood

Five words: **Credible. Precise. Aspirational. Grounded. International.**

The closest reference point is not another sports agency. The closest reference points are:
1. A premier European law firm's digital presence — clean, authority-first, text-led.
2. A luxury watch brand like IWC or Longines — the product is serious, the design steps back and lets it speak.
3. The Financial Times digital product — gold accent on dark, editorial typography, zero decorative clutter.

The brand must feel like it belongs in the same room as Gestifute (Jorge Mendes' agency) or CAA Stellar — not like a Toronto startup with a good logo.

### Using Both Color Identities

**Identity A (Navy/Gold) — Primary Web Identity:**
- Navigation
- Hero section
- Michael Tait section
- How It Works section
- Global Reach section
- Footer
- All dark-background sections

This identity communicates: established, trustworthy, international, serious.

**Identity B (Green/Cyan) — Secondary, Light Background Only:**
The alternate logo (green/cyan gradient on white) should appear ONLY in contexts where the navy background would be inappropriate — for example:
- Email signatures
- Light-mode print materials
- Social media profile icon (where navy reads as dark/aggressive at small sizes)

On the web landing page, Identity B appears only if there is a white/light section where a logo mark is needed for some reason. Given the current section structure, this is unlikely. The Identity B logo should NOT appear in the hero or navigation.

Do not use the green/cyan gradient as a decorative element elsewhere on the page. These colors belong to the logo, not the UI.

### Photography Direction

All photography must follow the same visual instinct visible in the existing mockups: **close-cropped stadium grass shot from ground level looking toward the stands and sky**.

This is the right call. Here is why:
- It is immediately recognizable as football without being cliché (no action shots of players celebrating)
- The perspective is unusual — it puts the viewer at the level of a player, on the pitch
- It is aspirational without being generic
- It works with the navy palette because the stadium seats often appear blue/navy in the background

Source options:
- The La Bombonera (Buenos Aires) shot used in the mockups is excellent. License or find equivalent.
- Alternative: Close crop of grass at Camp Nou, Stamford Bridge, or Wembley — grass-level upward angle.
- Avoid: Player celebration shots, trophy photos, crowd shots, training ground candids.

For Michael Tait's headshot:
- Professional but warm
- Jacket, no tie (as specified in copy notes)
- Neutral background — ideally a muted dark tone that works with the navy section
- NOT a stock-feeling headshot. Should feel like a GQ or magazine portrait, not a LinkedIn profile picture.
- Light from one side (not flat even studio lighting) — directional light reads as confident.

### Imagery Treatment

On dark sections, photographs should have a subtle navy overlay to harmonize with the background:
```css
.photo-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 17, 84, 0.3) 0%, transparent 60%);
  border-radius: inherit;
}
```

This gradient-from-bottom treatment is standard practice for photographs on branded backgrounds and does not read as a heavy filter.

---

## 5. Key Design Principles

### Principle 1: Trust is Built Through Restraint

Every time you want to add something decorative — a glow, a gradient, an animation, a badge, an icon — ask: "Does this element make Michael Tait more credible or less credible?"

If the answer is "less credible" or "neutral," remove it.

The page earns trust by feeling like it was designed by someone who knows exactly what they are doing and had the confidence not to fill every pixel.

### Principle 2: Parents First, Players Second

The copy already handles this distinction. The design must reinforce it.

For parents: The design should feel like a premium financial advisor's website. Calm, organized, authoritative, never flashy. The long-form bio for Michael Tait, the credentials bar, and the "For Parents" section are the highest-trust zones on the page. Give them space.

For players: The aspirational photo in the hero, the international presence of the four cities, and the "How It Works" section speak to ambition. But this appeal must be secondary to the trust signal for parents. A player who wants to sign with Debut must first convince their parent. That parent lands on this page and evaluates it. Design for that parent.

### Principle 3: International Means Understated, Not Loud

Bad interpretation of "international": flags, maps, world icons, sports stock photography from four different countries.

Good interpretation of "international": Four city names in quiet, elegant typography. A bio that references Buenos Aires, FIFA, and CAS without making a spectacle of it. Navigation in English, designed at the quality level of a London or Barcelona digital studio.

### Principle 4: One Memorable Element Per Section

The rules for what makes each section distinctive:
- Hero: The stadium photo as a contained frame, not background wallpaper.
- About: The intentional asymmetry of 40/60 columns.
- Michael Tait: The gold-framed portrait and the credential strip.
- Services: The gold left-border cards with large washed-out numbers.
- How It Works: The editorial, document-style list.
- Parents: The custom gold verification marks.
- Cities: The restrained horizontal four-column strip.
- Contact: The focused, centered moment before the footer.

No section should try to be memorable in more than one way. One distinctive element per section. Everything else recedes.

### Principle 5: No AI Aesthetic

The following are explicitly forbidden:
- Purple-to-blue gradients anywhere
- Glassmorphism or frosted glass effects
- Animated particle backgrounds
- Generic sports stock photos (jumping celebrations, trophy lifts, handshakes)
- Icon libraries used decoratively (no "sports ball" icons, no generic globe icons, no checkmark circles in gradient colors)
- Neon glow effects
- Parallax scrolling effects (they feel dated and reduce perceived quality)
- Generic 3-column grids for anything
- Everything centered (except the Contact section which has intentional reason)

---

## 6. Tech Stack Recommendation

### Core Stack

**Framework:** Next.js 15 (App Router) — mandatory. Use the App Router, not Pages Router. Server components for static sections, Client components only where interactivity is required (navigation, animations, form).

**Language:** TypeScript — strict mode enabled.

**Styling:** Tailwind CSS v3 with a custom `tailwind.config.js` that extends the default palette with the Debut color tokens defined in Section 2 of this document.

Custom config additions:
```js
extend: {
  colors: {
    'debut-navy': '#0E1154',
    'debut-navy-mid': '#1A2272',
    'debut-slate': '#2C3E6B',
    'debut-off-white': '#F5F4F0',
    'debut-gold': '#C4993F',
    'debut-gold-light': '#D4AD5A',
    'debut-gold-muted': '#A07C2E',
    'debut-text': '#1C1C2E',
  },
  fontFamily: {
    'display': ['Playfair Display', 'Georgia', 'serif'],
    'body': ['Inter', 'system-ui', 'sans-serif'],
  },
}
```

### Animation

**Primary: Framer Motion (v11)**

Use Framer Motion for:
- Section entrance animations (`whileInView`, `once: true`)
- Hero load sequence (staggered text fade-in)
- Card hover states (subtle scale/shadow transitions)
- Mobile menu open/close animation
- The photo frame in the hero

Do NOT use Framer Motion for:
- CSS transitions that are simple enough for Tailwind (`transition-all duration-200`)
- Scroll-triggered color changes on the navbar (handle with CSS or simple `useScroll`)

GSAP is not recommended for this project. GSAP's strength is complex timeline animations (character-by-character reveals, path animations, scene orchestration). This page does not need that complexity. Framer Motion is lighter, better integrated with React, and sufficient for what is needed here.

**Secondary: CSS Transitions (Tailwind)**

Button hover states, link color changes, card shadows — all handled with Tailwind's `transition-` utilities. No JavaScript for these.

### Component Library

**shadcn/ui — selective use**

Do not install shadcn/ui wholesale. Cherry-pick only:
- `Button` component (as a base, restyled completely with Debut tokens)
- `Sheet` component (for mobile menu overlay)
- `Separator` (for horizontal rule elements)

Everything else — cards, sections, credentials bar, city blocks — should be built custom. Using shadcn card components will produce generic results. The design direction in this document requires custom components.

### Font Loading

Use `next/font/google` to self-host both Google Fonts:
```ts
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})
```

This avoids the third-party Google Fonts request and improves Core Web Vitals (LCP and CLS). Critical for a trust-first agency site — page performance is itself a trust signal.

### Image Handling

Use Next.js `<Image>` component for all photographs. Set `priority` on the hero image. Provide `alt` text that is descriptive (not "hero background").

Format: WebP with JPEG fallback. Source images should be minimum 2000px wide to serve retina displays.

### Contact Form

The contact section currently uses `mailto:` links. For production, implement a contact form using:
- React Hook Form (validation)
- Resend (email delivery API)
- A simple server action in Next.js App Router

The form should be minimal: Name, Email, Player or Parent (select), Message. No more fields. Every additional field reduces conversion rate.

Form error states and success state should use Framer Motion for the feedback animation — a subtle slide-in confirmation message in gold.

### Analytics and Performance

- Vercel Analytics (zero-config, privacy-respecting) for page analytics
- Vercel Speed Insights for Core Web Vitals monitoring
- Target: LCP under 2.5s, CLS under 0.1, INP under 200ms

### SEO

Implement metadata using Next.js 15's Metadata API:
```ts
export const metadata: Metadata = {
  title: 'Debut Football | FIFA Licensed Football Agent | North America to Europe',
  description: 'Debut Football represents emerging players from North America on the path to professional careers overseas. FIFA Licensed Agent Michael Tait. Offices in Toronto, Miami, Barcelona, London.',
  openGraph: {
    images: ['/og-image.jpg'], // Custom OG image in navy/gold brand
  },
}
```

The OG image should be a branded card: navy background, gold logo, headline, four cities. Do not use a generic screenshot.

---

## 7. File and Component Structure Recommendation

```
/app
  layout.tsx          — Font loading, metadata base, nav
  page.tsx            — Single page, section imports

/components
  /navigation
    Nav.tsx
    MobileMenu.tsx
  /sections
    Hero.tsx
    About.tsx
    Agent.tsx
    Services.tsx
    Process.tsx
    Parents.tsx
    Cities.tsx
    Contact.tsx
    Footer.tsx
  /ui
    Button.tsx         — Custom, uses Debut tokens
    GoldRule.tsx       — Reusable 40px gold bar
    SectionLabel.tsx   — Reusable eyebrow label
    CredentialBadge.tsx
    ServiceCard.tsx
    ProcessStep.tsx
    CityBlock.tsx

/lib
  fonts.ts            — next/font configuration
  constants.ts        — Colors, type scale as JS constants (mirrors tailwind config)
```

---

## 8. What to Build First (Priority Order)

1. Design token setup (Tailwind config + fonts) — everything depends on this
2. Navigation (static, no functionality needed except mobile menu)
3. Hero (highest visual complexity, sets the tone for everything else)
4. Michael Tait section (second highest trust impact)
5. Services section (first section parents will scan)
6. How It Works (establishes process credibility)
7. For Parents section (emotional close)
8. About / The Approach (supports the narrative but lower conversion impact)
9. Cities section (supporting, not primary)
10. Contact / CTA (the conversion point)
11. Footer

Do not build the footer last minute. It is the brand's final impression. Give it proper attention.

---

*Creative direction prepared for Debut Football — March 2026*
*This document is the single source of truth for all design decisions on the landing page.*
*Any deviation from these specifications requires sign-off from the Creative Director.*
