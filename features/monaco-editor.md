---
depends:
  - guide/syntax#code-block
relates:
  - Monaco Editor: https://microsoft.github.io/monaco-editor/
  - Configure Monaco Editor: /custom/config-monaco
tags: [codeblock, editor]
description: |
  Transformer les blocs de code en éditeurs complets, ou générer un diff entre deux blocs de code.
---

# Éditeur Monaco

<video src="https://github.com/slidevjs/slidev/assets/11247099/0c6ce681-80d3-4555-93bf-9288ee533462" controls rounded shadow w-full></video>

Lorsque vous souhaitez effectuer une modification dans la présentation, ajoutez simplement `{monaco}` après l'identifiant de langage — cela transforme le bloc en un éditeur Monaco complet !

````md
```ts {monaco}
console.log('HelloWorld')
```
````

En savoir plus sur la [Configuration de Monaco](/custom/config-monaco).

## Éditeur de diff

Monaco peut également générer un diff entre deux blocs de code. Utilisez `{monaco-diff}` pour transformer le bloc en un [éditeur de diff Monaco](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) et utilisez `~~~` pour séparer le code original et modifié !

````md
```ts {monaco-diff}
console.log('Original text')
~~~
console.log('Modified text')
```
````

## Hauteur de l'éditeur

Par défaut, l'éditeur Monaco a une hauteur fixe basée sur le contenu initial. Si vous commencez avec un bloc de code vide ou petit et que vous souhaitez que l'éditeur grandisse automatiquement à mesure que vous tapez plus de code, vous pouvez définir `{height:'auto'}`.

````md
```ts {monaco} {height:'auto'}
// L'éditeur grandira automatiquement à mesure que vous tapez du code
console.log('Hello, World!')
```
````

Vous pouvez également définir une hauteur spécifique en utilisant des unités CSS comme `{height:'300px'}` ou `{height:'100%'}`.
