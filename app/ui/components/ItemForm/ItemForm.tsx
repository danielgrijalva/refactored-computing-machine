"use client";
import { TextField, Button } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { createItem } from "@/app/lib/actions";
import styles from "@/app/ui/components/ItemForm/ItemForm.module.css";

const MediaItemForm = () => {
  return (
    <form className={styles.newItemForm} action={createItem}>
      <h1 className={styles.formTitle}>New Item</h1>
      <TextField label="Title" name="title" fullWidth margin="normal" />
      <TextField label="Caption" name="caption" fullWidth margin="normal" />
      <MuiFileInput
        name="file"
        label="File"
        margin="normal"
        inputProps={{
          accept: "image/*,video/*",
        }}
        fullWidth
      />
      <TextField label="Posted To" name="postedTo" fullWidth margin="normal" />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.submitButton}
      >
        Submit
      </Button>
    </form>
  );
};

export default MediaItemForm;
