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
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import useTitle from "@hooks/useTitle";
import example1 from "@/views/docs/views/examples/UseTitle/example.1";
import example2 from "@/views/docs/views/examples/UseTitle/example.2";
import example3 from "@/views/docs/views/examples/UseTitle/example.3";
import example4 from "@/views/docs/views/examples/UseTitle/example.4";
import pkg from "@/../package.json";
import UseTitleApi from "@/views/docs/views/hooks-apis/useTitle.api";

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

export default function UseTitle() {
  const [tabValue, setTabValue] = useState(0);
  const hooksName = "useTitle";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);

  useTitle(`✨${hooksName}✨ - ${pkg.homepage}`);

  return (
    <Article
      title={hooksName}
      desc={$desc}
    >
      <Body>{$detail}</Body>
      <Usage>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Basic" />
            <Tab label="Counter" />
            <Tab label="Notification" />
            <Tab label="Timer" />
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
        <p>{$p1}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseTitleApi />
    </Article>
  );
}
