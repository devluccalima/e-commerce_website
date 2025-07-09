import { useState } from 'react';
import formStyles from './form.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState(''); // Estado para o valor do e-mail
  const [isValidEmail, setIsValidEmail] = useState(false); // Estado para validar o formato do e-mail
  const [isLoading, setIsLoading] = useState(false); // Estado para feedback de carregamento
  
  const validateEmail = (email) => {
    // Regex simples pra validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail || isLoading) return;

    setIsLoading(true);

    const apiKey = process.env.REACT_APP_BREVO_API_KEY;

    if (!apiKey) {
      console.error('A chave da API da Brevo não foi encontrada. Verifique o arquivo .env');
      alert('Erro de configuração. Não foi possível realizar a assinatura.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email, listIds: [2] }) // Adicione o ID da sua lista de contatos se tiver uma
      });

      if (response.ok) {
        alert(`Obrigado pela sua assinatura! Você receberá nossas novidades no e-mail ${email}`);
        setEmail(''); // Limpa o campo
        setIsValidEmail(false);
      } else {
        const errorData = await response.json();
        console.error('Falha na inscrição:', errorData);
        alert(`Ocorreu um erro: ${errorData.message || 'Tente novamente mais tarde.'}`);
      }
    } catch (error) {
      console.error('Erro de rede ou na requisição:', error);
      alert('Não foi possível conectar ao serviço. Verifique sua conexão e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
    <div className={formStyles.fieldGroup}>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={handleChange}
      />
      <button type="submit" disabled={!isValidEmail || isLoading}>
        {isLoading ? 'Assinando...' : 'Assinar Newsletter'}
      </button>
    </div>
    </form>
  );
}
