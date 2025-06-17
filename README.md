# Extension Auto-Connexion ENT CESI

Une extension Chrome qui automatise la connexion à l'ENT (Environnement Numérique de Travail) de CESI en remplissant automatiquement vos identifiants.

## 📋 Description

Cette extension simplifie l'accès à l'ENT CESI en :
- Remplissant automatiquement l'email sur la première page
- Saisissant vos identifiants (nom d'utilisateur et mot de passe) sur la page de connexion
- Soumettant automatiquement les formulaires

## 🚀 Installation

### 1. Téléchargement
Téléchargez ou clonez ce projet sur votre ordinateur.

### 2. Configuration des identifiants
Modifiez le fichier `content.js` :
```javascript
const CONFIG = {
  username: "VOTRE_NOM_UTILISATEUR", // Remplacez par votre nom d'utilisateur CESI
  password: "VOTRE_MOT_DE_PASSE"     // Remplacez par votre mot de passe CESI
};
```

### 3. Installation dans Chrome
1. Ouvrez Chrome et allez dans `chrome://extensions/`
2. Activez le "Mode développeur" (en haut à droite)
3. Cliquez sur "Charger l'extension non empaquetée"
4. Sélectionnez le dossier contenant les fichiers de l'extension
5. L'extension est maintenant installée !

## 📁 Structure du projet

```
authentificationENT_CESI/
├── manifest.json    # Configuration de l'extension Chrome
├── content.js       # Script principal d'automatisation
└── README.md        # Documentation
```

## 🔧 Fonctionnement

L'extension fonctionne en deux étapes :

### Étape 1 : Page de sélection
- **URL** : `https://wayf.cesi.fr/login?service=...`
- **Action** : Remplit automatiquement l'email `a@viacesi.fr` et soumet le formulaire

### Étape 2 : Page de connexion
- **URL** : `https://sts.viacesi.fr/adfs/ls/*`
- **Action** : Remplit vos identifiants personnels et soumet le formulaire de connexion

## ⚙️ Configuration

### Permissions requises
- `activeTab` : Permet à l'extension d'accéder à l'onglet actif pour remplir les formulaires

### URLs surveillées
L'extension s'active uniquement sur :
- `https://wayf.cesi.fr/login?service=https%3A%2F%2Fent.cesi.fr%2Fservlet%2Fcom.jsbsoft.jtf.core.SG%3FPROC%3DIDENTIFICATION_FRONT`
- `https://sts.viacesi.fr/adfs/ls/*`

## ⚠️ Sécurité

**Important** : Cette extension stocke vos identifiants en texte brut dans le fichier `content.js`. 

### Recommandations de sécurité :
- Ne partagez jamais le fichier `content.js` avec vos identifiants
- Utilisez cette extension uniquement sur votre ordinateur personnel
- Changez vos mots de passe régulièrement
- Désinstallez l'extension si vous n'en avez plus besoin

## 🐛 Dépannage

### L'extension ne fonctionne pas
1. Vérifiez que vos identifiants sont correctement configurés dans `content.js`
2. Assurez-vous que l'extension est activée dans Chrome
3. Rechargez l'extension depuis `chrome://extensions/`
4. Vérifiez la console du navigateur (F12) pour d'éventuelles erreurs

### Messages de log
L'extension affiche des messages dans la console :
- `"Email rempli: a@viacesi.fr"` : Premier formulaire rempli
- `"Première page soumise"` : Redirection vers la page de connexion
- `"Identifiants remplis"` : Identifiants saisis
- `"REUSSI BRAVO LOUIS"` : Connexion réussie

## 📝 Notes

- L'extension attend 1 seconde après le chargement de la page avant d'agir
- Les formulaires sont soumis avec un délai de 500ms pour assurer la compatibilité
- L'extension fonctionne uniquement avec l'ENT CESI

## 🤝 Contribution

Pour contribuer à ce projet :
1. Forkez le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Créez une Pull Request

## 📄 License

Ce projet est sous licence libre. Utilisez-le à vos propres risques.
