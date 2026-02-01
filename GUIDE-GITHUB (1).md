# 🚀 Guide Complet : Mettre à jour vers Version 2.0

## 📋 Ce guide vous explique comment :
1. ✅ Remplacer l'ancienne version par la Version 2.0
2. ✅ Vérifier que tout fonctionne
3. ✅ (Optionnel) Connecter votre domaine estimation-bac.fr

**Temps total : 15 minutes**

---

## PARTIE 1 : MISE À JOUR SUR GITHUB (10 min)

### ÉTAPE 1 : Allez sur votre repository

Ouvrez : **https://github.com/loetitiaboeche/estimation-bac**

Vous devriez voir vos fichiers actuels.

---

### ÉTAPE 2 : Supprimer les anciens fichiers

**Pourquoi ?** Pour éviter les conflits et avoir une base propre.

**Comment faire :**

Pour **chaque fichier** dans la liste (index.html, README.md, etc.) :

1. **Cliquez** sur le nom du fichier
2. **En haut à droite**, cliquez sur les **3 petits points `...`**
3. Sélectionnez **"Delete file"**
4. En bas, cliquez sur **"Commit changes"**

Répétez pour tous les fichiers.

**💡 Astuce :** S'il y a des dossiers (comme `files (4)`), supprimez-les aussi.

✅ **Votre repository doit être vide** (ou presque, juste un README auto-généré si présent)

---

### ÉTAPE 3 : Uploader les nouveaux fichiers

1. **Cliquez** sur **"Add file" > "Upload files"**

2. **Glissez-déposez** ou sélectionnez **les 6 fichiers** :
   - index.html ← LE PLUS IMPORTANT
   - LISEZ-MOI-EN-PREMIER.md
   - GUIDE-GITHUB.md
   - README.md
   - google-script.js
   - netlify.toml

3. En bas, dans **"Commit message"**, écrivez :
   ```
   🎉 Version 2.0 - Vérification + Transparence + Infos pédagogiques
   ```

4. **Cliquez** sur **"Commit changes"**

---

### ÉTAPE 4 : Attendre la reconstruction (2 min)

GitHub Pages reconstruit automatiquement votre site.

⏰ Attendez 1-2 minutes.

---

### ÉTAPE 5 : Tester votre nouveau site ! 🎉

Ouvrez : **https://loetitiaboeche.github.io/estimation-bac/**

### ✅ Vérifiez que vous voyez :

1. **Header** :
   - Titre : "📚 Estimation Bac"
   - Badge : "✓ Basé sur les données officielles du Ministère"

2. **3 Onglets** :
   - 📤 Import Bulletin
   - 📖 Comment ça marche ?
   - 📊 Coefficients

3. **Onglet "Comment ça marche ?"** :
   - Explications sur le bac
   - Tableau des mentions
   - Informations sur le rattrapage
   - Lien vers le Ministère de l'Éducation

4. **Onglet "Coefficients"** :
   - Tableau Contrôle Continu (40 coef)
   - Tableau Épreuves Terminales (60 coef)

5. **Upload PDF** :
   - Zone de dépôt pour bulletin PDF
   - Après upload → Vérification avec tableau

---

## PARTIE 2 : TEST DE FONCTIONNEMENT (5 min)

### Test 1 : Navigation

- ✅ Cliquez sur les 3 onglets
- ✅ Vérifiez que le contenu change
- ✅ Vérifiez que les tableaux s'affichent bien

### Test 2 : Upload PDF (si vous avez un bulletin)

1. **Cliquez** sur la zone de dépôt
2. **Sélectionnez** un bulletin PDF
3. **Vérifiez** que vous voyez :
   - Message "Analyse en cours..."
   - Puis "✅ Extraction terminée"
   - Tableau avec classe, trimestre, notes
   - Possibilité de modifier les notes

### Test 3 : Responsive (Mobile)

1. **Réduisez** la fenêtre de votre navigateur
2. **Vérifiez** que le site reste lisible
3. **OU** testez sur votre téléphone

---

## ❌ DÉPANNAGE

### Le site n'a pas changé ?

**Solution 1 : Vider le cache**
- Windows/Linux : `Ctrl + Shift + R`
- Mac : `Cmd + Shift + R`

**Solution 2 : Navigation privée**
- Ouvrez le site en navigation privée

**Solution 3 : Attendre**
- Parfois GitHub prend jusqu'à 5 minutes

### Erreur 404 ?

**Cause :** Le fichier `index.html` n'est pas au bon endroit

**Solution :**
1. Vérifiez que `index.html` est **à la racine** du repository
2. Vérifiez qu'il s'appelle bien `index.html` (minuscules)
3. Re-uploadez-le si nécessaire

### Les onglets ne fonctionnent pas ?

**Cause :** Le JavaScript ne se charge pas

**Solution :**
1. Ouvrez la console (F12)
2. Regardez les erreurs
3. Vérifiez que le fichier `index.html` est complet

### Le PDF ne s'upload pas ?

**Cause :** La librairie PDF.js ne se charge pas

**Solution :**
1. Vérifiez votre connexion internet
2. Essayez sur un autre navigateur
3. Vérifiez les erreurs dans la console (F12)

---

## PARTIE 3 : CONNECTER VOTRE DOMAINE (Optionnel)

### Si vous avez acheté `estimation-bac.fr` :

### ÉTAPE 1 : Configuration GitHub

1. **Settings** > **Pages**
2. Sous **"Custom domain"**, entrez : `estimation-bac.fr`
3. **Save**

### ÉTAPE 2 : Configuration DNS chez OVH

1. **Espace client OVH** > **Domaines** > **estimation-bac.fr**
2. **Zone DNS** > **Ajouter une entrée**

**Ajoutez ces 4 enregistrements A :**

```
Type: A | Sous-domaine: (vide) | Cible: 185.199.108.153
Type: A | Sous-domaine: (vide) | Cible: 185.199.109.153
Type: A | Sous-domaine: (vide) | Cible: 185.199.110.153
Type: A | Sous-domaine: (vide) | Cible: 185.199.111.153
```

**Ajoutez 1 enregistrement CNAME :**

```
Type: CNAME | Sous-domaine: www | Cible: loetitiaboeche.github.io.
```

*(N'oubliez pas le point final !)*

3. **Validez**

### ÉTAPE 3 : Attendre la propagation (4-24h)

⏰ La propagation DNS prend du temps.

Pendant ce temps, votre site reste accessible via :
**https://loetitiaboeche.github.io/estimation-bac/**

### ÉTAPE 4 : Activer HTTPS

Une fois le domaine propagé :

1. **Settings** > **Pages**
2. Cochez **"Enforce HTTPS"**
3. Attendez 5-10 minutes

✅ Votre site sera sur : **https://estimation-bac.fr**

---

## 📊 RÉCAPITULATIF DES NOUVEAUTÉS V2

### Ce qui a changé :

| Fonctionnalité | Avant | Maintenant |
|----------------|-------|------------|
| Extraction PDF | Directe | Avec vérification |
| Classe/Trimestre | Non détecté | Détecté et affiché |
| Notes extraites | Cachées | Affichées dans tableau |
| Correction notes | Impossible | Possible |
| Détail calculs | Absent | Bouton "Voir détail" |
| Infos pédago | Basiques | Complètes avec tableaux |
| Sources officielles | Non citées | Citées + liens |
| Navigation | 1 page | 3 onglets |

### Résultat :

- ✅ Plus de confiance des utilisateurs
- ✅ Moins d'erreurs de calcul
- ✅ Interface plus professionnelle
- ✅ Crédibilité accrue (sources officielles)

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant :
- ✅ Une application Version 2.0 avec vérification intelligente
- ✅ Un site professionnel et crédible
- ✅ Des informations officielles du Ministère
- ✅ Une interface claire et pédagogique

---

## 📞 RESSOURCES

- **GitHub Pages** : https://pages.github.com
- **OVH Domaines** : https://www.ovh.com/fr/domaines/
- **Ministère Éducation** : https://www.education.gouv.fr

---

**Bravo pour ce beau travail ! 👏**

**Votre application est maintenant au TOP ! 🚀**
