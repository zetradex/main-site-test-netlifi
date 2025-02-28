import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const IncredibleBonusesAsync = dynamic(
  () => import("./IncredibleBonuses"),
  {
    loading: () => <LoadingSpinner />,
  }
);
