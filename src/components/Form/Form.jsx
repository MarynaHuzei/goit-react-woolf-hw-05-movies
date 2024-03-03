import { useState } from 'react';
import styles from './Form.module.css';

export const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
        placeholder="Enter Movie"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};
