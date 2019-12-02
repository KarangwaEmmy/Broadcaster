import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
  const uploadImage = multer({ storage: storage }).single('image');
  const uploadVideo = multer({storage: storage}).single('video');

  export {uploadImage, uploadVideo};