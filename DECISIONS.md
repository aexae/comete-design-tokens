# Décisions — comete-design-tokens

> Journal des décisions (date, décision, contexte / raison).

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
