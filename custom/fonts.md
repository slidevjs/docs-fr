# Polices

> Disponile depuis v0.20

Bien que vous puissiez utiliser HTML et CSS pour personnaliser les polices et le style de vos diapositives à votre guise, Slidev offre également un moyen pratique de les utiliser sans effort.

<<<<<<< HEAD
Dans votre fontmatter, configurez comme suit :
=======
In your frontmatter, configure as following
>>>>>>> d9b5a2ed4eea5c454b14f823f740a050ef45f079

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

## Poids et italique

Par défaut, Slidev importe trois poids "200", "400", "600" pour chaque police. Vous pouvez les configurer en :

```yaml
---
fonts:
  sans: 'Robot'
  # défaut
  weights: '200,400,600'
  # importer des polices italiques, par défaut `false`
  italic: false
---
```

Cette configuration est appliquée à toutes les polices web. Pour des contrôles plus précis des poids de chaque police, vous devrez les importer manuellement avec [HTML](/custom/directory-structure.html#index-html) et CSS.

## Police de remplacement

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


