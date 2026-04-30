# Configurer les polices

Bien que vous puissiez utiliser HTML et CSS pour personnaliser les polices et le style de vos diapositives comme vous le souhaitez, Slidev propose également un moyen pratique de les utiliser sans effort.

Dans votre frontmatter, configurez comme suit :

```yaml
---
fonts:
  # basiquement le texte
  sans: Robot
  # utiliser avec la classe CSS `font-serif` d'UnoCSS
  serif: Robot Slab
  # pour les blocs de code, le code en ligne, etc.
  mono: Fira Code
---
```

Et c'est tout.

Les polices seront **importées automatiquement depuis un fournisseur via CDN, par défaut c'est [Google Fonts](https://fonts.google.com/)**. Cela signifie que vous pouvez utiliser n'importe quelle police disponible sur Google Fonts directement.

## Polices locales

Par défaut, Slidev considère que toutes les polices spécifiées via les configurations `fonts` proviennent de Google Fonts. Si vous souhaitez utiliser des polices locales, spécifiez `fonts.local` pour désactiver l'importation automatique.

```yaml
---
fonts:
  # comme font-family en CSS, vous pouvez utiliser `,` pour séparer plusieurs polices de secours
  sans: 'Helvetica Neue,Robot'
  # marquer 'Helvetica Neue' comme police locale
  local: Helvetica Neue
---
```

## Graisses et italique

Par défaut, Slidev importe trois graisses `200`, `400`, `600` pour chaque police. Vous pouvez les configurer avec :

```yaml
---
fonts:
  sans: Robot
  # par défaut
  weights: '200,400,600'
  # importer les polices italiques, par défaut `false`
  italic: false
---
```

Cette configuration s'applique à toutes les polices web. Pour un contrôle plus fin des graisses de chaque police, vous devrez les importer manuellement avec [HTML](/custom/directory-structure.html#index-html) et CSS.

## Polices de repli

Pour la plupart des scénarios, vous n'avez besoin que de spécifier la « police spéciale » et Slidev ajoutera les polices de repli pour vous, par exemple :

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

donnera

<!-- eslint-skip -->

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Si vous souhaitez désactiver les polices de repli, configurez comme suit :

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Fournisseurs

- Options : `google` | `coollabs` | `none`
- Par défaut : `google`

Actuellement, seuls [Google Fonts](https://fonts.google.com/) et [coolLabs](https://fonts.coollabs.io/) sont supportés, nous prévoyons d'ajouter plus de fournisseurs à l'avenir. Spécifier `none` désactivera complètement la fonctionnalité d'importation automatique et traitera toutes les polices localement.

```yaml
---
fonts:
  provider: none
---
```
