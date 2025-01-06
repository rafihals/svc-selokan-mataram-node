const path = require('path');

export default async function handler(req, res) {
  const { filename } = req.query;
  const imagePath = path.join(process.cwd(), 'assets', 'img', 'gallery', filename);

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send('Image not found');
    }
  });
}
