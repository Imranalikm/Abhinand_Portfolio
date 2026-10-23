/** Warms the project-detail route chunk ahead of navigation (portfolio row hover/focus/touch). */
export function prefetchProjectDetail() {
  void import("@/pages/ProjectDetail");
}
