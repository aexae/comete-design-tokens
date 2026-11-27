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

Un fichier CSS — `build/css/comete-tokens.css` — contenant **640 custom properties** : 396 primitives et 244 tokens sémantiques (déclinés light + dark).

### Primitives

| Groupe | Contenu |
|---|---|
| Couleur | 16 palettes chromatiques : `comete-blue`, `comete-yellow`, `blue`, `blue-grey`, `cool-grey`, `green`, `lime`, `magenta`, `orange`, `purple`, `red`, `teal`, `turquoise`, `yellow`, `grey-solid`, `dark-grey-solid` — échelle 50 → 950 ; plus `black` et `white` en échelle d'opacité (0 → 100) |
| Typographie | 2 familles (`--font-family-primary` = Noto Sans, `--font-family-code` = Noto Sans Mono), 4 graisses, 2 échelles de taille (`ui-*` et `hero-*`), line-heights, letter-spacings, paragraph spacing / indent |
| Espacement | `--space0` → `--space1600` |
| Sizing | `--size0` → `--size12800` |
| Radius | `--radius0` → `--radius300` |
| Ombres | `--shadow-key-0..6`, `--shadow-ambiant-0..6` et les composites `--elevation-none/xsmall/small/medium/large/xlarge/xxlarge` |
| Animation | `--duration-*` (instant → slower), `--easing-*` (default, entrance, exit, linear) |
| Contrôles | `--control-{height,radius,padding-x,icon}-{compact,default,touch}` — densité partagée par les composants interactifs |
| Divers | `--z-index-*` (hide → toast), `--opacity-*`, breakpoints `--breakpoint-{watch,mobile,tablet,laptop,desktop,tv}` (0 / 280 / 600 / 1200 / 1536 / 1920 px, miroir de `BREAKPOINTS` du DS) |

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

Sept familles (plus `surface`), déclinées par **intention** puis par **état** (`default`, `hovered`, `pressed`, `disabled`, `selected`) :

| Famille | Intentions |
|---|---|
| `--background-*` (135) | `field`, `neutral`, `comete`, `brand`, `selected`, `focused`, `disabled`, `success`, `warning`, `critical`, `information`, `accent`, `cycle` |
| `--surface-*` (20) | `default`, `sunken`, `raise`, `overlay`, `mask`, `comete`, `inverted` (voir la doctrine background vs surface) |
| `--border-*` (39) | `default`, `neutral`, `subtle`, `bold`, `focused`, `focus-inverted`, `selected`, `selected-inverted`, `inverted`, `invisible`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `day`, `night`, `disabled` |
| `--text-*` (53) | `default`, `subtle`, `subtlest`, `inverted`, `subtle-inverted`, `link`, `selected`, `disabled`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `on-light-surface`, `on-dark-surface` |
| `--icon-*` (24) | `default`, `bold`, `subtle`, `subtlest`, `inverted`, `selected`, `disabled`, `comete`, `brand`, `success`, `warning`, `critical`, `information`, `accent`, `day`, `night`, `on-light-surface`, `on-dark-surface` |
| `--logo-*` (7) | `comete` : `default`, `neutral`, `inverted`, `subtle`, `subtle-inverted`, `gradient-light`, `gradient-dark` |
| `--blanket-*` (1) | voile plein écran des couches modales (le voile local est `--surface-mask-*`) |

#### `comete-*` vs `brand-*`

- **`comete-*`** — couleur fixe de la marque Comète, jamais surchargée par un client.
- **`brand-*`** — charte du client, surchargeable à l'exécution. **Miroir rôle pour rôle de `comete-*`**, mêmes valeurs par défaut (bleu Comète). Le design system fournit un `BrandProvider` qui génère et injecte ces valeurs.

Chaque famille porte quatre niveaux d'emphase de fond : `subtlest`, `subtler`, `bold` (bleu action, `comete-blue-700` en clair et `comete-blue-600` en sombre, pour les contrôles et appels à l'action) et `boldest` (le palier le plus contrasté, `comete-blue-950` en clair et `comete-blue-200` en sombre, cartes bold et bandeaux, jamais sur un contrôle). Les deux suivent le thème. `text`, `border` et `icon` ont aussi leur `boldest`. La surface navy non interactive est `--surface-comete` (identique en clair et en sombre).

#### `surface-*` vs `background-*` (doctrine)

- **Surface** : ce sur quoi on pose du contenu. Page, panneau, carte, dialogue, menu, cellule. Une surface ne porte pas de sens, elle porte une **profondeur** : `sunken` (en retrait), `default` (la page), `raise` (carte, panneau), `overlay` (menu, popover, dialogue). Un contenant a une seule surface, un contenant imbriqué monte d'un cran. Les tokens `text-*`, `border-*` et `icon-*` sont calibrés sur `--surface-default`. `mask` est le voile local posé sur un élément (chargement, média cliquable), `comete` la surface navy fixe des en-têtes et pages de présentation, `inverted` la surface opposée au thème (encre en clair, blanc en sombre) pour un encart contrasté.
- **Background** : ce qu'un composant **peint pour dire quelque chose**. Neutre, marque, statut, sélection, avec une échelle d'emphase (`subtlest` → `boldest`) et des états (`hovered`, `pressed`). Un background se pose sur une surface, jamais l'inverse. `--background-field-default` est le remplissage des champs et contrôles (entrée de saisie, case à cocher, pouce du Switch).
- **Test de décision** : la couleur dit-elle quelque chose (emphase, statut, marque) ? Background. Elle ne dit que la profondeur de ce qui est posé dessus ? Surface. Un cadre de démonstration « fond sombre » est donc `--surface-default` en thème sombre, pas un background.

#### Couleurs `disabled` (doctrine)

Les tokens `disabled` (fond, texte, icône, bordure) pointent sur les primitives **alpha** (`black-*` en thème clair, `white-*` en thème sombre), jamais sur des gris solides (`grey.solid`).

Pourquoi : un fond disabled en gris solide s'empile avec un texte disabled en gris solide et écrase le contraste (environ 1,27:1, illisible). Une couleur alpha se compose avec la surface réelle sous l'élément. Résultat : le contraste texte sur fond disabled remonte à **2,62:1** en clair et **3,42:1** en sombre, et le fond disabled s'adapte à n'importe quelle surface (Card, Menu, SideNav) au lieu de plaquer un gris fixe. WCAG 1.4.3 exempte les éléments disabled, mais on reste bien au-dessus du seuil de perceptibilité.

Correspondance (clair via `black`, sombre via `white`, même opacité) :

| Rôle | Primitive | Opacité |
|---|---|---|
| `background-disabled-default` | `black` / `white` | 10 % |
| `border-disabled` | `black` / `white` | 20 % |
| `text-disabled`, `icon-disabled` | `black` / `white` | 40 % |

Règle : pour tout nouveau token ou composant disabled, réutiliser ces primitives alpha. Ne jamais revenir à un gris solide, ce qui réintroduirait la régression de contraste et la perte d'adaptation à la surface.

### Tokens de composant : nommage (règle)

Règle décidée par Axel le 2026-11-26. Tout token de `tokens/component/**` la respecte. Le test `tests/component-naming.test.ts` la vérifie.

```
composant . [enfant…] . [variante…] . catégorie . propriété . état
```

- **Composant** : nom kebab-case du composant (`button`, `side-nav`, `quick-actions-menu`).
- **Enfant** : sous-élément du composant, du plus englobant au plus fin (`side-nav.rail.item`, `quick-actions-menu.item`). Les tokens de la racine du composant (la barre, le panneau, le voile) n'ont pas d'enfant : `bottom-nav.color.surface`, `quick-actions-menu.color.blanket`.
- **Variante** : apparence, couleur, taille, densité, breakpoint (`button.contained.critical`, `avatar.xsmall`, `page.laptop`). Comme l'enfant, elle passe **avant** la catégorie.
- **Élément nommé** : un morceau visuel qui a sa propre forme (pastille, anneau, pastille d'icône) devient un enfant nommé, à la Material 3 : `bottom-nav.item.indicator`, `bottom-nav.action.cradle`, `side-nav.empty.icon`. On ne le traduit pas en état artificiel (`radius.item-selected`).
- **Catégorie** : `color`, `size`, `spacing`, `radius`, `border-width`, `opacity`, `elevation`. Une seule par token.
- **Propriété** : pour `color`, la **famille sémantique** de l'alias, premier segment de sa référence : `background`, `text`, `icon`, `border`, `surface`, `blanket`, `logo` (jamais `label`, `title`, `fill`, ni la propriété CSS). Un séparateur peint en `background` CSS mais aliasé sur `border.subtle` s'appelle `color.border`, une barre aliasée sur `surface.default` s'appelle `color.surface`.
- **État** : toujours en **feuille**, après la propriété, avec le vocabulaire des sémantiques : `default`, `hovered`, `pressed`, `selected`, `disabled`, `focus`. Les états combinés sont composés : `selected-hovered`, `selected-pressed`, `focus-inverted`.

Un token de composant se lit comme l'alias qu'il pointe : `button.contained.critical.color.background.hovered` → `{background.critical.bold.hovered}`.

**Cohérence des alias** : les états d'un même rôle pointent vers la même famille sémantique (jamais une `surface` au repos et des `background` au survol). Une incohérence relevée dans le code existant se signale et s'arbitre avant de créer le token, elle ne se recopie pas.

Exemples :

| Token | Lecture |
|---|---|
| `bottom-nav.item.color.text.selected` | composant, enfant, catégorie, propriété, état |
| `bottom-nav.item.indicator.color.background` | élément nommé (pastille) sous l'enfant |
| `side-nav.item.color.background.selected-hovered` | état combiné en feuille |
| `side-nav.rail.item.size.min-height` | variante (rail) puis enfant |
| `button.contained.critical.color.background.hovered` | variantes (apparence, couleur) puis catégorie |
| `avatar.xsmall.size.container` | variante de taille |

## Architecture

```
comete-design-tokens/
├── tokens/
│   ├── base/                 # Primitives (color, comete, typography, spacing,
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

Le build se déroule en quatre passes :

1. **Primitives** — `tokens/base/**` → `_primitives.css` (avec `outputReferences`)
2. **Sémantiques** — `tokens/base/**` + `tokens/theme/{light,dark}.json`, filtrés sur les préfixes sémantiques → `_semantic.{light,dark}.css`
3. **Assemblage** — fusion en `comete-tokens.css` (`:root` = clair, `[data-theme="dark"]` = sombre, plus le fallback `prefers-color-scheme`), puis suppression des fichiers intermédiaires
4. **Omnis** — `tokens/base/**` + `tokens/theme/{light,dark}.json` + `tokens/component/**` → `build/omnis/comete-tokens.{light,dark}.omnis.json` (voir ci-dessous)

### Sortie Omnis (Comète SQL)

Comète SQL (Omnis Studio 6.1.3) ne consomme ni le CSS ni le package npm : elle lit un fichier JSON **plat et résolu** par thème, committé dans `build/omnis/` et servi par URL épinglée sur un tag (`https://raw.githubusercontent.com/aexae/comete-design-tokens/vX.Y.Z/build/omnis/comete-tokens.light.omnis.json`).

```json
{
  "schema": "https://github.com/aexae/comete-design-tokens/tree/main/build/omnis#v1",
  "version": "0.46.0",
  "theme": "light",
  "backdrop": "#ffffff",
  "tokens": { "red50": 15921918, "textDefaultDefault": 2894373, "space100": 8, "fontFamilyPrimary": "Noto Sans" },
  "deprecated": ["textDisabled"],
  "catalog": [{ "name": "red50", "type": "color", "tier": "base" }, { "name": "textDefaultDefault", "type": "color", "tier": "theme" }]
}
```

- **Clés** : chemin du token en camelCase (`cool-grey.100` → `coolGrey100`, `text.default.default` → `textDefaultDefault`, `Control.Height.Compact` → `controlHeightCompact`), noms de colonnes Omnis.
- **Couleurs** : entier Omnis `rgb()` (`r + g × 256 + b × 65536`). Les couleurs avec canal alpha sont **aplaties sur `surface.default` du thème** (`backdrop`), Omnis 6 n'ayant pas de transparence.
- **Dimensions** : nombre de px. **Nombres** (opacité, graisse) et **textes** (familles de police) tels quels.
- **Exclus** : ombres, animation (`duration`, `easing`), `z-index`.
- **Dépréciés** : conservés dans `tokens` tant qu'ils existent dans les sources, listés dans `deprecated`.
- **Catalogue** : `catalog` donne, dans l'ordre de `tokens`, le `$type` DTCG de chaque token (`color`, `dimension`, `number`, `fontFamily`…) et son niveau `tier` (`base` = primitives, `theme` = sémantiques, `component`). Comète s'en sert pour distinguer couleurs et dimensions sans deviner d'après le nom ; aucune clé du fichier ne commence par `$`, pour rester un nom de colonne Omnis.
- **Contrat consommateur** : `consumers/omnis.json` liste les clés lues par Comète ; `tests/consumers.test.ts` fait échouer la CI si l'une d'elles disparaît de la sortie Omnis. Renommer un token consommé impose un alias ou une coordination avec Comète avant la release.

## Commandes

```bash
pnpm build        # Compile les tokens → build/css/comete-tokens.css
pnpm test         # Tests Vitest (lancer `pnpm build` au préalable)
pnpm typecheck    # Vérification TypeScript
pnpm lint         # ESLint
pnpm clean        # Supprime build/
```

Le CSS compilé et les JSON Omnis sont **committés** dans le repo. La CI échoue si `build/` est obsolète par rapport aux sources — toujours lancer `pnpm build` et committer le résultat avec la modification des tokens.

## Publication

La publication sur GitHub Packages est **automatisée par la CI** (`.github/workflows/publish.yml`) : elle se déclenche au push d'un tag de version et s'authentifie via le `GITHUB_TOKEN` intégré à Actions (`packages: write`) — **aucun PAT requis**.

```bash
# 1. bump la version dans package.json (ex. 0.14.0), pnpm build, committer
# 2. tagger et pousser :
git tag v0.14.0
git push origin main v0.14.0   # le tag déclenche le workflow Publish
```

Le tag doit correspondre à la version de `package.json`, préfixée par `v` (format `vX.Y.Z`), aligné sur les autres dépôts de l'écosystème.

Le même workflow crée la **GitHub Release** du tag et y attache `comete-tokens.css` et les deux JSON Omnis : `https://github.com/aexae/comete-design-tokens/releases/download/vX.Y.Z/comete-tokens.light.omnis.json` est une URL stable, indépendante de l'arborescence du dépôt (alternative à l'URL `raw` par tag).

## Ajout ou modification d'un token

1. Éditer le JSON concerné dans `tokens/base/**` (primitive) ou `tokens/theme/{light,dark}.json` (sémantique)
2. Un token sémantique doit référencer une primitive (`"$value": "{Comete.blue.500}"`), jamais une valeur littérale
3. Toute modification sémantique doit être faite **dans les deux thèmes**
4. Un token de composant (`tokens/component/<composant>/tokens.json`) suit la règle de nommage ci-dessus, et le composant est ajouté à `COMPONENTS` dans `build.ts`
5. `pnpm build && pnpm test`
6. Committer les sources **et** `build/css/comete-tokens.css`

## Stack

Style Dictionary 5 · TypeScript · tsx · ESLint · Vitest · Node ≥ 22

## Écosystème

Peer dependency des packages suivants :

| Package | Tokens consommés |
|---|---|
| [`@aexae/comete-design-system`](https://github.com/aexae/comete-design-system) | l'ensemble |
| [`@aexae/comete-icons`](https://github.com/aexae/comete-icons) | `--icon-*` |
| [`@aexae/comete-logos`](https://github.com/aexae/comete-logos) | `--logo-comete-*` |
| Comète SQL (Omnis, hors npm) | `build/omnis/*.omnis.json`, clés listées dans `consumers/omnis.json` |

## Licence

AGPL-3.0-only
