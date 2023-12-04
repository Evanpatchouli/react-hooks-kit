export default function pickLastUrlPath(url: string): string {
  return url.split("?")[0].split("/").filter(Boolean).pop() || "";
}
