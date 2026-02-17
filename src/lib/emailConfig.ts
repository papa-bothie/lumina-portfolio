// Configuration EmailJS  
// Pour obtenir ces valeurs, vous devez créer un compte sur https://www.emailjs.com/
// 1. Créez un compte EmailJS
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Récupérez votre SERVICE_ID, TEMPLATE_ID et PUBLIC_KEY depuis le dashboard

export const EMAIL_CONFIG = {
    SERVICE_ID: 'service_om2n1dx', // À remplacer par votre SERVICE_ID
    TEMPLATE_ID: 'template_v34cjhe', // À remplacer par votre TEMPLATE_ID
    PUBLIC_KEY: '-7WF4pqgQNdlfqjcn', // À remplacer par votre PUBLIC_KEY
};

// Template EmailJS recommandé:
// Nom du template: "Contact Portfolio"
// Variables du template à configurer sur emailjs.com:
// - {{from_name}} : Le nom de l'expéditeur
// - {{from_email}} : L'email de l'expéditeur
// - {{subject}} : Le sujet du message
// - {{message}} : Le contenu du message
// - {{to_email}} : Votre email (papebothie03@gmail.com)
