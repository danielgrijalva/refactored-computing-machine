"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Paper from "@mui/material/Paper";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const pathname = usePathname();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
      }}
      elevation={4}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          LinkComponent={Link}
          href="/list"
          label="View Items"
          value="View Items"
          icon={<PermMediaIcon />}
        />        
        <BottomNavigationAction
          LinkComponent={Link}
          href="/"
          label="Add Item"
          value="Add Item"
          icon={<AddAPhotoIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
