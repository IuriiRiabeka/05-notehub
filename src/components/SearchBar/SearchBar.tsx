import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = (formData.get('query') as string)?.trim();

    if (!query) {
      toast.error('Please enter your search query.');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <form action={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies..."
          autoFocus
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
