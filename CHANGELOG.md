# Changelog

All notable changes to `@aexae/comete-design-tokens` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] — 2026-03-24

Initial public release.

### Added

#### Build pipeline

- **Style Dictionary 5** + `@tokens-studio/sd-transforms` pour compiler les tokens JSON en CSS custom properties
- Fichier CSS unifié `build/css/comete-tokens.css` (~767 custom properties)
- Source au format **W3C Design Tokens (DTCG)**, éditée via Tokens Studio

#### Tokens primitifs

- **Couleurs** — 11 palettes (neutral, brand, success, warning, critical, information, accent, etc.)
- **Typographie** — 6 familles de polices, 4 weights, 2 échelles de tailles
- **Spacing** — 16 valeurs (de `2xs` à `4xl`)
- **Sizing** — 27 valeurs
- **Border-radius** — 12 valeurs (de `none` à `full`)
- **Ombres** — 6 niveaux d'élévation
- **Animation** — durées + courbes d'easing
- **Z-index**, **opacity**, **breakpoints**

#### Tokens sémantiques (light + dark)

- Catégories : `background`, `text`, `border`, `icon`
- Intentions : `default`, `brand`, `success`, `warning`, `critical`, `information`, `accent`
- États : `default`, `hovered`, `pressed`, `disabled`, `selected`

#### Tokens composants

Couverture initiale de 35 composants : `alert`, `autosave-indicator`, `avatar`, `badge`, `blanket`, `breadcrumbs`, `button`, `button-group`, `calendar`, `card`, `checkbox`, `code`, `drop-indicator`, `focus-ring`, `informative-state`, `input`, `logo`, `media-picker`, `menu`, `modal-dialog`, `month-picker`, `page`, `popup`, `radio`, `scrollbar`, `select`, `slot`, `snackbar`, `spinner`, `tabs`, `tag`, `text-field`, `toggle-button`, `week-picker`, `year-picker`

#### Theming

- Light mode activé par défaut sur `:root`
- Dark mode via attribut `[data-theme="dark"]` sur `<html>`
- Fallback automatique via `@media (prefers-color-scheme: dark)`

#### Écosystème

- Peer dependency de `@aexae/comete-design-system`
- Tokens `--icon-*` consommés par `@aexae/comete-icons`
