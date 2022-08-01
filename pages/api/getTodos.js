import { table, getMinifiedRecord, minifyRecords } from './utils/airtable.js';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

//export default async (req, res) => {
export default withApiAuthRequired(async function getTodos(req, res) {
    const session = getSession(req, res);
    const user = session.user;
    try {
        const records = await table
            .select({ filterByFormula: `userid = '${user.sub}'` })
            .firstPage();
        const formattedRecords = minifyRecords(records);
        res.statusCode = 200;
        res.json(formattedRecords);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
});
  