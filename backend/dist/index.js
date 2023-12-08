import app from './app.js';
import connectToDatabase from './db/connection.js';
// connections and Listeners
connectToDatabase().then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
});
//# sourceMappingURL=index.js.map