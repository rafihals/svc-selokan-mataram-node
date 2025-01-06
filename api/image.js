const path = require('path');

export default async function handler(req, res) {
  const { filename } = req.query;

  // Cek apakah parameter filename ada
  if (!filename) {
    return res.status(400).send('Filename is required');
  }

  const imagePath = path.join(process.cwd(), 'assets', 'img', 'gallery', filename);

  // Kirim file gambar jika ada, atau kirim error 404
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error(err); // Tambahkan log error untuk debugging
      res.status(404).send('Image not found');
    }
  });
}
