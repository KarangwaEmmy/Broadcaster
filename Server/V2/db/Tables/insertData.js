

const data = `INSERT INTO redflag(createdby, title, type, location, status, images, videos, comment) 
VALUES ( 'karangwa210@gmail.com', 'ribbery in the city', 'red flag', 'lat: -21.234, Lng: 43.5535', 'pending', 'uploads/image.jpg', 'uploads/video.mp4', 'This is the comment') RETURNING *`;
 
const data1 = `INSERT INTO redflag(createdby, title, type, location, status, images, videos, comment) 
VALUES ( 'karangwa210@gmail.com', 'ribbery in the city', 'intervenntion', 'lat: -21.234, Lng: 43.5535', 'draft', 'uploads/image.jpg', 'uploads/video.mp4', 'This is the comment two') RETURNING *`;

export default { data, data1 };