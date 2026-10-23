import { useEffect } from "react";

export const DEFAULT_TITLE = "Abhinandh KP — UI/UX Designer Portfolio";
/** Keep in sync with the description meta in index.html. */
export const DEFAULT_DESCRIPTION = "Abhinandh KP is a UI/UX and product designer based in Kerala, India, crafting intuitive web and mobile experiences. Case studies, experience and contact.";

/** Sets the tab title and meta description for the current route (index.html holds the homepage defaults). */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}
