import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const TopBlockAsync = dynamic(() => import("./TopBlock"), {
  loading: () => <LoadingSpinner />,
});
