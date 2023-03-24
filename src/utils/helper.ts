import path from 'path';
import { Storage } from '@google-cloud/storage';

const GOOGLE_CLOUD_PROJECT_ID = 'Innov81Q'; // Replace with your project ID
const GOOGLE_CLOUD_KEYFILE = path.resolve('innov81q-1a403aba435e.json');

export const storage = new Storage({
	projectId: GOOGLE_CLOUD_PROJECT_ID,
	keyFilename: GOOGLE_CLOUD_KEYFILE,
});

