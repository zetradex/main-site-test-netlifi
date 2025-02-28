import { CircularProgress } from "@mui/material";
import cls from "./LoadingSpinner.module.scss";
interface LoadingSpinnerType {
  className?: string;
}
const LoadingSpinner = ({ className }: LoadingSpinnerType) => {
  return (
    <div className={`${cls.LoadingSpinner} ${className}`}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
