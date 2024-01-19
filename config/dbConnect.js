const mongoose = require("mongoose");

async function debConnect() {
    try {
        const connected = await mongoose.connect('mongodb+srv://aman:wDTMgHBTtmOAoLro@todo-two.8xtu7s7.mongodb.net/todoDB?retryWrites=true&w=majority');
        console.log(`mongodb connected ${connected.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Call the function
module.exports = debConnect;
