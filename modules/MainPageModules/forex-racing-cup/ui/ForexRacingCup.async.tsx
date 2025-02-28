import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const ForexRacingCupAsync = dynamic(() => import("./ForexRacingCup"), {
  loading: () => <LoadingSpinner />,
});
