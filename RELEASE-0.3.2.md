# @aexae/comete-design-tokens v0.3.2 — Première release

La fondation de l'écosystème Comète : **767 CSS custom properties** compilées dans un fichier unique, avec support natif du light/dark mode.

## Contenu

### Tokens primitifs (~317)

- **Couleurs** — 11 palettes (biscay, lightning-yellow, red, salem, grey, porcelain, blue-marguerite, blue-grey, supernova, green-vogue, saffron) + neutrals avec alpha
- **Typographie** — 6 familles (Poppins, Outfit, Satoshi, Urbanist, Space Grotesk, SF Mono), 4 weights, 2 échelles de tailles (ui + hero), line-heights, letter-spacing
- **Spacing** — 16 valeurs (0px → 128px)
- **Sizing** — 27 valeurs (0px → 1024px)
- **Border radius** — 12 valeurs (0px → round)
- **Shadows** — 6 niveaux (none → xl)
- **Animation** — 5 durées + 4 courbes d'easing
- **Opacity, Z-index** (9 niveaux), **Breakpoints** (4)

### Tokens sémantiques (~300, light + dark)

- **Surfaces** : background (neutral, brand, selected, success, warning, critical, information, accent, cycle, focused, alpha)
- **Texte** : primary, selected, disabled, link, subtle, inverted, success, information, warning, critical, subtlest, accent, brand
- **Bordures** : 12+ variantes sémantiques
- **Icônes** : 11 couleurs sémantiques (`--icon-default`, `--icon-brand`, etc.)
- **Interaction** : hovered, pressed
- **Blanket** : overlay

## Theming

- `:root` expose les primitifs + les tokens sémantiques light par défaut
- `[data-theme="dark"]` applique les overrides dark
- Fallback `@media (prefers-color-scheme: dark)` si aucun `data-theme` n'est défini

## Stack technique

- **Source** : JSON au format W3C Design Tokens (`$type`/`$value`), édités via Tokens Studio
- **Build** : Style Dictionary 5.0.0 + @tokens-studio/sd-transforms 1.3.0
- **Sortie** : un fichier CSS unique `build/css/comete-tokens.css` (805 lignes)
- **Distribution** : GitHub Packages (`@aexae/comete-design-tokens`)

## Utilisation

```bash
pnpm add @aexae/comete-design-tokens
```

```css
@import "@aexae/comete-design-tokens/css";
```

```css
.component {
  color: var(--text-default);
  background: var(--background-neutral-default);
  border: 1px solid var(--border-default);
}
```

## Écosystème

Peer dependency de `@aexae/comete-design-system`. Les tokens `--icon-*` sont consommés par `@aexae/comete-icons`.
