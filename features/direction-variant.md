---
relates:
  - UnoCSS Variants: https://unocss.dev/config/variants#variants
since: v0.48.0
tags: [navigation, styling]
description: |
  Appliquer différents styles et animations selon la direction de navigation.
---

# Variantes de direction de navigation

Vous pourriez vouloir appliquer différentes classes selon que la navigation se fait vers l'avant ou vers l'arrière. La classe `.slidev-nav-go-forward` ou `.slidev-nav-go-backward` sera appliquée au conteneur de la diapositive lors de la navigation, et vous pouvez les utiliser pour appliquer différents styles ou animations :

```css
/* exemple : délai uniquement en avant mais pas en arrière */
.slidev-nav-go-forward .slidev-vclick-target {
  transition-delay: 500ms;
}
.slidev-nav-go-backward .slidev-vclick-target {
  transition-delay: 0;
}
```

Pour faciliter les choses, nous avons également fourni des [variantes UnoCSS](https://github.com/slidevjs/slidev/blob/6adcf2016b8fb0cab65cf150221f1f67a76a2dd8/packages/client/uno.config.ts#L32-L38) pour cela. Vous pouvez utiliser le préfixe `forward:` ou `backward:` avec n'importe quelle classe UnoCSS pour ne les activer que dans la direction de navigation spécifique :

```html
<div v-click class="transition delay-300">Element</div> // [!code --]
<div v-click class="transition forward:delay-300">Element</div> // [!code ++]
```

Dans l'exemple ci-dessus, l'animation n'est retardée que lors de la navigation vers l'avant.
