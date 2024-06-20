import { createClient } from "@redis/client";
import { toBool } from "#helpers/utils";

const DB_URL = process.env.DB_URL;
const DB_PWD = process.env.REDIS_PASS || process.env.DB_PASS;

let client = createClient({
    host: "localhost",
    port: 6379,
    password: "mypass",
    user: "username"
});

await client.connect();

if (toBool(process.env.AGGRESSIVE_CLEANUP)) {
    await client.sendCommand(["CONFIG", "SET", "notify-keyspace-events", "Ex"]);
}

export default client;
