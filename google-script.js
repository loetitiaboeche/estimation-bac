/**
 * Script Google Apps Script pour collecter les emails
 * 
 * INSTALLATION :
 * 1. Créer un Google Sheet
 * 2. Ajouter les colonnes : Date | Email | Prénom | Source
 * 3. Outils > Éditeur de script
 * 4. Coller ce code
 * 5. Déployer > Nouveau déploiement > Application Web
 * 6. Qui a accès : "Tout le monde"
 * 7. Copier l'URL de déploiement
 */

function doPost(e) {
  try {
    // Récupérer la feuille active
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parser les données envoyées
    var data = JSON.parse(e.postData.contents);
    
    // Ajouter une nouvelle ligne avec les données
    sheet.appendRow([
      new Date(),           // Date et heure
      data.email || '',     // Email
      data.name || '',      // Prénom
      data.source || 'Calculateur Bac'  // Source
    ]);
    
    // Retourner un succès
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Email enregistré avec succès'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // En cas d'erreur
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Le service fonctionne correctement')
    .setMimeType(ContentService.MimeType.TEXT);
}
