---
sidebar_position: 3
---

# Mettre un sous-domaine

Bonjour à vous et bienvenue sur ce tuto simple et rapide pour mettre un sous domaine style **play.monserveur.com** sur votre serveur FiveM (GTA RP).

### Prérequis

> - Un nom de domaine (Ici, on l'a mis sur Cloudflare, mais ca marche avec les autres sites sans problème)
> - Un serveur de jeux (Chez [ExoHost](https://exohost.fr/store/gtarp) par exemple)

*Dans cet exemple, je possède le domaine `dek.am` et je veux me connecter avec `play.dek.am` sur mon serveur `srv01.exohost.fr:25987`.*

### Redirection CNAME

D'abord, faites une redirection **CNAME** sur votre adresse de connexion de base (dans mon exemple, c'est `srv01.exohost.fr:25987`) comme indiqué ci-dessous :

> ![Mettre un sous domaine - #1](https://i.imgur.com/8UxUIYV.png)

> - Type : **CNAME**
> - Nom : ce que vous voulez (dans mon cas, j'ai mis ``*play*`` pour avoir play.dek.am)
> - Cible : votre adresse de connexion de base (dans mon cas, j'ai mis ``srv01.exohost.fr:25987``)

### Redirection SRV

Ensuite, faite une autre redirection **SRV** pour pouvoir vous connecter sans mettre de port à votre adresse de connexion comme ceci :
`

> ![Mettre un sous domaine - #2](https://i.imgur.com/jC03tOT.png)
> - Type : **SRV**
> - Nom : ce que vous voulez (dans mon cas, j'ai mis ``*play*`` pour avoir play.dek.am)
> - Service : **_cfx**
> - Protocole : **UDP**
> - Priorité : **3600**
> - Poids : **5**
> - Port : Le port de votre serveur
> - Cible : Ce que vous avez mis dans l'étape précedente

Maintenant, vous pouvez vous connecter avec l'adresse, dans mon exemple, avec `connect play.dek.am`