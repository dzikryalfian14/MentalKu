import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner
        className="h-16 w-16 text-gray-900/50 animate-spin"
        style={{ animationDuration: "3s" }}
      />
    </div>
  );
}
