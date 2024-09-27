const target = {
    message: 'Hello!',
};

const handler = {
    get(target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },
};

const proxy = new Proxy(target, handler);
console.log(proxy.message);


const target = {
    User_text: 'Hello this is Samuel from the Sahara',
};

const handler = {
    get(target, property) {
        if (property.length >= 5) { // Correct length check for 0-based index
            console.log(`Getting ${property[3]}`);
        } else {
            console.log(`Property name is too short to have a fifth character`);
        }
        return target[property];
    },
};




