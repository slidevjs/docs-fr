# Travailler avec l'IA

Grâce au fait que Slidev est basé sur le Markdown, il fonctionne parfaitement avec les agents de codage IA.

## Compétences

Slidev fournit des [compétences](https://code.claude.com/docs/en/skills) officielles pour les agents de codage IA, leur permettant de comprendre la syntaxe, les fonctionnalités et les bonnes pratiques de Slidev lorsqu'ils vous aident à créer des présentations.

### Installation

Installez la compétence Slidev sur votre agent de codage IA :

```bash
npx skills add slidevjs/slidev
```

Le code source de la compétence est [ici](https://github.com/slidevjs/slidev/tree/main/skills/slidev).

### Exemples de prompts

Une fois installé, vous pouvez demander aux agents de vous aider avec diverses tâches Slidev :

```
Créez une présentation Slidev sur les génériques TypeScript avec des exemples de code
```

```
Ajoutez une diapositive en deux colonnes avec du code à gauche et une explication à droite
```

```
Configurez des animations de clic pour révéler les points un par un
```

```
Configurez la présentation pour l'export PDF avec les notes du présentateur
```

### Ce qui est inclus

La compétence Slidev fournit des connaissances sur :

- La syntaxe Markdown, les séparateurs de diapositives et le frontmatter
- Les animations de clic et les transitions
- La coloration de code, l'éditeur Monaco et magic-move
- Les diagrammes (Mermaid, PlantUML) et les mathématiques LaTeX
- Les dispositions et composants intégrés
- Les options d'export et d'hébergement

## Extension VS Code

L'extension <LinkInline link="features/vscode-extension" /> fournit des outils de modèle de langage qui permettent à Copilot de VS Code et à d'autres assistants IA d'interagir directement avec votre projet Slidev. Ces outils permettent à l'IA de :

- Obtenir des informations sur la diapositive active et le projet
- Récupérer le contenu de diapositives spécifiques
- Lister et rechercher des diapositives par titre
- Naviguer entre les diapositives

Voir <LinkInline link="features/vscode-extension#ai-integration" /> pour plus de détails.
