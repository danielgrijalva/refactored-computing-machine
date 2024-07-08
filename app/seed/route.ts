// import { db } from "@vercel/postgres";
// import { items } from "./placeholder-data";
// import { MediaItem } from "../types";

// const client = await db.connect();

// async function seedItems() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS items (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       title VARCHAR,
//       caption VARCHAR,
//       path VARCHAR NOT NULL,
//       postedTo VARCHAR[]
//     );
//   `;

//   const insertedItems = await Promise.all(
//     items.map(async (item: MediaItem) => {
//       return client.sql`
//         INSERT INTO items (id, title, caption, path, postedTo)
//         VALUES (${item.id}, ${item.title}, ${item.caption}, ${item.path}, ARRAY [${item.postedTo.map(channel => `'${channel}'`).join(',')}])
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedItems;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedItems();
//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
