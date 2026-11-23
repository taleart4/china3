# Project memory

## Product intent & audience

- B2B consulting platform connecting Chinese businesses with Mexico.
- Establishes a primary contact and consulting service in Mexico.
- Two service tracks: tech delegations and e-commerce supply coordination.
- Trilingual support: English, Spanish, Mandarin — serving both Chinese and Mexican audiences in their native languages.

## Brand personality & voice

- Professional B2B consulting tone suited for cross-border (China–Mexico) business audiences.
- Trust-building, service-oriented framing.
- All user-facing text fully localized across three languages.

## Visual design & UX direction

- **Color:** Red fully removed from text; emerald/green is the primary accent across the site (eyebrow labels, section labels, icons, required-field asterisks, focus rings, selected-option borders, buttons, active language highlight).
- **Language switcher:** Globe icon + dropdown in header top-right; EN / ES / 中文 options; active language highlighted in emerald; works on desktop and mobile.
- **Components observed:** buttons, form inputs with required fields, profile-selection options with "Best for" labels, section/eyebrow labels, icons, language dropdown.
- **Interactions:** form focus states use emerald focus rings; selected profile options use emerald border highlight; instant language switching without page reload.
- **i18n architecture:** translation system with language context/provider (`LangProvider`); all text content (nav, hero, services, tracks, process, about, contact, form labels/placeholders/buttons/messages) driven by translations.
- Tailwind CSS with lucide-react icons; JSX/React hooks; `@/` path alias for `src/` imports.
- Build and type-check both passing.

## Decisions, constraints & rationale

- **No red in fonts/text** — explicit user constraint. Red eliminated entirely from text contexts; also removed from button backgrounds. All accents now emerald/green.
- Green/emerald chosen as consistent replacement for prior red accents.
- **Trilingual support added** per user request; English, Spanish, Mandarin selected as the three relevant languages for China–Mexico cross-border audience.
- Language preference persisted via localStorage; browser language auto-detected on first visit (Spanish → ES, Chinese → 中文, default → EN).
- Full-text translation (not partial) so every visible string switches languages.

## Open questions & assumptions

- Whether emerald/green is the final brand palette or an interim replacement for red (not yet confirmed by user).
- Whether two service tracks need distinct visual treatment beyond labels.
- Whether Mandarin should use simplified Chinese (current assumption: simplified).
- Whether additional languages (e.g., Portuguese) may be needed later.
- Whether language switcher should appear in footer as well as header.