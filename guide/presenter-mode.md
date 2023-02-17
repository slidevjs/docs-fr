# Mode présentateur

Cliquez sur le bouton <carbon-user-speaker class="inline-icon-btn"/> dans le panneau de navigation ou visitez manuellement `http://localhost:3030/presenter` pour accéder au mode présentateur. Chaque fois que vous entrez en mode présentateur, les autres instances de page resteront automatiquement synchronisées avec le présentateur.

![](/screenshots/presenter-mode.png)

## Disabling

Presenter mode is enabled by default.

You can disable this feature with the following config:

```md
---
presenter: false
---
```

Or you can enable it only for `dev` or `build` mode by setting the mode you want in the config:
```md
---
presenter: dev
---
```
In that case the presenter will only be available when running `slidev` but not when running `slidev build`.

## Remote restricted access

You can run your presentation with remote access by running `slidev --remote`.

In that case you may want to share the slides with other people but you don't want them to access the presenter mode to mess up your presentation.

For this scenario you can provide a password for starting the server by running `slidev --remote=your_password`.

In that case you will need to provide the password when accessing `/presenter/*` routes.
