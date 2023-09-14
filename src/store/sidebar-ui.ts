import { atom } from "nanostores";

export const $sidebarOpen = atom(false);

export function triggerSidebar(open: boolean) {
  $sidebarOpen.set(open);
}
