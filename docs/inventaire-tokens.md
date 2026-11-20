# Inventaire des tokens

> Généré par `pnpm inventory` le 2026-11-20. Ne pas éditer à la main : la source est `tokens/**/*.json`.

Usages = occurrences de `var(--token)` dans le design system (`src/` hors tests, puis `storybook/stories/`).
Diagnostic : **absente**, **tautologique** (répète la valeur), **trop courte**, **dépréciée**, ok.

## Synthèse

| Lot | Tokens | Décrits (ok) | À écrire ou réécrire | Non consommés par le DS |
|---|---:|---:|---:|---:|
| A | 76 | 10 (13 %) | 62 | 26 |
| B | 60 | 0 (0 %) | 60 | 25 |
| C | 143 | 16 (11 %) | 127 | 81 |
| D | 196 | 24 (12 %) | 172 | 82 |
| E | 200 | 0 (0 %) | 200 | 193 |
| F | 459 | 161 (35 %) | 298 | 8 |
| **Total** | **1134** | **211 (19 %)** | **919** | **415** |

## Lot A — sémantique neutre : text, background, border, icon (default, neutral, surface, selected…)

76 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--background-neutral-subtler-default` | color | #eaedee | #49585b | `cool-grey.100` | 10 / 11 | absente |  |
| `--background-neutral-subtler-hovered` | color | #d8dedf | #596b70 | `cool-grey.200` | 16 / 1 | absente |  |
| `--background-neutral-subtler-pressed` | color | #b5c1c4 | #6f8488 | `cool-grey.300` | 13 / 1 | absente |  |
| `--background-neutral-bold-default` | color | #3f4a4d | #eaedee | `cool-grey.800` | 10 / 8 | absente |  |
| `--background-neutral-bold-hovered` | color | #374043 | #d8dedf | `cool-grey.900` | 6 / 0 | absente |  |
| `--background-neutral-bold-pressed` | color | #252a2c | #b5c1c4 | `cool-grey.950` | 6 / 0 | absente |  |
| `--background-neutral-subtlest-default` | color | #f7f8f8 | #49585b | `cool-grey.50` | 14 / 26 | absente |  |
| `--background-neutral-subtlest-hovered` | color | #eaedee | #3f4a4d | `cool-grey.100` | 7 / 2 | absente |  |
| `--background-neutral-subtlest-pressed` | color | #d8dedf | #374043 | `cool-grey.200` | 6 / 0 | absente |  |
| `--background-disabled-default` | color | #09090b1a | #ffffff1a | `black.10` | 9 / 0 | dépréciée | DEPRECATED : utiliser <composant>/opacity/disabled (opacité). Supprimé après migration des derniers composant… |
| `--background-selected-bold-hovered` | color | #224986 | #dceefd | `comete.blue.900` | 2 / 0 | absente |  |
| `--background-selected-bold-pressed` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 2 / 0 | absente |  |
| `--background-selected-bold-default` | color | #2354aa | #c1e3fc | `comete.blue.800` | 5 / 0 | absente |  |
| `--background-selected-subtlest-pressed` | color | #97d2f9 | #2354aa | `comete.blue.300` | 3 / 0 | absente |  |
| `--background-selected-subtlest-hovered` | color | #c1e3fc | #224986 | `comete.blue.200` | 4 / 0 | absente |  |
| `--background-selected-subtlest-default` | color | #dceefd | #1e3661 | `comete.blue.100` | 4 / 9 | absente |  |
| `--background-field-default` | color | #ffffff | #252a2c | `white.100` | 0 / 0 | ok | Remplissage des champs et contrôles posés sur une surface : champ de saisie, case à cocher non cochée, pouce … |
| `--background-focused-default` | color | #429aef | #66b8f4 | `comete.blue.500` | 4 / 0 | absente |  |
| `--surface-default` | color | #ffffff | #374043 | `white.100` | 10 / 7 | absente |  |
| `--surface-sunken-default` | color | #f7f8f8 | #252a2c | `cool-grey.50` | 2 / 14 | absente |  |
| `--surface-sunken-hovered` | color | #eaedee | #374043 | `cool-grey.100` | 1 / 0 | absente |  |
| `--surface-sunken-pressed` | color | #d8dedf | #3f4a4d | `cool-grey.200` | 0 / 0 | absente |  |
| `--surface-raise-default` | color | #ffffff | #49585b | `white.100` | 8 / 2 | absente |  |
| `--surface-overlay-default` | color | #ffffff | #3f4a4d | `white.100` | 7 / 0 | absente |  |
| `--surface-overlay-critical` | color | #fef2f2 | #2e1717 | `red.50` | 0 / 0 | absente |  |
| `--surface-overlay-success` | color | #ebfef4 | #0e2d24 | `green.50` | 0 / 0 | absente |  |
| `--surface-overlay-accent-purple` | color | #f3f0ff | #292442 | `purple.50` | 0 / 0 | absente |  |
| `--surface-overlay-accent-teal` | color | #eefafd | #0f2b3d | `teal.50` | 0 / 0 | absente |  |
| `--surface-overlay-accent-turquoise` | color | #edfffd | #00373a | `turquoise.50` | 0 / 0 | absente |  |
| `--surface-overlay-accent-magenta` | color | #fcf3f9 | #47102d | `magenta.50` | 0 / 0 | absente |  |
| `--surface-overlay-accent-blue-grey` | color | #f5f7fa | #1e2533 | `blue-grey.50` | 0 / 0 | absente |  |
| `--surface-overlay-information` | color | #eff8ff | #023059 | `blue.50` | 0 / 0 | absente |  |
| `--surface-overlay-warning` | color | #fdfee8 | #292410 | `yellow.50` | 0 / 0 | absente |  |
| `--surface-mask-default` | color | #050c1f7d | #9bb4ca80 | `grey.alpha.500A` | 0 / 0 | ok | Voile local posé sur un élément, pas sur l'écran : chargement d'une table ou d'une liste, média en cours d'en… |
| `--surface-mask-hovered` | color | #080f214f | #bfdbf847 | `grey.alpha.400A` | 0 / 0 | ok | Voile local au survol d'un média cliquable (MediaPicker, galerie, pièce jointe) : plus léger que default pour… |
| `--surface-mask-pressed` | color | #0b120e24 | #a6c5e229 | `grey.alpha.300A` | 0 / 0 | ok | Voile local à la pression d'un média cliquable : encore plus léger que hovered, l'image se révèle sous le doi… |
| `--surface-inverted` | color | #252a2c | #ffffff | `cool-grey.950` | 0 / 0 | ok | Surface inversée par rapport au thème (encre en clair, blanc en sombre) pour un bloc qui s'oppose à la page :… |
| `--text-default-default` | color | #252a2c | #f7f8f8 | `cool-grey.950` | 59 / 52 | absente |  |
| `--text-default-hovered` | color | #374043 | #eaedee | `cool-grey.900` | 0 / 0 | absente |  |
| `--text-default-pressed` | color | #3f4a4d | #d8dedf | `cool-grey.800` | 0 / 0 | absente |  |
| `--text-selected` | color | #2c7ee4 | #c1e3fc | `comete.blue.600` | 4 / 15 | absente |  |
| `--text-disabled` | color | #09090b66 | #ffffff66 | `black.40` | 48 / 1 | dépréciée | DEPRECATED : utiliser <composant>/opacity/disabled (opacité). Supprimé après migration des derniers composant… |
| `--text-link-default` | color | #0076d8 | #71cdff | `blue.600` | 1 / 0 | absente |  |
| `--text-link-hovered` | color | #0060b0 | #b4e3ff | `blue.700` | 0 / 0 | absente |  |
| `--text-link-pressed` | color | #005391 | #ddf1ff | `blue.800` | 0 / 0 | absente |  |
| `--text-subtle-default` | color | #49585b | #b5c1c4 | `cool-grey.700` | 29 / 43 | absente |  |
| `--text-subtle-hovered` | color | #3f4a4d | #d8dedf | `cool-grey.800` | 0 / 0 | absente |  |
| `--text-subtle-pressed` | color | #374043 | #eaedee | `cool-grey.900` | 0 / 0 | absente |  |
| `--text-inverted` | color | #ffffff | #252a2c | `white.100` | 43 / 6 | absente |  |
| `--text-subtle-inverted` | color | #b5c1c4 | #49585b | `cool-grey.300` | 0 / 2 | absente |  |
| `--text-subtlest-default` | color | #6f8488 | = | `cool-grey.500` | 19 / 71 | absente |  |
| `--text-subtlest-hovered` | color | #596b70 | #8d9fa3 | `cool-grey.600` | 0 / 0 | absente |  |
| `--text-subtlest-pressed` | color | #49585b | #b5c1c4 | `cool-grey.700` | 0 / 0 | absente |  |
| `--text-on-light-surface` | color | #252a2c | = | `cool-grey.950` | 8 / 0 | ok | Texte foncé fixe sur les surfaces claires fixes, identiques en clair et en sombre (fond warning bold, jaune) … |
| `--text-on-dark-surface` | color | #ffffff | = | `white.100` | 11 / 2 | ok | Texte blanc fixe sur les surfaces sombres fixes, identiques en clair et en sombre : navy Comète (background.s… |
| `--border-disabled` | color | #09090b33 | #ffffff33 | `black.20` | 4 / 0 | dépréciée | DEPRECATED : utiliser <composant>/opacity/disabled (opacité). Supprimé après migration des derniers composant… |
| `--border-subtle` | color | #eaedee | #3f4a4d | `cool-grey.100` | 7 / 21 | absente |  |
| `--border-focused` | color | #429aef | #66b8f4 | `comete.blue.500` | 18 / 10 | absente |  |
| `--border-bold` | color | #b5c1c4 | #49585b | `cool-grey.300` | 5 / 1 | absente |  |
| `--border-selected` | color | #429aef | #66b8f4 | `comete.blue.500` | 9 / 0 | absente |  |
| `--border-selected-inverted` | color | #c1e3fc | #2354aa | `comete.blue.200` | 0 / 0 | absente |  |
| `--border-focus-inverted` | color | #dceefd | #224986 | `comete.blue.100` | 0 / 0 | absente |  |
| `--border-neutral` | color | #374043 | #f8f8f8 | `cool-grey.900` | 4 / 0 | absente |  |
| `--border-default` | color | #d8dedf | #49585b | `cool-grey.200` | 19 / 46 | absente |  |
| `--border-invisible` | color | #ffffff | #252a2c | `white.100` | 0 / 0 | absente |  |
| `--border-inverted` | color | #ffffff | #252a2c | `white.100` | 1 / 3 | absente |  |
| `--icon-default` | color | #32415a | #eaedf4 | `blue-grey.800` | 2 / 0 | absente |  |
| `--icon-disabled` | color | #09090b66 | #ffffff66 | `black.40` | 9 / 2 | dépréciée | DEPRECATED : utiliser <composant>/opacity/disabled (opacité). Supprimé après migration des derniers composant… |
| `--icon-inverted` | color | #f7f8f8 | #374043 | `cool-grey.50` | 4 / 0 | absente |  |
| `--icon-selected` | color | #2c7ee4 | #97d2f9 | `comete.blue.600` | 2 / 0 | absente |  |
| `--icon-subtle` | color | #596b70 | #8d9fa3 | `cool-grey.600` | 13 / 0 | absente |  |
| `--icon-subtlest` | color | #6f8488 | = | `cool-grey.500` | 11 / 0 | absente |  |
| `--icon-on-light-surface` | color | #252a2c | = | `cool-grey.950` | 3 / 0 | ok | Icône foncée fixe sur les surfaces claires fixes (fond warning bold, jaune), identique en clair et en sombre.… |
| `--icon-on-dark-surface` | color | #ffffff | = | `white.100` | 6 / 0 | ok | Icône blanche fixe sur les surfaces sombres fixes (navy Comète, background.critical.bold), identique en clair… |
| `--icon-bold` | color | #252a2c | #f7f8f8 | `cool-grey.950` | 1 / 0 | absente |  |
| `--blanket-default` | color | #050c1f7d | #9bb4ca80 | `grey.alpha.500A` | 5 / 0 | ok | Voile plein écran sous une couche modale (Drawer, ModalDialog, QuickActions, Spotlight) : un seul à la fois, … |

## Lot B — sémantique de statut : success, warning, critical, information

60 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--background-success-bold-default` | color | #00784d | #0abf76 | `green.700` | 8 / 2 | absente |  |
| `--background-success-bold-hovered` | color | #036240 | #2fd88e | `green.800` | 2 / 0 | absente |  |
| `--background-success-bold-pressed` | color | #245041 | #6aebae | `green.900` | 2 / 0 | absente |  |
| `--background-success-subtlest-hovered` | color | #a4f6ca | #036240 | `green.200` | 3 / 0 | absente |  |
| `--background-success-subtlest-pressed` | color | #6aebae | #00784d | `green.300` | 3 / 0 | absente |  |
| `--background-success-subtlest-default` | color | #d0fbe2 | #245041 | `green.100` | 6 / 3 | absente |  |
| `--background-success-subtler-default` | color | #a4f6ca | #036240 | `green.200` | 0 / 0 | absente |  |
| `--background-success-subtler-hovered` | color | #6aebae | #00784d | `green.300` | 0 / 0 | absente |  |
| `--background-success-subtler-pressed` | color | #2fd88e | #009b60 | `green.400` | 0 / 0 | absente |  |
| `--background-warning-bold-default` | color | #facc15 | #eabd08 | `yellow.400` | 8 / 1 | absente |  |
| `--background-warning-bold-hovered` | color | #eabd08 | #facc15 | `yellow.500` | 2 / 0 | absente |  |
| `--background-warning-bold-pressed` | color | #caa204 | #fdd847 | `yellow.600` | 2 / 0 | absente |  |
| `--background-warning-subtlest-pressed` | color | #fdd847 | #eabd08 | `yellow.300` | 3 / 0 | absente |  |
| `--background-warning-subtlest-hovered` | color | #fee78a | #caa204 | `yellow.200` | 3 / 0 | absente |  |
| `--background-warning-subtlest-default` | color | #fef2c3 | #a18207 | `yellow.100` | 7 / 3 | absente |  |
| `--background-warning-subtler-default` | color | #fee78a | #856d0e | `yellow.200` | 0 / 0 | absente |  |
| `--background-warning-subtler-hovered` | color | #fdd847 | #a18207 | `yellow.300` | 0 / 0 | absente |  |
| `--background-warning-subtler-pressed` | color | #facc15 | #caa204 | `yellow.400` | 0 / 0 | absente |  |
| `--background-critical-bold-default` | color | #e12121 | = | `red.600` | 10 / 2 | absente |  |
| `--background-critical-bold-hovered` | color | #be1717 | #f44040 | `red.700` | 4 / 0 | absente |  |
| `--background-critical-bold-pressed` | color | #9d1717 | #fc6d6d | `red.800` | 4 / 0 | absente |  |
| `--background-critical-subtlest-pressed` | color | #ffa2a2 | #be1717 | `red.300` | 5 / 0 | absente |  |
| `--background-critical-subtlest-hovered` | color | #ffc8c8 | #9d1717 | `red.200` | 5 / 0 | absente |  |
| `--background-critical-subtlest-default` | color | #ffe1e1 | #821a1a | `red.100` | 7 / 0 | absente |  |
| `--background-critical-subtler-default` | color | #ffc8c8 | #9d1717 | `red.200` | 0 / 0 | absente |  |
| `--background-critical-subtler-hovered` | color | #ffa2a2 | #be1717 | `red.300` | 0 / 0 | absente |  |
| `--background-critical-subtler-pressed` | color | #fc6d6d | #e12121 | `red.400` | 0 / 0 | absente |  |
| `--background-information-bold-default` | color | #0076d8 | #009bfe | `blue.600` | 8 / 0 | absente |  |
| `--background-information-bold-hovered` | color | #0060b0 | #26b5ff | `blue.700` | 4 / 0 | absente |  |
| `--background-information-bold-pressed` | color | #005391 | #71cdff | `blue.800` | 4 / 0 | absente |  |
| `--background-information-subtlest-pressed` | color | #71cdff | #0060b0 | `blue.300` | 5 / 0 | absente |  |
| `--background-information-subtlest-hovered` | color | #b4e3ff | #005391 | `blue.200` | 5 / 0 | absente |  |
| `--background-information-subtlest-default` | color | #ddf1ff | #034477 | `blue.100` | 6 / 1 | absente |  |
| `--background-information-subtler-default` | color | #b4e3ff | #005391 | `blue.200` | 0 / 0 | absente |  |
| `--background-information-subtler-hovered` | color | #71cdff | #0060b0 | `blue.300` | 0 / 0 | absente |  |
| `--background-information-subtler-pressed` | color | #26b5ff | #0076d8 | `blue.400` | 0 / 0 | absente |  |
| `--text-success-default` | color | #036240 | #6aebae | `green.800` | 5 / 5 | absente |  |
| `--text-success-hovered` | color | #245041 | #a4f6ca | `green.900` | 0 / 0 | absente |  |
| `--text-success-pressed` | color | #0e2d24 | #d0fbe2 | `green.950` | 0 / 0 | absente |  |
| `--text-information-default` | color | #0060b0 | #b4e3ff | `blue.700` | 13 / 8 | absente |  |
| `--text-information-hovered` | color | #005391 | #ddf1ff | `blue.800` | 0 / 0 | absente |  |
| `--text-information-pressed` | color | #034477 | #eff8ff | `blue.900` | 0 / 0 | absente |  |
| `--text-warning-default` | color | #9c4f10 | #ffe8a9 | `orange.800` | 3 / 3 | absente |  |
| `--text-warning-hovered` | color | #7e4210 | #fff6d4 | `orange.900` | 0 / 0 | absente |  |
| `--text-warning-pressed` | color | #441f06 | #fffbed | `orange.950` | 0 / 0 | absente |  |
| `--text-critical-default` | color | #9d1717 | #ffc8c8 | `red.800` | 16 / 2 | absente |  |
| `--text-critical-hovered` | color | #821a1a | #ffe1e1 | `red.900` | 0 / 0 | absente |  |
| `--text-critical-pressed` | color | #2e1717 | #fef2f2 | `red.950` | 0 / 0 | absente |  |
| `--border-success-bold` | color | #009b60 | #0abf76 | `green.600` | 3 / 0 | absente |  |
| `--border-success-subtle` | color | #a4f6ca | #036240 | `green.200` | 0 / 0 | absente |  |
| `--border-critical-bold` | color | #e12121 | #f44040 | `red.600` | 5 / 0 | absente |  |
| `--border-critical-subtle` | color | #ffc8c8 | #9d1717 | `red.200` | 0 / 0 | absente |  |
| `--border-warning-bold` | color | #caa204 | #eabd08 | `yellow.600` | 3 / 1 | absente |  |
| `--border-warning-subtle` | color | #fee78a | #856d0e | `yellow.200` | 0 / 0 | absente |  |
| `--border-information-bold` | color | #0076d8 | #009bfe | `blue.600` | 3 / 1 | absente |  |
| `--border-information-subtle` | color | #b4e3ff | #005391 | `blue.200` | 0 / 0 | absente |  |
| `--icon-warning` | color | #856d0e | #fdd847 | `yellow.800` | 1 / 0 | absente |  |
| `--icon-critical` | color | #e12121 | #ffa2a2 | `red.600` | 2 / 0 | absente |  |
| `--icon-success` | color | #009b60 | #2fd88e | `green.600` | 1 / 0 | absente |  |
| `--icon-information` | color | #0076d8 | #71cdff | `blue.600` | 0 / 0 | absente |  |

## Lot C — marque : brand, comete, accent, cycle, logo

143 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--background-brand-subtlest-default` | color | #dceefd | #1e3661 | `comete.blue.100` | 3 / 5 | absente |  |
| `--background-brand-subtlest-hovered` | color | #c1e3fc | #224986 | `comete.blue.200` | 1 / 0 | absente |  |
| `--background-brand-subtlest-pressed` | color | #97d2f9 | #2354aa | `comete.blue.300` | 1 / 0 | absente |  |
| `--background-brand-bold-default` | color | #2467d1 | #f0f8fe | `comete.blue.700` | 0 / 4 | absente |  |
| `--background-brand-bold-hovered` | color | #2354aa | #dceefd | `comete.blue.800` | 0 / 0 | absente |  |
| `--background-brand-bold-pressed` | color | #224986 | #c1e3fc | `comete.blue.900` | 0 / 0 | absente |  |
| `--background-brand-subtler-default` | color | #c1e3fc | #2354aa | `comete.blue.200` | 0 / 0 | absente |  |
| `--background-brand-subtler-hovered` | color | #97d2f9 | #2467d1 | `comete.blue.300` | 0 / 0 | absente |  |
| `--background-brand-subtler-pressed` | color | #66b8f4 | #2c7ee4 | `comete.blue.400` | 0 / 0 | absente |  |
| `--background-brand-boldest-default` | color | #1e3661 | = | `comete.blue.950` | 1 / 0 | ok | Miroir de background.comete.boldest.default pour la charte du client (généré par BrandProvider, navy Comète p… |
| `--background-brand-boldest-hovered` | color | #224986 | = | `comete.blue.900` | 1 / 0 | ok | État survolé de background.brand.boldest.default. |
| `--background-brand-boldest-pressed` | color | #2354aa | = | `comete.blue.800` | 1 / 0 | ok | État pressé de background.brand.boldest.default. |
| `--background-comete-subtlest-default` | color | #dceefd | #1e3661 | `comete.blue.100` | 7 / 1 | absente |  |
| `--background-comete-subtlest-hovered` | color | #c1e3fc | #224986 | `comete.blue.200` | 5 / 1 | absente |  |
| `--background-comete-subtlest-pressed` | color | #97d2f9 | #2354aa | `comete.blue.300` | 3 / 0 | absente |  |
| `--background-comete-bold-default` | color | #2467d1 | #f0f8fe | `comete.blue.700` | 9 / 0 | absente |  |
| `--background-comete-bold-hovered` | color | #2354aa | #dceefd | `comete.blue.800` | 2 / 0 | absente |  |
| `--background-comete-bold-pressed` | color | #224986 | #c1e3fc | `comete.blue.900` | 1 / 0 | absente |  |
| `--background-comete-subtler-default` | color | #c1e3fc | #2354aa | `comete.blue.200` | 0 / 0 | absente |  |
| `--background-comete-subtler-hovered` | color | #97d2f9 | #2467d1 | `comete.blue.300` | 0 / 0 | absente |  |
| `--background-comete-subtler-pressed` | color | #66b8f4 | #2c7ee4 | `comete.blue.400` | 0 / 0 | absente |  |
| `--background-comete-boldest-default` | color | #1e3661 | = | `comete.blue.950` | 1 / 0 | ok | Navy Comète (« Bleu Comète » de la charte) : fond d'identité pour le chrome applicatif, les cartes bold comet… |
| `--background-comete-boldest-hovered` | color | #224986 | = | `comete.blue.900` | 1 / 0 | ok | État survolé de background.comete.boldest.default (cartes bold interactives). |
| `--background-comete-boldest-pressed` | color | #2354aa | = | `comete.blue.800` | 1 / 0 | ok | État pressé de background.comete.boldest.default (cartes bold interactives). |
| `--background-accent-purple-bold-default` | color | #6e5dc6 | #9897e2 | `purple.600` | 6 / 1 | absente |  |
| `--background-accent-purple-bold-hovered` | color | #5e4db2 | #b5b8ec | `purple.700` | 2 / 0 | absente |  |
| `--background-accent-purple-bold-pressed` | color | #453d72 | #d1d4f4 | `purple.900` | 2 / 0 | absente |  |
| `--background-accent-purple-subtlest-pressed` | color | #b5b8ec | #5e4db2 | `purple.300` | 3 / 0 | absente |  |
| `--background-accent-purple-subtlest-hovered` | color | #d1d4f4 | #51458e | `purple.200` | 3 / 0 | absente |  |
| `--background-accent-purple-subtlest-default` | color | #e6e8f9 | #453d72 | `purple.100` | 6 / 0 | absente |  |
| `--background-accent-purple-subtler-default` | color | #d1d4f4 | #51458e | `purple.200` | 0 / 0 | absente |  |
| `--background-accent-purple-subtler-hovered` | color | #b5b8ec | #5e4db2 | `purple.300` | 0 / 0 | absente |  |
| `--background-accent-purple-subtler-pressed` | color | #9897e2 | #6e5dc6 | `purple.400` | 0 / 0 | absente |  |
| `--background-accent-teal-bold-default` | color | #1c759e | #42b2d7 | `teal.600` | 4 / 0 | absente |  |
| `--background-accent-teal-bold-hovered` | color | #1e6080 | #79cee7 | `teal.700` | 2 / 0 | absente |  |
| `--background-accent-teal-bold-pressed` | color | #1f435a | #afe3f2 | `teal.900` | 2 / 0 | absente |  |
| `--background-accent-teal-subtlest-pressed` | color | #79cee7 | #1e6080 | `teal.300` | 3 / 0 | absente |  |
| `--background-accent-teal-subtlest-hovered` | color | #afe3f2 | #215069 | `teal.200` | 3 / 0 | absente |  |
| `--background-accent-teal-subtlest-default` | color | #d5f1f8 | #1f435a | `teal.100` | 6 / 0 | absente |  |
| `--background-accent-teal-subtler-default` | color | #afe3f2 | #215069 | `teal.200` | 0 / 0 | absente |  |
| `--background-accent-teal-subtler-hovered` | color | #79cee7 | #1e6080 | `teal.300` | 0 / 0 | absente |  |
| `--background-accent-teal-subtler-pressed` | color | #42b2d7 | #1c759e | `teal.400` | 0 / 0 | absente |  |
| `--background-accent-turquoise-bold-default` | color | #00918d | #00ffef | `turquoise.700` | 4 / 0 | absente |  |
| `--background-accent-turquoise-bold-hovered` | color | #007271 | #3afff9 | `turquoise.800` | 2 / 0 | absente |  |
| `--background-accent-turquoise-bold-pressed` | color | #045d5d | #81fffb | `turquoise.900` | 2 / 0 | absente |  |
| `--background-accent-turquoise-subtlest-pressed` | color | #81fffb | #00918d | `turquoise.200` | 3 / 0 | absente |  |
| `--background-accent-turquoise-subtlest-hovered` | color | #c0fffc | #007271 | `turquoise.100` | 3 / 0 | absente |  |
| `--background-accent-turquoise-subtlest-default` | color | #edfffd | #045d5d | `turquoise.50` | 6 / 0 | absente |  |
| `--background-accent-turquoise-subtler-default` | color | #c0fffc | #007271 | `turquoise.100` | 0 / 0 | absente |  |
| `--background-accent-turquoise-subtler-hovered` | color | #81fffb | #00918d | `turquoise.200` | 0 / 0 | absente |  |
| `--background-accent-turquoise-subtler-pressed` | color | #3afff9 | #00b7b1 | `turquoise.300` | 0 / 0 | absente |  |
| `--background-accent-magenta-bold-default` | color | #c63c8a | #e581c1 | `magenta.600` | 4 / 0 | absente |  |
| `--background-accent-magenta-bold-hovered` | color | #aa2c6f | #efb2da | `magenta.700` | 2 / 0 | absente |  |
| `--background-accent-magenta-bold-pressed` | color | #762550 | #f6d4eb | `magenta.900` | 2 / 0 | absente |  |
| `--background-accent-magenta-subtlest-pressed` | color | #efb2da | #aa2c6f | `magenta.300` | 3 / 0 | absente |  |
| `--background-accent-magenta-subtlest-hovered` | color | #f6d4eb | #8d275d | `magenta.200` | 3 / 0 | absente |  |
| `--background-accent-magenta-subtlest-default` | color | #f9eaf5 | #762550 | `magenta.100` | 6 / 0 | absente |  |
| `--background-accent-magenta-subtler-default` | color | #f6d4eb | #8d275d | `magenta.200` | 0 / 0 | absente |  |
| `--background-accent-magenta-subtler-hovered` | color | #efb2da | #aa2c6f | `magenta.300` | 0 / 0 | absente |  |
| `--background-accent-magenta-subtler-pressed` | color | #e581c1 | #c63c8a | `magenta.400` | 0 / 0 | absente |  |
| `--background-accent-blue-grey-bold-default` | color | #455d84 | #7993b7 | `blue-grey.600` | 4 / 0 | absente |  |
| `--background-accent-blue-grey-bold-hovered` | color | #384b6c | #a8b9d1 | `blue-grey.700` | 2 / 0 | absente |  |
| `--background-accent-blue-grey-bold-pressed` | color | #2c374b | #d1d9e6 | `blue-grey.900` | 2 / 0 | absente |  |
| `--background-accent-blue-grey-subtlest-default` | color | #eaedf4 | #2c374b | `blue-grey.100` | 6 / 0 | absente |  |
| `--background-accent-blue-grey-subtlest-hovered` | color | #d1d9e6 | #32415a | `blue-grey.200` | 3 / 0 | absente |  |
| `--background-accent-blue-grey-subtlest-pressed` | color | #a8b9d1 | #384b6c | `blue-grey.300` | 3 / 0 | absente |  |
| `--background-accent-blue-grey-subtler-default` | color | #d1d9e6 | #32415a | `blue-grey.200` | 0 / 0 | absente |  |
| `--background-accent-blue-grey-subtler-hovered` | color | #a8b9d1 | #384b6c | `blue-grey.300` | 0 / 0 | absente |  |
| `--background-accent-blue-grey-subtler-pressed` | color | #7993b7 | #455d84 | `blue-grey.400` | 0 / 0 | absente |  |
| `--background-cycle-night-bold-default` | color | #0060b0 | #26b5ff | `blue.700` | 0 / 0 | absente |  |
| `--background-cycle-night-bold-hovered` | color | #005391 | #71cdff | `blue.800` | 0 / 0 | absente |  |
| `--background-cycle-night-bold-pressed` | color | #034477 | #b4e3ff | `blue.900` | 0 / 0 | absente |  |
| `--background-cycle-night-subtlest-default` | color | #eff8ff | #023059 | `blue.50` | 0 / 0 | absente |  |
| `--background-cycle-night-subtlest-hovered` | color | #ddf1ff | #034477 | `blue.100` | 0 / 0 | absente |  |
| `--background-cycle-night-subtlest-pressed` | color | #b4e3ff | #005391 | `blue.200` | 0 / 0 | absente |  |
| `--background-cycle-day-bold-default` | color | #feb939 | #f68909 | `orange.400` | 0 / 0 | absente |  |
| `--background-cycle-day-bold-hovered` | color | #fca013 | = | `orange.500` | 0 / 0 | absente |  |
| `--background-cycle-day-bold-pressed` | color | #f68909 | #feb939 | `orange.600` | 0 / 0 | absente |  |
| `--background-cycle-day-subtlest-default` | color | #fffbed | #441f06 | `orange.50` | 0 / 0 | absente |  |
| `--background-cycle-day-subtlest-hovered` | color | #fff6d4 | #7e4210 | `orange.100` | 0 / 0 | absente |  |
| `--background-cycle-day-subtlest-pressed` | color | #ffe8a9 | #9c4f10 | `orange.200` | 0 / 0 | absente |  |
| `--surface-comete` | color | #1e3661 | = | `comete.blue.950` | 0 / 5 | ok | Surface navy Comète, identique en thème clair et sombre : en-têtes, barres, bandeaux et pages de présentation… |
| `--text-accent-purple-default` | color | #5e4db2 | #d1d4f4 | `purple.700` | 4 / 0 | absente |  |
| `--text-accent-purple-hovered` | color | #51458e | #e6e8f9 | `purple.800` | 0 / 0 | absente |  |
| `--text-accent-purple-pressed` | color | #453d72 | #f3f0ff | `purple.900` | 0 / 0 | absente |  |
| `--text-accent-teal-default` | color | #215069 | #afe3f2 | `teal.800` | 4 / 0 | absente |  |
| `--text-accent-teal-hovered` | color | #1f435a | #d5f1f8 | `teal.900` | 0 / 0 | absente |  |
| `--text-accent-teal-pressed` | color | #0f2b3d | #eefafd | `teal.950` | 0 / 0 | absente |  |
| `--text-accent-turquoise-default` | color | #007271 | #81fffb | `turquoise.800` | 4 / 0 | absente |  |
| `--text-accent-turquoise-hovered` | color | #045d5d | #c0fffc | `turquoise.900` | 0 / 0 | absente |  |
| `--text-accent-turquoise-pressed` | color | #00373a | #edfffd | `turquoise.950` | 0 / 0 | absente |  |
| `--text-accent-magenta-default` | color | #8d275d | #f6d4eb | `magenta.800` | 4 / 0 | absente |  |
| `--text-accent-magenta-hovered` | color | #762550 | #f9eaf5 | `magenta.900` | 0 / 0 | absente |  |
| `--text-accent-magenta-pressed` | color | #47102d | #fcf3f9 | `magenta.950` | 0 / 0 | absente |  |
| `--text-accent-blue-grey-default` | color | #32415a | #d1d9e6 | `blue-grey.800` | 4 / 0 | absente |  |
| `--text-accent-blue-grey-hovered` | color | #2c374b | #eaedf4 | `blue-grey.900` | 0 / 0 | absente |  |
| `--text-accent-blue-grey-pressed` | color | #1e2533 | #f5f7fa | `blue-grey.950` | 0 / 0 | absente |  |
| `--text-brand-default` | color | #224986 | #dceefd | `comete.blue.900` | 1 / 5 | absente |  |
| `--text-brand-hovered` | color | #2354aa | #c1e3fc | `comete.blue.800` | 0 / 0 | absente |  |
| `--text-brand-pressed` | color | #2467d1 | #97d2f9 | `comete.blue.700` | 0 / 0 | absente |  |
| `--text-brand-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Miroir de text.comete.boldest pour la charte du client (BrandProvider). |
| `--text-comete-default` | color | #224986 | #dceefd | `comete.blue.900` | 3 / 0 | absente |  |
| `--text-comete-hovered` | color | #2354aa | #c1e3fc | `comete.blue.800` | 0 / 0 | absente |  |
| `--text-comete-pressed` | color | #2467d1 | #97d2f9 | `comete.blue.700` | 0 / 0 | absente |  |
| `--text-comete-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Texte navy Comète pour les titres d'identité sur fond clair. Pas pour les liens ni les contrôles (text.comete… |
| `--border-accent-purple-bold` | color | #8270db | = | `purple.500` | 3 / 0 | absente |  |
| `--border-accent-purple-subtle` | color | #d1d4f4 | #51458e | `purple.200` | 0 / 0 | absente |  |
| `--border-accent-teal-bold` | color | #1f92bb | = | `teal.500` | 3 / 0 | absente |  |
| `--border-accent-teal-subtle` | color | #afe3f2 | #215069 | `teal.200` | 0 / 0 | absente |  |
| `--border-accent-turquoise-bold` | color | #00e2d5 | = | `turquoise.500` | 3 / 0 | absente |  |
| `--border-accent-turquoise-subtle` | color | #81fffb | #007271 | `turquoise.200` | 0 / 0 | absente |  |
| `--border-accent-magenta-bold` | color | #da62ac | = | `magenta.500` | 3 / 0 | absente |  |
| `--border-accent-magenta-subtle` | color | #f6d4eb | #8d275d | `magenta.200` | 0 / 0 | absente |  |
| `--border-accent-blue-grey-bold` | color | #58759f | = | `blue-grey.500` | 3 / 0 | absente |  |
| `--border-accent-blue-grey-subtle` | color | #d1d9e6 | #32415a | `blue-grey.200` | 0 / 0 | absente |  |
| `--border-day-bold` | color | #f68909 | #fca013 | `orange.600` | 0 / 0 | absente |  |
| `--border-day-subtle` | color | #fff6d4 | #7e4210 | `orange.100` | 0 / 0 | absente |  |
| `--border-night-bold` | color | #0076d8 | #009bfe | `blue.600` | 0 / 0 | absente |  |
| `--border-night-subtle` | color | #71cdff | #0060b0 | `blue.300` | 0 / 0 | absente |  |
| `--border-brand-bold` | color | #224986 | #dceefd | `comete.blue.900` | 2 / 0 | absente |  |
| `--border-brand-subtle` | color | #c1e3fc | #2354aa | `comete.blue.200` | 0 / 0 | absente |  |
| `--border-brand-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Miroir de border.comete.boldest pour la charte du client (BrandProvider). |
| `--border-comete-bold` | color | #224986 | #dceefd | `comete.blue.900` | 8 / 3 | absente |  |
| `--border-comete-subtle` | color | #c1e3fc | #2354aa | `comete.blue.200` | 0 / 0 | absente |  |
| `--border-comete-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Bordure navy Comète, accent d'identité le plus appuyé. Pas pour les contrôles (border.comete.bold). |
| `--icon-brand-default` | color | #2354aa | #c1e3fc | `comete.blue.800` | 0 / 1 | ok | Miroir de icon.comete.default pour la charte du client (BrandProvider). |
| `--icon-brand-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Miroir de icon.comete.boldest pour la charte du client (BrandProvider). |
| `--icon-comete-default` | color | #2354aa | #c1e3fc | `comete.blue.800` | 0 / 0 | ok | Icône bleu Comète sur fond clair : iconographie d'identité et tuiles comete. |
| `--icon-comete-boldest` | color | #1e3661 | #f0f8fe | `comete.blue.950` | 0 / 0 | ok | Icône navy Comète sur fond clair uniquement, accent d'identité le plus appuyé. |
| `--icon-accent-purple` | color | #8270db | #b5b8ec | `purple.500` | 0 / 0 | absente |  |
| `--icon-accent-teal` | color | #1f92bb | #79cee7 | `teal.500` | 0 / 0 | absente |  |
| `--icon-accent-turquoise` | color | #00b7b1 | #3afff9 | `turquoise.600` | 0 / 0 | absente |  |
| `--icon-accent-magenta` | color | #da62ac | #efb2da | `magenta.500` | 0 / 0 | absente |  |
| `--icon-accent-blue-grey` | color | #58759f | #a8b9d1 | `blue-grey.500` | 0 / 0 | absente |  |
| `--icon-day` | color | #f68909 | #feb939 | `orange.600` | 0 / 0 | absente |  |
| `--icon-night` | color | #0076d8 | #26b5ff | `blue.600` | 0 / 0 | absente |  |
| `--logo-comete-default` | color | #1e3661 | #ffffff | `comete.blue.950` | 0 / 0 | ok | Couleur principale du logo Comète : navy en thème clair, blanc en thème sombre (aligné sur Figma). Ne pas uti… |
| `--logo-comete-gradient-dark` | color | #f8bf01 | = | `comete.yellow.500` | 0 / 0 | absente |  |
| `--logo-comete-gradient-light` | color | #fff146 | = | `comete.yellow.300` | 0 / 0 | absente |  |
| `--logo-comete-neutral` | color | #224986 | #dceefd | `comete.blue.900` | 0 / 0 | absente |  |
| `--logo-comete-inverted` | color | #f0f8fe | #1e3661 | `comete.blue.50` | 0 / 0 | absente |  |
| `--logo-comete-subtle` | color | #596b70 | #b5c1c4 | `cool-grey.600` | 0 / 0 | absente |  |
| `--logo-comete-subtle-inverted` | color | #b5c1c4 | #596b70 | `cool-grey.300` | 0 / 0 | absente |  |

## Lot D — primitives hors couleur : spacing, sizing, radius, typographie, control, ombres, animation, z-index, breakpoints, opacité

196 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--duration-instant` | duration | 0ms | = |  | 0 / 0 | trop courte | No animation |
| `--duration-fast` | duration | 100ms | = |  | 36 / 0 | ok | Micro-interactions (hover, focus) |
| `--duration-normal` | duration | 200ms | = |  | 17 / 2 | trop courte | Standard transitions |
| `--duration-slow` | duration | 300ms | = |  | 0 / 2 | ok | Larger transitions (modals, panels) |
| `--duration-slower` | duration | 500ms | = |  | 0 / 1 | trop courte | Complex animations |
| `--easing-default` | other | cubic-bezier(0.2, 0, 0.38, 0.9) | = |  | 52 / 4 | ok | Standard easing for most transitions |
| `--easing-entrance` | other | cubic-bezier(0, 0, 0.38, 0.9) | = |  | 0 / 1 | ok | Elements entering the screen |
| `--easing-exit` | other | cubic-bezier(0.2, 0, 1, 0.9) | = |  | 0 / 0 | ok | Elements leaving the screen |
| `--easing-linear` | other | linear | = |  | 1 / 0 | ok | Constant speed (spinners, progress) |
| `--mobile` | dimension | 0px | = |  | 0 / 0 | trop courte | Smartphone |
| `--tablet` | dimension | 600px | = |  | 0 / 0 | trop courte | Tablette |
| `--laptop` | dimension | 1200px | = |  | 0 / 0 | ok | Ordinateur portable (ou tablette en paysage) |
| `--desktop` | dimension | 1920px | = |  | 0 / 0 | ok | Ordinateur fixe / grands écrans |
| `--dark-grey-alpha-500-a` | color | #9bb4ca80 | = |  | 0 / 0 | absente |  |
| `--dark-grey-alpha-400-a` | color | #bfdbf847 | = |  | 0 / 0 | absente |  |
| `--dark-grey-alpha-300-a` | color | #a6c5e229 | = |  | 0 / 0 | absente |  |
| `--dark-grey-alpha-200-a` | color | #a1bdd914 | = |  | 0 / 0 | absente |  |
| `--dark-grey-alpha-100-a` | color | #bcd6f00a | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-50` | color | #1f1f21 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-100` | color | #242528 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-200` | color | #2b2c2f | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-300` | color | #303134 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-400` | color | #3d3f43 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-500` | color | #63666b | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-600` | color | #7e8188 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-700` | color | #96999e | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-800` | color | #a9abaf | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-900` | color | #bfc1c4 | = |  | 0 / 0 | absente |  |
| `--dark-grey-solid-950` | color | #cecfd2 | = |  | 0 / 0 | absente |  |
| `--control-height-compact` | dimension | 24px | = | `Size300` | 1 / 0 | ok | Hauteur contrôle — compact (24 px) |
| `--control-height-default` | dimension | 32px | = | `Size400` | 1 / 0 | ok | Hauteur contrôle — default (32 px) |
| `--control-height-touch` | dimension | 48px | = | `Size600` | 3 / 0 | ok | Hauteur contrôle — touch (48 px) |
| `--control-radius-compact` | dimension | 4px | = | `Radius050` | 1 / 0 | ok | Radius contrôle — compact (4 px) |
| `--control-radius-default` | dimension | 6px | = | `Radius075` | 1 / 0 | ok | Radius contrôle — default (6 px) |
| `--control-radius-touch` | dimension | 8px | = | `Radius100` | 1 / 0 | ok | Radius contrôle — touch (8 px) |
| `--control-padding-x-compact` | dimension | 4px | = | `Space050` | 2 / 0 | ok | Padding horizontal contrôle — compact (4 px) |
| `--control-padding-x-default` | dimension | 8px | = | `Space100` | 2 / 0 | ok | Padding horizontal contrôle — default (8 px) |
| `--control-padding-x-touch` | dimension | 16px | = | `Space200` | 2 / 0 | ok | Padding horizontal contrôle — touch (16 px) |
| `--control-icon-compact` | dimension | 16px | = | `Size200` | 0 / 0 | ok | Taille icône contrôle — compact (16 px) |
| `--control-icon-default` | dimension | 24px | = | `Size300` | 0 / 0 | ok | Taille icône contrôle — default (24 px) |
| `--control-icon-touch` | dimension | 32px | = | `Size400` | 0 / 0 | ok | Taille icône contrôle — touch (32 px) |
| `--opacity-0` | number | 0 | = |  | 0 / 0 | absente |  |
| `--opacity-25` | number | 0.25 | = |  | 0 / 0 | absente |  |
| `--opacity-50` | number | 0.5 | = |  | 0 / 0 | absente |  |
| `--opacity-75` | number | 0.75 | = |  | 0 / 0 | absente |  |
| `--opacity-100` | number | 1 | = |  | 0 / 0 | absente |  |
| `--opacity-disabled` | number | 0.38 | = |  | 3 / 1 | absente |  |
| `--opacity-overlay` | number | 0.5 | = |  | 0 / 0 | absente |  |
| `--radius0` | dimension | 0px | = | `Size0` | 0 / 0 | tautologique | Radius0 (0 px) |
| `--radius0125` | dimension | 1px | = | `Size0125` | 1 / 0 | tautologique | Radius0125 (1 px) |
| `--radius025` | dimension | 2px | = | `Size025` | 4 / 0 | tautologique | Radius025 (2 px) |
| `--radius0375` | dimension | 3px | = | `Size0375` | 28 / 7 | tautologique | Radius0375 (3 px) |
| `--radius050` | dimension | 4px | = | `Size050` | 27 / 6 | tautologique | Radius050 (4 px) |
| `--radius0625` | dimension | 5px | = | `Size0625` | 1 / 0 | tautologique | Radius0625 (5 px) |
| `--radius075` | dimension | 6px | = | `Size075` | 3 / 1 | tautologique | Radius075 (6 px) |
| `--radius100` | dimension | 8px | = | `Size100` | 4 / 4 | tautologique | Radius100 (8 px) |
| `--radius125` | dimension | 10px | = | `Size125` | 0 / 0 | tautologique | Radius125 (10 px) |
| `--radius150` | dimension | 12px | = | `Size150` | 1 / 3 | tautologique | Radius150 (12 px) |
| `--radius200` | dimension | 16px | = | `Size200` | 1 / 13 | tautologique | Radius200 (16 px) |
| `--radius300` | dimension | 24px | = | `Size300` | 2 / 0 | tautologique | Radius300 (24 px) |
| `--radius-round` | dimension | 1024px | = | `Size12800` | 25 / 5 | trop courte | RadiusROUND (1024 px) |
| `--shadow-key-0` | shadow | {"offsetX":"0px","offsetY":"0px","blur":"0px","spread":"0px","color":"#00000000"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-1` | shadow | {"offsetX":"0px","offsetY":"1px","blur":"2px","spread":"0px","color":"#1e36610d"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-2` | shadow | {"offsetX":"0px","offsetY":"1px","blur":"2px","spread":"0px","color":"#1e366114"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-3` | shadow | {"offsetX":"0px","offsetY":"1px","blur":"3px","spread":"0px","color":"#1e36611c"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-4` | shadow | {"offsetX":"0px","offsetY":"2px","blur":"3px","spread":"0px","color":"#1e36611f"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-5` | shadow | {"offsetX":"0px","offsetY":"2px","blur":"3px","spread":"0px","color":"#1e36611f"} | = |  | 0 / 0 | absente |  |
| `--shadow-key-6` | shadow | {"offsetX":"0px","offsetY":"4px","blur":"4px","spread":"0px","color":"#1e366124"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-0` | shadow | {"offsetX":"0px","offsetY":"0px","blur":"0px","spread":"0px","color":"#00000000"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-1` | shadow | {"offsetX":"0px","offsetY":"1px","blur":"3px","spread":"0px","color":"#1e36610d"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-2` | shadow | {"offsetX":"0px","offsetY":"2px","blur":"6px","spread":"2px","color":"#1e366114"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-3` | shadow | {"offsetX":"0px","offsetY":"4px","blur":"8px","spread":"3px","color":"#1e36611c"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-4` | shadow | {"offsetX":"0px","offsetY":"6px","blur":"10px","spread":"4px","color":"#1e36611f"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-5` | shadow | {"offsetX":"0px","offsetY":"6px","blur":"10px","spread":"4px","color":"#1e36611f"} | = |  | 0 / 0 | absente |  |
| `--shadow-ambiant-6` | shadow | {"offsetX":"0px","offsetY":"8px","blur":"12px","spread":"6px","color":"#1e366124"} | = |  | 0 / 0 | absente |  |
| `--elevation-none` | shadow | ["{shadow.key.0}","{shadow.ambiant.0}"] | = |  | 0 / 0 | absente |  |
| `--elevation-xsmall` | shadow | ["{shadow.key.1}","{shadow.ambiant.1}"] | = |  | 1 / 2 | absente |  |
| `--elevation-small` | shadow | ["{shadow.key.2}","{shadow.ambiant.2}"] | = |  | 2 / 1 | absente |  |
| `--elevation-medium` | shadow | ["{shadow.key.3}","{shadow.ambiant.3}"] | = |  | 3 / 1 | absente |  |
| `--elevation-large` | shadow | ["{shadow.key.4}","{shadow.ambiant.4}"] | = |  | 7 / 0 | absente |  |
| `--elevation-xlarge` | shadow | ["{shadow.key.5}","{shadow.ambiant.5}"] | = |  | 2 / 0 | absente |  |
| `--elevation-xxlarge` | shadow | ["{shadow.key.6}","{shadow.ambiant.6}"] | = |  | 0 / 0 | absente |  |
| `--size0` | dimension | 0px | = |  | 1 / 0 | tautologique | 0 |
| `--size0125` | dimension | 1px | = |  | 16 / 1 | tautologique | 1 |
| `--size025` | dimension | 2px | = |  | 22 / 0 | tautologique | 2 |
| `--size0375` | dimension | 3px | = |  | 2 / 0 | tautologique | 3 |
| `--size050` | dimension | 4px | = |  | 12 / 1 | tautologique | 4 |
| `--size0625` | dimension | 5px | = |  | 2 / 0 | tautologique | 5 |
| `--size075` | dimension | 6px | = |  | 3 / 0 | tautologique | 6 |
| `--size100` | dimension | 8px | = |  | 9 / 0 | tautologique | 8 |
| `--size125` | dimension | 10px | = |  | 2 / 0 | tautologique | 10 |
| `--size150` | dimension | 12px | = |  | 3 / 0 | tautologique | 12 |
| `--size175` | dimension | 14px | = |  | 2 / 0 | tautologique | 14 |
| `--size200` | dimension | 16px | = |  | 6 / 0 | tautologique | 16 |
| `--size225` | dimension | 18px | = |  | 0 / 0 | tautologique | 18 |
| `--size250` | dimension | 20px | = |  | 2 / 0 | tautologique | 20 |
| `--size300` | dimension | 24px | = |  | 29 / 3 | tautologique | 24 |
| `--size350` | dimension | 28px | = |  | 5 / 0 | tautologique | 28 |
| `--size400` | dimension | 32px | = |  | 22 / 2 | tautologique | 32 |
| `--size500` | dimension | 40px | = |  | 10 / 1 | tautologique | 40 |
| `--size600` | dimension | 48px | = |  | 5 / 0 | tautologique | 48 |
| `--size700` | dimension | 56px | = |  | 0 / 0 | tautologique | 56 |
| `--size800` | dimension | 64px | = |  | 2 / 0 | tautologique | 64 |
| `--size1000` | dimension | 80px | = |  | 0 / 0 | tautologique | 80 |
| `--size1200` | dimension | 96px | = |  | 1 / 0 | tautologique | 96 |
| `--size1600` | dimension | 128px | = |  | 1 / 0 | tautologique | 128 |
| `--size3200` | dimension | 256px | = |  | 2 / 0 | tautologique | 256 |
| `--size6400` | dimension | 512px | = |  | 1 / 0 | tautologique | 512 |
| `--size12800` | dimension | 1024px | = |  | 0 / 0 | tautologique | 1024 |
| `--space0` | dimension | 0px | = | `Size0` | 0 / 0 | tautologique | Spacing 0 (0 px) |
| `--space025` | dimension | 2px | = | `Size025` | 16 / 0 | tautologique | Spacing 025 (2 px) |
| `--space0375` | dimension | 3px | = | `Size0375` | 0 / 0 | tautologique | Spacing 0375 (3 px) |
| `--space050` | dimension | 4px | = | `Size050` | 50 / 12 | tautologique | Spacing 050 (4 px) |
| `--space075` | dimension | 6px | = | `Size075` | 34 / 11 | tautologique | Spacing 075 (6 px) |
| `--space100` | dimension | 8px | = | `Size100` | 63 / 47 | tautologique | Spacing 100 (8 px) |
| `--space150` | dimension | 12px | = | `Size150` | 23 / 40 | tautologique | Spacing 150 (12 px) |
| `--space200` | dimension | 16px | = | `Size200` | 44 / 70 | tautologique | Spacing 200 (16 px) |
| `--space125` | dimension | 10px | = | `Size125` | 3 / 7 | tautologique | Spacing 125 (10 px) |
| `--space250` | dimension | 20px | = | `Size250` | 2 / 4 | tautologique | Spacing 250 (20 px) |
| `--space300` | dimension | 24px | = | `Size300` | 21 / 40 | tautologique | Spacing 300 (24 px) |
| `--space350` | dimension | 28px | = | `Size350` | 0 / 0 | tautologique | Spacing 350 (28 px) |
| `--space400` | dimension | 32px | = | `Size400` | 2 / 14 | tautologique | Spacing 400 (32 px) |
| `--space500` | dimension | 40px | = | `Size500` | 0 / 0 | tautologique | Spacing 500 (40 px) |
| `--space600` | dimension | 48px | = | `Size600` | 4 / 7 | tautologique | Spacing 600 (48 px) |
| `--space700` | dimension | 56px | = | `Size700` | 0 / 0 | tautologique | Spacing 700 (56 px) |
| `--space800` | dimension | 64px | = | `Size800` | 1 / 4 | tautologique | Spacing 800 (64 px) |
| `--space1000` | dimension | 80px | = | `Size1000` | 0 / 0 | tautologique | Spacing 1000 (80 px) |
| `--space1200` | dimension | 96px | = | `Size1200` | 0 / 0 | tautologique | Spacing 1200 (96 px) |
| `--space1600` | dimension | 128px | = | `Size1600` | 0 / 0 | tautologique | Spacing 1600 (128 px) |
| `--font-family-code` | text | Noto Sans Mono | = | `font-family.noto-sans-mono` | 1 / 23 | absente |  |
| `--font-family-primary` | text | Noto Sans | = | `font-family.noto-sans` | 107 / 55 | absente |  |
| `--font-family-noto-sans` | text | Noto Sans | = |  | 0 / 1 | absente |  |
| `--font-family-noto-sans-mono` | text | Noto Sans Mono | = |  | 0 / 1 | absente |  |
| `--font-style-italic` | text | Italic | = |  | 0 / 0 | absente |  |
| `--font-style-normal` | text | normal | = |  | 0 / 0 | absente |  |
| `--font-weight-regular` | number | 400 | = |  | 29 / 4 | ok | pour les paragraphes génériques afin de contraster avec les titres, et pour le texte de longueur moyenne dans… |
| `--font-weight-medium` | number | 500 | = |  | 35 / 1 | ok | Pour l'alignement avec l'iconographie. Utilisez cette épaisseur dans la plupart des composants et chaque fois… |
| `--font-weight-semibold` | number | 600 | = |  | 23 / 12 | ok | Pour les titres ou pour souligner certains chiffres (widgets de métriques) |
| `--font-weight-bold` | number | 700 | = |  | 9 / 2 | ok | Pour des cas particuliers où un texte doit être différencié ou davantage mis en valeur. Utilisez cette pondér… |
| `--line-height-ui-xxl` | dimension | 40px | = |  | 3 / 1 | absente |  |
| `--line-height-ui-xl` | dimension | 32px | = |  | 1 / 0 | absente |  |
| `--line-height-ui-l` | dimension | 32px | = |  | 1 / 0 | absente |  |
| `--line-height-ui-m` | dimension | 24px | = |  | 8 / 11 | absente |  |
| `--line-height-ui-s` | dimension | 20px | = |  | 21 / 3 | absente |  |
| `--line-height-ui-xs` | dimension | 18px | = |  | 45 / 6 | absente |  |
| `--line-height-ui-xxs` | dimension | 16px | = |  | 21 / 1 | absente |  |
| `--line-height-ui-xxxs` | dimension | 14px | = |  | 5 / 1 | absente |  |
| `--line-height-hero-xxl` | dimension | 120px | = |  | 1 / 0 | absente |  |
| `--line-height-hero-xl` | dimension | 96px | = |  | 1 / 0 | absente |  |
| `--line-height-hero-l` | dimension | 80px | = |  | 1 / 0 | absente |  |
| `--line-height-hero-m` | dimension | 72px | = |  | 1 / 0 | absente |  |
| `--line-height-hero-s` | dimension | 64px | = |  | 1 / 0 | absente |  |
| `--line-height-hero-xs` | dimension | 56px | = |  | 1 / 1 | absente |  |
| `--line-height-hero-xxs` | dimension | 48px | = |  | 1 / 0 | absente |  |
| `--font-size-ui-xxl` | dimension | 32px | = |  | 4 / 1 | tautologique | 2 rem / 32 px |
| `--font-size-ui-xl` | dimension | 28px | = |  | 2 / 0 | tautologique | 1.75 rem / 28 px |
| `--font-size-ui-l` | dimension | 24px | = |  | 1 / 0 | tautologique | 1.5 rem / 24 px |
| `--font-size-ui-m` | dimension | 20px | = |  | 7 / 3 | tautologique | 1.25 rem / 20 px |
| `--font-size-ui-s` | dimension | 16px | = |  | 16 / 9 | tautologique | 1 rem / 16 px |
| `--font-size-ui-xs` | dimension | 14px | = |  | 53 / 35 | tautologique | 0.875 rem / 14 px |
| `--font-size-ui-xxs` | dimension | 12px | = |  | 25 / 4 | tautologique | 0.75 rem / 12 px |
| `--font-size-ui-xxxs` | dimension | 10px | = |  | 8 / 1 | tautologique | 0.625 rem / 10 px |
| `--font-size-hero-xxl` | dimension | 96px | = |  | 1 / 0 | tautologique | 12 rem / 96 px |
| `--font-size-hero-xl` | dimension | 80px | = |  | 1 / 0 | tautologique | 10 rem / 80 px |
| `--font-size-hero-l` | dimension | 72px | = |  | 1 / 0 | tautologique | 9 rem / 72 px |
| `--font-size-hero-m` | dimension | 64px | = |  | 1 / 1 | tautologique | 8 rem / 64 px |
| `--font-size-hero-s` | dimension | 56px | = |  | 1 / 0 | tautologique | 7 rem / 56 px |
| `--font-size-hero-xs` | dimension | 48px | = |  | 1 / 1 | tautologique | 6 rem / 48 px |
| `--font-size-hero-xxs` | dimension | 40px | = |  | 1 / 0 | tautologique | 5 rem / 40 px |
| `--letter-spacing-negative-tight` | dimension | -0.5px | = |  | 40 / 2 | absente |  |
| `--letter-spacing-negative-extra-tight` | dimension | -1px | = |  | 4 / 2 | absente |  |
| `--letter-spacing-normal` | dimension | 0px | = |  | 8 / 0 | absente |  |
| `--letter-spacing-positive-extra-wide` | dimension | 0.5px | = |  | 0 / 1 | absente |  |
| `--letter-spacing-positive-wide` | dimension | 0.2px | = |  | 0 / 0 | absente |  |
| `--paragraph-spacing-xxl` | dimension | 40px | = |  | 0 / 0 | tautologique | 2.5rem / 40 px |
| `--paragraph-spacing-xl` | dimension | 32px | = |  | 0 / 0 | tautologique | 2rem / 32 px |
| `--paragraph-spacing-l` | dimension | 24px | = |  | 0 / 0 | tautologique | 1.5rem / 24 px |
| `--paragraph-spacing-m` | dimension | 16px | = |  | 0 / 0 | tautologique | 1rem / 16 px |
| `--paragraph-spacing-s` | dimension | 12px | = |  | 0 / 0 | tautologique | 0.75rem / 12 px |
| `--paragraph-spacing-xs` | dimension | 8px | = |  | 0 / 0 | tautologique | 0.5rem / 8 px |
| `--paragraph-spacing-xxs` | dimension | 4px | = |  | 0 / 0 | tautologique | 0.25rem / 4 px |
| `--paragraph-spacing-none` | dimension | 0px | = |  | 0 / 0 | tautologique | 0rem / 0 px |
| `--paragraph-indent-l` | dimension | 32px | = |  | 0 / 0 | trop courte | 2rem / 32px |
| `--paragraph-indent-m` | dimension | 24px | = |  | 0 / 0 | trop courte | 1.5rem / 24px |
| `--paragraph-indent-s` | dimension | 16px | = |  | 0 / 0 | trop courte | 1rem / 16px |
| `--paragraph-indent-none` | dimension | 0px | = |  | 0 / 0 | trop courte | 0rem / 0px |
| `--z-index-hide` | number | -1 | = |  | 0 / 0 | absente |  |
| `--z-index-base` | number | 0 | = |  | 0 / 0 | absente |  |
| `--z-index-raised` | number | 1 | = |  | 1 / 0 | absente |  |
| `--z-index-dropdown` | number | 100 | = |  | 0 / 0 | absente |  |
| `--z-index-sticky` | number | 200 | = |  | 2 / 0 | absente |  |
| `--z-index-overlay` | number | 300 | = |  | 6 / 0 | absente |  |
| `--z-index-modal` | number | 400 | = |  | 5 / 0 | absente |  |
| `--z-index-popover` | number | 500 | = |  | 0 / 0 | absente |  |
| `--z-index-toast` | number | 600 | = |  | 0 / 0 | absente |  |
| `--z-index-tooltip` | number | 700 | = |  | 0 / 0 | absente |  |

## Lot E — primitives couleur : palettes et comete

200 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--red-50` | color | #fef2f2 | = |  | 0 / 0 | absente |  |
| `--red-100` | color | #ffe1e1 | = |  | 0 / 0 | absente |  |
| `--red-200` | color | #ffc8c8 | = |  | 0 / 0 | absente |  |
| `--red-300` | color | #ffa2a2 | = |  | 0 / 0 | absente |  |
| `--red-400` | color | #fc6d6d | = |  | 0 / 0 | absente |  |
| `--red-500` | color | #f44040 | = |  | 0 / 0 | absente |  |
| `--red-600` | color | #e12121 | = |  | 0 / 0 | absente |  |
| `--red-700` | color | #be1717 | = |  | 0 / 0 | absente |  |
| `--red-800` | color | #9d1717 | = |  | 0 / 0 | absente |  |
| `--red-900` | color | #821a1a | = |  | 0 / 0 | absente |  |
| `--red-950` | color | #2e1717 | = |  | 0 / 0 | absente |  |
| `--green-50` | color | #ebfef4 | = |  | 0 / 0 | absente |  |
| `--green-100` | color | #d0fbe2 | = |  | 0 / 0 | absente |  |
| `--green-200` | color | #a4f6ca | = |  | 0 / 0 | absente |  |
| `--green-300` | color | #6aebae | = |  | 0 / 0 | absente |  |
| `--green-400` | color | #2fd88e | = |  | 0 / 0 | absente |  |
| `--green-500` | color | #0abf76 | = |  | 0 / 0 | absente |  |
| `--green-600` | color | #009b60 | = |  | 0 / 0 | absente |  |
| `--green-700` | color | #00784d | = |  | 0 / 0 | absente |  |
| `--green-800` | color | #036240 | = |  | 0 / 0 | absente |  |
| `--green-900` | color | #245041 | = |  | 0 / 0 | absente |  |
| `--green-950` | color | #0e2d24 | = |  | 0 / 0 | absente |  |
| `--grey-alpha-500-a` | color | #050c1f7d | = |  | 0 / 0 | absente |  |
| `--grey-alpha-400-a` | color | #080f214f | = |  | 0 / 0 | absente |  |
| `--grey-alpha-300-a` | color | #0b120e24 | = |  | 0 / 0 | absente |  |
| `--grey-alpha-200-a` | color | #0515240f | = |  | 0 / 0 | absente |  |
| `--grey-alpha-100-a` | color | #17171708 | = |  | 0 / 0 | absente |  |
| `--grey-solid-50` | color | #f6f6f6 | = |  | 0 / 0 | absente |  |
| `--grey-solid-100` | color | #f8f8f8 | = |  | 0 / 0 | absente |  |
| `--grey-solid-200` | color | #f0f1f2 | = |  | 0 / 0 | absente |  |
| `--grey-solid-300` | color | #dddee1 | = |  | 0 / 0 | absente |  |
| `--grey-solid-400` | color | #b7b9be | = |  | 0 / 0 | absente |  |
| `--grey-solid-500` | color | #8c8f97 | = |  | 1 / 0 | absente |  |
| `--grey-solid-600` | color | #7d818a | = |  | 0 / 0 | absente |  |
| `--grey-solid-700` | color | #6b6e76 | = |  | 0 / 0 | absente |  |
| `--grey-solid-800` | color | #505258 | = |  | 0 / 0 | absente |  |
| `--grey-solid-900` | color | #3b3d42 | = |  | 0 / 0 | absente |  |
| `--grey-solid-950` | color | #292a2e | = |  | 0 / 0 | absente |  |
| `--white-0` | color | #ffffff00 | = |  | 0 / 0 | absente |  |
| `--white-2` | color | #ffffff05 | = |  | 0 / 0 | absente |  |
| `--white-4` | color | #ffffff0a | = |  | 0 / 0 | absente |  |
| `--white-6` | color | #ffffff0f | = |  | 0 / 0 | absente |  |
| `--white-8` | color | #ffffff14 | = |  | 2 / 0 | absente |  |
| `--white-10` | color | #ffffff1a | = |  | 0 / 0 | absente |  |
| `--white-20` | color | #ffffff33 | = |  | 0 / 0 | absente |  |
| `--white-30` | color | #ffffff4d | = |  | 0 / 0 | absente |  |
| `--white-40` | color | #ffffff66 | = |  | 0 / 0 | absente |  |
| `--white-50` | color | #ffffff80 | = |  | 0 / 0 | absente |  |
| `--white-60` | color | #ffffff99 | = |  | 0 / 0 | absente |  |
| `--white-70` | color | #ffffffb3 | = |  | 0 / 0 | absente |  |
| `--white-80` | color | #ffffffcc | = |  | 0 / 0 | absente |  |
| `--white-90` | color | #ffffffe6 | = |  | 0 / 0 | absente |  |
| `--white-100` | color | #ffffff | = |  | 0 / 0 | absente |  |
| `--black-0` | color | #09090b00 | = |  | 0 / 0 | absente |  |
| `--black-2` | color | #09090b05 | = |  | 0 / 0 | absente |  |
| `--black-4` | color | #09090b0a | = |  | 0 / 0 | absente |  |
| `--black-6` | color | #09090b0f | = |  | 0 / 0 | absente |  |
| `--black-8` | color | #09090b14 | = |  | 1 / 0 | absente |  |
| `--black-10` | color | #09090b1a | = |  | 0 / 0 | absente |  |
| `--black-20` | color | #09090b33 | = |  | 0 / 0 | absente |  |
| `--black-30` | color | #09090b4d | = |  | 0 / 0 | absente |  |
| `--black-40` | color | #09090b66 | = |  | 0 / 0 | absente |  |
| `--black-50` | color | #09090b80 | = |  | 0 / 0 | absente |  |
| `--black-60` | color | #09090b99 | = |  | 0 / 0 | absente |  |
| `--black-70` | color | #09090bb3 | = |  | 0 / 0 | absente |  |
| `--black-80` | color | #09090bcc | = |  | 0 / 0 | absente |  |
| `--black-90` | color | #09090be6 | = |  | 0 / 0 | absente |  |
| `--black-100` | color | #09090b | = |  | 0 / 0 | absente |  |
| `--purple-50` | color | #f3f0ff | = |  | 0 / 0 | absente |  |
| `--purple-100` | color | #e6e8f9 | = |  | 0 / 0 | absente |  |
| `--purple-200` | color | #d1d4f4 | = |  | 0 / 0 | absente |  |
| `--purple-300` | color | #b5b8ec | = |  | 0 / 0 | absente |  |
| `--purple-400` | color | #9897e2 | = |  | 0 / 0 | absente |  |
| `--purple-500` | color | #8270db | = |  | 0 / 0 | absente |  |
| `--purple-600` | color | #6e5dc6 | = |  | 0 / 0 | absente |  |
| `--purple-700` | color | #5e4db2 | = |  | 0 / 0 | absente |  |
| `--purple-800` | color | #51458e | = |  | 0 / 0 | absente |  |
| `--purple-900` | color | #453d72 | = |  | 0 / 0 | absente |  |
| `--purple-950` | color | #292442 | = |  | 0 / 0 | absente |  |
| `--cool-grey-50` | color | #f7f8f8 | = |  | 0 / 0 | absente |  |
| `--cool-grey-100` | color | #eaedee | = |  | 0 / 0 | absente |  |
| `--cool-grey-200` | color | #d8dedf | = |  | 0 / 0 | absente |  |
| `--cool-grey-300` | color | #b5c1c4 | = |  | 0 / 0 | absente |  |
| `--cool-grey-400` | color | #8d9fa3 | = |  | 0 / 0 | absente |  |
| `--cool-grey-500` | color | #6f8488 | = |  | 0 / 0 | absente |  |
| `--cool-grey-600` | color | #596b70 | = |  | 0 / 0 | absente |  |
| `--cool-grey-700` | color | #49585b | = |  | 0 / 0 | absente |  |
| `--cool-grey-800` | color | #3f4a4d | = |  | 0 / 0 | absente |  |
| `--cool-grey-900` | color | #374043 | = |  | 0 / 0 | absente |  |
| `--cool-grey-950` | color | #252a2c | = |  | 0 / 0 | absente |  |
| `--yellow-50` | color | #fdfee8 | = |  | 0 / 0 | absente |  |
| `--yellow-100` | color | #fef2c3 | = |  | 0 / 0 | absente |  |
| `--yellow-200` | color | #fee78a | = |  | 0 / 0 | absente |  |
| `--yellow-300` | color | #fdd847 | = |  | 0 / 0 | absente |  |
| `--yellow-400` | color | #facc15 | = |  | 0 / 0 | absente |  |
| `--yellow-500` | color | #eabd08 | = |  | 0 / 0 | absente |  |
| `--yellow-600` | color | #caa204 | = |  | 0 / 0 | absente |  |
| `--yellow-700` | color | #a18207 | = |  | 0 / 0 | absente |  |
| `--yellow-800` | color | #856d0e | = |  | 0 / 0 | absente |  |
| `--yellow-900` | color | #715e12 | = |  | 0 / 0 | absente |  |
| `--yellow-950` | color | #292410 | = |  | 0 / 0 | absente |  |
| `--blue-50` | color | #eff8ff | = |  | 0 / 0 | absente |  |
| `--blue-100` | color | #ddf1ff | = |  | 0 / 0 | absente |  |
| `--blue-200` | color | #b4e3ff | = |  | 0 / 0 | absente |  |
| `--blue-300` | color | #71cdff | = |  | 0 / 0 | absente |  |
| `--blue-400` | color | #26b5ff | = |  | 0 / 0 | absente |  |
| `--blue-500` | color | #009bfe | = |  | 0 / 0 | absente |  |
| `--blue-600` | color | #0076d8 | = |  | 0 / 0 | absente |  |
| `--blue-700` | color | #0060b0 | = |  | 0 / 0 | absente |  |
| `--blue-800` | color | #005391 | = |  | 0 / 0 | absente |  |
| `--blue-900` | color | #034477 | = |  | 0 / 0 | absente |  |
| `--blue-950` | color | #023059 | = |  | 0 / 0 | absente |  |
| `--orange-50` | color | #fffbed | = |  | 0 / 0 | absente |  |
| `--orange-100` | color | #fff6d4 | = |  | 0 / 0 | absente |  |
| `--orange-200` | color | #ffe8a9 | = |  | 0 / 0 | absente |  |
| `--orange-300` | color | #ffd672 | = |  | 0 / 0 | absente |  |
| `--orange-400` | color | #feb939 | = |  | 0 / 0 | absente |  |
| `--orange-500` | color | #fca013 | = |  | 0 / 0 | absente |  |
| `--orange-600` | color | #f68909 | = |  | 0 / 0 | absente |  |
| `--orange-700` | color | #c56509 | = |  | 0 / 0 | absente |  |
| `--orange-800` | color | #9c4f10 | = |  | 0 / 0 | absente |  |
| `--orange-900` | color | #7e4210 | = |  | 0 / 0 | absente |  |
| `--orange-950` | color | #441f06 | = |  | 0 / 0 | absente |  |
| `--lime-50` | color | #f6faeb | = |  | 0 / 0 | absente |  |
| `--lime-100` | color | #e9f4d3 | = |  | 0 / 0 | absente |  |
| `--lime-200` | color | #d4eaac | = |  | 0 / 0 | absente |  |
| `--lime-300` | color | #b7db7b | = |  | 0 / 0 | absente |  |
| `--lime-400` | color | #9bc952 | = |  | 0 / 0 | absente |  |
| `--lime-500` | color | #82b536 | = |  | 0 / 0 | absente |  |
| `--lime-600` | color | #608a26 | = |  | 0 / 0 | absente |  |
| `--lime-700` | color | #4b6a21 | = |  | 0 / 0 | absente |  |
| `--lime-800` | color | #3d551f | = |  | 0 / 0 | absente |  |
| `--lime-900` | color | #35491e | = |  | 0 / 0 | absente |  |
| `--lime-950` | color | #1a270c | = |  | 0 / 0 | absente |  |
| `--magenta-50` | color | #fcf3f9 | = |  | 0 / 0 | absente |  |
| `--magenta-100` | color | #f9eaf5 | = |  | 0 / 0 | absente |  |
| `--magenta-200` | color | #f6d4eb | = |  | 0 / 0 | absente |  |
| `--magenta-300` | color | #efb2da | = |  | 0 / 0 | absente |  |
| `--magenta-400` | color | #e581c1 | = |  | 0 / 0 | absente |  |
| `--magenta-500` | color | #da62ac | = |  | 0 / 0 | absente |  |
| `--magenta-600` | color | #c63c8a | = |  | 0 / 0 | absente |  |
| `--magenta-700` | color | #aa2c6f | = |  | 0 / 0 | absente |  |
| `--magenta-800` | color | #8d275d | = |  | 0 / 0 | absente |  |
| `--magenta-900` | color | #762550 | = |  | 0 / 0 | absente |  |
| `--magenta-950` | color | #47102d | = |  | 0 / 0 | absente |  |
| `--teal-50` | color | #eefafd | = |  | 0 / 0 | absente |  |
| `--teal-100` | color | #d5f1f8 | = |  | 0 / 0 | absente |  |
| `--teal-200` | color | #afe3f2 | = |  | 0 / 0 | absente |  |
| `--teal-300` | color | #79cee7 | = |  | 0 / 0 | absente |  |
| `--teal-400` | color | #42b2d7 | = |  | 0 / 0 | absente |  |
| `--teal-500` | color | #1f92bb | = |  | 0 / 0 | absente |  |
| `--teal-600` | color | #1c759e | = |  | 0 / 0 | absente |  |
| `--teal-700` | color | #1e6080 | = |  | 0 / 0 | absente |  |
| `--teal-800` | color | #215069 | = |  | 0 / 0 | absente |  |
| `--teal-900` | color | #1f435a | = |  | 0 / 0 | absente |  |
| `--teal-950` | color | #0f2b3d | = |  | 0 / 0 | absente |  |
| `--turquoise-50` | color | #edfffd | = |  | 0 / 0 | absente |  |
| `--turquoise-100` | color | #c0fffc | = |  | 0 / 0 | absente |  |
| `--turquoise-200` | color | #81fffb | = |  | 0 / 0 | absente |  |
| `--turquoise-300` | color | #3afff9 | = |  | 0 / 0 | absente |  |
| `--turquoise-400` | color | #00ffef | = |  | 0 / 0 | absente |  |
| `--turquoise-500` | color | #00e2d5 | = |  | 0 / 0 | absente |  |
| `--turquoise-600` | color | #00b7b1 | = |  | 0 / 0 | absente |  |
| `--turquoise-700` | color | #00918d | = |  | 0 / 0 | absente |  |
| `--turquoise-800` | color | #007271 | = |  | 0 / 0 | absente |  |
| `--turquoise-900` | color | #045d5d | = |  | 0 / 0 | absente |  |
| `--turquoise-950` | color | #00373a | = |  | 0 / 0 | absente |  |
| `--blue-grey-50` | color | #f5f7fa | = |  | 0 / 0 | absente |  |
| `--blue-grey-100` | color | #eaedf4 | = |  | 0 / 0 | absente |  |
| `--blue-grey-200` | color | #d1d9e6 | = |  | 0 / 0 | absente |  |
| `--blue-grey-300` | color | #a8b9d1 | = |  | 0 / 0 | absente |  |
| `--blue-grey-400` | color | #7993b7 | = |  | 0 / 0 | absente |  |
| `--blue-grey-500` | color | #58759f | = |  | 0 / 0 | absente |  |
| `--blue-grey-600` | color | #455d84 | = |  | 0 / 0 | absente |  |
| `--blue-grey-700` | color | #384b6c | = |  | 0 / 0 | absente |  |
| `--blue-grey-800` | color | #32415a | = |  | 0 / 0 | absente |  |
| `--blue-grey-900` | color | #2c374b | = |  | 0 / 0 | absente |  |
| `--blue-grey-950` | color | #1e2533 | = |  | 0 / 0 | absente |  |
| `--comete-blue-50` | color | #f0f8fe | = |  | 0 / 0 | absente |  |
| `--comete-blue-100` | color | #dceefd | = |  | 0 / 0 | absente |  |
| `--comete-blue-200` | color | #c1e3fc | = |  | 0 / 0 | absente |  |
| `--comete-blue-300` | color | #97d2f9 | = |  | 0 / 0 | absente |  |
| `--comete-blue-400` | color | #66b8f4 | = |  | 0 / 0 | absente |  |
| `--comete-blue-500` | color | #429aef | = |  | 0 / 0 | absente |  |
| `--comete-blue-600` | color | #2c7ee4 | = |  | 0 / 0 | absente |  |
| `--comete-blue-700` | color | #2467d1 | = |  | 0 / 0 | absente |  |
| `--comete-blue-800` | color | #2354aa | = |  | 0 / 0 | absente |  |
| `--comete-blue-900` | color | #224986 | = |  | 0 / 0 | absente |  |
| `--comete-blue-950` | color | #1e3661 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-50` | color | #fffeea | = |  | 0 / 0 | absente |  |
| `--comete-yellow-100` | color | #fffcc5 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-200` | color | #fffa86 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-300` | color | #fff146 | = |  | 0 / 3 | absente |  |
| `--comete-yellow-400` | color | #ffe31c | = |  | 0 / 2 | absente |  |
| `--comete-yellow-500` | color | #f8bf01 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-600` | color | #e19800 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-700` | color | #bb6c02 | = |  | 0 / 1 | absente |  |
| `--comete-yellow-800` | color | #975309 | = |  | 0 / 0 | absente |  |
| `--comete-yellow-900` | color | #7c440b | = |  | 0 / 0 | absente |  |
| `--comete-yellow-950` | color | #482300 | = |  | 0 / 1 | absente |  |

## Lot F — tokens de composants

459 tokens.

| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |
|---|---|---|---|---|---:|---|---|
| `--autosave-indicator-color-default-text` | color | #252a2c | #f7f8f8 | `text.default.default` | 0 / 0 | ok | Libellé de l'état default |
| `--autosave-indicator-color-default-icon` | color | #32415a | #eaedf4 | `icon.default` | 0 / 0 | ok | Icône ou spinner de l'état default |
| `--autosave-indicator-color-success-text` | color | #036240 | #6aebae | `text.success.default` | 0 / 0 | ok | Libellé de l'état success |
| `--autosave-indicator-color-success-icon` | color | #009b60 | #2fd88e | `icon.success` | 0 / 0 | ok | Icône ou spinner de l'état success |
| `--autosave-indicator-color-critical-text` | color | #9d1717 | #ffc8c8 | `text.critical.default` | 0 / 0 | ok | Libellé de l'état critical |
| `--autosave-indicator-color-critical-icon` | color | #e12121 | #ffa2a2 | `icon.critical` | 0 / 0 | ok | Icône ou spinner de l'état critical |
| `--autosave-indicator-spacing-gap` | dimension | 2px | = | `Space025` | 0 / 0 | ok | Espace entre l'icône et le libellé (2 px) |
| `--avatar-color-neutral-background-default` | color | #eaedee | #49585b | `background.neutral.subtler.default` | 2 / 0 | absente |  |
| `--avatar-color-neutral-background-hovered` | color | #d8dedf | #596b70 | `background.neutral.subtler.hovered` | 2 / 0 | absente |  |
| `--avatar-color-neutral-background-pressed` | color | #b5c1c4 | #6f8488 | `background.neutral.subtler.pressed` | 2 / 0 | absente |  |
| `--avatar-color-neutral-text` | color | #252a2c | #f7f8f8 | `text.default.default` | 2 / 0 | ok | Initiales de l'avatar neutral |
| `--avatar-color-neutral-icon` | color | #32415a | #eaedf4 | `icon.default` | 1 / 0 | ok | Icône de l'avatar neutral |
| `--avatar-color-comete-background-default` | color | #dceefd | #1e3661 | `background.comete.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-comete-background-hovered` | color | #c1e3fc | #224986 | `background.comete.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-comete-background-pressed` | color | #97d2f9 | #2354aa | `background.comete.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-comete-text` | color | #224986 | #dceefd | `text.comete.default` | 1 / 0 | ok | Initiales de l'avatar comete |
| `--avatar-color-comete-icon` | color | #2354aa | #c1e3fc | `icon.comete.default` | 1 / 0 | trop courte | Icône de l'avatar comete |
| `--avatar-color-accent-purple-background-default` | color | #e6e8f9 | #453d72 | `background.accent.purple.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-accent-purple-background-hovered` | color | #d1d4f4 | #51458e | `background.accent.purple.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-accent-purple-background-pressed` | color | #b5b8ec | #5e4db2 | `background.accent.purple.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-accent-purple-text` | color | #5e4db2 | #d1d4f4 | `text.accent.purple.default` | 1 / 0 | ok | Initiales de l'avatar accent-purple |
| `--avatar-color-accent-purple-icon` | color | #8270db | #b5b8ec | `icon.accent.purple` | 1 / 0 | ok | Icône de l'avatar accent-purple |
| `--avatar-color-accent-teal-background-default` | color | #d5f1f8 | #1f435a | `background.accent.teal.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-accent-teal-background-hovered` | color | #afe3f2 | #215069 | `background.accent.teal.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-accent-teal-background-pressed` | color | #79cee7 | #1e6080 | `background.accent.teal.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-accent-teal-text` | color | #215069 | #afe3f2 | `text.accent.teal.default` | 1 / 0 | ok | Initiales de l'avatar accent-teal |
| `--avatar-color-accent-teal-icon` | color | #1f92bb | #79cee7 | `icon.accent.teal` | 1 / 0 | ok | Icône de l'avatar accent-teal |
| `--avatar-color-accent-turquoise-background-default` | color | #edfffd | #045d5d | `background.accent.turquoise.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-accent-turquoise-background-hovered` | color | #c0fffc | #007271 | `background.accent.turquoise.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-accent-turquoise-background-pressed` | color | #81fffb | #00918d | `background.accent.turquoise.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-accent-turquoise-text` | color | #007271 | #81fffb | `text.accent.turquoise.default` | 1 / 0 | ok | Initiales de l'avatar accent-turquoise |
| `--avatar-color-accent-turquoise-icon` | color | #00b7b1 | #3afff9 | `icon.accent.turquoise` | 1 / 0 | ok | Icône de l'avatar accent-turquoise |
| `--avatar-color-accent-magenta-background-default` | color | #f9eaf5 | #762550 | `background.accent.magenta.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-accent-magenta-background-hovered` | color | #f6d4eb | #8d275d | `background.accent.magenta.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-accent-magenta-background-pressed` | color | #efb2da | #aa2c6f | `background.accent.magenta.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-accent-magenta-text` | color | #8d275d | #f6d4eb | `text.accent.magenta.default` | 1 / 0 | ok | Initiales de l'avatar accent-magenta |
| `--avatar-color-accent-magenta-icon` | color | #da62ac | #efb2da | `icon.accent.magenta` | 1 / 0 | ok | Icône de l'avatar accent-magenta |
| `--avatar-color-accent-blue-grey-background-default` | color | #eaedf4 | #2c374b | `background.accent.blue-grey.subtlest.default` | 1 / 0 | absente |  |
| `--avatar-color-accent-blue-grey-background-hovered` | color | #d1d9e6 | #32415a | `background.accent.blue-grey.subtlest.hovered` | 1 / 0 | absente |  |
| `--avatar-color-accent-blue-grey-background-pressed` | color | #a8b9d1 | #384b6c | `background.accent.blue-grey.subtlest.pressed` | 1 / 0 | absente |  |
| `--avatar-color-accent-blue-grey-text` | color | #32415a | #d1d9e6 | `text.accent.blue-grey.default` | 1 / 0 | ok | Initiales de l'avatar accent-blue-grey |
| `--avatar-color-accent-blue-grey-icon` | color | #58759f | #a8b9d1 | `icon.accent.blue-grey` | 1 / 0 | ok | Icône de l'avatar accent-blue-grey |
| `--avatar-color-selected-background` | color | #dceefd | #1e3661 | `background.selected.subtlest.default` | 2 / 0 | ok | Fond de l'avatar sélectionné, prime sur la couleur et les états |
| `--avatar-color-selected-text` | color | #2c7ee4 | #c1e3fc | `text.selected` | 2 / 0 | ok | Initiales de l'avatar sélectionné |
| `--avatar-color-selected-icon` | color | #2c7ee4 | #97d2f9 | `icon.selected` | 1 / 0 | ok | Icône de l'avatar sélectionné |
| `--avatar-size-xsmall-container` | dimension | 16px | = | `Size200` | 2 / 0 | trop courte | Avatar xsmall (16 px) |
| `--avatar-size-xsmall-icon` | dimension | 10px | = | `Size125` | 1 / 0 | ok | Icône de l'avatar xsmall (10 px) |
| `--avatar-size-small-container` | dimension | 24px | = | `Size300` | 2 / 0 | trop courte | Avatar small (24 px) |
| `--avatar-size-small-icon` | dimension | 14px | = | `Size175` | 1 / 0 | ok | Icône de l'avatar small (14 px) |
| `--avatar-size-medium-container` | dimension | 32px | = | `Size400` | 2 / 0 | trop courte | Avatar medium (32 px) |
| `--avatar-size-medium-icon` | dimension | 16px | = | `Size200` | 1 / 0 | ok | Icône de l'avatar medium (16 px) |
| `--avatar-size-large-container` | dimension | 40px | = | `Size500` | 2 / 0 | trop courte | Avatar large (40 px) |
| `--avatar-size-large-icon` | dimension | 20px | = | `Size250` | 1 / 0 | ok | Icône de l'avatar large (20 px) |
| `--avatar-size-xlarge-container` | dimension | 64px | = | `Size800` | 2 / 0 | trop courte | Avatar xlarge (64 px) |
| `--avatar-size-xlarge-icon` | dimension | 32px | = | `Size400` | 1 / 0 | ok | Icône de l'avatar xlarge (32 px) |
| `--avatar-size-xxlarge-container` | dimension | 96px | = | `Size1200` | 2 / 0 | trop courte | Avatar xxlarge (96 px) |
| `--avatar-size-xxlarge-icon` | dimension | 48px | = | `Size600` | 1 / 0 | ok | Icône de l'avatar xxlarge (48 px) |
| `--avatar-size-xxxlarge-container` | dimension | 128px | = | `Size1600` | 2 / 0 | trop courte | Avatar xxxlarge (128 px) |
| `--avatar-size-xxxlarge-icon` | dimension | 64px | = | `Size800` | 1 / 0 | ok | Icône de l'avatar xxxlarge (64 px) |
| `--avatar-radius` | dimension | 1024px | = | `RadiusRound` | 1 / 0 | ok | Coin de l'avatar, toujours rond |
| `--avatar-opacity-disabled` | number | 0.38 | = | `opacity.disabled` | 1 / 0 | ok | Opacité de l'avatar désactivé |
| `--avatar-group-border-width-xsmall` | dimension | 1px | = | `Size0125` | 1 / 0 | ok | Anneau de séparation des avatars xsmall empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-small` | dimension | 1px | = | `Size0125` | 1 / 0 | ok | Anneau de séparation des avatars small empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-medium` | dimension | 2px | = | `Size025` | 1 / 0 | ok | Anneau de séparation des avatars medium empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-large` | dimension | 2px | = | `Size025` | 1 / 0 | ok | Anneau de séparation des avatars large empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-xlarge` | dimension | 2px | = | `Size025` | 1 / 0 | ok | Anneau de séparation des avatars xlarge empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-xxlarge` | dimension | 3px | = | `Size0375` | 1 / 0 | ok | Anneau de séparation des avatars xxlarge empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-border-width-xxxlarge` | dimension | 4px | = | `Size050` | 1 / 0 | ok | Anneau de séparation des avatars xxxlarge empilés (couleur du conteneur, prop borderColor) |
| `--avatar-group-spacing-overlap-xsmall` | dimension | -4px | = |  | 1 / 0 | ok | Chevauchement des avatars xsmall empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-small` | dimension | -6px | = |  | 1 / 0 | ok | Chevauchement des avatars small empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-medium` | dimension | -8px | = |  | 1 / 0 | ok | Chevauchement des avatars medium empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-large` | dimension | -10px | = |  | 1 / 0 | ok | Chevauchement des avatars large empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-xlarge` | dimension | -16px | = |  | 1 / 0 | ok | Chevauchement des avatars xlarge empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-xxlarge` | dimension | -24px | = |  | 1 / 0 | ok | Chevauchement des avatars xxlarge empilés (marge négative, 25 % du diamètre) |
| `--avatar-group-spacing-overlap-xxxlarge` | dimension | -32px | = |  | 1 / 0 | ok | Chevauchement des avatars xxxlarge empilés (marge négative, 25 % du diamètre) |
| `--banner-color-warning-background` | color | #facc15 | #eabd08 | `background.warning.bold.default` | 1 / 0 | ok | Fond du bandeau warning (jaune) |
| `--banner-color-warning-text` | color | #252a2c | = | `text.on-light-surface` | 1 / 0 | ok | Message du bandeau warning (texte sombre fixe, lisible sur le jaune) |
| `--banner-color-warning-icon` | color | #252a2c | = | `icon.on-light-surface` | 1 / 0 | ok | Icône contextuelle du bandeau warning |
| `--banner-color-critical-background` | color | #e12121 | = | `background.critical.bold.default` | 1 / 0 | ok | Fond du bandeau critical (rouge) |
| `--banner-color-critical-text` | color | #ffffff | = | `text.on-dark-surface` | 1 / 0 | ok | Message du bandeau critical (texte inversé) |
| `--banner-color-critical-icon` | color | #ffffff | = | `icon.on-dark-surface` | 1 / 0 | ok | Icône contextuelle du bandeau critical |
| `--banner-color-announcement-background` | color | #6e5dc6 | #9897e2 | `background.accent.purple.bold.default` | 1 / 0 | ok | Fond du bandeau announcement (violet accent : nouveauté, mise à jour majeure) |
| `--banner-color-announcement-text` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | ok | Message du bandeau announcement (texte inversé) |
| `--banner-color-announcement-icon` | color | #f7f8f8 | #374043 | `icon.inverted` | 1 / 0 | ok | Icône contextuelle du bandeau announcement |
| `--banner-color-success-background` | color | #00784d | #0abf76 | `background.success.bold.default` | 1 / 0 | ok | Fond du bandeau success (vert) |
| `--banner-color-success-text` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | ok | Message du bandeau success (texte inversé) |
| `--banner-color-success-icon` | color | #f7f8f8 | #374043 | `icon.inverted` | 1 / 0 | ok | Icône contextuelle du bandeau success |
| `--banner-color-information-background` | color | #0076d8 | #009bfe | `background.information.bold.default` | 1 / 0 | ok | Fond du bandeau information (bleu) |
| `--banner-color-information-text` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | ok | Message du bandeau information (texte inversé) |
| `--banner-color-information-icon` | color | #f7f8f8 | #374043 | `icon.inverted` | 1 / 0 | ok | Icône contextuelle du bandeau information |
| `--banner-spacing-gap` | dimension | 12px | = | `Space150` | 1 / 0 | ok | Espace entre l'icône et le message (12 px) |
| `--banner-spacing-padding` | dimension | 12px | = | `Space150` | 1 / 0 | ok | Marge intérieure du bandeau sur les quatre côtés (12 px) |
| `--banner-size-icon` | dimension | 24px | = | `Size300` | 2 / 0 | ok | Largeur et hauteur de l'icône du bandeau (24 px) |
| `--bottom-nav-color-background` | color | #ffffff | #374043 | `surface.default` | 2 / 0 | trop courte | Fond de la barre |
| `--bottom-nav-color-item-label-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | ok | Libellé d'un item au repos |
| `--bottom-nav-color-item-label-selected` | color | #2c7ee4 | #c1e3fc | `text.selected` | 1 / 0 | ok | Libellé d'un item sélectionné ou ouvert |
| `--bottom-nav-color-item-icon-default` | color | #6f8488 | = | `icon.subtlest` | 1 / 0 | trop courte | Icône d'un item au repos |
| `--bottom-nav-color-item-icon-selected` | color | #2c7ee4 | #97d2f9 | `icon.selected` | 1 / 0 | ok | Icône d'un item sélectionné, et croix de fermeture d'un item ouvert |
| `--bottom-nav-color-item-background-selected` | color | #dceefd | #1e3661 | `background.selected.subtlest.default` | 3 / 0 | ok | Pastille derrière l'icône et le libellé d'un item sélectionné ou ouvert. Sert aussi de découpe au badge posé … |
| `--bottom-nav-color-action-background` | color | #2467d1 | #f0f8fe | `background.comete.bold.default` | 1 / 0 | ok | Fond du bouton d'action central (FAB). Bleu action Comète fixe, jamais la charte client |
| `--bottom-nav-color-action-icon` | color | #f7f8f8 | #374043 | `icon.inverted` | 1 / 0 | ok | Icône du bouton d'action central |
| `--bottom-nav-color-action-cradle` | color | #ffffff | #252a2c | `background.field.default` | 1 / 0 | ok | Anneau (cradle) autour de la moitié haute du bouton d'action |
| `--bottom-nav-size-item-icon` | dimension | 24px | = | `Size300` | 2 / 0 | trop courte | Icône d'un item (24 px) |
| `--bottom-nav-size-action-container` | dimension | 56px | = | `Size700` | 4 / 0 | ok | Diamètre du bouton d'action central (56 px) |
| `--bottom-nav-size-action-icon` | dimension | 28px | = | `Size350` | 2 / 0 | ok | Icône du bouton d'action central (28 px) |
| `--bottom-nav-size-action-offset` | dimension | 14px | = | `Size175` | 2 / 0 | ok | Dépassement du bouton d'action au-dessus du bord haut de la barre (14 px) |
| `--bottom-nav-size-action-cradle-ring` | dimension | 6px | = | `Size075` | 3 / 0 | ok | Épaisseur de l'anneau autour du bouton d'action (6 px). Le cradle mesure container + 2 × cradle-ring |
| `--bottom-nav-spacing-padding-top` | dimension | 4px | = | `Space050` | 1 / 0 | ok | Marge intérieure haute de la barre (4 px) |
| `--bottom-nav-spacing-padding-x` | dimension | 4px | = | `Space050` | 1 / 0 | ok | Marges intérieures gauche et droite de la barre (4 px) |
| `--bottom-nav-spacing-padding-bottom` | dimension | 24px | = | `Space300` | 1 / 0 | ok | Marge intérieure basse de la barre, réserve la zone du home indicator iOS (24 px) |
| `--bottom-nav-spacing-item-padding-y` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Marge verticale de la cellule d'un item (8 px) |
| `--bottom-nav-spacing-item-content-padding-y` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Marge verticale de la pastille (icône et libellé) d'un item (8 px) |
| `--bottom-nav-spacing-item-gap` | dimension | 2px | = | `Space025` | 1 / 0 | ok | Espace entre l'icône et le libellé (2 px) |
| `--bottom-nav-spacing-item-badge-offset-top` | dimension | 6px | = | `Space075` | 1 / 0 | ok | Remontée du badge au-dessus de l'icône (6 px, appliqué en négatif) |
| `--bottom-nav-spacing-item-badge-offset-start` | dimension | 12px | = | `Space150` | 1 / 0 | ok | Décalage du badge depuis le bord gauche de l'icône (12 px) |
| `--bottom-nav-radius-item` | dimension | 12px | = | `Radius150` | 1 / 0 | ok | Coins de la cellule d'un item (12 px, visibles au focus) |
| `--bottom-nav-radius-item-selected` | dimension | 1024px | = | `RadiusRound` | 2 / 0 | ok | Pastille d'un item sélectionné ou ouvert |
| `--bottom-nav-radius-action` | dimension | 1024px | = | `RadiusRound` | 2 / 0 | ok | Bouton d'action central et son anneau |
| `--bottom-nav-opacity-disabled` | number | 0.38 | = | `opacity.disabled` | 1 / 0 | ok | Opacité d'un item désactivé |
| `--button-color-contained-neutral-text-default` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | absente |  |
| `--button-color-contained-neutral-background-default` | color | #eaedee | #49585b | `background.neutral.subtler.default` | 1 / 0 | absente |  |
| `--button-color-contained-neutral-background-hovered` | color | #d8dedf | #596b70 | `background.neutral.subtler.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-neutral-background-pressed` | color | #b5c1c4 | #6f8488 | `background.neutral.subtler.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-subtle-text-default` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | absente |  |
| `--button-color-contained-subtle-background-default` | color | #eaedee | #49585b | `background.neutral.subtler.default` | 1 / 0 | ok | Fond au repos du bouton contained subtle : même gris que contained neutral (background.neutral.subtler.defaul… |
| `--button-color-contained-subtle-background-hovered` | color | #d8dedf | #596b70 | `background.neutral.subtler.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-subtle-background-pressed` | color | #b5c1c4 | #6f8488 | `background.neutral.subtler.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-subtlest-text-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-contained-subtlest-background-default` | color | #eaedee | #49585b | `background.neutral.subtler.default` | 1 / 0 | ok | Fond au repos du bouton contained subtlest : même gris que contained neutral (background.neutral.subtler.defa… |
| `--button-color-contained-subtlest-background-hovered` | color | #d8dedf | #596b70 | `background.neutral.subtler.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-subtlest-background-pressed` | color | #b5c1c4 | #6f8488 | `background.neutral.subtler.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-comete-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-comete-background-default` | color | #2467d1 | #f0f8fe | `background.comete.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-comete-background-hovered` | color | #2354aa | #dceefd | `background.comete.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-comete-background-pressed` | color | #224986 | #c1e3fc | `background.comete.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-success-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-success-background-default` | color | #00784d | #0abf76 | `background.success.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-success-background-hovered` | color | #036240 | #2fd88e | `background.success.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-success-background-pressed` | color | #245041 | #6aebae | `background.success.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-critical-text-default` | color | #ffffff | = | `text.on-dark-surface` | 1 / 0 | ok | Texte blanc fixe : background.critical.bold reste red 600 en sombre |
| `--button-color-contained-critical-background-default` | color | #e12121 | = | `background.critical.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-critical-background-hovered` | color | #be1717 | #f44040 | `background.critical.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-critical-background-pressed` | color | #9d1717 | #fc6d6d | `background.critical.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-warning-text-default` | color | #252a2c | = | `text.on-light-surface` | 1 / 0 | absente |  |
| `--button-color-contained-warning-background-default` | color | #facc15 | #eabd08 | `background.warning.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-warning-background-hovered` | color | #eabd08 | #facc15 | `background.warning.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-warning-background-pressed` | color | #caa204 | #fdd847 | `background.warning.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-information-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-information-background-default` | color | #0076d8 | #009bfe | `background.information.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-information-background-hovered` | color | #0060b0 | #26b5ff | `background.information.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-information-background-pressed` | color | #005391 | #71cdff | `background.information.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-brand-background-default` | color | #2467d1 | #f0f8fe | `background.brand.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-brand-background-hovered` | color | #2354aa | #dceefd | `background.brand.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-brand-background-pressed` | color | #224986 | #c1e3fc | `background.brand.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-brand-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-accent-purple-background-default` | color | #6e5dc6 | #9897e2 | `background.accent.purple.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-accent-purple-background-hovered` | color | #5e4db2 | #b5b8ec | `background.accent.purple.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-accent-purple-background-pressed` | color | #453d72 | #d1d4f4 | `background.accent.purple.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-accent-purple-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-accent-teal-background-default` | color | #1c759e | #42b2d7 | `background.accent.teal.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-accent-teal-background-hovered` | color | #1e6080 | #79cee7 | `background.accent.teal.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-accent-teal-background-pressed` | color | #1f435a | #afe3f2 | `background.accent.teal.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-accent-teal-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-accent-turquoise-background-default` | color | #00918d | #00ffef | `background.accent.turquoise.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-accent-turquoise-background-hovered` | color | #007271 | #3afff9 | `background.accent.turquoise.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-accent-turquoise-background-pressed` | color | #045d5d | #81fffb | `background.accent.turquoise.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-accent-turquoise-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-accent-magenta-background-default` | color | #c63c8a | #e581c1 | `background.accent.magenta.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-accent-magenta-background-hovered` | color | #aa2c6f | #efb2da | `background.accent.magenta.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-accent-magenta-background-pressed` | color | #762550 | #f6d4eb | `background.accent.magenta.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-accent-magenta-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-contained-accent-blue-grey-background-default` | color | #455d84 | #7993b7 | `background.accent.blue-grey.bold.default` | 1 / 0 | absente |  |
| `--button-color-contained-accent-blue-grey-background-hovered` | color | #384b6c | #a8b9d1 | `background.accent.blue-grey.bold.hovered` | 1 / 0 | absente |  |
| `--button-color-contained-accent-blue-grey-background-pressed` | color | #2c374b | #d1d9e6 | `background.accent.blue-grey.bold.pressed` | 1 / 0 | absente |  |
| `--button-color-contained-accent-blue-grey-text-default` | color | #ffffff | #252a2c | `text.inverted` | 1 / 0 | absente |  |
| `--button-color-outlined-neutral-text-default` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | absente |  |
| `--button-color-outlined-neutral-border-default` | color | #b5c1c4 | #49585b | `border.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-neutral-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-neutral-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-subtle-text-default` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | absente |  |
| `--button-color-outlined-subtle-border-default` | color | #b5c1c4 | #49585b | `border.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-subtle-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-subtle-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-subtlest-text-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-outlined-subtlest-border-default` | color | #eaedee | #3f4a4d | `border.subtle` | 1 / 0 | absente |  |
| `--button-color-outlined-subtlest-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-subtlest-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-comete-text-default` | color | #224986 | #dceefd | `text.comete.default` | 1 / 0 | absente |  |
| `--button-color-outlined-comete-border-default` | color | #224986 | #dceefd | `border.comete.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-comete-background-hovered` | color | #c1e3fc | #224986 | `background.comete.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-comete-background-pressed` | color | #97d2f9 | #2354aa | `background.comete.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-success-text-default` | color | #036240 | #6aebae | `text.success.default` | 1 / 0 | absente |  |
| `--button-color-outlined-success-border-default` | color | #009b60 | #0abf76 | `border.success.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-success-background-hovered` | color | #a4f6ca | #036240 | `background.success.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-success-background-pressed` | color | #6aebae | #00784d | `background.success.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-critical-text-default` | color | #9d1717 | #ffc8c8 | `text.critical.default` | 1 / 0 | absente |  |
| `--button-color-outlined-critical-border-default` | color | #e12121 | #f44040 | `border.critical.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-critical-background-hovered` | color | #ffc8c8 | #9d1717 | `background.critical.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-critical-background-pressed` | color | #ffa2a2 | #be1717 | `background.critical.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-warning-text-default` | color | #9c4f10 | #ffe8a9 | `text.warning.default` | 1 / 0 | absente |  |
| `--button-color-outlined-warning-border-default` | color | #caa204 | #eabd08 | `border.warning.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-warning-background-hovered` | color | #fee78a | #caa204 | `background.warning.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-warning-background-pressed` | color | #fdd847 | #eabd08 | `background.warning.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-information-text-default` | color | #0060b0 | #b4e3ff | `text.information.default` | 1 / 0 | absente |  |
| `--button-color-outlined-information-border-default` | color | #0076d8 | #009bfe | `border.information.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-information-background-hovered` | color | #b4e3ff | #005391 | `background.information.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-information-background-pressed` | color | #71cdff | #0060b0 | `background.information.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-brand-border-default` | color | #224986 | #dceefd | `border.brand.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-brand-text-default` | color | #224986 | #dceefd | `text.brand.default` | 1 / 0 | absente |  |
| `--button-color-outlined-brand-background-hovered` | color | #c1e3fc | #224986 | `background.brand.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-brand-background-pressed` | color | #97d2f9 | #2354aa | `background.brand.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-purple-border-default` | color | #8270db | = | `border.accent.purple.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-purple-text-default` | color | #5e4db2 | #d1d4f4 | `text.accent.purple.default` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-purple-background-hovered` | color | #d1d4f4 | #51458e | `background.accent.purple.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-purple-background-pressed` | color | #b5b8ec | #5e4db2 | `background.accent.purple.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-teal-border-default` | color | #1f92bb | = | `border.accent.teal.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-teal-text-default` | color | #215069 | #afe3f2 | `text.accent.teal.default` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-teal-background-hovered` | color | #afe3f2 | #215069 | `background.accent.teal.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-teal-background-pressed` | color | #79cee7 | #1e6080 | `background.accent.teal.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-turquoise-border-default` | color | #00e2d5 | = | `border.accent.turquoise.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-turquoise-text-default` | color | #007271 | #81fffb | `text.accent.turquoise.default` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-turquoise-background-hovered` | color | #c0fffc | #007271 | `background.accent.turquoise.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-turquoise-background-pressed` | color | #81fffb | #00918d | `background.accent.turquoise.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-magenta-border-default` | color | #da62ac | = | `border.accent.magenta.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-magenta-text-default` | color | #8d275d | #f6d4eb | `text.accent.magenta.default` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-magenta-background-hovered` | color | #f6d4eb | #8d275d | `background.accent.magenta.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-magenta-background-pressed` | color | #efb2da | #aa2c6f | `background.accent.magenta.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-blue-grey-border-default` | color | #58759f | = | `border.accent.blue-grey.bold` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-blue-grey-text-default` | color | #32415a | #d1d9e6 | `text.accent.blue-grey.default` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-blue-grey-background-hovered` | color | #d1d9e6 | #32415a | `background.accent.blue-grey.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-outlined-accent-blue-grey-background-pressed` | color | #a8b9d1 | #384b6c | `background.accent.blue-grey.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-neutral-text-default` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | absente |  |
| `--button-color-subtle-neutral-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-neutral-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-subtle-text-default` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | absente |  |
| `--button-color-subtle-subtle-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-subtle-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-subtlest-text-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-subtle-subtlest-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-subtlest-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-comete-text-default` | color | #224986 | #dceefd | `text.comete.default` | 1 / 0 | absente |  |
| `--button-color-subtle-comete-background-hovered` | color | #c1e3fc | #224986 | `background.comete.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-comete-background-pressed` | color | #97d2f9 | #2354aa | `background.comete.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-success-text-default` | color | #036240 | #6aebae | `text.success.default` | 1 / 0 | absente |  |
| `--button-color-subtle-success-background-hovered` | color | #a4f6ca | #036240 | `background.success.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-success-background-pressed` | color | #6aebae | #00784d | `background.success.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-critical-text-default` | color | #9d1717 | #ffc8c8 | `text.critical.default` | 1 / 0 | absente |  |
| `--button-color-subtle-critical-background-hovered` | color | #ffc8c8 | #9d1717 | `background.critical.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-critical-background-pressed` | color | #ffa2a2 | #be1717 | `background.critical.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-warning-text-default` | color | #9c4f10 | #ffe8a9 | `text.warning.default` | 1 / 0 | absente |  |
| `--button-color-subtle-warning-background-hovered` | color | #fee78a | #caa204 | `background.warning.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-warning-background-pressed` | color | #fdd847 | #eabd08 | `background.warning.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-information-text-default` | color | #0060b0 | #b4e3ff | `text.information.default` | 1 / 0 | absente |  |
| `--button-color-subtle-information-background-hovered` | color | #b4e3ff | #005391 | `background.information.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-information-background-pressed` | color | #71cdff | #0060b0 | `background.information.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-brand-text-default` | color | #224986 | #dceefd | `text.brand.default` | 1 / 0 | absente |  |
| `--button-color-subtle-brand-background-hovered` | color | #c1e3fc | #224986 | `background.brand.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-brand-background-pressed` | color | #97d2f9 | #2354aa | `background.brand.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-purple-text-default` | color | #5e4db2 | #d1d4f4 | `text.accent.purple.default` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-purple-background-hovered` | color | #d1d4f4 | #51458e | `background.accent.purple.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-purple-background-pressed` | color | #b5b8ec | #5e4db2 | `background.accent.purple.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-teal-text-default` | color | #215069 | #afe3f2 | `text.accent.teal.default` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-teal-background-hovered` | color | #afe3f2 | #215069 | `background.accent.teal.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-teal-background-pressed` | color | #79cee7 | #1e6080 | `background.accent.teal.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-turquoise-text-default` | color | #007271 | #81fffb | `text.accent.turquoise.default` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-turquoise-background-hovered` | color | #c0fffc | #007271 | `background.accent.turquoise.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-turquoise-background-pressed` | color | #81fffb | #00918d | `background.accent.turquoise.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-magenta-text-default` | color | #8d275d | #f6d4eb | `text.accent.magenta.default` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-magenta-background-hovered` | color | #f6d4eb | #8d275d | `background.accent.magenta.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-magenta-background-pressed` | color | #efb2da | #aa2c6f | `background.accent.magenta.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-blue-grey-text-default` | color | #32415a | #d1d9e6 | `text.accent.blue-grey.default` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-blue-grey-background-hovered` | color | #d1d9e6 | #32415a | `background.accent.blue-grey.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-subtle-accent-blue-grey-background-pressed` | color | #a8b9d1 | #384b6c | `background.accent.blue-grey.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-link-neutral-text-default` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | absente |  |
| `--button-color-link-neutral-text-hovered` | color | #374043 | #eaedee | `text.default.hovered` | 1 / 0 | absente |  |
| `--button-color-link-neutral-text-pressed` | color | #3f4a4d | #d8dedf | `text.default.pressed` | 1 / 0 | absente |  |
| `--button-color-link-comete-text-default` | color | #224986 | #dceefd | `text.comete.default` | 1 / 0 | absente |  |
| `--button-color-link-comete-text-hovered` | color | #2354aa | #c1e3fc | `text.comete.hovered` | 1 / 0 | absente |  |
| `--button-color-link-comete-text-pressed` | color | #2467d1 | #97d2f9 | `text.comete.pressed` | 1 / 0 | absente |  |
| `--button-color-link-success-text-default` | color | #036240 | #6aebae | `text.success.default` | 1 / 0 | absente |  |
| `--button-color-link-success-text-hovered` | color | #245041 | #a4f6ca | `text.success.hovered` | 1 / 0 | absente |  |
| `--button-color-link-success-text-pressed` | color | #0e2d24 | #d0fbe2 | `text.success.pressed` | 1 / 0 | absente |  |
| `--button-color-link-critical-text-default` | color | #9d1717 | #ffc8c8 | `text.critical.default` | 1 / 0 | absente |  |
| `--button-color-link-critical-text-hovered` | color | #821a1a | #ffe1e1 | `text.critical.hovered` | 1 / 0 | absente |  |
| `--button-color-link-critical-text-pressed` | color | #2e1717 | #fef2f2 | `text.critical.pressed` | 1 / 0 | absente |  |
| `--button-color-link-warning-text-default` | color | #9c4f10 | #ffe8a9 | `text.warning.default` | 1 / 0 | absente |  |
| `--button-color-link-warning-text-hovered` | color | #7e4210 | #fff6d4 | `text.warning.hovered` | 1 / 0 | absente |  |
| `--button-color-link-warning-text-pressed` | color | #441f06 | #fffbed | `text.warning.pressed` | 1 / 0 | absente |  |
| `--button-color-link-information-text-default` | color | #0060b0 | #b4e3ff | `text.information.default` | 1 / 0 | absente |  |
| `--button-color-link-information-text-hovered` | color | #005391 | #ddf1ff | `text.information.hovered` | 1 / 0 | absente |  |
| `--button-color-link-information-text-pressed` | color | #034477 | #eff8ff | `text.information.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-text-default` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-text-hovered` | color | #3f4a4d | #d8dedf | `text.subtle.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-text-pressed` | color | #374043 | #eaedee | `text.subtle.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtlest-text-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-link-subtlest-text-hovered` | color | #596b70 | #8d9fa3 | `text.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtlest-text-pressed` | color | #49585b | #b5c1c4 | `text.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-link-brand-text-default` | color | #224986 | #dceefd | `text.brand.default` | 1 / 0 | absente |  |
| `--button-color-link-brand-text-hovered` | color | #2354aa | #c1e3fc | `text.brand.hovered` | 1 / 0 | absente |  |
| `--button-color-link-brand-text-pressed` | color | #2467d1 | #97d2f9 | `text.brand.pressed` | 1 / 0 | absente |  |
| `--button-color-link-accent-purple-text-default` | color | #5e4db2 | #d1d4f4 | `text.accent.purple.default` | 1 / 0 | absente |  |
| `--button-color-link-accent-purple-text-hovered` | color | #51458e | #e6e8f9 | `text.accent.purple.hovered` | 1 / 0 | absente |  |
| `--button-color-link-accent-purple-text-pressed` | color | #453d72 | #f3f0ff | `text.accent.purple.pressed` | 1 / 0 | absente |  |
| `--button-color-link-accent-teal-text-default` | color | #215069 | #afe3f2 | `text.accent.teal.default` | 1 / 0 | absente |  |
| `--button-color-link-accent-teal-text-hovered` | color | #1f435a | #d5f1f8 | `text.accent.teal.hovered` | 1 / 0 | absente |  |
| `--button-color-link-accent-teal-text-pressed` | color | #0f2b3d | #eefafd | `text.accent.teal.pressed` | 1 / 0 | absente |  |
| `--button-color-link-accent-turquoise-text-default` | color | #007271 | #81fffb | `text.accent.turquoise.default` | 1 / 0 | absente |  |
| `--button-color-link-accent-turquoise-text-hovered` | color | #045d5d | #c0fffc | `text.accent.turquoise.hovered` | 1 / 0 | absente |  |
| `--button-color-link-accent-turquoise-text-pressed` | color | #00373a | #edfffd | `text.accent.turquoise.pressed` | 1 / 0 | absente |  |
| `--button-color-link-accent-magenta-text-default` | color | #8d275d | #f6d4eb | `text.accent.magenta.default` | 1 / 0 | absente |  |
| `--button-color-link-accent-magenta-text-hovered` | color | #762550 | #f9eaf5 | `text.accent.magenta.hovered` | 1 / 0 | absente |  |
| `--button-color-link-accent-magenta-text-pressed` | color | #47102d | #fcf3f9 | `text.accent.magenta.pressed` | 1 / 0 | absente |  |
| `--button-color-link-accent-blue-grey-text-default` | color | #32415a | #d1d9e6 | `text.accent.blue-grey.default` | 1 / 0 | absente |  |
| `--button-color-link-accent-blue-grey-text-hovered` | color | #2c374b | #eaedf4 | `text.accent.blue-grey.hovered` | 1 / 0 | absente |  |
| `--button-color-link-accent-blue-grey-text-pressed` | color | #1e2533 | #f5f7fa | `text.accent.blue-grey.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-neutral-text-default` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-neutral-text-hovered` | color | #3f4a4d | #d8dedf | `text.subtle.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-neutral-text-pressed` | color | #3f4a4d | #d8dedf | `text.default.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-comete-text-default` | color | #224986 | #dceefd | `text.comete.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-comete-text-hovered` | color | #2354aa | #c1e3fc | `text.comete.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-comete-text-pressed` | color | #2467d1 | #97d2f9 | `text.comete.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-success-text-default` | color | #036240 | #6aebae | `text.success.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-success-text-hovered` | color | #245041 | #a4f6ca | `text.success.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-success-text-pressed` | color | #0e2d24 | #d0fbe2 | `text.success.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-critical-text-default` | color | #9d1717 | #ffc8c8 | `text.critical.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-critical-text-hovered` | color | #821a1a | #ffe1e1 | `text.critical.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-critical-text-pressed` | color | #2e1717 | #fef2f2 | `text.critical.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-warning-text-default` | color | #9c4f10 | #ffe8a9 | `text.warning.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-warning-text-hovered` | color | #7e4210 | #fff6d4 | `text.warning.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-warning-text-pressed` | color | #441f06 | #fffbed | `text.warning.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-information-text-default` | color | #0060b0 | #b4e3ff | `text.information.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-information-text-hovered` | color | #005391 | #ddf1ff | `text.information.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-information-text-pressed` | color | #034477 | #eff8ff | `text.information.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtle-text-default` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtle-text-hovered` | color | #3f4a4d | #d8dedf | `text.subtle.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtle-text-pressed` | color | #374043 | #eaedee | `text.subtle.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtlest-text-default` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtlest-text-hovered` | color | #596b70 | #8d9fa3 | `text.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-subtlest-text-pressed` | color | #49585b | #b5c1c4 | `text.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-brand-text-default` | color | #224986 | #dceefd | `text.brand.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-brand-text-hovered` | color | #2354aa | #c1e3fc | `text.brand.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-brand-text-pressed` | color | #2467d1 | #97d2f9 | `text.brand.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-purple-text-default` | color | #5e4db2 | #d1d4f4 | `text.accent.purple.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-purple-text-hovered` | color | #51458e | #e6e8f9 | `text.accent.purple.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-purple-text-pressed` | color | #453d72 | #f3f0ff | `text.accent.purple.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-teal-text-default` | color | #215069 | #afe3f2 | `text.accent.teal.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-teal-text-hovered` | color | #1f435a | #d5f1f8 | `text.accent.teal.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-teal-text-pressed` | color | #0f2b3d | #eefafd | `text.accent.teal.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-turquoise-text-default` | color | #007271 | #81fffb | `text.accent.turquoise.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-turquoise-text-hovered` | color | #045d5d | #c0fffc | `text.accent.turquoise.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-turquoise-text-pressed` | color | #00373a | #edfffd | `text.accent.turquoise.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-magenta-text-default` | color | #8d275d | #f6d4eb | `text.accent.magenta.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-magenta-text-hovered` | color | #762550 | #f9eaf5 | `text.accent.magenta.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-magenta-text-pressed` | color | #47102d | #fcf3f9 | `text.accent.magenta.pressed` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-blue-grey-text-default` | color | #32415a | #d1d9e6 | `text.accent.blue-grey.default` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-blue-grey-text-hovered` | color | #2c374b | #eaedf4 | `text.accent.blue-grey.hovered` | 1 / 0 | absente |  |
| `--button-color-link-subtle-accent-blue-grey-text-pressed` | color | #1e2533 | #f5f7fa | `text.accent.blue-grey.pressed` | 1 / 0 | absente |  |
| `--button-color-selected-background-default` | color | #dceefd | #1e3661 | `background.selected.subtlest.default` | 1 / 0 | absente |  |
| `--button-color-selected-background-hovered` | color | #c1e3fc | #224986 | `background.selected.subtlest.hovered` | 1 / 0 | absente |  |
| `--button-color-selected-background-pressed` | color | #97d2f9 | #2354aa | `background.selected.subtlest.pressed` | 1 / 0 | absente |  |
| `--button-color-selected-text-default` | color | #2c7ee4 | #c1e3fc | `text.selected` | 3 / 0 | absente |  |
| `--button-color-focus-border` | color | #429aef | #66b8f4 | `border.focused` | 1 / 0 | absente |  |
| `--button-size-compact-height` | dimension | 24px | = | `Control.Height.Compact` | 2 / 0 | absente |  |
| `--button-size-compact-icon` | dimension | 16px | = | `Control.Icon.Compact` | 1 / 0 | absente |  |
| `--button-size-default-height` | dimension | 32px | = | `Control.Height.Default` | 3 / 0 | absente |  |
| `--button-size-default-icon` | dimension | 24px | = | `Control.Icon.Default` | 1 / 0 | absente |  |
| `--button-size-touch-height` | dimension | 48px | = | `Control.Height.Touch` | 2 / 0 | absente |  |
| `--button-size-touch-icon` | dimension | 32px | = | `Control.Icon.Touch` | 1 / 0 | absente |  |
| `--button-spacing-compact-gap` | dimension | 4px | = | `Space050` | 1 / 0 | absente |  |
| `--button-spacing-compact-padding-x` | dimension | 4px | = | `Control.PaddingX.Compact` | 1 / 0 | absente |  |
| `--button-spacing-default-gap` | dimension | 4px | = | `Space050` | 2 / 0 | absente |  |
| `--button-spacing-default-padding-x` | dimension | 8px | = | `Control.PaddingX.Default` | 1 / 0 | absente |  |
| `--button-spacing-default-padding-y` | dimension | 4px | = | `Space050` | 1 / 0 | absente |  |
| `--button-spacing-touch-gap` | dimension | 4px | = | `Space050` | 1 / 0 | absente |  |
| `--button-spacing-touch-padding-x` | dimension | 16px | = | `Control.PaddingX.Touch` | 1 / 0 | absente |  |
| `--button-spacing-touch-padding-y` | dimension | 8px | = | `Space100` | 1 / 0 | absente |  |
| `--button-radius-compact` | dimension | 4px | = | `Control.Radius.Compact` | 2 / 0 | absente |  |
| `--button-radius-default` | dimension | 6px | = | `Control.Radius.Default` | 3 / 0 | absente |  |
| `--button-radius-touch` | dimension | 8px | = | `Control.Radius.Touch` | 2 / 0 | absente |  |
| `--button-opacity-disabled` | number | 0.38 | = | `opacity.disabled` | 1 / 0 | ok | Opacité du bouton désactivé (couleur conservée, estompée) |
| `--page-spacing-gutter-mobile` | dimension | 12px | = | `Space150` | 1 / 0 | ok | Gouttière horizontale de la page sous 1200 px (mobile et tablette), partagée par Bar, Toolbar et Body (12 px) |
| `--page-spacing-gutter-laptop` | dimension | 24px | = | `Space300` | 1 / 0 | ok | Gouttière horizontale de la page à partir de 1200 px, partagée par Bar, Toolbar et Body (24 px) |
| `--page-spacing-body-padding-top` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Retrait haut du Body, sous la toolbar (8 px). Pas de retrait bas |
| `--page-spacing-state-padding-y` | dimension | 48px | = | `Space600` | 1 / 0 | ok | Marge verticale de l'état vide ou erreur centré dans le Body (48 px) |
| `--page-spacing-skeleton-gap` | dimension | 24px | = | `Space300` | 1 / 0 | ok | Espace entre les blocs du squelette de chargement du Body (24 px) |
| `--page-bar-color-title` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | ok | Titre de la barre de page |
| `--page-bar-color-compact-background` | color | #ffffff | #374043 | `surface.default` | 2 / 0 | ok | Fond de la barre compacte, épinglée en haut au défilement |
| `--page-bar-color-compact-border` | color | #eaedee | #3f4a4d | `border.subtle` | 2 / 0 | ok | Filet bas de la barre compacte |
| `--page-bar-size-compact-min-height` | dimension | 56px | = | `Size700` | 1 / 0 | ok | Hauteur minimale de la barre compacte (56 px), hors zone de sécurité iOS |
| `--page-bar-spacing-gap` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Espace entre les zones leading, titre et trailing (8 px) |
| `--page-bar-spacing-trailing-gap` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Espace entre les actions de la zone trailing (8 px) |
| `--page-bar-spacing-large-padding-y` | dimension | 16px | = | `Space200` | 3 / 0 | ok | Retrait vertical de la barre large (16 px) |
| `--page-bar-spacing-compact-padding-y` | dimension | 8px | = | `Space100` | 2 / 0 | ok | Retrait vertical de la barre compacte (8 px), plus la zone de sécurité iOS en haut |
| `--page-bar-spacing-title-padding-y` | dimension | 2px | = | `Space025` | 1 / 0 | ok | Retrait vertical du titre pour ne pas rogner les jambages tronqués (2 px) |
| `--page-bar-border-width-compact` | dimension | 1px | = | `Size0125` | 2 / 0 | ok | Épaisseur du filet bas de la barre compacte (1 px) |
| `--page-toolbar-spacing-gap` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Espace entre recherche, filtres, start et end (8 px) |
| `--page-toolbar-spacing-padding-y` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Retrait vertical de la toolbar (8 px) |
| `--page-toolbar-spacing-group-gap` | dimension | 8px | = | `Space100` | 3 / 0 | ok | Espace entre les éléments des zones filters, start et end (8 px) |
| `--page-toolbar-size-search-min-width` | dimension | 160px | = |  | 1 / 0 | ok | Largeur minimale du champ de recherche (160 px, placeholder lisible). Valeur brute : aucun token d'échelle |
| `--page-toolbar-size-search-max-width` | dimension | 240px | = |  | 1 / 0 | ok | Largeur maximale du champ de recherche (240 px). Valeur brute : aucun token d'échelle |
| `--side-nav-color-surface-background` | color | #ffffff | #374043 | `surface.default` | 2 / 0 | ok | Fond du panneau de navigation (aussi le fond au survol d'un item désactivé) |
| `--side-nav-color-surface-border` | color | #eaedee | #3f4a4d | `border.subtle` | 1 / 0 | ok | Bordure droite du panneau, séparation avec le contenu |
| `--side-nav-color-header-title` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | ok | Nom de l'application dans l'en-tête |
| `--side-nav-color-header-subtitle` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | ok | Sous-titre de l'en-tête (module, client) |
| `--side-nav-color-item-background-hovered` | color | #eaedee | #3f4a4d | `background.neutral.subtlest.hovered` | 1 / 0 | trop courte | Fond d'un item au survol |
| `--side-nav-color-item-background-pressed` | color | #d8dedf | #374043 | `background.neutral.subtlest.pressed` | 1 / 0 | trop courte | Fond d'un item à l'appui |
| `--side-nav-color-item-text` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | ok | Libellé d'un item non sélectionné |
| `--side-nav-color-item-selected-background-default` | color | #dceefd | #1e3661 | `background.selected.subtlest.default` | 2 / 0 | ok | Fond de l'item de la page courante |
| `--side-nav-color-item-selected-background-hovered` | color | #c1e3fc | #224986 | `background.selected.subtlest.hovered` | 2 / 0 | ok | Fond de l'item de la page courante au survol |
| `--side-nav-color-item-selected-background-pressed` | color | #97d2f9 | #2354aa | `background.selected.subtlest.pressed` | 2 / 0 | ok | Fond de l'item de la page courante à l'appui |
| `--side-nav-color-item-selected-text` | color | #2c7ee4 | #c1e3fc | `text.selected` | 1 / 0 | ok | Libellé de l'item de la page courante |
| `--side-nav-color-section-title` | color | #49585b | #b5c1c4 | `text.subtle.default` | 1 / 0 | ok | Titre de section (capitales) |
| `--side-nav-color-divider` | color | #eaedee | #3f4a4d | `border.subtle` | 1 / 0 | ok | Séparateur entre groupes d'items |
| `--side-nav-color-empty-icon-background` | color | #f7f8f8 | #49585b | `background.neutral.subtlest.default` | 1 / 0 | ok | Pastille de l'icône de l'état vide |
| `--side-nav-color-empty-title` | color | #252a2c | #f7f8f8 | `text.default.default` | 1 / 0 | trop courte | Titre de l'état vide |
| `--side-nav-color-empty-description` | color | #6f8488 | = | `text.subtlest.default` | 1 / 0 | ok | Description de l'état vide |
| `--side-nav-size-rail-width` | dimension | 80px | = | `Size1000` | 1 / 0 | ok | Largeur du panneau en mode rail (80 px) |
| `--side-nav-size-item-icon` | dimension | 24px | = | `Size300` | 2 / 0 | ok | Icône d'item (24 px), fixe aussi la hauteur de ligne : hauteur d'item = icône + 2 × spacing.item.padding-y (3… |
| `--side-nav-size-rail-item-min-height` | dimension | 32px | = | `Size400` | 1 / 0 | ok | Hauteur minimale d'un item en rail (32 px) |
| `--side-nav-size-header-logo` | dimension | 40px | = | `Size500` | 2 / 0 | ok | Hauteur maximale du logo de l'en-tête (40 px) |
| `--side-nav-size-header-min-height` | dimension | 72px | = |  | 2 / 0 | ok | Hauteur minimale de l'en-tête (72 px). Valeur brute : aucun token d'échelle à 72 px |
| `--side-nav-size-footer-brand` | dimension | 24px | = | `Size300` | 1 / 0 | ok | Hauteur maximale de la marque du pied (24 px) |
| `--side-nav-size-empty-icon` | dimension | 40px | = | `Size500` | 2 / 0 | ok | Pastille de l'icône de l'état vide (40 px) |
| `--side-nav-size-width` | dimension | 240px | = |  | 1 / 0 | ok | Largeur du panneau déployé (240 px). Valeur brute : aucun token d'échelle à 240 px |
| `--side-nav-spacing-gutter` | dimension | 8px | = | `Space100` | 3 / 0 | ok | Gouttière horizontale du panneau (8 px), reprise à droite par la zone défilante |
| `--side-nav-spacing-inset` | dimension | 12px | = | `Space150` | 8 / 0 | ok | Retrait horizontal commun de l'en-tête, des items, titres de section, séparateurs et pied (12 px) |
| `--side-nav-spacing-header-gap` | dimension | 12px | = | `Space150` | 2 / 0 | ok | Espace entre le logo, le nom et le bouton de bascule (12 px) |
| `--side-nav-spacing-header-padding-top` | dimension | 24px | = | `Space300` | 2 / 0 | ok | Marge haute de l'en-tête (24 px) |
| `--side-nav-spacing-header-padding-bottom` | dimension | 8px | = | `Space100` | 2 / 0 | ok | Marge basse de l'en-tête (8 px) |
| `--side-nav-spacing-item-gap` | dimension | 12px | = | `Space150` | 2 / 0 | ok | Espace entre l'icône et le libellé (12 px) |
| `--side-nav-spacing-item-padding-y` | dimension | 4px | = | `Space050` | 5 / 0 | ok | Padding vertical d'un item (4 px) : hauteur 32 px avec l'icône de 24 px |
| `--side-nav-spacing-rail-padding-x` | dimension | 4px | = | `Space050` | 2 / 0 | ok | Retrait horizontal des items et titres de section en rail (4 px) |
| `--side-nav-spacing-rail-item-gap` | dimension | 2px | = | `Space025` | 1 / 0 | ok | Espace entre l'icône et le libellé court en rail (2 px) |
| `--side-nav-spacing-section-title-padding-top` | dimension | 16px | = | `Space200` | 2 / 0 | ok | Marge au-dessus d'un titre de section (16 px) |
| `--side-nav-spacing-section-title-padding-bottom` | dimension | 2px | = | `Space025` | 2 / 0 | ok | Marge sous un titre de section (2 px) |
| `--side-nav-spacing-divider-margin-y` | dimension | 6px | = | `Space075` | 1 / 0 | ok | Marge verticale du séparateur (6 px) |
| `--side-nav-spacing-footer-padding-y` | dimension | 16px | = | `Space200` | 1 / 0 | ok | Marge verticale du pied (16 px) |
| `--side-nav-spacing-empty-gap` | dimension | 12px | = | `Space150` | 1 / 0 | ok | Espace entre l'icône, le texte et l'action de l'état vide (12 px) |
| `--side-nav-spacing-empty-padding-y` | dimension | 32px | = | `Space400` | 1 / 0 | ok | Marge verticale de l'état vide (32 px) |
| `--side-nav-spacing-empty-padding-x` | dimension | 16px | = | `Space200` | 1 / 0 | ok | Marge horizontale de l'état vide (16 px) |
| `--side-nav-spacing-empty-text-gap` | dimension | 4px | = | `Space050` | 1 / 0 | ok | Espace entre le titre et la description de l'état vide (4 px) |
| `--side-nav-spacing-empty-action` | dimension | 8px | = | `Space100` | 1 / 0 | ok | Marge au-dessus de l'action de l'état vide (8 px) |
| `--side-nav-spacing-skeleton-gap` | dimension | 6px | = | `Space075` | 2 / 0 | ok | Espace entre les lignes d'un placeholder de chargement (6 px) |
| `--side-nav-radius-item` | dimension | 3px | = | `Radius0375` | 2 / 0 | trop courte | Coins d'un item (3 px) |
| `--side-nav-radius-divider` | dimension | 1px | = | `Radius0125` | 1 / 0 | ok | Coins du séparateur (1 px) |
| `--side-nav-radius-empty-icon` | dimension | 1024px | = | `RadiusRound` | 1 / 0 | ok | Pastille ronde de l'état vide |
| `--side-nav-border-width-surface` | dimension | 1px | = | `Size0125` | 1 / 0 | ok | Bordure droite du panneau (1 px) |
| `--side-nav-border-width-divider` | dimension | 2px | = | `Size025` | 1 / 0 | ok | Épaisseur du séparateur (2 px) |
| `--side-nav-opacity-disabled` | number | 0.38 | = | `opacity.disabled` | 1 / 0 | ok | Opacité d'un item désactivé (standard disabled par opacité) |
| `--side-nav-opacity-footer-brand` | number | 0.5 | = | `opacity.50` | 1 / 0 | ok | Opacité de la marque du pied (0,5) |
| `--spinner-size-xsmall` | dimension | 8px | = | `Size100` | 2 / 0 | trop courte | Spinner xsmall (8 px) |
| `--spinner-size-small` | dimension | 16px | = | `Size200` | 2 / 0 | trop courte | Spinner small (16 px) |
| `--spinner-size-medium` | dimension | 24px | = | `Size300` | 2 / 0 | trop courte | Spinner medium (24 px) |
| `--spinner-size-large` | dimension | 48px | = | `Size600` | 2 / 0 | trop courte | Spinner large (48 px) |
| `--spinner-size-xlarge` | dimension | 96px | = | `Size1200` | 2 / 0 | trop courte | Spinner xlarge (96 px) |
| `--spinner-color-default` | color | #32415a | #eaedf4 | `icon.default` | 0 / 0 | ok | Spinner sur fond clair (appearance inherit hors contexte) |
| `--spinner-color-inverted` | color | #f7f8f8 | #374043 | `icon.inverted` | 1 / 0 | ok | Spinner sur fond foncé (appearance inverted) |
| `--spinner-color-comete-light` | color | #fff146 | = | `logo.comete.gradient-light` | 1 / 0 | ok | Dégradé comète, pointe de la queue (repris du logo) |
| `--spinner-color-comete-dark` | color | #f8bf01 | = | `logo.comete.gradient-dark` | 1 / 0 | ok | Dégradé comète, tête (repris du logo) |

