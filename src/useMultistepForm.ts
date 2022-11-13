import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
  };
}
