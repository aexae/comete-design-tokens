# @aexae/comete-design-tokens

Design tokens de l'écosystème Comète, compilés en **CSS custom properties** avec support natif du **light / dark mode**.

Source de vérité : des fichiers JSON au format [W3C Design Tokens](https://www.w3.org/community/design-tokens/), compilés par [Style Dictionary 5](https://styledictionary.com/) en un fichier CSS unique.

## Installation

Le package est publié sur GitHub Packages. Configurer le registry dans un `.npmrc` :

```ini
@aexae:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}
```

### Authentification

GitHub Packages exige un token même en lecture. L'organisation `aexae` **interdit les PAT classic dont la durée de vie dépasse 90 jours** — le plus simple est d'utiliser le token OAuth de la CLI `gh` (non soumis à cette règle) :

```bash
gh auth refresh -h github.com -s read:packages   # une fois, ajoute le scope
export NPM_AUTH_TOKEN=$(gh auth token)            # dans le shell qui lance l'install
```

> Alternative : un PAT *fine-grained* (permission **Packages: Read**) ou classic à expiration ≤ 90 jours, placé dans `NPM_AUTH_TOKEN`.

```bash
pnpm add @aexae/comete-design-tokens
```

```css
@import "@aexae/comete-design-tokens/css";
```

Les fichiers JSON sources sont également exposés : `@aexae/comete-design-tokens/tokens/theme/light.json`, etc.

## Utilisation

```css
.component {
  color: var(--text-default);
  background: var(--background-neutral-default);
  border: 1px solid var(--border-default);
  border-radius: var(--radius075);
  padding: var(--space100) var(--space200);
  box-shadow: var(--elevation-small);
  transition: background var(--duration-fast) var(--easing-default);
}
```

Le thème se pilote via l'attribut `data-theme` :

```html
<html data-theme="dark">
```

Trois niveaux de résolution :

1. `:root` — tokens sémantiques du thème **clair** (défaut)
2. `[data-theme="dark"]` — overrides du thème **sombre**
3. `@media (prefers-color-scheme: dark)` appliqué à `:root:not([data-theme="light"])` — bascule automatique quand aucun thème n'est explicitement choisi

## Contenu

Un fichier unique — `build/css/comete-tokens.css` — contenant **640 custom properties** : 396 primitives et 244 tokens sémantiques (déclinés light + dark).

### Primitives

| Groupe | Contenu |
|---|---|
| Couleur | 16 palettes chromatiques : `comete-blue`, `comete-yellow`, `blue`, `blue-grey`, `cool-grey`, `green`, `lime`, `magenta`, `orange`, `purple`, `red`, `teal`, `turquoise`, `yellow`, `grey-solid`, `dark-grey-solid` — échelle 50 → 950 ; plus `black` et `white` en échelle d'opacité (0 → 100) |
| Typographie | 7 familles (`--font-family-primary`, Outfit, Poppins, Satoshi, Space Grotesk, Urbanist, code), 4 graisses, 2 échelles de taille (`ui-*` et `hero-*`), line-heights, letter-spacings, paragraph spacing / indent |
| Espacement | `--space0` → `--space1600` |
| Sizing | `--size0` → `--size12800` |
| Radius | `--radius0` → `--radius300` |
| Ombres | `--shadow-key-0..6`, `--shadow-ambiant-0..6` et les composites `--elevation-none/xsmall/small/medium/large/xlarge/xxlarge` |
| Animation | `--duration-*` (instant → slower), `--easing-*` (default, entrance, exit, linear) |
| Contrôles | `--control-{height,radius,padding-x,icon}-{compact,default,touch}` — densité partagée par les composants interactifs |
| Divers | `--z-index-*` (hide → toast), `--opacity-*`, breakpoints (`--mobile`, `--tablet`, `--laptop`, `--desktop`) |

#### Échelle d'espacement (`--space*`)

Base : `--space100` vaut **8 px**. Chaque cran suit la formule `(numéro / 100) × 8 px` (donc `--space050` = 4 px, `--space200` = 16 px, `--space800` = 64 px). Les tokens sémantiques `--space*` aliasent les primitives `--size*` (px bruts), à utiliser pour `gap` / `padding` / `margin` dans les composants (jamais de px en dur).

| Token | px | Token | px |
|---|---|---|---|
| `--space0` | 0 | `--space300` | 24 |
| `--space025` | 2 | `--space350` | 28 |
| `--space0375` | 3 | `--space400` | 32 |
| `--space050` | 4 | `--space500` | 40 |
| `--space075` | 6 | `--space600` | 48 |
| `--space100` | **8** | `--space700` | 56 |
| `--space125` | 10 | `--space800` | 64 |
| `--space150` | 12 | `--space1000` | 80 |
| `--space200` | 16 | `--space1200` | 96 |
| `--space250` | 20 | `--space1600` | 128 |

### Sémantiques

Sept familles, déclinées par **intention** puis par **état** (`default`, `hovered`, `pressed`, `disabled`, `selected`) :

| Famille | Intentions |
|---|---|
| `--background-*` (148) | `default`, `surface`, `neutral`, `comete`, `brand`, `selected`, `focused`, `disabled`, `success`, `warning`, `critical`, `information`, `accent`, `cycle`, `alpha` |
| `--border-*` (37) | `default`, `neutral`, `subtle`, `bold`, `focused`, `focus-inverted`, `selected`, `selected-inverted`, `inverted`, `invisible`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `day`, `night`, `disabled` |
| `--text-*` (26) | `default`, `subtle`, `subtlest`, `inverted`, `link`, `selected`, `disabled`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `on-warning` |
| `--icon-*` (21) | `default`, `bold`, `subtle`, `subtlest`, `inverted`, `selected`, `disabled`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `day`, `night`, `on-warning` |
| `--logo-*` (7) | `comete` : `default`, `neutral`, `inverted`, `subtle`, `gradient-light`, `gradient-dark` |
| `--interaction-*` (4) | `hovered`, `pressed` |
| `--blanket-*` (1) | overlay des couches modales |

#### `comete-*` vs `brand-*`

- **`comete-*`** — couleur fixe de la marque Comète, jamais surchargée par un client.
- **`brand-*`** — charte du client, surchargeable à l'exécution (navy par défaut). Le design system fournit un `BrandProvider` qui génère et injecte ces valeurs.

## Architecture

```
comete-design-tokens/
├── tokens/
│   ├── base/                 # Primitives (color, brand, typography, spacing,
│   │   └── */tokens.json     #   sizing, radius, shadow, animation, control,
│   │                         #   opacity, z-index, breakpoints)
│   └── theme/
│       ├── light.json        # Tokens sémantiques — thème clair
│       └── dark.json         # Tokens sémantiques — thème sombre
├── build.ts                  # Pipeline Style Dictionary + assemblage du CSS
├── src/css-utils.ts          # Extraction des déclarations depuis le CSS généré
├── build/css/                # Sortie committée dans le repo
│   └── comete-tokens.css
├── illustrations/            # Assets illustratifs (SVG + PNG)
└── tests/                    # Tests Vitest (build + cohérence des tokens)
```

Le build se déroule en trois passes :

1. **Primitives** — `tokens/base/**` → `_primitives.css` (avec `outputReferences`)
2. **Sémantiques** — `tokens/base/**` + `tokens/theme/{light,dark}.json`, filtrés sur les préfixes sémantiques → `_semantic.{light,dark}.css`
3. **Assemblage** — fusion en `comete-tokens.css` (`:root` = clair, `[data-theme="dark"]` = sombre, plus le fallback `prefers-color-scheme`), puis suppression des fichiers intermédiaires

## Commandes

```bash
pnpm build        # Compile les tokens → build/css/comete-tokens.css
pnpm test         # Tests Vitest (lancer `pnpm build` au préalable)
pnpm typecheck    # Vérification TypeScript
pnpm lint         # ESLint
pnpm clean        # Supprime build/
```

Le CSS compilé est **committé** dans le repo. La CI échoue si `build/` est obsolète par rapport aux sources — toujours lancer `pnpm build` et committer le résultat avec la modification des tokens.

## Publication

La publication sur GitHub Packages est **automatisée par la CI** (`.github/workflows/publish.yml`) : elle se déclenche au push d'un tag de version et s'authentifie via le `GITHUB_TOKEN` intégré à Actions (`packages: write`) — **aucun PAT requis**.

```bash
# 1. bump la version dans package.json (ex. 0.14.0), pnpm build, committer
# 2. tagger et pousser :
git tag v0.14.0
git push origin main v0.14.0   # le tag déclenche le workflow Publish
```

Le tag doit correspondre à la version de `package.json`, préfixée par `v` (format `vX.Y.Z`), aligné sur les autres dépôts de l'écosystème.

## Ajout ou modification d'un token

1. Éditer le JSON concerné dans `tokens/base/**` (primitive) ou `tokens/theme/{light,dark}.json` (sémantique)
2. Un token sémantique doit référencer une primitive (`"$value": "{Comete.blue.500}"`), jamais une valeur littérale
3. Toute modification sémantique doit être faite **dans les deux thèmes**
4. `pnpm build && pnpm test`
5. Committer les sources **et** `build/css/comete-tokens.css`

## Stack

Style Dictionary 5 · TypeScript · tsx · ESLint · Vitest · Node ≥ 22

## Écosystème

Peer dependency des packages suivants :

| Package | Tokens consommés |
|---|---|
| [`@aexae/comete-design-system`](https://github.com/aexae/comete-design-system) | l'ensemble |
| [`@aexae/comete-icons`](https://github.com/aexae/comete-icons) | `--icon-*` |
| [`@aexae/comete-logos`](https://github.com/aexae/comete-logos) | `--logo-comete-*` |

## Licence

AGPL-3.0-only
