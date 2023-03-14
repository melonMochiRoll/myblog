import { useCallback, useState } from "react";

const useForms = <T>(initData: T) => {
  const [ values, setValues ] = useState(initData);

  const onChange = useCallback((e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }, [values]);

  return { form: values, onChange };
};

export default useForms;