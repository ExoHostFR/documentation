---
sidebar_position: 3
---

# Installer FiveM sur un VPS

Bonjour à vous et bienvenue sur ce tuto simple et rapide pour installer FiveM sur votre VPS.

### Prérequis

> - Un serveur sous Linux (Chez [ExoHost](https://exohost.fr/store/vps) par exemple)
> - Un client SSH pour vous y connecter (Comme Putty)

Dans ce tutoriel, nous allons utiliser Debian 11.

### Installation

D'abord, nous allons installer les prérequis

```bash
apt update && apt upgrade -y
apt install wget git nano screen -y
```

Ensuite, il faut créer le dossier qui contiendra votre serveur FiveM et y importer les ressources de FiveM

```bash
mkdir -p /root/FXServer/server && cd /root/FXServer/server
wget https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/5104-5ebb6dfe826667c841027d6dbc7390e42abfb196/fx.tar.xz 
tar xf fx.tar.xz
git clone https://github.com/citizenfx/cfx-server-data.git /root/FXServer/server-data
```
*Note, la version d'artifact mise est la 5104, vous pouvez la changer en remplacent le lien par celui que vous choisissez [ici](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/)*

### Configuration

D'abord, il va falloir créer le fichier ``server.cfg`` et introduire ceci 

```py title="server.cfg"
# Only change the IP if you're using a server with multiple network interfaces, otherwise change the port only.
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"

# These resources will start by default.
ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager
ensure basic-gamemode
ensure hardcap
ensure rconlog

# This allows players to use scripthook-based plugins such as the legacy Lambda Menu.
# Set this to 1 to allow scripthook. Do note that this does _not_ guarantee players won't be able to use external plugins.
sv_scriptHookAllowed 0

# Uncomment this and set a password to enable RCON. Make sure to change the password - it should look like rcon_password "YOURPASSWORD"
#rcon_password ""

# A comma-separated list of tags for your server.
# For example:
# - sets tags "drifting, cars, racing"
# Or:
# - sets tags "roleplay, military, tanks"
sets tags "default"

# A valid locale identifier for your server's primary language.
# For example "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "fr-FR" 
# please DO replace root-AQ on the line ABOVE with a real language! :)

# Set an optional server info and connecting banner image url.
# Size doesn't matter, any banner sized image will be fine.
#sets banner_detail "https://url.to/image.png"
#sets banner_connecting "https://url.to/image.png"

# Set your server's hostname
sv_hostname "Mon serveur FIveM"

# Nested configs!
#exec server_internal.cfg

# Loading a server icon (96x96 PNG file)
#load_server_icon myLogo.png

# convars which can be used in scripts
set temp_convar "hey world!"

# Remove the `#` from the below line if you do not want your server to be listed in the server browser.
# Do not edit it if you *do* want your server listed.
#sv_master1 ""

# Add system admins
add_ace group.admin command allow # allow all commands
add_ace group.admin command.quit deny # but don't allow quit
add_principal identifier.fivem:1 group.admin # add the admin to the group

# enable OneSync (required for server-side state awareness)
set onesync on

# Server player slot limit (see https://fivem.net/server-hosting for limits)
sv_maxclients 48

# Steam Web API key, if you want to use Steam authentication (https://steamcommunity.com/dev/apikey)
# -> replace "" with the key
set steam_webApiKey ""

# License key for your server (https://keymaster.fivem.net)
sv_licenseKey changeme
```

Pensez à mettre la clé de licence ``sv_licenseKey`` ainsi que votre clé Steam API ``steam_webApiKey``.

### Démarrage

Maintenant, vous pouvez démarrer votre serveur avec cette commande. Le serveur démarrera dans un screen, ce qui empêchera la fermeture de votre serveur lorsque vous fermerez le terminal.

```bash
# Sans txAdmin
screen -dmS fivem bash /root/FXServer/server/run.sh +exec /root/FXServer/server-data/server.cfg
# Avec txAdmin (qui sera accessible sur IP:40120)
screen -dmS fivem bash /root/FXServer/server/run.sh +exec /root/FXServer/server-data/server.cfg  +set txAdminPort 40120
```

Pour vous reconnecter au screen pour accéder à la console FiveM, il faut utiliser la commande

```bash
screen -r fivem 
```
Pour se déconnecter sans fermer le screen, il faut faire ``CTRL + A + D``

Voilà, votre serveur FiveM est installé et vous pouvez vous connecter avec ``connect VOTREIP``