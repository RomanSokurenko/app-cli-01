const listContacts = require('./listContacts');
const getContactById = async(id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id.toString() === id);
    if (idx === -1) {
        return null;
    }
    return contacts[idx];
};
module.exports = getContactById;


// /node app.js --action add --name Mango --email mango@gmail.com --phone 322-22-2
// node app.js --action remove --id=3