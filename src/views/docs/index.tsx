import { ExpandLess, ExpandMore, FunctionsOutlined, HourglassEmptyOutlined } from "@mui/icons-material";
import docsMap from "./docs.map";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useState } from "react";
import * as GettingStarted from "./views/getting-started";
import ArticleNavigator from "@components/article-navigator";
import DocNavigator from "@components/doc-navigator";
import { useMeta } from "@/hooks/useMeta";
import linkTo from "@/utils/linkTo";
import { Route, Routes } from "react-router";
import DocsIndex from "./docs.index";
import * as View from "./views/index";
import useUrl from "@/hooks/useUrl";
import "./index.css";
import { Option } from "@/utils/types";
import pickLastUrlPath from "@/utils/pickLastUrlPath";
import Deving from "@/components/Deving";
import Dial from "@/components/dial";

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

  const url = useUrl();
  const curRoute = pickLastUrlPath(url.hash);

  return (
    <div className="Docs">
      <div className="Docs-Left">
        <List
          className="Docs-Left-Menu"
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              onClick={() => {
                linkTo("/docs", true);
              }}
              style={{ cursor: "pointer" }}
            >
              Docs of react-hooks-kit
            </ListSubheader>
          }
        >
          <ListItemButton
            onClick={() => {
              setOpen(0, !open[0]);
            }}
          >
            <ListItemIcon>📖</ListItemIcon>
            <ListItemText primary="Getting started" />
            {open[0] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[0]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={curRoute === "overview"}
                onClick={() => linkTo("/docs/overview", true)}
              >
                <ListItemIcon>🧐</ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={curRoute === "installation"}
                onClick={() => linkTo("/docs/installation", true)}
              >
                <ListItemIcon>⬇️</ListItemIcon>
                <ListItemText primary="Installation" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={curRoute === "usage"}
                onClick={() => linkTo("/docs/usage", true)}
              >
                <ListItemIcon>🫰</ListItemIcon>
                <ListItemText primary="Usage" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} selected={curRoute === "faqs"} onClick={() => linkTo("/docs/faqs", true)}>
                <ListItemIcon>❓</ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={curRoute === "support"}
                onClick={() => linkTo("/docs/support", true)}
              >
                <ListItemIcon>💰</ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton selected={curRoute === "sent-mail"} onClick={() => linkTo("/docs/sent-mail", true)}>
            <ListItemIcon>📧</ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton selected={curRoute === "draft"} onClick={() => linkTo("/docs/draft", true)}>
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
              <ListItemIcon>💾</ListItemIcon>
              <ListItemText primary="Stateful hooks" />
              {open[1] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.StatefulHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(2, !open[2]);
              }}
            >
              <ListItemIcon>♻️</ListItemIcon>
              <ListItemText primary="Callback hooks" />
              {open[2] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.CallbackHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(3, !open[3]);
              }}
            >
              <ListItemIcon>⌚</ListItemIcon>
              <ListItemText primary="Promise hooks" />
              {open[3] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.PromiseHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(4, !open[4]);
              }}
            >
              <ListItemIcon>🛠️</ListItemIcon>
              <ListItemText primary="Utils hooks" />
              {open[4] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[4]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.UtilsHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(5, !open[5]);
              }}
            >
              <ListItemIcon>🔮</ListItemIcon>
              <ListItemText primary="Lifetime hooks" />
              {open[5] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[5]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.LifetimeHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(6, !open[6]);
              }}
            >
              <ListItemIcon>🎉</ListItemIcon>
              <ListItemText primary="UI & UX hooks" />
              {open[6] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[6]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.UiUxHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => {
                setOpen(7, !open[7]);
              }}
            >
              <ListItemIcon>🪄</ListItemIcon>
              <ListItemText primary="Other hooks" />
              {open[7] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[7]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.entries(docsMap.OtherHooks).map(([, { route }]) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={curRoute === route}
                      onClick={() => linkTo(`/docs/${route}`, true)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={route} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </List>
        </List>
      </div>
      <div className="Docs-Main">
        <Routes>
          <Route
            path="/"
            children={
              <>
                <Route path="" element={<DocsIndex />} />
                {Object.entries(docsMap).map(([_module, views]) => {
                  const module: keyof typeof docsMap = _module as any;
                  return Object.entries(views as { [x: string]: { route: string; title: string } }).map(
                    ([ViewElem, meta]) => {
                      // console.log(
                      //   `${module} ${ViewElem} ${JSON.stringify(meta)}`
                      // );
                      let ElemRender: Option<React.FC> = void 0;
                      switch (module) {
                        case "GettingStarted":
                          if (ViewElem in GettingStarted) {
                            ElemRender = GettingStarted[ViewElem as keyof typeof GettingStarted];
                          }
                          break;
                        // case "SentMail":
                        //   break;
                        // case "Draft":
                        //   break;
                        // case "StatefulHooks":
                        //   break;
                        // case "CallbackHooks":
                        //   break;
                        // case "LifetimeHooks":
                        //   break;
                        // case "PromiseHooks":
                        //   break;
                        // case "UtilsHooks":
                        //   break;
                        // case "UiUxHooks":
                        //   break;
                        // case "OtherHooks":
                        //   break;
                        default:
                          if (ViewElem in View) {
                            ElemRender = View[ViewElem as keyof typeof View];
                          }
                          // console.log(`${ViewElem}`, View[ViewElem as keyof typeof View] ? true : false);
                          break;
                      }
                      // console.log(`${ViewElem} route: ${meta.route}`);
                      return ElemRender ? (
                        <Route path={meta.route} element={<ElemRender />} />
                      ) : (
                        <Route path={meta.route} element={<Deving />} />
                      );
                      // return <Route path="/overview" element={<GettingStarted.Overview />} />;
                    }
                  );
                })}
              </>
            }
          />
        </Routes>
        <ArticleNavigator />
      </div>
      <div className="Docs-Right">
        <DocNavigator />
        <Dial />
      </div>
    </div>
  );
}
