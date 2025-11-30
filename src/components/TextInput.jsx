import { forwardRef} from "react";

const TextInput = forwardRef(
  ({ label, type = "text", value, error, ...passProps }, ref) => {
    return (
      <label className="block">
        <span className="block">{label}</span>
        <input
          ref={ref}
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

export default TextInput;
