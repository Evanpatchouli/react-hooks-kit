import { ExpandLess, ExpandMore, FunctionsOutlined } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import "./index.css";
import { useState } from "react";
import Overview from "./views/overview";
import ArticleNavigator from "@components/article-navigator";
import DocNavigator from "@components/doc-navigator";
import { useMeta } from "@/hooks/useMeta";
import linkTo from "@/utils/linkTo";
import { Route, Routes } from "react-router";
import DocsIndex from "./docs.index";
import * as View from "./views/index";
import useUrl from "@/hooks/useUrl";

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

  useUrl((v) => {
    console.log(v);
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
                <Route path="" element={<DocsIndex />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="installation" element={<Overview />} />
                <Route path="usage" element={<Overview />} />
                <Route path="faqs" element={<Overview />} />
                <Route path="support" element={<Overview />} />

                <Route path="useLoading" element={<Overview />} />
                <Route path="useMeta" element={<Overview />} />
                <Route path="useReactive" element={<Overview />} />
                <Route path="useReactor" element={<Overview />} />
                <Route path="useReactorStore" element={<Overview />} />
                <Route path="useReactorStoreContext" element={<Overview />} />
                <Route path="useReactorStoreRef" element={<Overview />} />
                <Route path="useTickState" element={<Overview />} />
                <Route path="usePrevious" element={<Overview />} />

                <Route path="useTicker" element={<Overview />} />
                <Route path="useDebounce" element={<Overview />} />
                <Route path="useThrottle" element={<Overview />} />
                <Route path="useReactorListener" element={<Overview />} />
                <Route path="useWatch" element={<View.UseWatch />} />
                <Route path="useWatchGetter" element={<Overview />} />

                <Route path="usePromise" element={<Overview />} />
                <Route path="useFetch" element={<Overview />} />
                <Route path="useGenerator" element={<Overview />} />

                <Route path="useForceUpdate" element={<Overview />} />
                <Route path="useForm" element={<Overview />} />
                <Route path="useLazy" element={<Overview />} />
                <Route path="useLazyImg" element={<Overview />} />
                <Route path="useLazyAudio" element={<Overview />} />
                <Route path="useLazyVedio" element={<Overview />} />
                <Route path="useMixRef" element={<Overview />} />
                <Route path="useSafe" element={<Overview />} />
                <Route path="useLocalStorage" element={<Overview />} />
                <Route path="useIndexDB" element={<Overview />} />

                <Route path="useMount" element={<Overview />} />
                <Route path="useBeforeMount" element={<Overview />} />
                <Route path="useAfterMount" element={<Overview />} />
                <Route path="useUnMount" element={<Overview />} />

                <Route path="useTheme" element={<Overview />} />
                <Route path="useColor" element={<Overview />} />
                <Route path="useForceUpdate" element={<Overview />} />
                <Route path="useClickAway" element={<Overview />} />
                <Route path="useKeyPress" element={<Overview />} />
                <Route path="useToast" element={<View.Overview />} />
                <Route path="useRipple" element={<View.UseRipple />} />
                <Route path="useParticle" element={<View.UseParticle />} />

                <Route path="useSingleton" element={<Overview />} />
                <Route path="useWhyDidYouUpdate" element={<Overview />} />
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
