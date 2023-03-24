import { format } from 'util';
import { storage } from './helper';

const bucket = storage.bucket('all-mighti'); // should be your bucket name

export const uploadImage = (file: File): Promise<string> =>
	new Promise((resolve, reject) => {
		const { name, buffer } = file;

		const blob = bucket.file(name.replace(/ /g, '_'));
		const blobStream = blob.createWriteStream({
			resumable: false,
		});

		blobStream
			.on('finish', () => {
				const publicUrl = format(
					`https://storage.googleapis.com/${bucket.name}/${blob.name}`
				);
				resolve(publicUrl);
			})
			.on('error', () => {
				reject(`Unable to upload image, something went wrong`);
			})
			.end(buffer);
	});
