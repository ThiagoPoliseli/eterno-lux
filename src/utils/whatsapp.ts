export const sendWhatsAppMessage = (productName: string, price: string) => {
    const phoneNumber = '554699758869'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto: ${productName} - R$ ${price}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
};