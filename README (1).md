# 📚 Estimation Bac - Version 2.0

## Application de calcul d'estimation pour le Baccalauréat Général 2025-2026

---

## 🎯 Description

Application web permettant aux élèves de Première et Terminale d'estimer leurs résultats au baccalauréat général en important leurs bulletins de notes (PDF) ou en saisissant manuellement leurs notes.

**Basée sur les données officielles du Ministère de l'Éducation Nationale.**

---

## ✨ Nouveautés Version 2.0

### Vérification Intelligente
- Détection automatique de la classe (Première/Terminale)
- Détection automatique du trimestre/semestre
- Affichage des notes extraites dans un tableau interactif
- Possibilité de corriger chaque note avant validation
- Indication des coefficients pour chaque matière

### Transparence des Calculs
- Bouton "Voir le détail du calcul"
- Affichage étape par étape :
  - Note × Coefficient pour chaque matière
  - Somme totale ÷ Total des coefficients = Moyenne
- Formule officielle du Ministère expliquée

### Informations Pédagogiques
- Onglet "Comment ça marche ?" avec explications complètes
- Onglet "Coefficients" avec tableaux détaillés
- Liens vers les sources officielles
- Explication des mentions et du rattrapage

---

## 🛠️ Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **PDF** : PDF.js (extraction de texte)
- **Responsive** : Design adaptatif mobile/tablette/desktop
- **Hébergement** : GitHub Pages (gratuit)

---

## 📊 Fonctionnalités

### Import et Analyse
1. Upload de bulletin PDF
2. Extraction automatique des notes avec PDF.js
3. Détection de la classe et du trimestre
4. Affichage dans un tableau de vérification

### Vérification Interactive
- Tableau récapitulatif avec toutes les données extraites
- Champs éditables pour corriger les notes
- Indication des coefficients officiels
- Boutons Valider / Annuler

### Calcul et Résultats
- Calcul basé sur les coefficients officiels (100 au total)
- Affichage de la moyenne estimée
- Détermination de la mention
- Indicateur visuel (barre de progression)
- Détail complet du calcul disponible

### Navigation par Onglets
- **Import Bulletin** : Upload et calcul
- **Comment ça marche ?** : Explications pédagogiques
- **Coefficients** : Tableaux détaillés CC + Épreuves

---

## 📐 Méthodologie de Calcul

### Contrôle Continu (40 coefficients)
- Spécialité abandonnée (1ère) : 8
- LVA : 6 (3 en 1ère + 3 en Term)
- LVB : 6 (3 en 1ère + 3 en Term)
- Histoire-Géo : 6 (3 en 1ère + 3 en Term)
- Enseignement Scientifique : 6 (3 en 1ère + 3 en Term)
- EPS : 6 (Terminale uniquement)
- EMC : 2 (1 en 1ère + 1 en Term)

### Épreuves Terminales (60 coefficients)
- Français écrit : 5
- Français oral : 5
- Philosophie : 8
- Spécialité 1 : 16
- Spécialité 2 : 16
- Grand oral : 10

### Mentions
- Assez Bien (AB) : 12 ≤ moyenne < 14
- Bien (B) : 14 ≤ moyenne < 16
- Très Bien (TB) : 16 ≤ moyenne < 18
- Très Bien avec Félicitations : moyenne ≥ 18

### Rattrapage
- Accessible entre 8 et 10
- 2 épreuves orales au choix
- Pas de mention possible après rattrapage

---

## 🗂️ Structure des Fichiers

```
estimation-bac/
│
├── index.html                    # Application complète (Version 2.0)
├── LISEZ-MOI-EN-PREMIER.md      # Guide de démarrage rapide
├── GUIDE-GITHUB.md              # Guide complet GitHub Pages
├── README.md                     # Ce fichier (documentation)
├── google-script.js              # Script Google Sheets (optionnel)
└── netlify.toml                  # Config Netlify (optionnel)
```

---

## 🚀 Déploiement

### GitHub Pages (Recommandé - Gratuit)

1. Créer un repository GitHub
2. Uploader les fichiers
3. Activer GitHub Pages dans Settings > Pages
4. Le site est accessible via : `username.github.io/repository-name`

### Netlify (Alternative)

1. Créer un compte Netlify
2. Glisser-déposer le dossier
3. Le site est accessible via : `random-name.netlify.app`

### Domaine Personnalisé

1. Acheter un domaine (ex: estimation-bac.fr)
2. Configurer les DNS pour pointer vers GitHub Pages
3. Activer HTTPS dans les paramètres

---

## 🔐 Sécurité et Confidentialité

- Aucune donnée n'est envoyée à un serveur
- Traitement 100% côté client (dans le navigateur)
- Aucun cookie, aucun tracking
- Code open-source et auditable

---

## 📱 Compatibilité

- ✅ Chrome/Edge (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS/Android)
- ✅ Tablette

---

## 📚 Sources Officielles

Toutes les informations proviennent du **Ministère de l'Éducation Nationale** :

- [Comment calculer votre note au baccalauréat](https://www.education.gouv.fr/reussir-au-lycee/comment-calculer-votre-note-au-baccalaureat-325511)
- [Le baccalauréat général](https://www.education.gouv.fr/reussir-au-lycee/le-baccalaureat-general-10457)

---

## 🐛 Limitations Connues

### Extraction PDF
- La qualité de l'extraction dépend du format du bulletin
- Certains formats de bulletins peuvent ne pas être correctement analysés
- **Solution** : Vérification et correction manuelle intégrées dans la Version 2.0

### Calcul Partiel
- L'application ne calcule que le contrôle continu
- Les épreuves terminales doivent être estimées par l'élève
- **Note** : Il s'agit d'une estimation, pas du résultat officiel

---

## 🔄 Mises à Jour

### Version 2.0 (Janvier 2026)
- ✅ Vérification intelligente des notes extraites
- ✅ Détection classe et trimestre
- ✅ Détail transparent des calculs
- ✅ Informations pédagogiques complètes
- ✅ Navigation par onglets
- ✅ Sources officielles citées

### Version 1.0 (Janvier 2026)
- ✅ Import bulletin PDF
- ✅ Extraction automatique des notes
- ✅ Calcul de l'estimation
- ✅ Affichage des résultats et mentions

---

## 📞 Support

Pour toute question ou suggestion :
- Ouvrir une issue sur GitHub
- Consulter les guides fournis
- Vérifier les sources officielles

---

## 📄 Licence

Ce projet est open-source. Les données utilisées proviennent de sources publiques officielles.

---

## 🙏 Remerciements

- Ministère de l'Éducation Nationale pour les données officielles
- PDF.js pour la librairie d'extraction PDF
- GitHub pour l'hébergement gratuit

---

**Développé pour aider les élèves à mieux comprendre et anticiper leurs résultats au baccalauréat.**

**Version 2.0 - Janvier 2026**
