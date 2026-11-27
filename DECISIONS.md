# Décisions — comete-design-tokens

> Journal des décisions (date, décision, contexte / raison).

## 2026-11-27 — Breakpoints préfixés et alignés sur le DS (0.49.0, CASSANT)

- **Décision** (Axel) : les tokens de breakpoint prennent le préfixe `breakpoint` et les valeurs du code du DS (`BREAKPOINTS` de `src/tokens/breakpoints.ts`) : `--breakpoint-sm` 600 px, `--breakpoint-md` 900 px, `--breakpoint-lg` 1200 px. `--mobile` (0), `--tablet` (600), `--laptop` (1200) et `--desktop` (1920) sont retirés.
- **Raison** : noms sans préfixe exposés à des collisions avec les variables des applications, et échelle différente de celle que le DS utilise réellement (pas de 900, un 0 et un 1920 inutilisés). Aucun usage relevé dans le DS ni dans les applications.
- **Limite** : un `@media` / `@container` ne lit pas `var()`. Ces tokens documentent l'échelle et alimentent la sortie Omnis (`breakpointSm/Md/Lg`) ; les CSS du DS recopient les valeurs, sous la garde de `breakpoints.test.ts`.

## 2026-11-26 — `quick-actions` → `quick-actions-menu` (0.48.0, CASSANT)

- **Décision** (Axel) : le composant `QuickActions` devient `QuickActionsMenu` et sa rangée `QuickActionsRow` devient `QuickActionsItem`, en code, dans Figma et dans les tokens.
- **Tokens** : la famille `quick-actions.*` devient `quick-actions-menu.*` et l'enfant `row` devient `item`. La règle de nommage du 26/11 est appliquée au passage (enfant avant la catégorie, `overlay` → `color.blanket`, `label` → `color.text`). Les 15 alias et valeurs ne changent pas.
- **Non tranché** : `item.color.background.default` pointe toujours vers `surface.default`, et les états survolé et pressé vers `background.neutral.subtlest.*`. On attend l'arbitrage d'Axel sur la doctrine surface / background.
- **Figma** : les 14 variables `quick-actions/*` ont été renommées sur place (les liaisons sont conservées), avec leur code syntax WEB mis à jour.

## 2026-11-26 — Règle de nommage des tokens de composant

- **Décision** (Axel) : `composant . [enfant…] . [variante…] . catégorie . propriété . état`. Enfants et variantes (apparence, couleur, taille, densité, breakpoint) passent avant la catégorie, l'état est toujours en feuille (convention A, celle de SLDS 2 et de notre couche sémantique). Un morceau visuel à forme propre devient un élément nommé (convention C, Material 3) : `bottom-nav.item.indicator`. Les tokens de la racine restent sous le nom du composant.
- **Propriété de couleur** : la famille sémantique de l'alias (`background`, `text`, `icon`, `border`, `surface`, `blanket`, `logo`). Un token se lit comme l'alias qu'il pointe : `button.contained.critical.color.background.hovered` → `{background.critical.bold.hovered}`. Les états d'un même rôle pointent vers la même famille.
- **Portée** : toutes les familles existantes (492 tokens, 474 renommés), cassant pour les apps. Table complète dans `docs/renommage-tokens-composant.md`, règle dans le README. Le test `tests/component-naming.test.ts` sera ajouté avec le renommage.
- **Contexte** : `quick-actions` 0.47.0 rangeait l'enfant après la catégorie (`quick-actions.color.row.*`) et mélangeait `surface.default` et `background.neutral.subtlest.*` sur les états de la rangée. Ce mélange attend l'arbitrage de la doctrine surface / background.

## 2026-11-26 — Tokens de composant `quick-actions` (0.47.0)

- **Décision** (Axel) : « migre les 2 vers la couche composant avec des tokens dédiés ». `QuickActions` et sa rangée passent de tokens sémantiques et de base directs à une famille `quick-actions.*` : voile, fond de rangée default/hovered/pressed, libellé, hauteur minimale, espacements de la liste et de la rangée, rayon et élévation de la rangée.
- **Hors famille** : la pastille d'icône reste un `IconTile` (ses couleurs par ton lui appartiennent), la typographie reste sur `base/typography` comme pour la BottomNav, et le focus passe par `FocusRing` (anneau `border.focused` commun), sans token dédié.
- **`spacing.list.padding-bottom`** (`Space1600`, 128 px) remplace le `calc(size800 * 2)` du DS. La variable locale `--quick-actions-offset` reste surchargeable côté DS.
- **Build** : `quick-actions` ajouté à la liste `COMPONENTS` de `build.ts`, sans quoi la famille n'est pas émise.

## 2026-11-25 — Catalogue (`type`, `tier`) dans la sortie Omnis (0.46.0)

- **Contexte** : la sortie Omnis 0.44.0 livre 1150 tokens à plat, sans leur type. Comète (fenêtre W_DESIGN_TOKENS) devinait couleurs et niveaux d'après le nom : avec les dimensions, polices et tokens de composants, cette heuristique classait `space100` en couleur et `buttonPrimaryBackgroundDefault` en sémantique.
- **Décision** (Axel) : le type vient du dist, pas d'une heuristique Omnis. Chaque JSON Omnis ajoute `catalog`, liste ordonnée `{ name, type, tier }` : `type` = `$type` DTCG du token, `tier` = dossier source (`base`, `theme`, `component`). La clé `$schema` devient `schema` : aucune clé ne commence par `$`, pour rester un nom de colonne Omnis.
- **Côté Comète** : le cache `#THEME#` stocke le JSON complet (tokens + catalogue + version) et W_DESIGN_TOKENS affiche les couleurs sur trois pages (thème, base, composants) d'après le catalogue. `ivBackdropHex` et l'aplatissement de l'alpha côté Omnis disparaissent, le fond de référence étant `surfaceDefault`.

## 2026-11-25 — `bold` et `boldest` en sombre : 600/500/400 et 200/100/50 (0.45.0)

- **Décision** (Axel) : « passe les background boldest dark en 200/100/50 et les bold dark en 600/500/400 ». En thème sombre, `background.{famille}.boldest.{default,hovered,pressed}` vaut le palier 200/100/50 de sa palette et `background.{famille}.bold.{default,hovered,pressed}` le palier 600/500/400. Appliqué aux treize familles (neutral, brand, comete, selected pour bold, success, warning, critical, information, cinq accents). Le thème clair ne change pas.
- **Conséquence de doctrine** : `boldest` n'est plus un navy fixe « identique en clair et en sombre », il suit le thème comme `bold`. La seule surface navy fixe reste `surface.comete`. Les descriptions de `*.boldest.default`, `surface.comete`, `text/border/icon.on-dark-surface` et le README sont réécrits en conséquence : texte sur `boldest` en `text.inverted` (encre 950 sur 200 en sombre, 9,9:1 à 12:1), `text.on-dark-surface` réservé à `surface.comete` et `critical.bold`.
- **Figma** : au moment de la décision, seule la famille `comete` portait déjà ces valeurs dans la collection `semantics` (bold 600/500/400, boldest 200/100/50 en sombre). Les douze autres familles sont encore aux anciennes valeurs côté Figma, à aligner.
- **Contrastes non résolus** (voir TODO) : en sombre, `text.inverted` (encre 950) sur un `bold` 600 tombe sous AA texte (neutral 2,6:1, critical 3,1:1, information 3,2:1, comete 3,6:1, success 4,1:1) et le blanc n'y est AA que pour neutral, critical et information (comete 4,0:1, success 3,6:1). Le choix du texte sur `bold` en sombre est à arbitrer.
- **Non cassant** : aucun nom ne change, seules les valeurs sombres. Le DS (alpha.202, tokens 0.43.0) n'est pas affecté avant son bump.

## 2026-11-25 — Sortie Omnis et contrat consommateur Comète SQL (0.44.0)

- **Contexte** : Comète SQL (Omnis 6.1.3) lisait les JSON sources sur `main` (`tokens/base/color`, `tokens/base/brand`, `tokens/theme/*`) et résolvait elle-même références, noms et alpha. Le renommage `brand` → `comete` (0.25.0) et la restructuration de `text.*` (0.20.0) l'ont cassée sans que rien ne le détecte.
- **Décision** (Axel) : le dépôt publie une sortie dédiée, `build/omnis/comete-tokens.{light,dark}.omnis.json`, plate et résolue : clés camelCase, couleurs en **entier Omnis** (alpha aplati sur `surface.default` du thème), dimensions en px, nombres et textes tels quels ; **tout sauf ombres, animation et z-index**. Comète lit un tag (`vX.Y.Z`), jamais `main`.
- **Contrat** : `consumers/omnis.json` liste les clés lues par Comète ; `tests/consumers.test.ts` échoue si l'une manque dans la sortie Omnis. Un token déprécié reste servi tant qu'il est consommé (`textDisabled`).
- **Correspondances retenues pour Comète** : `text.<x>` → `text.<x>.default`, `borderBrand` → `border.comete.bold`, `borderCritical` → `border.critical.bold`, `backgroundDefaultDefault` → `background.neutral.subtlest.default`, `backgroundTealSubtlestDefault` → `background.accent.teal.subtlest.default`, Tag `accent` → `background.accent.purple.*`. Les clés héritées d'avant les tokens (`primary`, `lNav*`, `porcelain*`...) sont hors périmètre.


## 2026-11-25 — `button.color.focus.border-inverted` (0.43.0)

- **Décision** (Axel) : le Button inverted a son propre anneau de focus, `button.color.focus.border-inverted` = `{border.focus-inverted}`. Le bleu de focus standard se lit mal sur `surface.inverted`.

## 2026-11-25 — Button `inverted`, `text.inverted` à états, `background.inverted.*` (0.42.0)

- **Décision** (Axel) : le Button reçoit une couleur `inverted` dans chaque apparence (contained, outlined, subtle, link, link-subtle). Elle **suit le thème**, comme `surface.inverted` : bouton pour une surface inversée (encre en clair, blanc en sombre).
- **Tokens sémantiques** (proposition B validée) :
  - `text.inverted` devient `text.inverted.default` (**CASSANT**), avec `hovered` (white.80 / cool-grey.800) et `pressed` (white.70 / cool-grey.700) pour les liens inversés.
  - `background.inverted.subtler.{default,hovered,pressed}` (white.10/20/30, en sombre grey.alpha.200A/300A/400A) : fond du contained inverted, miroir de `background.neutral.subtler`.
  - `background.inverted.subtlest.{hovered,pressed}` (white.10/20, en sombre grey.alpha.200A/300A) : survol et appui des outlined et subtle inverted.
  - Translucides pour rester justes sur tout fond inversé.
- **Tokens de composant** : `button.color.<apparence>.inverted.*`, même structure que `neutral`. Bordure de l'outlined en `border.inverted`.

## 2026-11-25 — `warning` aligné sur Figma : `orange` partout (0.41.0)

- **Décision** (Axel) : « aligne le code sur Figma ». Les fonds (`bold`, `boldest`, `subtler`, `subtlest`), `border.warning.*`, `icon.warning` et `surface.overlay.warning` passent de `yellow` à `orange`, aux mêmes paliers. `text.warning.*` l'était depuis le 19/11.
- **Raison** : Figma n'a pas de palette `yellow` (supprimée le 2026-11-20) et le warning y était orange. Le code restait en jaune sauf pour le texte.
- **Contrastes** : `text.on-light-surface` sur `warning.bold` 8,4:1 en clair et 7,0:1 en sombre. Les autres couples sont équivalents ou meilleurs.
- **Non cassant** : aucun nom ne change, seule la teinte. La palette primitive `yellow` reste publiée.

## 2026-11-25 — `background.*.boldest` sur toutes les familles (0.40.0)

- **Décision** (Axel) : palier `boldest` ajouté au fond de neutral, success, warning, critical, information et des cinq accents (`background.{famille}.boldest.{default,hovered,pressed}`), miroir de `comete.boldest` : palier 950 (survol 900, pressé 800), identique en clair et en sombre. Texte posé dessus en `text.on-dark-surface` (contraste de 13:1 à 16,8:1).
- **Fond seul** : pas de `text`, `border` ni `icon` `boldest` pour ces familles. `icon.success`, `icon.accent.*` et `border.neutral` sont des feuilles : les transformer en groupes serait cassant (option écartée par Axel).
- **Non cassant** : ajouts uniquement.

## 2026-11-24 — `border.on-dark-surface` (0.39.0)

- **Décision** (Axel) : nouveau token `border.on-dark-surface` (`white.100`, identique en clair et en sombre), pendant de `text.on-dark-surface` et `icon.on-dark-surface`.
- **Raison** : sur le navy fixe (`surface.comete`, `comete.boldest`, `brand.boldest`), `border.inverted` devient foncée en sombre et les filets disparaissent (hero de la Welcome du DS).
- **Manquent encore** : `border.on-light-surface` (pendant sur le jaune warning bold) et toute la famille `background` en `on-*-surface` (fond d'un élément posé sur une surface fixe : avatar, tag, champ). À créer au premier besoin.
- **Figma** : variable `border/on-dark-surface` créée (collection `semantics`, alias `white/100` en light et dark, portée bordures, syntaxe web `var(--border-on-dark-surface)`).

## 2026-11-24 — `text.link.*` déprécié (0.38.0)

- **Décision** (Axel) : `text.link.default`, `hovered` et `pressed` sont dépréciés (`$deprecated` dans les deux thèmes, mention DEPRECATED dans la description des variables Figma, laissées publiées).
- **Raison** : un lien est un Button link (`<Button appearance="link">`, `isInline` dans un paragraphe), en texte courant souligné via `button.color.link.*`. Plus aucun composant du DS ne lit `text.link.*` depuis alpha.197 (couleur `link` de `Text` retirée).
- **Suite** : suppression quand les apps consommatrices auront migré. Figma : seules des variables `-DEPRECATED-button` et `-DEPRECATED-badge` les aliasent encore.

## 2026-11-24 — `easing.emphasized`, ease-out franc pour les indicateurs de sélection (0.37.0)

- **Décision** : ajout de `easing.emphasized` = `cubic-bezier(0.23, 1, 0.32, 1)` (`--easing-emphasized`), validé par Axel.
- **Raison** : `easing.default` démarre lentement. Un indicateur de sélection (pastille de SideNav, pastille de BottomNav) doit réagir dès l'appui puis se poser en douceur, comme les barres de navigation iOS et Material 3. Cette courbe part vite et atterrit longuement.
- **Portée** : réservé aux changements d'état qui doivent paraître instantanés. Les entrées et sorties d'écran gardent `entrance` / `exit`.

## 2026-11-20 — Button link neutral, subtle et subtlest alignés sur Figma, Banner announcement violet (0.35.0)

**Décision** (Axel) :

- **`button.color.link.neutral.text.*`** passe de `text.link.*` (bleu) à `text.default.{default,hovered,pressed}`, comme la chaîne modifiée par Axel dans Figma. Le lien neutre est désormais de la couleur du texte courant. Le soulignement au repos (Figma) le distingue du texte.
- **`button.color.link.subtle.text`** : `hovered` = `text.subtle.hovered` (au lieu de `text.subtlest.default`), nouveau `pressed` = `text.subtle.pressed`. **`button.color.link.subtlest.text`** : `hovered` = `text.subtlest.hovered` (au lieu de `text.subtle.default`), nouveau `pressed` = `text.subtlest.pressed`. Variables créées par Axel dans Figma. Leur code syntax WEB copiait celle de `hovered`, corrigé.
- **Banner** : `announcement` et `discovery` avaient le même rôle. `discovery` est fusionné dans `announcement`, qui prend son fond violet (`background.accent.purple.bold.default`). L'ancien announcement noir (`background.neutral.bold.default`) est supprimé, ainsi que `banner.color.discovery.*`. Figma : variante discovery renommée announcement, ancienne variante noire supprimée, variables discovery supprimées.

**Contexte / raison** : report des corrections Figma d'Axel. Ferme la lacune notée le 19/11 (link subtle et subtlest sans `pressed`, `hovered` croisés).

## 2026-11-20 — `background.default` devient `background.field`, `inverted` rangé sous `surface` (0.36.0)

**Décision** (Axel) : `background.default.default` est renommé `background.field.default` (cassant). Depuis la doctrine surface vs background, « fond par défaut » prêtait à confusion avec `surface.default` : ce token est le remplissage des champs et contrôles (entrée de saisie, Checkbox non cochée, pouce du Switch, Badge, cradle du BottomNav), plus sombre que la surface en thème sombre (cool-grey 950 contre 900). `background.default.inverted` devient `surface.inverted` : c'est une surface opposée au thème sur laquelle on pose du contenu (démonstration d'un logo inversé, encart contrasté), sans sens de statut. Figma : `background/field/default` et `surface/inverted`, liaisons conservées. Propagation : DS alpha.195 (Badge, Checkbox, InputContainer, Switch, stories).

## 2026-11-20 — `surface.*` sort de `background`, doctrine surface vs background, voile du MediaPicker (0.34.0)

**Décision** (Axel) :

- **Renommage cassant** : la famille `background.surface.*` devient `surface.*`, hors de `background`, comme `elevation.surface` chez Atlassian. La hiérarchie est aplatie en même temps : le niveau `elevation` disparaît (`surface.{default, sunken, raise, overlay, mask, comete}`), parce que `--elevation-*` désigne déjà les ombres. CSS : `--background-surface-elevation-sunken-default` → `--surface-sunken-default`, `--background-surface-default` → `--surface-default`, etc. Figma : mêmes renommages dans `semantics` (liaisons conservées, code syntax mis à jour).
- **`background.surface.critical` supprimé** : doublon de `surface.overlay.critical` (mêmes valeurs), sans consommateur. Figma : renommée `DEPRECATED-surface/critical`.
- **Doctrine écrite** (README) : surface = ce sur quoi on pose du contenu, profondeur sans sens ; background = ce qu'un composant peint pour porter un sens ou une emphase. Test : la couleur dit-elle quelque chose ? background. Sinon, surface. Le cadre « Dark background » du Spinner dans Figma est relié à `surface/default` en mode sombre (Axel), conforme à la règle, et `DEPRECATED-background/alpha/default` est supprimée.
- **`surface.mask`** : hovered et pressed inversés pour suivre la correction d'Axel dans Figma. Le voile s'allège à mesure que l'on interagit : `default` 500A, `hovered` 400A, `pressed` 300A (grey-alpha en clair, dark-grey-alpha en sombre).
- **`background.default.*`** reste : c'est le remplissage des champs et contrôles (Figma : entrée de saisie, Checkbox, pouce du Switch), distinct de `surface.default` en thème sombre (cool-grey 950 contre 900). Le DS y rebranche Checkbox et Switch.

**Contexte / raison** : la question du cadre Spinner (neutral.bold ou surface.comete ?) a montré qu'aucune règle n'écrivait la frontière entre les deux familles, qui cohabitaient sous la même racine. Les DS de référence (Atlassian, Material 3, Carbon, Polaris) séparent tous couches et remplissages. Sortir la famille rend la séparation lisible dans le nom. Propagation : DS alpha.194 (28 usages), comete-icons inchangé.

## 2026-11-20 — on-light-surface / on-dark-surface, critical bold sombre, suite des tokens de composant (0.33.0)

**Décision** (Axel) :

- **Renommage cassant** : `text.on-warning` et `icon.on-warning` deviennent `text.on-light-surface` et `icon.on-light-surface`. `text.on-comete` et `icon.on-comete` deviennent `text.on-dark-surface` et `icon.on-dark-surface`. Le nom décrit la surface (claire ou sombre fixe) et non plus une famille de couleur, car les deux servent désormais à plusieurs familles. Mêmes renommages dans Figma (liaisons conservées).
- **`icon.on-light-surface` passe de cool-grey.900 à 950**, aligné sur Figma et sur `text.on-light-surface`.
- **`background.critical.bold` en sombre** aligné sur la modification d'Axel dans Figma : red 600 / 500 / 400 (au lieu de 400 / 300 / 200), pour mieux ressortir. Le repos vaut red 600 dans les deux thèmes : les textes et icônes posés dessus passent en `on-dark-surface` (blanc fixe) au lieu de `inverted` (encre en sombre). Côté tokens : `button.color.contained.critical.text`, `banner.color.critical.{text,icon}`.
- **Banner** : apparence `discovery` (nouveautés, mises à jour majeures) sur `background.accent.purple.bold`, `banner.size.icon` (Size300, largeur et hauteur de l'icône).
- **SideNav** : `side-nav.spacing.item.padding-y` à Space050 (item de 32 px sans description). `side-nav.size.width` (240 px) et `side-nav.size.header.min-height` (72 px) en valeurs brutes, `side-nav.opacity.disabled` (standard disabled par opacité), `side-nav.opacity.footer-brand` (0,5 au lieu de 0,55).
- **BottomNav** : `bottom-nav.color.item.{label,icon}.disabled` supprimés : ils aliasaient des tokens dépréciés. Le disabled passe par l'opacité seule.
- **PageToolbar** : `page-toolbar.size.search.{min-width,max-width}` (160 et 240 px) en valeurs brutes.
- **Valeurs brutes au niveau composant** : quand aucun token d'échelle ne correspond (240, 72, 160 px), la valeur est portée par le token de composant plutôt que par un nouveau token d'échelle, comme `avatar-group.spacing.overlap`. Une échelle globale ne gagne une valeur que si plusieurs composants la partagent.
- **Règle** : aucun nouvel usage d'un élément déprécié, y compris via un alias de token de composant. En cas de besoin, arbitrage d'Axel.

## 2026-11-20 — `icon.on-comete`, voiles ramenés à deux rôles (0.32.0)

**Décisions** (Axel, sur rapport d'analyse des usages Figma et code) :

- **`icon.on-comete`** créé, pendant de `text.on-comete` : `{white.100}` dans les deux thèmes, modèle de `icon.on-warning`. Les icônes de `Card bold comete / brand` passent dessus dans le DS (elles restaient en `icon.inverted`, sombres sur navy en thème sombre). Figma : `icon/on-comete` (scope SHAPE_FILL, code syntax).
- **Deux voiles, deux rôles** : `blanket.default` reste le seul voile plein écran (couche modale). `background.surface.mask` devient le voile local avec ses états `default` (chargement, zone inactive), `hovered` et `pressed` (média cliquable). Valeurs en primitives grey-alpha, jamais `black.*` / `white.*` (choix d'Axel) : clair `grey.alpha.500A / 300A / 400A`, sombre `dark-grey.alpha.500A / 300A / 400A`. Le `default` sombre passe de `grey.alpha.400A` (voile sombre) à `dark-grey.alpha.500A`, aligné sur `blanket` sombre : en thème sombre les voiles éclaircissent.
- **Supprimés** : `interaction.{hovered,pressed,hovered-MEDIAPICKER,pressed-MEDIAPICKER}` (hex bruts, zéro nœud Figma, zéro usage code) et `background.alpha.default` (même valeur que `blanket` en clair, opaque en sombre, un seul cadre de doc). Changement cassant : `--background-surface-mask` devient `--background-surface-mask-default` (aucun consommateur dans le DS).
- **Figma** : variantes hovered / pressed du MediaPicker et alias `DEPRECATED-media-picker/background/*` reliés aux nouveaux états ; `interaction/*` supprimées ; `background/alpha/default` renommée `DEPRECATED-…` tant que le cadre « Dark background » du Spinner n'a pas de surface cible (voir TODO, question background vs surface).

**Raison** : trois tokens pour un même voile sans règle d'usage ; `surface.mask` était déjà le choix de fait du MediaPicker, `interaction.*` n'a jamais été branché.

## 2026-11-20 — Tokens de composant Banner, Page, PageBar, PageToolbar, SideNav et BottomNav (0.31.0)

**Décision** (demande d'Axel, création des tokens de composant approuvée par la demande) :

- 6 nouveaux fichiers sous `tokens/component/` : `banner` (17 tokens), `page` (5), `page-bar` (10), `page-toolbar` (3), `side-nav` (46), `bottom-nav` (28). Nommage `<composant>.<catégorie>.…` (`color`, `size`, `spacing`, `radius`, `opacity`, `border-width`), tous en alias vers les tokens sémantiques ou base. `build.ts` les émet.
- Valeurs reprises du code DS : rendu inchangé. Les propriétés locales du DS (`--bar-compact-*`, `--sidenav-*`) et les valeurs en dur du bouton d'action du BottomNav (56, 68, -14, -20 px) deviennent des tokens. `--page-gutter` reste un relais CSS local (bascule responsive), alimenté par `page.spacing.gutter.{mobile,laptop}`.
- Typographie laissée hors des tokens de composant : elle suit les styles de texte et les tokens typographiques de base.
- Figma : variables miroir dans la collection `component` (code syntax WEB, alias `semantics` et `base`), liées aux composants seulement là où la valeur Figma était déjà celle du code. Les écarts sont listés dans TODO.md, à trancher par Axel avant de les lier. Les liaisons `DEPRECATED-select/option/padding/*` des items du SideNav sont remplacées.
- BottomNav : `bottom-nav.color.item.{label,icon}.disabled` aliasent `text.disabled` et `icon.disabled` (dépréciés) pour garder le rendu. À supprimer si le disabled passe à l'opacité seule.

## 2026-11-20 — Suppression de text.subtlest-inverted et logo.comete.subtlest (0.30.1)

**Décision** (Axel) :

- `text.subtlest-inverted` et `logo.comete.subtlest` supprimés : aucun consommateur (DS, comete-logos, comete-icons, applications du poste) et absents de Figma.
- Les sources JSON ont été embarquées par le commit 0.30.0 d'une session parallèle, mais le CSS publié en 0.30.0 contenait encore les deux variables. 0.30.1 régénère le CSS et l'inventaire. Patch et non mineure : rien ne les consommait.
- **Conservés, réservés au code** : `text.subtle-inverted`, `logo.comete.inverted` et `logo.comete.subtle-inverted`. L'apparence `inverted` de comete-logos (logo sur une surface opposée au thème) les consomme. Dans Figma, on pose le composant `❖ Logo / Dark` sur une surface sombre au lieu de dupliquer chaque logo en version inversée. Les variables existent dans Figma pour les parts internes du logo, documentées « code uniquement ».
- Figma (même jour) : `yellow-DEPRECATED/*` supprimé (non consommé dans le fichier). Les 3 variables ci-dessus créées dans `semantics`, masquées à la publication, et les liaisons orphelines vers l'ancienne `logo/comete/inverted` rebranchées.

## 2026-11-19 — Polices limitées à Noto Sans et Noto Sans Mono, publication Figma (0.29.0)

**Décision** (Axel) :

- `font-family.{outfit,poppins,satoshi,space-grotesk,urbanist}` supprimés (cassant, d'où 0.29.0). Seules restent `noto-sans` et `noto-sans-mono` (nouveau, déjà présent dans Figma). `font-family.code` aliase `noto-sans-mono` au lieu de la pile monospace système, comme dans Figma. Les styles de texte Figma n'utilisent déjà que ces deux familles.
- Figma : collection `DEPRECATED-components` et variables `DEPRECATED-*` du thème masquées à la publication. Elles seront remplacées par des tokens de composant au cas par cas. `comete/blue/*` et `logo/comete/*`, consommées, sont de nouveau publiées.
- Exceptions de scope notées dans TODO.md, non corrigées.

## 2026-11-19 — Button link accent sur les états d'accent, scopes Figma harmonisés (0.27.1)

**Décision** (demande d'Axel) :

- `button.color.{link,link-subtle}.accent-<famille>.text.{hovered,pressed}` pointent sur `text.accent.<famille>.{hovered,pressed}` (ils pointaient tous sur `default`). Même chose dans Figma.
- `outlined` et `subtle` inchangés : aucune couleur n'y a d'état de texte, le survol passe par le fond. En ajouter seulement pour l'accent créerait une incohérence.
- Scopes Figma harmonisés sur la règle majoritaire de chaque groupe, code syntax WEB posée partout où le nom CSS existe, orphelines renommées `DEPRECATED-` (détail dans TODO.md). Les scopes ne changent aucun rendu, seulement les propriétés proposées dans les sélecteurs.

## 2026-11-19 — Text accent : hovered/pressed ajoutés, inverted supprimés, link en blue dans Figma (0.25.0)

**Décision** (demande d'Axel) :

- `text.accent.<famille>.{hovered,pressed}` ajoutés pour les 5 familles (purple, teal, turquoise, magenta, blue-grey), sur le modèle des autres familles de texte : en clair, deux crans plus foncés que `default` (purple 800/900, les autres 900/950), en sombre, deux crans plus clairs (100/50).
- `text.accent.<famille>.inverted` supprimés : aucun usage dans le code du DS ni dans Figma (0 nœud lié, 0 alias). Les autres familles de texte n'ont pas d'inverted, l'accent était la seule exception sans raison d'être. Cassant pour un lecteur éventuel de `--text-accent-*-inverted`, d'où la version mineure.
- `text.link.*` : le dépôt pointait déjà sur `blue.600/700/800` (sombre `blue.300/200/100`). Figma pointait sur `comete/blue/*`, réaligné sur `blue/*`.

**Contexte / raison** : les accents servent de couleur de texte à des éléments interactifs (Tag, Badge, Avatar) sans états. Les inverted étaient des tokens morts.

## 2026-11-20 — text.on-comete, icon.bold aligné sur Figma (0.30.0)

**Décisions** (Axel, à partir des faiblesses du lot A) :

- **`text.on-comete`** : blanc fixe (`white.100`) dans les deux thèmes, sur le modèle de
  `text.on-warning`, pour les surfaces navy fixes (`surface.comete`, `*.boldest`).
  `text.inverted` suit le thème et tombait à 1,2:1 sur navy en sombre.
- **`icon.bold`** : le code s'aligne sur Figma, `cool-grey.950` en clair et `cool-grey.50`
  en sombre (était `cool-grey.900` dans les deux thèmes, invisible en sombre).
- `text.subtlest.inverted` : laissé tel quel, traité par ailleurs.

## 2026-11-19 — Button contained subtle / subtlest : fond au repos tokenisé (0.28.0)

**Décision** (Axel, sur capture Storybook) : `button.color.contained.{subtle,subtlest}.background.default`
créés sur `{background.neutral.subtler.default}`, comme `contained.neutral`. Les trois
couleurs neutres de `contained` partagent le même fond, seul le texte change.

**Contexte / raison** : la décision DS du 2026-11-09 (« pas de fond au repos, motif
fantôme ») n'avait jamais été effective : sans règle `background-color`, le `<button>`
héritait du gris par défaut du navigateur (`ButtonFace`). Le rendu observé avait donc un
fond, mais hors tokens. On tokenise ce rendu plutôt que de le supprimer. Figma reçoit les
deux variables dans la collection `component`.

## 2026-11-19 — Logo comète blanc en sombre, Figma réaligné sur le code (0.27.0)

**Décisions** (Axel) : `logo.comete.default` sombre passe de `comete.blue.50` à `white.100`
(Figma faisait déjà foi). Pour les valeurs `comete` et `brand`, **le code fait foi** :
Figma `background/{comete,brand}/bold` réaligné sur 700 / 800 / 900 (clair) et
50 / 100 / 200 (sombre), `subtlest` sur 100 / 200 / 300 (clair) et 950 / 900 / 800
(sombre). `border/brand` (sans suffixe, Figma seulement) renommé `DEPRECATED-border/brand`.

## 2026-11-19 — brand miroir de comete, niveau boldest, surface navy, dossier base/comete (0.26.0)

**Contexte** : chantier « descriptions des tokens ». En décrivant `brand` et `comete`,
cinq rôles divergeaient (fonds `bold` 950/900/800 contre 700/800/900, `text.default`
700 contre 900, `text.pressed`). Dérive historique : `8b9449d` a créé `comete-*` par
copie de `brand-*`, puis `25f9198` a passé `comete.bold` à 700 sans toucher `brand`.

**Décisions** (Axel) :

- **`brand` est un miroir rôle pour rôle de `comete`**, mêmes valeurs par défaut. Un
  composant rendu en `brand` doit rendre comme en `comete` sans `BrandProvider`. Pas de
  renommage (`brand-comete` / `brand-client` écartés : `brand` est le terme standard,
  `comete` ne varie jamais, `client-*` a été retiré en 0.13.0, coût cassant élevé).
- **Règle d'usage** : jamais de navy sur une surface interactive, le bleu action
  (`comete-blue-700`, `*.bold`) porte les contrôles et appels à l'action. Le navy
  (`comete-blue-950`) est l'identité et le chrome.
- **Niveau `boldest`** ajouté dans les deux familles : `background.*.boldest.{default,
  hovered,pressed}` (950/900/800, identique en clair et sombre, texte inversé),
  `text.*.boldest`, `border.*.boldest`, `icon.*.boldest` (950 en clair, 50 en sombre).
- **`icon.comete` et `icon.brand` deviennent des groupes** (`default`, `boldest`), donc
  `--icon-comete` → `--icon-comete-default` et `--icon-brand` → `--icon-brand-default`
  (cassant, même précédent que `text.<couleur>` en 0.20.0). L'alias
  `avatar.color.comete.icon` suit.
- **`background.surface.comete`** (950 en clair et en sombre) : surface navy non
  interactive, reprise de la variable Figma `background/surface/comete`.
- **Dossier `tokens/base/brand` renommé `tokens/base/comete`** (demande d'Axel, la
  collection Figma `base/brand` est devenue `base/comete`) : ce sont les primitives
  Comète. Les noms CSS `--comete-blue-*` ne changent pas, seul le chemin JSON exporté
  `tokens/base/comete/tokens.json` change.
- **Descriptions** : les nouveaux tokens inaugurent le gabarit validé (rôle, quand
  l'utiliser, quand ne pas l'utiliser, couple de contraste, nom marque).

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
