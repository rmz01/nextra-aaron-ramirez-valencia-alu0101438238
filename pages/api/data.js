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

export default async (req, res) => {
  const response = await fetch('https://api.github.com/users/rmz01/repos')
  const data = await response.json()
  res.status(200).json(data)
}