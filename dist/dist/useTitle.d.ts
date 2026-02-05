/// <reference types="react" />
/**
 * **useTitle** is a React Hook that manages and monitors the document title.
 * ### Parameters
 * - initialTitle?: `string` - The initial title to set when the component mounts. If not provided, uses the current document title.
 * ---
 * ### Return (Array)
 * - [0] title: `string` - The current document title (reactive to external changes)
 * - [1] setTitle: `(title: string) => void` - Function to update the document title
 * ---
 * ### Usage
 * ```tsx
 * const [title, setTitle] = useTitle("My App");
 *
 * // Update title
 * setTitle("New Title");
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useTitle } from "@evanpatchouli/react-hooks-kit";
 *
 * const View = () => {
 *   const [title, setTitle] = useTitle("Home Page");
 *
 *   return (
 *     <div>
 *       <h1>Current Title: {title}</h1>
 *       <button onClick={() => setTitle("Updated Title")}>
 *         Change Title
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Will the original title be restored when the component unmounts?
 * - A: Yes, the hook automatically restores the original document title when the component unmounts.
 * ---
 * - Q: Can this hook detect title changes made by other components?
 * - A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes.
 */
export default function useTitle(initialTitle?: string): readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>];
