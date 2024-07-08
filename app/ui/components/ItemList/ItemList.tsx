import { Suspense } from "react";
import { fetchItems } from "@/app/lib/data";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default async function ItemList() {
  const items = await fetchItems();

  if (items.length === 0) {
    return <p>No items</p>;
  }

  return (
    <Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`/api/image?filename=${encodeURIComponent(
                item.path as string
              )}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
