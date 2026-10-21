# TODO / faiblesses — comete-design-tokens

> Failles, faiblesses et pistes d'amélioration signalées au fil des échanges.

## Tokens `text-subtle-inverted` / `text-subtlest-inverted` (2026-10-21)

- **Accessibilité — `text-subtlest-inverted` (cool-grey.500, #6f8488)** : contraste ~3,7 à 4,3:1 sur les surfaces inversées testées (cool-grey.950, surface dark) et ~3,9:1 sur blanc en dark. Sous le seuil AA 4,5:1 pour le petit texte. À réserver au texte large ou secondaire (même réserve que le `subtlest` non inversé), ne pas l'utiliser pour du corps de texte.
- **Incohérence de primitive** : en thème clair, `text.inverted` pointe sur `white.100` alors que ses variantes `subtle/subtlest-inverted` pointent sur `cool-grey.*`. Mélange de familles (white vs cool-grey) volontaire (suit l'échelle du thème opposé) mais à valider côté design si une teinte 100 % neutre blanche est attendue.
- **Tokens non consommés** : aucun composant du DS n'utilise encore ces deux tokens. Risque de tokens morts tant qu'ils ne sont pas câblés (ex. texte secondaire sur Banner/Tooltip/surfaces bold). À adopter ou documenter l'usage cible.
- **Publication** : changement non commité et non publié (en attente de « livre »). Nécessitera bump de version tokens + tag, puis bump de la dép dans le DS (root + storybook) pour être exploitable.
