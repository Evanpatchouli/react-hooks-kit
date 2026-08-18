import * as Icon from "@mui/icons-material";

const iconMap = {
  new: <Icon.FiberNewOutlined color="primary" />,
  deving: <Icon.DeveloperMode />,
  stable: <></>,
  experimental: <Icon.ScienceOutlined color="secondary" />,
  preview: <Icon.AccessTime color="disabled" />,
  deprecated: <Icon.DeleteForeverRounded color="error" />,
};

export type StatusType = keyof typeof iconMap;

export default function Status({ type }: { type: StatusType }) {
  const Component = iconMap[type];
  return Component;
}
