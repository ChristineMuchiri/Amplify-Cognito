// src/pages/CreateAlias.jsx
import { API } from 'aws-amplify';
import { useState } from 'react';

export default function CreateAlias() {
  const [alias, setAlias] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await API.post('pythonapi', '/python', {
        body: { action: 'create_alias', alias }
      });
      alert('Alias created!');
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cyber-form">
      <input
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        placeholder="Enter alias"
      />
      <button 
        onClick={handleSubmit} 
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Create Alias'}
      </button>
    </div>
  );
}