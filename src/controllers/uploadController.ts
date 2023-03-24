import util from 'util';
import express, { Request, Response, NextFunction } from 'express';
import { bucket } from '../utils/uploadImage';

const uploadFileController = async (req: Request, res: Response) => {
	try {
		if (req.file) {
			const blob = await bucket.file(req.file.originalname.replace(/\s+/g, '_'));
			const blobStream = await blob.createWriteStream();

			blobStream.on('finish', () => {
				const publicUrl = util
					.format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
				res.status(200).json({ message: 'success', imageUrl: publicUrl });
			});
			blobStream.end(req.file.buffer);
		} else throw 'error with img';
	} catch (error) {
		res.status(500).send(error);
	}
};

export default uploadFileController;
