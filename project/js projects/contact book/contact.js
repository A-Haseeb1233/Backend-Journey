const contacts = [
    { id: 1, name: "Abdul Haseeb", phone: "03123456789", category: "uni" },
    { id: 2, name: "Naveed", phone: "03123456789", category: "work" },
];

function addContact(name, phone, category) {
    const id = contacts.length + 1;

    contacts.push({
        id: id,
        name: name,
        phone: phone,
        category: category
    },);
}

addContact("ayesha", "03123456789", "uni");

// search function by name

function findContactByName(searchName){
        
}

