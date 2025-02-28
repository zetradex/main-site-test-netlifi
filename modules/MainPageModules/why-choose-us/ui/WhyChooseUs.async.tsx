import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const WhyChooseUsAsync = dynamic(() => import("./WhyChooseUs"), {
  loading: () => <LoadingSpinner />,
});
