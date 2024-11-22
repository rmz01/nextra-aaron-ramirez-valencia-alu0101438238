import React, { useEffect, useState } from 'react';

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hacer una solicitud de datos en tiempo de ejecución
    const fetchRepos = async () => {
      const res = await fetch('https://api.github.com/users/octocat/repos');
      const result = await res.json();
      setRepos(result);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}