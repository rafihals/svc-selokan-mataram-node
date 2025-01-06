// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.get('/api/image/:filename', (req, res) => {
//   const { filename } = req.params;
//   const imagePath = path.join(__dirname, 'assets', 'img', 'gallery', filename);

//   res.sendFile(imagePath, (err) => {
//     if (err) {
//       res.status(404).send('Image not found');
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
