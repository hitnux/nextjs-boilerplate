"use client";
import * as React from "react";
import MasterData from "@/data/master.json";
import Image from "next/image";
import NextSvg from "@/public/next.svg";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const Header = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    console.log("toggleDrawer");
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const list = (screen) => (
    <Box
      sx={{
        width: 250,
        display: {
          xs: screen === "desktop" ? "none" : "block",
          md: screen === "desktop" ? "block" : "none",
        },
      }}
      role="presentation"
      onKeyDown={toggleDrawer}
    >
      <List sx={{ display: { xs: "block", md: "flex" } }}>
        {MasterData.pages.map(({ name, href }, index) => (
          <ListItem key={name} disablePadding>
            <Link href={href}>
              <ListItemButton>
                <ListItemIcon sx={{ display: { xs: "block", md: "none" } }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header className="container fluid">
        <div className="header-wrapper">
          <div className="logo">
            <Image src={NextSvg} alt="logo" width="100" />
            <span>Slogan</span>
          </div>
          {list("desktop")}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="end"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={"right"} open={state} onClose={toggleDrawer}>
            {list("mobile")}
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
