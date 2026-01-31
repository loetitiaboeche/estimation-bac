# 📚 Calculateur Bac Général 2025-2026

Application web pour estimer les résultats au baccalauréat général français.

## 🚀 Déploiement rapide et gratuit

### Option 1 : Netlify (Recommandé - Le plus simple)

1. **Créer un compte sur Netlify** : https://www.netlify.com
2. **Glisser-déposer** le dossier complet dans Netlify Drop
3. Votre site sera en ligne en quelques secondes avec une URL comme : `votre-app.netlify.app`
4. **Personnaliser l'URL** (optionnel) : Dans les paramètres du site

**Alternative via Git :**
```bash
# 1. Installez Netlify CLI
npm install -g netlify-cli

# 2. Connectez-vous
netlify login

# 3. Déployez
netlify deploy --prod
```

### Option 2 : Vercel

1. **Créer un compte** : https://vercel.com
2. **Importer le projet** : Cliquez sur "New Project" et glissez le dossier
3. Déployé en quelques secondes !

**Alternative via CLI :**
```bash
# 1. Installez Vercel CLI
npm install -g vercel

# 2. Déployez
vercel --prod
```

### Option 3 : GitHub Pages

1. **Créer un repository GitHub**
2. **Pusher le code** :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/calculateur-bac.git
git push -u origin main
```
3. **Activer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : `main` branch
   - Votre site sera sur : `https://VOTRE_USERNAME.github.io/calculateur-bac`

## 📧 Configuration de la collecte d'emails

### Option A : Google Sheets (Recommandé pour débuter)

1. **Créer un Google Sheet**
2. **Créer un Google Apps Script** :
   - Outils > Éditeur de script
   - Coller le code suivant :

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.email,
    data.name,
    data.source
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Déployer** : Déployer > Nouveau déploiement > Application Web
4. **Copier l'URL** et la mettre dans `index.html` ligne 841 :
```javascript
const googleScriptURL = 'VOTRE_URL_ICI';
```

### Option B : Formspree (Sans code)

1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Remplacer la fonction `sendEmailData()` par :
```javascript
function sendEmailData(email, name) {
    fetch('https://formspree.io/f/VOTRE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
    });
}
```

### Option C : EmailJS (Envoi par email)

1. Créer un compte sur https://www.emailjs.com
2. Configurer un service email
3. Créer un template
4. Remplacer la fonction `sendEmailData()` avec le code EmailJS

## 🎨 Personnalisation

### Changer les couleurs
Modifier les valeurs dans `index.html` :
- Couleur principale : `#667eea`
- Couleur secondaire : `#764ba2`

### Ajouter un logo
Ajouter dans le `<header>` :
```html
<img src="logo.png" alt="Logo" style="height: 50px;">
```

### Modifier le texte du modal
Ligne 308-311 dans `index.html`

## 📱 Responsive

L'application fonctionne parfaitement sur :
- 💻 Ordinateurs
- 📱 Téléphones
- 🖥️ Tablettes

## 🔧 Support

Pour toute question : contact@votre-domaine.fr

## 📄 Licence

Application gratuite pour usage éducatif.

---

Fait avec ❤️ pour les lycéens français
