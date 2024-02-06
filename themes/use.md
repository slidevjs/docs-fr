# Utiliser le thème

Changer le thème dans Slidev est étonnamment facile. Tout ce que vous avez à faire est d'ajouter le champ `theme:` dans votre frontmatter.

```yaml
---
theme: seriph
---
```

<<<<<<< HEAD
Vous pouvez démarrer le serveur, ce qui vous demandera d'installer le thème automatiquement
=======
> **Note**
> To install a theme from a scoped package, you will have to give the full namespace e.g `@organization/slidev-theme-name`

You can start the server, which will prompt you to install the theme automatically
>>>>>>> e52d01f8924fc2746acb41ca2510db795a7b0c4a

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

ou installez le thème manuellement via

```bash
$ npm install @slidev/theme-seriph
```

Et c'est tout, profitez du nouveau thème! Pour plus de détails sur l'utilisation, vous pouvez vous référer au fichier README du thème.

Envie de partager votre thème? Découvrez [comment écrire un thème](/themes/write-a-theme).

## Ejecter le thème

Si vous souhaitez obtenir le contrôle total du thème actuel, vous pouvez **l'éjecter** sur votre système de fichiers local et le modifier à votre guise. En exécutant la commande suivante

```bash
$ slidev theme eject
```

<<<<<<< HEAD
Il éjectera le thème que vous utilisez actuellement dans `./theme`, et changera votre frontmatter en
=======
It will eject the theme you are using currently into `./theme`, and changed your frontmatter to
>>>>>>> e52d01f8924fc2746acb41ca2510db795a7b0c4a

```yaml
---
theme: ./theme
---
```

Cela peut également être utile si vous souhaitez créer un thème basé sur un thème existant. Si vous le faites, n'oubliez pas de mentionner le thème d'origine et l'auteur :)

## Thème local

Comme vous l'avez probablement découvert dans la section précédente, vous pouvez avoir un thème local pour votre projet. En ayant un **chemin relatif** dans votre champ de thème.

```yaml
---
theme: ./path/to/theme
---
```

Reportez-vous à [comment écrire un thème](/themes/write-a-theme) pour plus de détails.
