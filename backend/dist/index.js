import app from './app.js';
import connectToDatabase from './db/connection.js';
// connections and Listeners
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(5000, () => console.log("Server open and connected!"));
}).catch(err => console.log(err));
//# sourceMappingURL=index.js.map