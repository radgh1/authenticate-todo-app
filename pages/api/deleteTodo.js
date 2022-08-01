import { table, getMinifiedRecord } from './utils/airtable.js';
//import auth0 from './utils/auth0';
import OwnsRecord from './middleware/OwnsRecord';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

//const handler = async (req, res) => {
//export default async (req, res) => {
//export default withApiAuthRequired(async function deleteTodo(req, res) {
const handler = async (req, res) => {
    const session = getSession(req, res);
    const user = session.user;
    const { id } = req.body;

    try {
        const deletedRecords = await table.destroy([id]);
        res.statusCode = 200;
        res.json(getMinifiedRecord(deletedRecords[0]));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};

//export default auth0.requireAuthentication(OwnsRecord(handler));
//export default (handler);
//export default withApiAuthRequired(handler);
export default withApiAuthRequired(OwnsRecord(handler));
//export default OwnsRecord(handler);
