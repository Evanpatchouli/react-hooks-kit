import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./index.css";

export default function DocNavigator() {
  const clickItem = (id: string) => {
    return () => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  };
  return (
    <Timeline
      className="doc-navigator-line"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-desc")}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Description</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-usage")}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Usage</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-consider")}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Considerations</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-best")}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Best practice</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-faqs")}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>FAQs</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-api")}>
          <div style={{ cursor: "pointer" }}>Hook's Apis</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent css={$css`&:hover { color: dodgerblue; }`} onClick={clickItem("hook-ref")}>
          <div style={{ cursor: "pointer" }}>Reference</div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
