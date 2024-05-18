"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./server/database/connection");
const server_1 = require("./server/server");
const port = process.env.PORT || 3306;
server_1.server.listen(port, () => {
    (0, connection_1.testConnection)();
    console.log(`Server started port ${port}`);
});
