"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createItem(formData: FormData) {
  const postedTo = formData.get("postedTo") as string;
  const file = formData.get("file") as File;

  const data = {
    title: formData.get("title") as string,
    caption: formData.get("caption") as string,
    postedTo: postedTo.split(",").map((channel) => channel.trim()),
    path: file.name,
  };

  await sql`
  INSERT INTO items (title, caption, path, "postedto")
  VALUES (${data.title}, ${data.caption}, ${data.path}, ARRAY[${data.postedTo.join(',')}])
`;

  revalidatePath("/list");
  redirect("/");
}
