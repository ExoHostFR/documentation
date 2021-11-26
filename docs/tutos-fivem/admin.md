---
sidebar_position: 3
---

# Se mettre Administrateur

Bonjour à vous et bienvenue sur ce tuto simple et rapide pour se mettre administrateur sur son serveur GTA.

### Prérequis

> - Un base de donnée reliée ([Voir le tutoriel](https://docs.exohost.fr/docs/tutos-fivem/liaison-sql))
> - Un serveur de jeux (Chez [ExoHost](https://exohost.fr/store/gtarp) par exemple)

### Connexion phpMyAdmin

*Avant de suivre ces étapes, il est nécessaire d'avoir une base de donnée liée ([Voir le tutoriel](https://docs.exohost.fr/docs/tutos-fivem/liaison-sql) et de s'être déja connecté au moins une fois sur son serveur*

D'abord, connectez vous sur un client SQL, dans notre tuto, nous utilisons [phpMyAdmin](https://panel.exohost.fr/phpmyadmin/) mais vous pouvez également utiliser HeidiSQL.
Ensuite, dans votre base de donnée, cliquez sur la table **users**

> ![Table user](https://media.discordapp.net/attachments/912096804122800198/913870999106224148/unknown.png?width=167&height=585)

Localisez votre utilisateur à l'aide de la colonne ``name``.

> ![Table user](https://media.discordapp.net/attachments/912096804122800198/913871530793005126/unknown.png?width=1080&height=55)

Allez dans la colonne **permission_level** et introduisez la valeur ``4``, puis allez dans **group**, et introduisez la valeur ``superadmin``

> ![Table user](https://media.discordapp.net/attachments/912096804122800198/913871838118027324/unknown.png)


Maintenant, vous avez le grade administrateur sur votre serveur.