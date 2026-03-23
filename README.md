# @aexae/comete-design-tokens

Design tokens de l'écosystème Comète, compilés en **CSS custom properties** avec support natif du **light/dark mode**.

## Installation

```bash
pnpm add @aexae/comete-design-tokens
```

```css
@import "@aexae/comete-design-tokens/css";
```

## Utilisation

```css
.component {
  color: var(--text-default);
  background: var(--background-neutral-default);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}
```

Le thème est géré via l'attribut `data-theme` sur `<html>` :

```html
<html data-theme="dark">
```

## Contenu

Un fichier CSS unique (`build/css/comete-tokens.css`) contenant ~767 custom properties :

**Primitifs** : couleurs (11 palettes), typographie (6 familles, 4 weights, 2 échelles), spacing (16 valeurs), sizing (27 valeurs), border-radius (12), shadows (6 niveaux), animation (durées + easing), z-index, opacity, breakpoints.

**Sémantiques** : background, text, border, icon — déclinés par intention (default, brand, success, warning, critical, information, accent) et par état (default, hovered, pressed, disabled, selected). Déclinaison complète light + dark.

## Stack

- **Source** : JSON W3C Design Tokens, édités via Tokens Studio
- **Build** : Style Dictionary 5 + @tokens-studio/sd-transforms
- **Theming** : `:root` (light par défaut), `[data-theme="dark"]` (overrides dark)

## Commandes

```bash
pnpm build        # Compile les tokens → build/css/comete-tokens.css
```

## Écosystème

Peer dependency de `@aexae/comete-design-system`. Les tokens `--icon-*` sont consommés par `@aexae/comete-icons`.

## Licence

MIT
