---
sidebar_position: 4
---

# Mettre le plugin Dynmap

Téléchargez Dynmap [en cliquant ici ](https://www.spigotmc.org/resources/dynmap.274/) puis, mettez le dans le dossier
``plugins`` de votre serveur. Une fois cela fait, redémarrez votre
serveur.

### Alouer un port

Une fois le plugin installé, vous allez devoir allouer à Dynmap un port. Pour cela, rendez vous dans les Paramètres avancés, puis, Paramètres d'allocations
Une fois cela fait, choisissez un port dans la liste de ceux disponibles puis cliquez sur Ajouter.

### Configurer le plugin

- Dans le dossier plugins, trouvez le dossier Dynmap puis ouvrez le fichier **configuration.txt**

- Une fois dans le fichier, cherchez la ligne où il y a écrit **deftemplatesuffix**: puis mettez la valeur sur **vlowres ou lowres**.
Sachant que Dynmap génère une image pour chaque chunk de votre map, il est donc important de définir la qualité sur le plus basse possible pour utiliser le moins d'espace sur votre serveur.

- Toujours dans le même fichier, cherchez la ligne webserver-port: puis mettez le port défini plus tôt dans les allocations.

- Vous pouvez maintenant démarrer votre serveur. Une fois cela fait, faites dans la console cette commande pour pouvoir générer la Dynmap pour un de vos mondes : **dynmap fullrender**

- Vous pouvez désormais accéder à votre Dynmap depuis votre navigateur en entrant dans votre barre d'adresse :
**IP d'allocation : Port d'allocation**