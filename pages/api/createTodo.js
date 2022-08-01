import { table } from './utils/airtable.js';
//import auth0 from './utils/auth0'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

//export default async (req, res) => {
//export default auth0.requireAuthentication(async (req, res) => {
//export default withApiAuthRequired(async function createTodo(req, res) {
const handler = async (req, res) => {

    //const { user } = await auth0.getSession(req, res);
    const session = getSession(req, res);
    const user = session.user;

    const { description } = req.body;
    try {
        const createdRecords = await table.create([
            //{ fields: { description } },
            { fields: { description, userid: user.sub } },
        ]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields,
        };
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};

export default withApiAuthRequired(handler);
