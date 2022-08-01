import { table, getMinifiedRecord } from './utils/airtable.js';
//import auth0 from './utils/auth0';
import OwnsRecord from './middleware/OwnsRecord';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

//const { user } = await auth0.getSession(req);
//export default async (req, res) => {
//export default withApiAuthRequired(async function updateTodo(req, res) {
const handler = async (req, res) => {

    const session = getSession(req, res);
    const user = session.user;
    const { id, fields } = req.body;

    try {
        const newFields = { ...fields, userid: user.sub };
        const updatedRecord = await table.update([{ id, fields: newFields }]);
        res.statusCode = 200;
        res.json(updatedRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};

//export default auth0.requireAuthentication(OwnsRecord(handler));
export default withApiAuthRequired(OwnsRecord(handler));
//export default OwnsRecord(handler);

