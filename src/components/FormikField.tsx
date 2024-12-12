import { useField } from "formik";
import React from "react";

export function withFormikField<T>(Component: React.ComponentType<T>) {
  return ({ name, ...props }: T & { name: string }) => {
    const [field, meta] = useField(name);
    return (
      <>
        <Component {...field} {...props} />
        {meta.touched && meta.error && <span style={{ color: "red" }}>{meta.error}</span>}
      </>
    );
  };
}
