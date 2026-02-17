# 📧 Configuration du Formulaire de Contact avec EmailJS

Pour que le formulaire de contact fonctionne et vous envoie des emails, vous devez configurer **EmailJS**. C'est un service gratuit (jusqu'à 200 emails/mois) et facile à mettre en place.

## 🚀 Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit ("Sign Up Free").

### 2. Ajouter un Service Email
1. Dans le tableau de bord, cliquez sur **"Email Services"**.
2. Cliquez sur **"Add New Service"**.
3. Choisissez votre fournisseur (Gmail, Outlook, etc.).
4. Connectez votre compte.
5. Copiez le **Service ID** (ex: `service_xyz123`).

### 3. Créer un Template d'Email
1. Allez dans **"Email Templates"**.
2. Cliquez sur **"Create New Template"**.
3. Configurez le sujet et le contenu.
   
   **Exemple de contenu recommandé :**
   ```text
   Sujet: Nouveau message du Portfolio: {{subject}}
   
   De: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```
   
4. Dans l'onglet **"Settings"** du template, copiez le **Template ID** (ex: `template_abc456`).
5. Sauvegardez le template.

**⚠️ Important :** Assurez-vous que les variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, et `{{message}}` sont bien utilisées dans votre template pour correspondre aux données envoyées par le code.

### 4. Récupérer votre clé publique
1. Allez dans **"Account"** (en haut à droite, cliquez sur votre nom).
2. Copiez la **"Public Key"** (ex: `user_123abc`).

---

## 💻 Mise à jour du Code

Ouvrez le fichier `src/lib/emailConfig.ts` et remplacez les valeurs par les vôtres :

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'votre_service_id',   // Coller le Service ID ici
  TEMPLATE_ID: 'votre_template_id', // Coller le Template ID ici
  PUBLIC_KEY: 'votre_public_key',   // Coller la Public Key ici
};
```

C'est tout ! Votre formulaire de contact est maintenant fonctionnel. 🎉
