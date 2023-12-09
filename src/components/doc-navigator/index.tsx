import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./index.css";

export default function DocNavigator() {
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
      <TimelineItem
        onClick={() => {
          const element = document.getElementById("hook-desc");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Description</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        onClick={() => {
          const element = document.getElementById("hook-usage");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Usage</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        onClick={() => {
          const element = document.getElementById("hook-consider");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Considerations</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        onClick={() => {
          const element = document.getElementById("hook-best");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>Best practice</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        onClick={() => {
          const element = document.getElementById("hook-faqs");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ cursor: "pointer" }}>FAQs</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent
          onClick={() => {
            const element = document.getElementById("hook-api");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div style={{ cursor: "pointer" }}>Hook's Apis</div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
