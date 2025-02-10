
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '554699758869'; // Replace with your actual WhatsApp number
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <button
          onClick={handleClick}
          className="relative flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] px-6 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="text-white font-medium">Fale Conosco</span>
        </button>
        <div className="absolute right-0 bottom-full mb-3 w-48 flex items-center justify-center">
          <span className="bg-black text-white text-sm py-2 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            Clique para conversar no WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
}