import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  FAQs,
  SubTitle,
  Usage,
  Best
} from "@components/layout/Article";
import { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import example1 from "@/views/docs/views/examples/UseFavicon/example.1";
import example2 from "@/views/docs/views/examples/UseFavicon/example.2";
import example3 from "@/views/docs/views/examples/UseFavicon/example.3";
import example4 from "@/views/docs/views/examples/UseFavicon/example.4";
import example5 from "@/views/docs/views/examples/UseFavicon/example.5";
import example6 from "@/views/docs/views/examples/UseFavicon/example.6";
import pkg from "@/../package.json";
import UseFaviconApi from "@/views/docs/views/hooks-apis/useFavicon.api";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`example-tabpanel-${index}`}
      aria-labelledby={`example-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function UseFavicon() {
  const [tabValue, setTabValue] = useState(0);
  const hooksName = "useFavicon";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article
      title={hooksName}
      desc={$desc}
    >
      <Body>{$detail}</Body>
      <Usage>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Counter" />
            <Tab label="Notification" />
            <Tab label="Status" />
            <Tab label="Position" />
            <Tab label="99+" />
            <Tab label="Text Favicon" />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <Demo code={example1.code}>{<example1.View />}</Demo>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Demo code={example2.code}>{<example2.View />}</Demo>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Demo code={example3.code}>{<example3.View />}</Demo>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Demo code={example4.code}>{<example4.View />}</Demo>
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Demo code={example5.code}>{<example5.View />}</Demo>
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          <Demo code={example6.code}>{<example6.View />}</Demo>
        </TabPanel>
        <p>{$p1}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseFaviconApi />
    </Article>
  );
}
