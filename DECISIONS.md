# Décisions — comete-design-tokens

> Journal des décisions (date, décision, contexte / raison).

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
