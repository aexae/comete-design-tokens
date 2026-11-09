# TODO / faiblesses — comete-design-tokens

> Failles, faiblesses et pistes d'amélioration signalées au fil des échanges.

## Tokens `text-subtle-inverted` / `text-subtlest-inverted` (2026-10-21)

- **Accessibilité — `text-subtlest-inverted` (cool-grey.500, #6f8488)** : contraste ~3,7 à 4,3:1 sur les surfaces inversées testées (cool-grey.950, surface dark) et ~3,9:1 sur blanc en dark. Sous le seuil AA 4,5:1 pour le petit texte. À réserver au texte large ou secondaire (même réserve que le `subtlest` non inversé), ne pas l'utiliser pour du corps de texte.
- **Incohérence de primitive** : en thème clair, `text.inverted` pointe sur `white.100` alors que ses variantes `subtle/subtlest-inverted` pointent sur `cool-grey.*`. Mélange de familles (white vs cool-grey) volontaire (suit l'échelle du thème opposé) mais à valider côté design si une teinte 100 % neutre blanche est attendue.
- **Tokens non consommés** : aucun composant du DS n'utilise encore ces deux tokens. Risque de tokens morts tant qu'ils ne sont pas câblés (ex. texte secondaire sur Banner/Tooltip/surfaces bold). À adopter ou documenter l'usage cible.
- **Publication** : changement non commité et non publié (en attente de « livre »). Nécessitera bump de version tokens + tag, puis bump de la dép dans le DS (root + storybook) pour être exploitable.

## Changements de thème Figma répercutés dans le repo — FAIT 2026-11-09

- ~~Ramp dark `background/neutral/subtlest` 700/800/900~~ fait.
- ~~Tokens texte hover/press~~ fait, mais via **restructuration en groupes**
  `text.<couleur>.{default,hovered,pressed}` (CASSANT, renomme `--text-<couleur>` en
  `--text-<couleur>-default`). Couvre comete/success/critical/warning/information +
  subtle/subtlest.

### À réconcilier (divergences relevées pendant le miroir)

- **`warning` : `yellow` (repo historique) vs `orange` (Figma).** Le miroir a
  aligné sur Figma (`text.warning.*` = `{orange.*}`), ce qui **change la couleur
  warning globale** (#856d0e olive → #9c4f10 orange) partout (SectionMessage,
  Banner, etc.), pas seulement le bouton. À confirmer : garder orange (Figma) ou
  revenir à yellow.
- **`text.brand` non restructuré.** Figma l'a groupé (default/hovered/pressed) avec
  des valeurs qui divergent du repo (brand/default Figma = `comete.blue.700` vs repo
  `comete.blue.900`). Laissé tel quel car c'est la couleur cliente runtime
  (BrandProvider) et le bouton ne l'utilise pas. À traiter séparément.

### Propagation DS requise (CASSANT)

Le renommage `--text-<couleur>` → `--text-<couleur>-default` casse le DS et les
apps qui consomment `--text-comete`, `--text-subtle`, `--text-subtlest`,
`--text-success`, `--text-critical`, `--text-warning`, `--text-information`. À mettre
à jour (DS `src/**` + storybook), puis bump de la dep tokens. Ensuite seulement,
faire consommer `--button-*` par `Button.module.css`.

## Audit des variables de composants DEPRECATED (2026-11-09)

Audit lecture seule des variables Figma (fichier DS `YO9cW75K8aLcM5BbojZAqB`),
en vue de réintroduire une couche de tokens de composants propre demandée par
les développeurs. Aucune écriture effectuée.

### Constat global

- Une collection Figma dédiée **`DEPRECATED-components`** contient **865
  variables** (718 COLOR, 147 FLOAT), réparties en **36 groupes de composants**
  (tag 269, button 208, button-square 45, badge 37, calendar 29, avatar 27,
  menu 24, checkbox 22, radio 20, section-message 16, snackbar 16, tabs 16,
  text-field 15, select 14, toggle-button 14, card 13, spinner 12, focus-ring 11,
  logo 10, modal-dialog 8, autosave-indicator 7, informative-state 6, code 5,
  slot 3, breadcrumbs 3, scrollbar 2, popup 2, page 2, media-picker 2, et une
  dizaine de groupes à 1).
- Côté code, le repo n'a **aucune couche composant** ni aucune variable de
  composant livrée dans le CSS. Les développeurs ne disposent donc d'aucun token
  de composant aujourd'hui. La demande revient à **créer une couche neuve**, pas
  à republier l'existant.

### Pourquoi elles ont été abandonnées (causes racines)

1. **Mono-mode `tokens` (pas de light/dark).** La collection n'a qu'un seul
   mode, elle ne peut physiquement pas porter le thème clair/sombre. C'est la
   raison de fond de l'abandon.
2. **Alias vers les primitives, pas vers la couche sémantique.** Sur 865
   variables, seules **2** pointent vers `theme`. Les autres résolvent vers
   `base/color` (492), `base/brand` (183), `base/sizing` (147). Elles
   court-circuitent la couche sémantique (`background/*`, `text/*`, `border/*`,
   `icon/*`), d'où double maintenance et theming impossible.

### Invalides

- **41 alias cassés** (référence vers une variable supprimée), concentrés sur
  les états de focus : tag 20, button 16, button-square 3, avatar 1,
  focus-ring 1 (essentiellement `.../border/focused`).
- **3 alias transitant par une variable deprecated** avant de retomber sur une
  primitive (checkbox / radio / text-field `background/default`).
- **Incohérence de nommage** : préfixe `-DEPRECATED-` (tiret initial : button,
  avatar, badge, blanket, breadcrumbs, autosave-indicator) vs `DEPRECATED-`
  (le reste).

### Obsolètes (groupe sans composant DS correspondant)

- `slot`, `autosave-indicator`, `media-picker`, `button-square` (pas de
  composant `ButtonSquare`, fonction reprise par Button/IconTile), `scrollbar`
  (renommé `ScrollArea`). À confirmer avant suppression définitive.

### Manquantes (composant DS existant, zéro token)

- Sans tokens de couleur alors qu'ils en auraient besoin : Accordion, Banner,
  BottomNav, Drawer, Divider, Field / InputContainer, Hero, IconTile, List,
  Popover, ProgressBar, ProgressIndicator, QuickActions, SearchField, SideNav,
  Skeleton, Spotlight, Stepper, Switch, Table, TimePicker, DatePicker,
  AvatarGroup.
- Légitimement sans tokens de couleur (primitives de layout) : Bleed, Cluster,
  Grid, Stack.

### Deprecated résiduelles hors collection composants

- **`theme` (9)** : `DEPRECATED-text/accent-inverted`, `DEPRECATED-border/day`,
  `DEPRECATED-border/night`, `DEPRECATED-background/surface/elevation/overlay/accent`,
  `DEPRECATED-skeleton/default`, `DEPRECATED-skeleton/subtle`,
  `DEPRECATED-text/day`, `DEPRECATED-text/night`,
  `DEPRECATED-background/surface/comete`. Celles-ci portent bien light/dark.
  Note : `skeleton/*` est deprecated mais le composant `Skeleton` existe
  toujours (à re-sémantiser, pas juste supprimer).
- **`base/typography` (1)** : `font-family/poppins-DEPRECATED` = valeur brute
  « Poppins », police abandonnée.

### Cible proposée (à valider avant toute écriture)

- Nouvelle couche composant **bi-mode light/dark**, aliasant la **couche
  sémantique `theme`** (et `base/control` / `base/sizing` pour les dimensions),
  jamais les primitives directement.
- Nommage propre `component/<composant>/<partie>/<variante>/<état>`, sans
  préfixe DEPRECATED ni tiret initial.
- Miroir côté repo : nouvelle source `tokens/component/<composant>/tokens.json`
  (format W3C, références vers les tokens de thème) compilée par Style
  Dictionary en variables CSS `--<composant>-...` avec light/dark hérité.
- Après migration : corriger ou abandonner les 41 alias cassés, supprimer la
  collection `DEPRECATED-components`, trancher le sort des obsolètes et des
  résiduelles `theme`/`typography`.

### Décisions requises avant exécution

1. Périmètre initial : les 36 groupes d'un coup, ou le sous-ensemble prioritaire
   réellement demandé par les développeurs ?
2. Réutiliser les 824 mappings valides comme base (renommage + re-pointage des
   primitives vers la couche sémantique) ou repartir de zéro ?
3. Portée : couleur seule, ou aussi dimensions / radius / typographie par
   composant ?
