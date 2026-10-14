# IP Consent Demo

Démo pédagogique : l'adresse IP n'est enregistrée qu'après consentement explicite du visiteur.

## Lancer en local

1. Installer Node.js 18+.
2. Dans le dossier du projet : `npm install`
3. Définir un jeton admin :
   - macOS/Linux : `export ADMIN_TOKEN="un-mot-de-passe-long-et-aleatoire"`
   - PowerShell : `$env:ADMIN_TOKEN="un-mot-de-passe-long-et-aleatoire"`
4. Lancer : `npm start`
5. Ouvrir `http://localhost:3000`
6. Dashboard : `http://localhost:3000/dashboard.html`

## Déploiement

Le projet complet nécessite un hébergement Node.js : GitHub Pages seul ne peut pas exécuter `server.js`.
Tu peux conserver le code sur GitHub puis déployer l'application sur un hébergeur Node compatible.

Configure toujours `ADMIN_TOKEN` comme variable d'environnement et ne le mets jamais dans GitHub.

## Important

- N'utilise cette démo que pour tes propres tests ou avec le consentement des participants.
- Les entrées sont conservées uniquement en mémoire et disparaissent au redémarrage du serveur.
- Selon l'hébergeur, la gestion des proxies peut nécessiter un réglage adapté.
