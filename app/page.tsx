import Box from "@mui/material/Box";
import MediaItemForm from "./ui/components/ItemForm/ItemForm";
import styles from "@/app/global.module.css";

export default async function Home() {
  return (
    <Box className={styles.container}>
      <MediaItemForm />
    </Box>
  );
}
