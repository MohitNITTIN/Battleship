import client from "#db/db";

let pub = client.duplicate();
let sub = pub.duplicate();

await pub.connect();
await sub.connect();

export { pub, sub };
