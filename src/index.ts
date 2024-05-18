import { testConnection } from "./server/database/connection";
import { server } from "./server/server";

const port = process.env.PORT || 3306;

server.listen(port, () => {
    testConnection();
    console.log(`Server started port ${port}`);
});
