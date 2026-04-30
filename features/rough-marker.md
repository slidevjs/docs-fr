---
depends:
  - guide/animations
relates:
  - Rough Notation: https://github.com/slidevjs/rough-notation
since: v0.48.0
tags: [drawing, animation]
description: |
  Intégrer Rough Notation pour permettre de marquer ou surligner des éléments dans vos diapositives.
---

# Marqueurs Rough

Slidev intègre [Rough Notation](https://github.com/slidevjs/rough-notation) pour permettre de marquer ou surligner des éléments dans vos diapositives.

---

### Directive `v-mark`

L'intégration de Rough Notation est fournie avec la directive `v-mark`.

#### Type

Utilisez `v-mark.underline` pour le soulignement, `v-mark.circle` pour le cerclage, etc. (par défaut `underline`).

#### Couleur

`v-mark.red` rend la notation `rouge`. Thèmes de couleurs intégrés supportés depuis UnoCSS. Pour des couleurs personnalisées, utilisez la syntaxe objet `v-mark="{ color: '#234' }"`.

#### Clics

`v-mark` fonctionne comme `v-click` et se déclenchera après un clic. Comme `v-click`, il vous permet de passer une valeur de clic personnalisée, comme `v-mark="5"` ou `v-mark="'+1'"`.

#### Options

Optionnellement, vous pouvez passer un objet à `v-mark` pour spécifier les options, par exemple :

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Texte important
</span>
```

#### Aperçu

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>
