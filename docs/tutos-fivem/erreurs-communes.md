---
sidebar_position: 4
---

# Erreurs communes

### Erreurs 1, 2, 126, 127, et 134

Ces erreurs sont liées au dossier Alpine qui serait mal installé ou tout simplement inexistant. Pour le régler il faut :

- Aller sur votre [Panel de jeu](https://panel.exohost.fr)
- Puis aller dans **Paramètres**
- Ensuite, cliquez sur **REINSTALL SERVER**

![Supprimer son serveur](https://i.imgur.com/sdu1Z6w.png)

Votre serveur sera remis à zéro et fonctionnera parfaitement.

### Erreurs 133, 134 et 143

Ces erreurs sont liées à la clé de licence Patreon. Pour la régler, vérifier si votre clé est bien mise dans votre ``server.cfg``.

### Erreurs 145

Ces erreurs sont liés à une mauvaise configuration dans le ``server.cfg``. Pour régler ceci, vérifier si :

- Votre fichier `server.cfg` a bien ces lignes dedans :
 
```py title="server.cfg"
# Remplacez PORT par le port de votre serveur
endpoint_add_tcp 0.0.0.0:PORT
endpoint_add_udp 0.0.0.0:PORT
```
