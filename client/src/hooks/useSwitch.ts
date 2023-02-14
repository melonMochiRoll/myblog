import { useCallback, useState } from "react";

const useSwitch = (initState: boolean) => {
  const [ state, setState ] = useState(initState);

  const onChangeState = useCallback((e: any) => {
    setState((prev) => !prev);
  }, []);

  type useSwitch = [
    boolean,
    typeof onChangeState,
    typeof setState,
  ];

  return [state, onChangeState, setState] as useSwitch;
};

export default useSwitch;