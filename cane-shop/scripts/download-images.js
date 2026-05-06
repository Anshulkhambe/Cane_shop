const fs = require('fs');
const path = require('path');
const https = require('https');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs from a free image service (replace with your actual image URLs)
const images = [
  { name: 'logo.png', url: 'https://img.icons8.com/color/480/000000/wooden-chair.png' },
  { name: 'sofa-set.jpg', url: 'https://images.unsplash.com/photo-1555041463-a586c061ea63?w=800' },
  { name: 'chair.jpg', url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800' },
  { name: 'dining-table.jpg', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800' },
  { name: 'coffee-table.jpg', url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800' },
  { name: 'outdoor-set.jpg', url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800' },
  { name: 'bookshelf.jpg', url: 'https://images.unsplash.com/photo-1600499501461-5adad8ae6d06?w=800' },
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded ${path.basename(filepath)}`);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Download all images
async function downloadAll() {
  console.log('Starting image downloads...');
  
  for (const img of images) {
    const filePath = path.join(imagesDir, img.name);
    try {
      await downloadImage(img.url, filePath);
    } catch (error) {
      console.error(`Error downloading ${img.name}:`, error.message);
    }
  }
  
  console.log('All images downloaded!');
}

downloadAll().catch(console.error);
