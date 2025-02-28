import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const PartOfZeholdingAsync = dynamic(() => import("./PartOfZeholding"), {
  loading: () => <LoadingSpinner />,
});
