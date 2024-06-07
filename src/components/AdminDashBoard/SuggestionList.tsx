import { useEffect, useState } from 'react';
import axios from 'axios';

interface Suggestion {
  id: number;
  suggestion: string;
  created_at: string;
  updated_at: string;
}

export default function SuggestionList() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [error, setError] = useState<string>('');

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/api/suggestions'
      );
      setSuggestions(response.data);
    } catch (error) {
      setError('Ошибка при загрузке предложений');
    }
  };

  useEffect(() => {
    fetchSuggestions();

    const interval = setInterval(fetchSuggestions, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Все предложения</h1>
      {error && <p>{error}</p>}
      <div className='md:w-[600px] md:h-[600px] '>
        {suggestions.map((suggestion) => (
          <p key={suggestion.id} className='break-words whitespace-pre-wrap'>{suggestion.suggestion}</p>
        ))}
      </div>
    </div>
  );
}
