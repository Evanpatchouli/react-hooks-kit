import { ExpandLess, ExpandMore, FunctionsOutlined } from "@mui/icons-material";
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
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>🧐</ListItemIcon>
                <ListItemText primary="Overview" onClick={() => linkTo("/docs/overview", true)} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>⬇️</ListItemIcon>
                <ListItemText primary="Installation" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>🫰</ListItemIcon>
                <ListItemText primary="Usage" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>❓</ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>💰</ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>📧</ListItemIcon>
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
              <ListItemIcon>💾</ListItemIcon>
              <ListItemText primary="Stateful hooks" />
              {open[1] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLoading" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useMeta" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactive" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactor" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactorStore" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactorStoreContext" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactorStoreRef" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useTickState" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useTicker" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useDebounce" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useThrottle" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => linkTo("/docs/useUrl?locale=en", true)}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useUrl" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => linkTo("/docs/useWatch", true)}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useWatch" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useWatchGetter" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useReactorListener" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useResize" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="usePromise" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useFetch" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useGenerator" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useForceUpdate" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useForm" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLazy" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLazyImg" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLazyAudio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLazyVedio" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useMixRef" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useSafe" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useLocalStorage" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useIndexDB" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useBeforeMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useMount" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useUnMount" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useTheme" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useColor" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useToast" />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    linkTo("/docs/useRipple", true);
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useRipple" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useParticle" />
                </ListItemButton>
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
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useAny" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useConsoleLog" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useSingleton" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="useWhyDidYouUpdate" />
                </ListItemButton>
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
                      console.log(`${ViewElem} route: ${meta.route}`);
                      return ElemRender ? <Route path={meta.route} element={<ElemRender />} /> : void 0;
                      // return <Route path="/overview" element={<GettingStarted.Overview />} />;
                    }
                  );
                })}
                <Route path="" element={<DocsIndex />} />
                {/* <Route path="/overview" element={<GettingStarted.Overview />} />
                <Route
                  path="installation"
                  element={<GettingStarted.Overview />}
                />
                <Route path="usage" element={<GettingStarted.Overview />} />
                <Route path="faqs" element={<GettingStarted.Overview />} />
                <Route path="support" element={<GettingStarted.Overview />} />

                <Route
                  path="useLoading"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useMeta" element={<GettingStarted.Overview />} />
                <Route
                  path="useReactive"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useReactor"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useReactorStore"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useReactorStoreContext"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useReactorStoreRef"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useTickState"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="usePrevious"
                  element={<GettingStarted.Overview />}
                />

                <Route path="useTicker" element={<GettingStarted.Overview />} />
                <Route
                  path="useDebounce"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useThrottle"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useUrl" element={<View.UseUrl />} />
                <Route path="useWatch" element={<View.UseWatch />} />
                <Route
                  path="useWatchGetter"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useReactorListener"
                  element={<GettingStarted.Overview />}
                />

                <Route
                  path="usePromise"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useFetch" element={<GettingStarted.Overview />} />
                <Route
                  path="useGenerator"
                  element={<GettingStarted.Overview />}
                />

                <Route
                  path="useForceUpdate"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useForm" element={<GettingStarted.Overview />} />
                <Route path="useLazy" element={<GettingStarted.Overview />} />
                <Route
                  path="useLazyImg"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useLazyAudio"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useLazyVedio"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useMixRef" element={<GettingStarted.Overview />} />
                <Route path="useSafe" element={<GettingStarted.Overview />} />
                <Route
                  path="useLocalStorage"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useIndexDB"
                  element={<GettingStarted.Overview />}
                />

                <Route path="useMount" element={<GettingStarted.Overview />} />
                <Route
                  path="useBeforeMount"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useAfterMount"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useUnMount"
                  element={<GettingStarted.Overview />}
                />

                <Route path="useTheme" element={<GettingStarted.Overview />} />
                <Route path="useColor" element={<GettingStarted.Overview />} />
                <Route
                  path="useForceUpdate"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useClickAway"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useKeyPress"
                  element={<GettingStarted.Overview />}
                />
                <Route path="useToast" element={<View.Overview />} />
                <Route path="useRipple" element={<View.UseRipple />} />
                <Route path="useParticle" element={<View.UseParticle />} />

                <Route
                  path="useSingleton"
                  element={<GettingStarted.Overview />}
                />
                <Route
                  path="useWhyDidYouUpdate"
                  element={<GettingStarted.Overview />}
                /> */}
              </>
            }
          />
        </Routes>
        <ArticleNavigator />
      </div>
      <div className="Docs-Right">
        <DocNavigator />
      </div>
    </div>
  );
}
