---
tags: [notes, presenter]
description: Ajouter automatiquement des balises `<ruby>` à vos notes.
---

# Ruby automatique pour les notes

> Disponible depuis la v52.4.0

Lorsque vous écrivez des notes dans vos diapositives, vous pourriez vouloir ajouter du texte ruby pour aider à prononcer certains mots. Vous pouvez toujours ajouter des balises `<ruby>` à vos notes manuellement, mais Slidev propose également un moyen pratique de le faire automatiquement par un remplacement global automatique.

Dans le headmatter, vous pouvez définir l'option `notesAutoRuby` sur une carte de mots vers leur texte ruby :

```md
---
notesAutoRuby:
  日本語: ni hon go
  勉強: べんきょう
---

# Vos diapositives ici

<!--
私は日本語を勉強しています。
-->
```

Et les notes seront rendues comme :

<p>私は<ruby>日本語<rt>ni hon go</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。</p>
