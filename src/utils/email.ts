import emailjs from '@emailjs/browser';

interface EmailData {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (data: EmailData) => {
try {
    const response = await emailjs.send(
      "service_524umre",    // Service ID
      "template_syemn3z",   // Template ID
    {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
    },
      "vkNmgOv8Y-2Sksc3I"  // Public Key
    );
    return { success: true, data: response };
} catch (error) {
    return { success: false, error };
}
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateForm = (data: EmailData): string[] => {
    const errors: string[] = [];

    if (!data.name.trim()) errors.push('Nome é obrigatório');
    if (!data.email.trim()) errors.push('Email é obrigatório');
    if (!validateEmail(data.email)) errors.push('Email inválido');
    if (!data.message.trim()) errors.push('Mensagem é obrigatória');

return errors;
};