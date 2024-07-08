import { Suspense } from "react";
import Box from "@mui/material/Box";
import { ItemsSkeleton } from "@/app/ui/skeletons";
import styles from "@/app/global.module.css";
import ItemList from "@/app/ui/components/ItemList/ItemList";

export default async function Home() {
  return (
   <Box className={styles.container}>
     <Suspense fallback={<ItemsSkeleton />}>
      <ItemList />
    </Suspense>
   </Box>
  );
}
