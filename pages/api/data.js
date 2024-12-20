/*
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!', date: new Date().toISOString() })
}
*/

/*
export default async (req, res) => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  res.status(200).json(data);
}
*/

/*
export default async (req, res) => {
  const response = await fetch('https://api.github.com/users/rmz01/repos')
  const data = await response.json()
  res.status(200).json(data)
}
*/

export default async (req, res) => {
  const { username } = req.query;
  const token = 'GITHUB_TOKEN'; 

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Authorization': `token ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}