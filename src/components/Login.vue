function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: {
          username: username,
          password: password
        }
      });
      if (data.login === "Login Successfully") {
        onLogin();
      } else {
        throw new Error(data.login || "Login failed");
      }
    } catch (e) {
      // Showing detailed error message from GraphQL or default error
      alert(`Login failed: ${e.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error.message || "Please try again")}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
