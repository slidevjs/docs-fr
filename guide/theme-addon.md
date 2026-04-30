# Thèmes et addons

Un projet de diapositives peut avoir un thème et plusieurs addons. Tous peuvent fournir des styles, des composants, des mises en page et d'autres configurations à votre projet de diapositives.

## Utiliser un thème {#use-theme}

Changer le thème dans Slidev est étonnamment simple. Tout ce que vous devez faire est d'ajouter l'option `theme` dans votre [headmatter](../custom/index#headmatter) :

```md
---
theme: seriph
---

# La première diapositive
```

Vous pouvez trouver la liste des thèmes officiels et des thèmes communautaires dans la [Galerie de thèmes](../resources/theme-gallery).

::: info Convention de nommage des thèmes

- Vous pouvez également passer un chemin relatif ou absolu vers un dossier de thème local, comme `../my-theme`
- Vous pouvez toujours utiliser le nom complet du package comme nom de thème
- Si le thème est [officiel](../resources/theme-gallery#official-themes) ou est nommé comme `slidev-theme-name`, vous pouvez omettre le préfixe `slidev-theme-`
- Pour les packages avec portée comme `@org/slidev-theme-name`, le nom complet du package est requis

:::

Vous pouvez démarrer le serveur et il vous sera proposé d'installer le thème après une confirmation.

<div class="language-md text-xs pl-6">
<pre style="overflow: hidden; text-wrap: pretty;">
<span class="token keyword">?</span> Le thème <span class="token string">"@slidev/theme-seriph"</span> n'a pas été trouvé dans votre projet, voulez-vous l'installer maintenant ? › (O/n)
</pre>
</div>

Ou installez le thème manuellement via :

```bash
$ npm install @slidev/theme-seriph
```

Et c'est tout, profitez du nouveau thème ! Pour plus de détails sur l'utilisation, vous pouvez consulter le README du thème.

<SeeAlso :links="[
  'features/eject-theme',
]" />

## Utiliser un addon {#use-addon}

Les addons sont similaires aux thèmes, mais ils sont plus flexibles et peuvent être utilisés pour ajouter des fonctionnalités supplémentaires à votre projet de diapositives. Vous pouvez ajouter plusieurs addons à votre projet, et ils peuvent être utilisés pour ajouter des fonctionnalités supplémentaires à votre projet de diapositives.

Pour utiliser un addon, vous pouvez ajouter l'option `addons` dans votre [headmatter](../custom/index#headmatter) :

```md
---
addons:
  - excalidraw
  - '@slidev/plugin-notes'
---
```

Vous pouvez trouver la liste des addons officiels et des addons communautaires dans la [Galerie d'addons](../resources/addon-gallery).
