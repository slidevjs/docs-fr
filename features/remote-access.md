---
relates:
  - guide/ui
  - CLI: builtin/cli
  - Cloudflare Quick Tunnels: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/
tags: [remote, tool]
description: |
  Accéder à votre présentation à distance avec la fonctionnalité d'accès distant de Slidev.
---

# Accès distant

Vous pouvez exécuter votre présentation avec un accès distant en utilisant le drapeau `--remote` :

::: code-group

```bash [pnpm]
pnpm dev --remote
# i.e. slidev --remote
```

```bash [npm]
npm run dev -- --remote
# i.e. slidev --remote
```

```bash [yarn]
yarn dev --remote
# i.e. slidev --remote
```

```bash [bun]
bun dev --remote
# i.e. slidev --remote
```

```bash [deno]
deno run dev --remote
# i.e. slidev --remote
```

:::

## Protection par mot de passe

Si vous souhaitez partager vos diapositives mais ne voulez pas que d'autres personnes accèdent au mode présentateur, vous pouvez passer un mot de passe à l'option, c'est-à-dire `--remote=votre_mot_de_passe`. Le mot de passe sera alors requis lors de l'accès au mode présentateur.

## Tunnel distant

Vous pouvez ouvrir un [Cloudflare Quick Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) pour exposer votre serveur local à Internet. Ainsi, vous pouvez partager vos diapositives avec d'autres sans configurer de serveur.

::: code-group

```bash [pnpm]
pnpm dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [npm]
npm run dev -- --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [yarn]
yarn dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [bun]
bun dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [deno]
deno run dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

:::
