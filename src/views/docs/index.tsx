import { ExpandLess, ExpandMore, FunctionsOutlined } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import "./index.css";
import { useState } from "react";
import Overview from "./views/overview";
import ArticleNavigator from "@components/article-navigator";
import DocNavigator from "@components/doc-navigator";

export default function Docs() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className="Docs">
      <div className="Docs-Left">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Docs of react-hooks-kit
            </ListSubheader>
          }
        >
          <ListItemButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <ListItemIcon>⚓</ListItemIcon>
            <ListItemText primary="Getting started" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⚓</ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⚓</ListItemIcon>
                <ListItemText primary="Installation" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⚓</ListItemIcon>
                <ListItemText primary="Usage" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⚓</ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⚓</ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>⚓</ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>⚓</ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Functional hooks
              </ListSubheader>
            }
          >
            <ListItemButton
              onClick={() => {
                setOpen1(!open1);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Storable hooks" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLoading" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactive" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactiveRef" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactiveContext" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactiveContextRef" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </List>
        </List>
      </div>
      <div className="Docs-Main">
        <Overview />
        <ArticleNavigator />
      </div>
      <div className="Docs-Right">
        <DocNavigator />
      </div>
    </div>
  );
}
