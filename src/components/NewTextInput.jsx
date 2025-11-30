import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(
  ({ label, type = "text", value, error, ...passProps }, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    });
    return (
      <label ref={ref} className="block">
        <span className="block">{label}</span>
        <input
          ref={inputRef}
          type={type}
          value={value}
          {...passProps}
          className="border p-1"
        />
        {error && <p className="color">{error}</p>}
      </label>
    );
  }
);

export default NewTextInput;
