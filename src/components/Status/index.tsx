import * as Icon from "@mui/icons-material";

const iconMap = {
  new: <Icon.FiberNewOutlined color="primary" />,
  deving: <Icon.DeveloperMode />,
  stable: <></>,
  experimental: <Icon.ScienceOutlined color="secondary" />,
  preview: <Icon.AccessTime color="disabled" />,
  deprecated: <Icon.DeleteForeverRounded color="error" />,
};

export default function Status({ type }: { type: keyof typeof iconMap }) {
  const Component = iconMap[type];
  return Component;
}
