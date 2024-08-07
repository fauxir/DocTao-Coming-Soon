import { ServerClient } from 'postmark';

const serverToken = process.env.POSTMARK_API_KEY;
const client = new ServerClient(serverToken as string);
export { client };