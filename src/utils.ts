import type { availableViews } from "@/interfaces";
import router from "@/router";

export const utils = () => {
  const showView = (viewName?: availableViews) => {
    router.push(`/${viewName ? viewName : ""}`);
  };

  return { showView };
};
