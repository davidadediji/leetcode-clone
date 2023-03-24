import multer from 'multer';
const multerMid = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
});


export const fileMulter = multerMid.single('file');