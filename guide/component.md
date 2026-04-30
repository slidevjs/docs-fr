# Composants dans les diapositives

L'une des fonctionnalités les plus puissantes de Slidev est la possibilité d'utiliser des composants Vue directement dans vos diapositives. Cela vous permet de créer du contenu interactif et dynamique facilement.

## Utiliser des composants {#use}

Grâce à [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components), Slidev vous permet d'utiliser des composants Vue directement dans vos diapositives sans les importer manuellement :

```md
# My Slide

<MyComponent :count="4"/>
```

Les composants proviennent de :

- Composants intégrés. Voir [Composants intégrés](../builtin/components) pour référence.
- Fournis par le thème et les extensions. Voir <LinkInline link="guide/theme-addon" />.
- Composants personnalisés dans le répertoire `components`. Voir la section suivante.

## Écrire des composants {#write}

Pour créer un composant personnalisé, créez simplement un nouveau fichier Vue dans le répertoire `components` :

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── components/
      ├── ...
      └── MyComponent.vue
```

Référez-vous à la [documentation Vue](https://vuejs.org/guide/essentials/component-basics.html) pour savoir comment écrire des composants Vue.

Vous pouvez également <LinkInline link="guide/write-addon" /> pour réutiliser et partager vos composants avec d'autres.
