---
sidebar_position: 5
---

# Liaison SQL

Je vais vous montrer comment relier votre base de données correctement 

### Prérequis

> - Un serveur GTA RP (Chez [ExoHost](https://exohost.fr/store/gtarp) par exemple)
> - La ressource MySQL-Async ([Lien pour la télécharger](https://github.com/brouznouf/fivem-mysql-async))

### Création de votre db

Connectez-vous sur votre [panel de jeu](https://panel.exohost.fr) et allez dans **Bases de données**.
Créer votre db avec le nom de votre choix comme ici :

![Créer une DB](https://media.discordapp.net/attachments/891340351875477534/903450208074100776/unknown.png)

Cliquez ensuite sur le petit oeil pour voir les identifiants :
![Voir les ID #1](https://media.discordapp.net/attachments/891340351875477534/903450511095762954/unknown.png?width=1080&height=90)

![Voir les ID #2](https://media.discordapp.net/attachments/891340351875477534/903450802654445588/unknown.png?width=904&height=585)

### Liaison SQL

- Connectez vous via le FTP (avec un client FTP comme [Filezilla](https://filezilla-project.org/) ou [WinSCP](https://winscp.net/eng/download.php]).
- Ouvrez le fichier  ``server.cfg`` et introduisez ces éléments :
 
```py title="server.cfg"
# Remplacez les informations par ceux que vous avez pris dans l'étape précedente
set mysql_connection_string "server=VOTREIP;uid=VOTREUSER;password=VOTREMDP;database=VOTREDB"
set mysql_slow_query_warning 5000
```

### Importation SQL

Connectez-vous sur **phpMyAdmin** ([Lien phpMyAdmin](https://panel.exohost.fr/phpmyadmin)) avec vos identifiants de base de donnée. Ensuite, sélectionnez votre base de donnée. 
Sélectionnez ensuite **SQL** :
![SQL #1 - phpMyAdmin](https://media.discordapp.net/attachments/891340351875477534/903452759435665439/unknown.png?width=1080&height=217)

Collez ici le contenu de votre fichier SQL puis appuyez sur **Exécuter** : 
![SQL #2 - phpMyAdmin](https://media.discordapp.net/attachments/891340351875477534/903453063417839616/unknown.png?width=1080&height=543)

Voilà, votre base de donnée est désormais prête et vous pouvez (re)démarrer votre serveur