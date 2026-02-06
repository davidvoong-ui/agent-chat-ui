import { useState } from "react";
import { Signal } from "../models";

export function useSignals() {
  const [state, setState] = useState<Signal[]>([]);

  const set = (signals: Signal[]): void => {
    setState(signals);
  };

  return {
    state,
    actions: { set },
  };
}
