# Décisions — comete-design-tokens

> Journal des décisions (date, décision, contexte / raison).

## 2026-11-19 — Tokens disabled sémantiques dépréciés (0.24.1)

**Décision** (demande d'Axel) : `background.disabled.default`, `text.disabled`, `border.disabled` et `icon.disabled` sont marqués `$deprecated` (clair et sombre), avec une `$description` « DEPRECATED » reprise en commentaire dans le CSS. Valeurs et noms inchangés, donc version corrective. Dans Figma, les variables passent en `DEPRECATED-…` (code syntax conservée).

**Contexte / raison** : le disabled passe désormais par l'opacité (`<composant>/opacity/disabled`). Ces tokens restent lus par 24 composants du DS (73 usages) : on les garde jusqu'à leur migration, puis on les supprime. Le DS bloque tout nouvel usage par un test.

## 2026-11-19 — Tokens de composant nommés par catégorie, opacité disabled, avatar-group

**Décision** (demandes d'Axel) :

- Nommage `<composant>.<catégorie>.…` aligné sur Figma (`color`, `size`, `spacing`, `radius`, `opacity`, `border-width`). `button.json` restructuré : `button.<apparence>.<couleur>` devient `button.color.<apparence>.<couleur>` (`default` devient `neutral`), `selected` et `focus` passent sous `button.color`, `button.size.<densité>` ne garde que `height` et `icon`, `padding-x`, `padding-y` et `gap` passent sous `button.spacing.<densité>`, `radius` devient `button.radius.<densité>`. Cassant pour les lecteurs de `--button-*`.
- `button.color.link-subtle.neutral.text` aligné sur Figma : `{text.default.default}`, `{text.subtle.hovered}`, `{text.default.pressed}`.
- Disabled en opacité (option A) : `button.opacity.disabled` et `avatar.opacity.disabled` aliasent `{opacity.disabled}`. Dans Figma, `base/opacity/*` passe en pourcentage (0-100, Figma lit l'opacité ainsi), le code reste en fraction.
- `avatar` : `avatar.color.<couleur>.{background,text,icon}`, `avatar.size.<taille>.{container,icon}`, `avatar.radius`, `avatar.opacity.disabled`.
- Nouveau `tokens/component/avatar-group/tokens.json` : `avatar-group.border-width.*` (anneau de séparation, déplacé depuis `avatar`) et `avatar-group.spacing.overlap.*` (création approuvée par Axel). Le chevauchement est une marge négative (-4, -6, -8, -10, -16, -24, -32 px, 25 % du diamètre) : valeur brute négative et non alias de `Space*`, car ni le DTCG ni Figma ne savent négativer un alias. Le même nombre est lié à l'`itemSpacing` Figma et lu tel quel en `margin-left` dans le code.
- Couleur de l'anneau : pas de token. Il prend la couleur du fond du conteneur (prop `borderColor` dans le code), blanc brut #FFFFFF dans Figma sur demande d'Axel (un token de fond posé sur une bordure était incohérent).
- `autosave-indicator` : `autosave-indicator.color.*` et `autosave-indicator.spacing.gap`.
- Figma : mêmes noms dans la collection `component`, code syntax WEB posée sur toutes les variables, `button/color/subtle/default` renommé `…/neutral`.

**Statut** : publié en 0.24.0 avec l'entrée du 2026-11-18.

## 2026-11-18 — Tokens de composant Avatar et AutosaveIndicator, retrait des DEPRECATED

**Décision** (demande d'Axel, création de tokens approuvée) :

- `tokens/component/avatar/tokens.json` (60 tokens) : `avatar.size.*`, `avatar.icon-size.*` (10 à 64 px) et `avatar.border-width.*` (anneau de séparation de l'AvatarGroup, distinct du focus ring) pour les 7 tailles (xsmall à xxxlarge, 16 / 24 / 32 / 40 / 64 / 96 / 128 px), `avatar.radius` (RadiusRound, l'avatar est toujours rond), et par couleur (`neutral`, `comete`, `accent-purple`, `accent-teal`, `accent-turquoise`, `accent-magenta`, `accent-blue-grey`) `background.{default,hovered,pressed}`, `text` et `icon`, plus `avatar.selected.{background,text,icon}`. Valeurs reprises du DS. Révisé le 2026-11-19 : rayons par taille retirés (apparence carrée supprimée du code), tokens `icon` et `icon-size` ajoutés.
- `tokens/component/autosave-indicator/tokens.json` (7 tokens) : `gap` (Space025) et `{default,success,critical}.{text,icon}`.
- `build.ts` émet `avatar` et `autosave-indicator`.
- Figma : variables miroir dans la collection `component` (59 puis 60 après la révision du 2026-11-19) (alias vers `theme` et `base`, code syntax WEB). Les ❖ Avatar (216 variantes) et ❖ AutosaveIndicator y sont branchés. Variable `base/radius/radius125` ajoutée en miroir du token `Radius125` existant (elle manquait côté Figma).
- Supprimées de Figma, après vérification qu'aucun calque ne les utilisait : `DEPRECATED-spinner/*` (12), `-DEPRECATED-avatar/*` (27), `-DEPRECATED-autosave-indicator/*` (7). La collection `DEPRECATED-components` passe à 819 variables.

**Contexte / raison** : poursuite de la couche composant après Button et Spinner.

Le 2026-11-19, les 4 variables Figma `button/color/contained/{background,text}/*` (accent-purple sorti de son groupe) sont renommées `button/color/contained/accent-purple/...`. Renommage dans Figma uniquement, liaisons conservées.

**Statut** : publié en 0.24.0.

## 2026-11-18 — Tokens de composant Spinner, icônes des contrôles 16 / 24 / 32 px

**Décision** (demandes d'Axel, création de tokens approuvée) :

- Nouveau fichier `tokens/component/spinner/tokens.json` : `spinner.size.{xsmall,small,medium,large,xlarge}` (Size100 / 200 / 300 / 600 / 1200) `spinner.color.{default,inverted}` (icon.default / icon.inverted) et `spinner.color.comete.{light,dark}` (logo.comete.gradient-light / gradient-dark, dégradé du spinner en comète, approuvé par Axel le 2026-11-18). Remplacent les variables Figma `DEPRECATED-spinner/*`, recréées dans la collection `component`. `build.ts` émet désormais les composants `button` et `spinner`.
- `control.icon.default` passe à `{Size300}` (24 px) et `control.icon.touch` à `{Size400}` (32 px). Compact reste 16 px.

**Portée** : seul le Button consomme `--control-icon-*`. Ses icônes grossissent de 4 px en default et 8 px en touch.

**Statut** : publié en 0.23.0.

## 2026-11-18 — Padding horizontal touch des contrôles à 16 px, Button aliasé

**Décision** : `control.padding-x.touch` passe de `{Space150}` (12 px) à `{Space200}` (16 px). `button.size.touch.padding-x` redevient un alias de `{Control.PaddingX.Touch}` au lieu de `{Space200}` en direct.

**Contexte / raison** : le Button touch faisait exception à l'échelle `control` (règle DS « padding X ≥ 2 × padding Y », padding Y touch à 8 px). Axel a branché la variable Figma `button/spacing/touch/padding-x` sur `control/padding-x/touch`, passé à `space200`. Report dans le code. Modification de valeur, aucun token créé.

**Portée** : rendu du Button inchangé (16 px). Les champs touch (`InputContainer`) passent de 12 à 16 px de padding horizontal.

**Statut** : publié en 0.22.0.

## 2026-11-18 — Tailles d'icône des contrôles alignées sur Figma (16 / 20 / 24 px)

**Décision** : `control.icon.compact` passe de `{size250}` (20 px) à `{size200}` (16 px) et `control.icon.default` de `{size300}` (24 px) à `{size250}` (20 px). `control.icon.touch` reste `{size300}` (24 px). Les variables Figma `control/icon/*` sont réalignées sur les mêmes primitifs.

**Contexte / raison** : le Button rebuild Figma dessine ses icônes à 16 / 20 / 24 px selon la densité, alors que les tokens donnaient 20 / 24 / 24 px. Écart relevé quand le DS a recommencé à consommer `--button-icon-size` (correctif `.icon`, DS alpha.177). Alignement demandé par Axel. Modification de valeurs, aucun token créé.

**Portée** : seul le Button consomme `--control-icon-*` (via `--button-size-*-icon`). Les autres contrôles ne sont pas touchés.

**Statut** : publié en 0.21.0.

## 2026-11-09 — Réintroduction d'une couche de tokens de composants (architecture + pilote Button)

**Contexte** : audit des variables de composants Figma taguées DEPRECATED (voir
TODO.md, section 2026-11-09). 865 variables mono-mode aliasant les primitives (donc
sans light/dark) avaient été abandonnées. Demande : recréer une couche de tokens de
composants propre pour les développeurs.

**Décisions prises (arbitrages Axel)** :

- **Repartir de zéro**, composant par composant (les deprecated servent de
  référence, pas de base).
- **Portée** : couleur + dimensions. `base/control` **conservé** comme couche de
  dimensions partagée (Button + champs) : les tokens composant la **référencent**
  plutôt que de la dupliquer.
- **Collection Figma `component` mono-mode** aliasant la couche sémantique `theme`.
  Point clé : le light/dark se propage quand même, car l'alias pointe une variable
  `theme` bi-mode. C'est le correctif du défaut d'origine (les deprecated aliasaient
  les primitives sans mode). Jamais d'alias direct vers les primitives pour la
  couleur.
- **Nommage** `component` → `button/<appearance>/<couleur>/<element>/<etat>` et
  `button/size/<densite>/<prop>`. Aligné sur l'API du code (`comete`, `default`,
  `link` en couleur), pas sur l'ancien nommage Figma (`brand`/`accent`/`neutral`).
- **États transverses** : `selected` et `focus` en tokens partagés (pas par
  combinaison) ; `disabled` via opacité globale. Évite de recréer les 41 alias
  cassés (tous des `.../border/focused`).
- **Figma d'abord** : construire et valider dans Figma, puis miroiter en JSON W3C
  dans le repo (compilation Style Dictionary → CSS `--button-...`).
- **Drift code/Figma relevé** : le composant Figma `❖ Button` datait d'avant le
  split comete/brand, la densité `touch` et la fusion `shape=square`. On ne touche
  pas à la vraie page Button (utilisée dans des maquettes) : les corrections vont
  dans une page **`Button-test`** à valider d'abord.

**Fait le 2026-11-09 (pilote, échantillon représentatif)** :
- Collection Figma `component` créée + **48 variables** `button/*` (contained /
  outlined / link × default / comete / critical × états, + selected/focus + size
  default/touch), en alias vers `theme` et `base/*`.
- Page Figma **`Button-test`** créée : spécimens liés aux variables, sections Light
  et Dark. Capture validée : theming light/dark correct, densité touch correcte.
- Aucune écriture sur les collections existantes ni sur la page `❖ Button`.

**Fait le 2026-11-09 (re-sync pilote + matrice Button complète)** :
- Re-sync du pilote sur le DS livré (1.0.0-alpha.173) : `link` sans fond (4 variables
  de fond supprimées), `button/link/default/text/*` repointées vers `text/link/*`,
  ajout de `text/pressed`.
- **Matrice Button complète** dans Figma : la collection `component` porte désormais
  **123 variables** `button/*`, dérivées de `Button.module.css` (le DS fait foi).
  Couvre `contained` / `outlined` / `subtle` × {default, subtle, subtlest, comete,
  success, critical, warning, information}, `link` (couleur link + sémantiques +
  subtle/subtlest en texte), `link-subtle` (sans couleur), `selected`, `focus`,
  `size` {compact, default, touch}. Règles DS intégrées : `subtle`/`subtlest` sans
  fond au repos, `link` sans fond.
- Garde anti-régression : dry-run de résolution des cibles (0 alias cassé) avant
  création ; après création, les 123 variables se résolvent en clair ET sombre.
- Scopes posés explicitement (TEXT_FILL / FRAME_FILL+SHAPE_FILL / STROKE_COLOR /
  WIDTH_HEIGHT / CORNER_RADIUS / GAP).
- Page `Button-test` non étendue (spécimens encore sur l'échantillon d'origine).

**Fait le 2026-11-09 (miroir repo de la couche composant Button)** :
- **`tokens/component/button/tokens.json`** créé : **154 tokens** `button/*` (W3C),
  aliasant la couche sémantique pour les couleurs (`{background.*}`, `{text.*}`,
  `{border.*}`) et `base/control` + `base/spacing` pour les dimensions. Sortie CSS
  `--button-*` via une 3e étape `build.ts` (StyleDictionary, `outputReferences` →
  `var(--…)`, donc héritage automatique du thème).
- **Restructuration (CASSANT)** des tokens texte sémantiques et neutres en groupes
  `default/hovered/pressed`, pour permettre le feedback hover/press couleur des
  boutons `link`/`link-subtle` : `text.{comete,success,critical,warning,information,
  subtle,subtlest}` passent de valeur unique à groupe. **Renomme `--text-comete` →
  `--text-comete-default`** (idem pour les 7). Les consommateurs (DS inclus) doivent
  être mis à jour.
- **`warning` passe de `yellow` à `orange`** (mirror Figma : `text.warning.default`
  = `{orange.800}` au lieu de `{yellow.800}`). **Change la couleur warning globale**
  (SectionMessage, Banner…), pas seulement le bouton. Choisi pour aligner Figma↔code.
- **`background.neutral.subtlest`** ramp dark corrigé en `cool-grey` 700/800/900
  (s'assombrit au hover/press ; corrige l'illisibilité du texte subtlest en press).
- **`text.brand` NON modifié** : Figma l'a aussi groupé, mais c'est la couleur
  cliente runtime (BrandProvider) et le bouton ne l'utilise pas. À réconcilier à part.
- Validation : `pnpm build` OK, 20 tests OK, lint + typecheck OK. Les 154 `--button-*`
  sont tous des références `var(--…)`.

**Reste à faire** : (A) propager côté DS le renommage des `--text-*` (→ `-default`)
+ bump dep tokens, puis (optionnel) faire consommer `--button-*` par `Button.module.css` ;
(B) réconcilier `warning` (yellow vs orange) et `text.brand` ; (C) 6 autres composants
(Tag, Badge, Card, TextField/Field, Checkbox, Radio). NB : le repo a aussi le
changement Noto Sans en attente de livraison (session précédente).

## 2026-11-06 — `font-family/primary` passe de Poppins à Noto Sans

**Décision** : nouveau token `font-family/noto-sans` (« Noto Sans ») et `font-family/primary` → `{font-family.noto-sans}`. `font-family/poppins` est conservé pour ne casser aucun consommateur.

**Contexte / raison** : décision C de la planche de marque, validée par Vincent le 22/10/2026. Les modèles Office sont déjà en Noto Sans : le code et Office ne doivent pas diverger.

**Statut** : build régénéré, test, typecheck et lint OK. Non commité, non publié (en attente de « livre »).

## 2026-10-21 — Ajout de `radius125` (10 px)

**Décision** : ajout de `Radius125` = `{Size125}` (10 px) dans `tokens/base/radius/tokens.json`.

**Contexte / raison** : `Avatar` `xxlarge` du DS référençait `--radius125`, inexistant (coin carré). Le token comble l'échelle entre `radius100` (8 px) et `radius150` (12 px). Pas de nouvelle valeur brute, il pointe sur le primitif `Size125` existant. Création approuvée explicitement.

**Statut** : livré en 0.19.0.

## 2026-10-21 — Ajout de `text-subtle-inverted` et `text-subtlest-inverted`

**Décision** : ajout de deux tokens sémantiques dans la famille `--text-*` :

| Token | Light (texte clair sur fond foncé) | Dark (texte foncé sur fond clair) |
|---|---|---|
| `text-subtle-inverted` | `{cool-grey.300}` (#b5c1c4) | `{cool-grey.700}` (#49585b) |
| `text-subtlest-inverted` | `{cool-grey.500}` (#6f8488) | `{cool-grey.500}` (#6f8488) |

**Contexte / raison** : il existait `text.inverted` (variante par défaut) mais pas ses déclinaisons `subtle` / `subtlest`, nécessaires pour hiérarchiser du texte secondaire sur une surface inversée (fond foncé en thème clair, fond clair en thème sombre).

**Choix des valeurs** : symétrie inter-thèmes déjà établie dans le DS. L'`inverted` d'un thème reprend l'échelle directe de l'autre thème (light `text.inverted`=white.100 ≈ dark `text.default` ; dark `text.inverted`=cool-grey.950 = light `text.default`). Donc les variantes inverted de chaque thème suivent l'échelle `subtle`/`subtlest` du thème opposé. Pas de nouveau primitif, pas de valeur devinée.

**Clés JSON** : clés plates hyphénées (`text["subtle-inverted"]`), comme `border.selected-inverted`, car `text.subtle` est déjà une feuille (impossible de la nester).

**Statut** : ajouté + build + typecheck/lint/test OK. Non commité, non publié (en attente de « livre »).
