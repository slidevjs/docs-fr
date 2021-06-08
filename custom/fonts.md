# Polices

<<<<<<< HEAD
> Disponile depuis v0.19.3
=======
> Available since v0.20
>>>>>>> e3f2b5b9036a3ee3ae4affad7388d21f15208d7d

Bien que vous puissiez utiliser HTML et CSS pour personnaliser les polices et le style de vos diapositives à votre guise, Slidev offre également un moyen pratique de les utiliser sans effort.

Dans votre fontmatter, configurez comme suit :

```yaml
---
fonts:
  # le texte
  sans: 'Robot'
  # utiliser avec la classe css `font-serif` de windicss
  serif: 'Robot Slab'
  # pour les blocs de code, le code en ligne, etc.
  mono: 'Fira Code'
---
```

Et c'est tout.

Les polices seront **importées automatiquement depuis [Google Fonts](https://fonts.google.com/)**. Cela signifie que vous pouvez utiliser directement toutes les polices disponibles sur Google Fonts.

## Polices locales

Par défaut, Slidev suppose que toutes les polices spécifiées via les configurations `fonts` proviennent de Google Fonts. Si vous souhaitez utiliser des polices locales, spécifiez `fonts.local` pour désactiver l'importation automatique. 

```yaml
---
fonts:
  # comme font-family en css, vous pouvez utiliser `,` pour séparer plusieurs polices de secours
  sans: 'Helvetica Neue,Robot'
  # marquer 'Helvetica Neue' comme police locale
  local: 'Helvetica Neue'
---
```

<<<<<<< HEAD
## Polices de remplacement
=======
## Weights & Italic

By default, Slidev imports three weights `200`,`400`,`600` for each font. You can configure them by:

```yaml
---
fonts:
  sans: 'Robot'
  # default
  weights: '200,400,600'
  # import italic fonts, default `false`
  italic: false
---
```

This configuration applies to all web fonts. For more fine-grained controls of each font's weights, you will need to manually import them with [HTML](/custom/directory-structure.html#index-html) and CSS.

## Fallback Fonts
>>>>>>> e3f2b5b9036a3ee3ae4affad7388d21f15208d7d

Pour la plupart des scénarios, il vous suffit de spécifier la "police spéciale" et Slidev ajoutera les polices de secours pour vous, par exemple :

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

aura pour résultat

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

Si vous souhaitez désactiver les polices de secours, configurez comme suit

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Fournisseurs

- Options : `google` | `none`
- Par défaut : `google`

Actuellement, seules les polices Google sont prises en charge, nous prévoyons d'ajouter d'autres fournisseurs à l'avenir. Spécifier `none` désactivera complètement la fonction d'importation automatique et traitera toutes les polices en local.

```yaml
---
fonts:
  provide: 'none'
---
```


