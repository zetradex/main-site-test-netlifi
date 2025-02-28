import dynamic from "next/dynamic";
import LoadingSpinner from "common/components/LoadingSpinner/LoadingSpinner";

export const ZetradexTradingAppAndPlatformAsync = dynamic(
  () => import("./ZetradexTradingAppAndPlatform"),
  {
    loading: () => <LoadingSpinner />,
  }
);
