import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { validateForm } from '../utils/email';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    console.log('Form submitted:', formData);
    setSuccess(true);
    setErrors([]);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Entre em Contato</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#B8860B]" />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-gray-300">(46) 99709955</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#B8860B]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">aternolux24@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#B8860B]" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-gray-300">Rua eucalipto , N° 161, Clevelândia 85530000</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errors.length > 0 && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-md">
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            {success && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded-md">
                Mensagem enviada com sucesso!
              </div>
            )}
            <input
              type="text"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field bg-black/50"
            />
            <input
              type="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-field bg-black/50"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field bg-black/50"
            />
            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
              <Send className="h-5 w-5" />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}