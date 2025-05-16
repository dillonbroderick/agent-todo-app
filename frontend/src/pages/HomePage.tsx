import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  title: string;
  due: string;
};

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async API request
    setTimeout(() => {
      const mockTodos: Todo[] = [
        { id: 1, title: 'Buy groceries', due: 'Today' },
        { id: 2, title: 'Finish project report', due: 'Tomorrow' },
        { id: 3, title: 'Call mom', due: 'This weekend' },
        { id: 4, title: 'Schedule doctor appointment', due: 'Next week' },
      ];
      setTodos(mockTodos);
      setLoading(false);
    }, 1000); // 1-second simulated delay
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome, User 👋</h1>

      {loading ? (
        <div style={styles.loading}>Loading your tasks...</div>
      ) : (
        <div style={styles.todoList}>
          {todos.map((todo) => (
            <div key={todo.id} style={styles.todoItem}>
              <div style={styles.todoText}>
                <div style={styles.todoTitle}>{todo.title}</div>
                <div style={styles.todoDue}>Due: {todo.due}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: '100vw',
    boxSizing: 'border-box' as const,
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#0070f3',
    marginBottom: '30px',
  },
  loading: {
    fontSize: '1.1rem',
    color: '#666',
  },
  todoList: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  todoItem: {
    backgroundColor: '#f5faff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 14px rgba(0, 118, 255, 0.12)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  todoText: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  todoTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#222',
  },
  todoDue: {
    fontSize: '0.95rem',
    color: '#555',
    marginTop: '4px',
  },
};
