import NewTextInput from "@/components/NewTextInput";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";

function UseRef() {
  const clickCountRef = useRef(0);

  const inputRef = useRef(null);

  const wrapperRef = useRef(null);

  console.log(123);
  const handleClickCount = () => {
    clickCountRef.current++;
    console.log(clickCountRef.current);
    if (clickCountRef.current % 5 === 0) {
      alert(`Click ${clickCountRef.current} lần!`);
    }
  };

  const handleClickFocus = () => {
    inputRef.current.focus();
  };
  const handleClickRemove = () => {
    inputRef.current.remove();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 font-bold">Use Ref</h1>
      <Button variant="outline" onClick={handleClickCount}>
        Click me!
      </Button>

      <Separator className="my-4 bg-black" />

      <TextInput ref={inputRef} label="Email" placeholder="Enter email..." />

      <div className="flex gap-3">
        <Button className="mt-2" variant="outline" onClick={handleClickFocus}>
          Focus
        </Button>
        <Button className="mt-2" variant="outline" onClick={handleClickRemove}>
          Remove
        </Button>
      </div>

      <Separator className="my-4 bg-black" />
      <NewTextInput
        ref={wrapperRef}
        label="Email"
        placeholder="Enter email..."
      />
      <Button
        className="mt-2"
        variant="outline"
        onClick={() => {
          wrapperRef.current.focus();
        }}
      >
        Focus
      </Button>
    </div>
  );
}

export default UseRef;
