import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const AboutZetradexAsync = dynamic(() => import("./AboutZetradex"), {
  loading: () => <LoadingSpinner />,
});
