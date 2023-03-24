import { Storage } from "@google-cloud/storage";
import path from 'path';

let projectId = 'Innov81Q'; // Get this from Google Cloud
let keyFilename = path.join(__dirname, 'innov81q-c388e82050b5.json'); // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
	projectId,
	keyFilename,
});
export const bucket = storage.bucket('innov8iq-bucket');
