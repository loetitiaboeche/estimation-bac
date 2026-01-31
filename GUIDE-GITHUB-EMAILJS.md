# 🚀 Guide Complet : Déployer estimation-bac.fr avec GitHub Pages

## 📋 Ce guide vous explique comment :
1. ✅ Acheter le domaine `estimation-bac.fr`
2. ✅ Déployer l'application sur GitHub Pages (gratuit)
3. ✅ Configurer EmailJS pour recevoir les inscriptions par email
4. ✅ Connecter votre domaine à GitHub

**Temps total : 30 minutes | Coût : ~8€/an (domaine uniquement)**

---

## ÉTAPE 1 : Acheter le domaine estimation-bac.fr (10 min)

### 1.1 Vérifier la disponibilité

1. Allez sur **https://www.ovh.com/fr/domaines/**
2. Tapez `estimation-bac.fr` dans la barre de recherche
3. Si disponible, cliquez sur **"Ajouter au panier"**
4. Prix : environ 6-8€ HT/an

### 1.2 Finaliser l'achat

1. Créez un compte OVH (ou connectez-vous)
2. Choisissez :
   - Durée : 1 an minimum (vous pouvez activer le renouvellement auto)
   - DNS : **Laissez les DNS par défaut pour l'instant**
3. Validez le paiement

✅ **Félicitations ! Vous êtes propriétaire de estimation-bac.fr**

---

## ÉTAPE 2 : Créer votre compte GitHub (5 min)

### 2.1 Si vous avez déjà un compte GitHub
→ Passez directement à l'étape 3

### 2.2 Si vous n'avez pas de compte
1. Allez sur **https://github.com**
2. Cliquez sur **"Sign up"**
3. Créez votre compte (gratuit)

---

## ÉTAPE 3 : Créer le repository GitHub (5 min)

### 3.1 Créer un nouveau repository

1. Une fois connecté sur GitHub, cliquez sur le **"+"** en haut à droite
2. Sélectionnez **"New repository"**
3. Remplissez :
   - **Repository name** : `estimation-bac`
   - **Description** : "Calculateur de résultats au baccalauréat général"
   - **Public** ✅ (obligatoire pour GitHub Pages gratuit)
   - **Add a README file** ✅ (cochez cette case)
4. Cliquez sur **"Create repository"**

### 3.2 Uploader les fichiers de l'application

1. Dans votre repository, cliquez sur **"Add file" > "Upload files"**
2. Glissez-déposez TOUS les fichiers du dossier `calculateur-bac-deploy` :
   - `index.html`
   - `README.md`
   - `netlify.toml` (pas nécessaire mais gardez-le)
   - `google-script.js` (optionnel, juste pour référence)
3. En bas de la page :
   - Commit message : "Premier déploiement de l'application"
   - Cliquez sur **"Commit changes"**

---

## ÉTAPE 4 : Activer GitHub Pages (2 min)

### 4.1 Configuration

1. Dans votre repository, cliquez sur **"Settings"** (⚙️ en haut)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous "Source" :
   - **Branch** : Sélectionnez `main`
   - **Folder** : Sélectionnez `/ (root)`
4. Cliquez sur **"Save"**

### 4.2 Récupérer votre URL temporaire

Attendez 1-2 minutes, puis rafraîchissez la page.
Vous verrez apparaître :
```
Your site is live at https://VOTRE-USERNAME.github.io/estimation-bac/
```

✅ **Testez cette URL ! Votre application est déjà en ligne !**

---

## ÉTAPE 5 : Configurer EmailJS pour recevoir les inscriptions (10 min)

### 5.1 Créer un compte EmailJS

1. Allez sur **https://www.emailjs.com**
2. Cliquez sur **"Sign Up"** (gratuit jusqu'à 200 emails/mois)
3. Créez votre compte avec votre email

### 5.2 Ajouter un service email

1. Une fois connecté, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"** (ou votre fournisseur email)
4. Connectez votre compte Gmail
5. Nommez le service : `estimation_bac_service`
6. Cliquez sur **"Create Service"**
7. **NOTEZ le Service ID** (exemple : `service_abc123`)

### 5.3 Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template :

**Subject** :
```
Nouvelle inscription - estimation-bac.fr
```

**Content** (Corps du message) :
```
Nouvelle inscription sur estimation-bac.fr

Email : {{user_email}}
Prénom : {{user_name}}
Date : {{submission_date}}
Heure : {{submission_time}}

---
Envoyé automatiquement depuis estimation-bac.fr
```

4. **Settings** (en haut à droite) :
   - **To Email** : Votre adresse email (où vous voulez recevoir les notifications)
   - **From Name** : `Estimation Bac`
   - **Reply To** : `{{user_email}}` (pour pouvoir répondre directement)

5. **Test it** : Envoyez un test pour vérifier
6. **Save** : Enregistrez le template
7. **NOTEZ le Template ID** (exemple : `template_xyz789`)

### 5.4 Récupérer votre Public Key

1. Allez dans **"Account" > "General"**
2. Trouvez votre **"Public Key"** (exemple : `user_AbC123XyZ`)
3. **NOTEZ-LE**

---

## ÉTAPE 6 : Intégrer EmailJS dans votre code (5 min)

### 6.1 Modifier le fichier index.html

1. Dans votre repository GitHub, ouvrez le fichier **`index.html`**
2. Cliquez sur l'icône **crayon (✏️)** pour éditer
3. Cherchez la ligne ~1370 (utilisez Ctrl+F pour chercher `emailjs`)

**Trouvez cette section :**
```javascript
function sendEmailData(email, name) {
    // CONFIGURATION EMAILJS - À COMPLÉTER
    const serviceID = 'VOTRE_SERVICE_ID';
    const templateID = 'VOTRE_TEMPLATE_ID';
    const publicKey = 'VOTRE_PUBLIC_KEY';
```

**Remplacez par vos vraies valeurs :**
```javascript
function sendEmailData(email, name) {
    // CONFIGURATION EMAILJS
    const serviceID = 'service_abc123';  // ← Votre Service ID
    const templateID = 'template_xyz789';  // ← Votre Template ID
    const publicKey = 'user_AbC123XyZ';  // ← Votre Public Key
```

4. Descendez un peu et vérifiez que ce code est présent :

```javascript
    emailjs.init(publicKey);
    
    const templateParams = {
        user_email: email,
        user_name: name || 'Non renseigné',
        submission_date: new Date().toLocaleDateString('fr-FR'),
        submission_time: new Date().toLocaleTimeString('fr-FR')
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            console.log('Email envoyé avec succès !');
        })
        .catch((error) => {
            console.error('Erreur envoi email:', error);
        });
}
```

5. En bas de la page :
   - Commit message : "Configuration EmailJS"
   - Cliquez sur **"Commit changes"**

### 6.2 Ajouter la librairie EmailJS

1. Ouvrez à nouveau `index.html` pour édition
2. Cherchez la ligne avec `</head>` (fin du head)
3. **JUSTE AVANT** `</head>`, ajoutez :

```html
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
</head>
```

4. Commit : "Ajout librairie EmailJS"

---

## ÉTAPE 7 : Connecter votre domaine estimation-bac.fr (10 min)

### 7.1 Configuration dans GitHub

1. Retournez dans **Settings > Pages** de votre repository
2. Sous **"Custom domain"**, entrez : `estimation-bac.fr`
3. Cliquez sur **"Save"**
4. ⚠️ Vous verrez une erreur : c'est normal, il faut configurer OVH

### 7.2 Configuration DNS chez OVH

1. Connectez-vous à votre **espace client OVH**
2. Allez dans **"Noms de domaine" > "estimation-bac.fr"**
3. Cliquez sur l'onglet **"Zone DNS"**
4. Cliquez sur **"Ajouter une entrée"**

**Ajoutez ces 5 enregistrements :**

**Enregistrement 1 - A Record**
- Type : `A`
- Sous-domaine : (vide)
- Cible : `185.199.108.153`
- Cliquez sur "Suivant" puis "Valider"

**Enregistrement 2 - A Record**
- Type : `A`
- Sous-domaine : (vide)
- Cible : `185.199.109.153`

**Enregistrement 3 - A Record**
- Type : `A`
- Sous-domaine : (vide)
- Cible : `185.199.110.153`

**Enregistrement 4 - A Record**
- Type : `A`
- Sous-domaine : (vide)
- Cible : `185.199.111.153`

**Enregistrement 5 - CNAME**
- Type : `CNAME`
- Sous-domaine : `www`
- Cible : `VOTRE-USERNAME.github.io.` (avec le point à la fin !)
- Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub

5. Cliquez sur **"Valider"**

### 7.3 Attendre la propagation DNS

⏰ **Patience !** La propagation DNS peut prendre 4-48h (généralement 2-6h)

Pendant ce temps :
- Votre site reste accessible via l'URL GitHub
- Vous pouvez déjà tester l'inscription email

---

## ÉTAPE 8 : Activer HTTPS (automatique)

Une fois la propagation DNS terminée :

1. Retournez dans **Settings > Pages**
2. Cochez **"Enforce HTTPS"**
3. Attendez 5-10 minutes

✅ Votre site sera accessible en HTTPS : `https://estimation-bac.fr`

---

## ✅ VÉRIFICATION FINALE

### Testez votre site :

1. **Accès** : https://estimation-bac.fr
2. **Modal email** : Doit s'afficher au chargement
3. **Inscription** :
   - Entrez un email de test
   - Cliquez sur "Accéder au calculateur"
   - **Vérifiez votre boîte email** : vous devez recevoir une notification !
4. **Fonctionnalités** :
   - Upload de PDF
   - Saisie manuelle
   - Calculs
   - Simulation

---

## 📊 SUIVI DES INSCRIPTIONS

### Où voir vos inscriptions ?

1. **Dans votre boîte email** : Vous recevrez un email à chaque inscription
2. **Dashboard EmailJS** : https://dashboard.emailjs.com
   - Allez dans "Email History"
   - Vous verrez tous les emails envoyés

### Organiser les emails

Créez un filtre Gmail :
1. Dans Gmail, cherchez : `from:(noreply@emailjs.com)`
2. Créez un filtre automatique
3. Appliquez un label : "Inscriptions Bac"

---

## 🔄 MISES À JOUR DE L'APPLICATION

Pour modifier l'application :

1. Allez dans votre repository GitHub
2. Ouvrez le fichier à modifier
3. Cliquez sur l'icône crayon ✏️
4. Faites vos modifications
5. Commit changes
6. **Attendez 1-2 minutes** → Votre site est automatiquement mis à jour !

---

## 💰 COÛTS

| Service | Coût |
|---------|------|
| **Domaine estimation-bac.fr** (OVH) | 6-8€/an |
| **GitHub Pages** | GRATUIT ✅ |
| **EmailJS** | GRATUIT jusqu'à 200 emails/mois ✅ |
| **HTTPS (SSL)** | GRATUIT ✅ |
| **TOTAL** | **~8€/an** 🎉 |

Si vous dépassez 200 inscriptions/mois :
- EmailJS Pro : 7$/mois (1000 emails)

---

## ❓ DÉPANNAGE

### "Le domaine ne fonctionne pas"
→ Attendez 24-48h pour la propagation DNS
→ Vérifiez les enregistrements DNS sur OVH

### "Je ne reçois pas les emails"
→ Vérifiez vos spams
→ Testez le template dans EmailJS
→ Vérifiez que les 3 IDs sont corrects dans le code

### "L'application ne se charge pas"
→ Ouvrez la console du navigateur (F12)
→ Vérifiez les erreurs JavaScript
→ Assurez-vous que tous les fichiers sont bien uploadés

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant :
- ✅ Un site professionnel : **estimation-bac.fr**
- ✅ Hébergement gratuit et fiable
- ✅ Collecte automatique des emails
- ✅ Application 100% fonctionnelle
- ✅ Coût minimal : ~8€/an

---

## 📞 BESOIN D'AIDE ?

- Documentation GitHub Pages : https://pages.github.com
- Documentation EmailJS : https://www.emailjs.com/docs/
- Support OVH : https://www.ovh.com/fr/support/

**Bonne chance avec votre projet ! 🚀**
