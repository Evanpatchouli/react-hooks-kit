import { ExpandLess, ExpandMore, FunctionsOutlined } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import "./index.css";
import { useState } from "react";
import Overview from "./views/overview";
import ArticleNavigator from "@components/article-navigator";
import DocNavigator from "@components/doc-navigator";
import { useMeta } from "@/hooks/useMeta";

export default function Docs() {
  const [open, setOpen] = useMeta({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });
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
              setOpen(0, !open[0]);
            }}
          >
            <ListItemIcon>⚓</ListItemIcon>
            <ListItemText primary="Getting started" />
            {open[0] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[0]} timeout="auto" unmountOnExit>
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
                setOpen(1, !open[1]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Stateful hooks" />
              {open[1] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLoading" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useMeta" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactive" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactor" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactorStore" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactorStoreContext" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactorStoreRef" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useTickState" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(2, !open[2]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Callback hooks" />
              {open[2] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useTicker" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useDebounce" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useThrottle" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactor" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useWatch" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useReactorListener" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(3, !open[3]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Promise hooks" />
              {open[3] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="usePromise" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useFetch" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useGenerator" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(4, !open[4]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Utils hooks" />
              {open[4] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[4]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useForceUpdate" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useForm" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazy" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyImg" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyAudio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyVedio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useMixRef" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useSafe" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLocalStorage" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useIndexDB" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(5, !open[5]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Lifetime hooks" />
              {open[5] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[5]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useBeforeMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useAfterMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useUnMount" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(6, !open[6]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="UI & UX hooks" />
              {open[6] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[6]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useTheme" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useForm" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazy" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyImg" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyAudio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useLazyVedio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useColor" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useRipple" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useToast" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(7, !open[7]);
              }}
            >
              <ListItemIcon>⚓</ListItemIcon>
              <ListItemText primary="Other hooks" />
              {open[7] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[7]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useBeforeMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useAfterMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>⚓</ListItemIcon>
                  <ListItemText primary="useUnMount" />
                </ListItemButton>
              </List>
            </Collapse>
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
