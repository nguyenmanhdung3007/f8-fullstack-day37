import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Child 1 Count: {value}</h2>
      <Button variant="outline" onClick={onIncrease}>
        Tăng Count 1
      </Button>
    </div>
  );
});
const ChildComponent2 = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Child 2 Count: {value}</h2>
      <Button variant="outline" onClick={onIncrease}>
        Tăng Count 2
      </Button>
    </div>
  );
});

function ReactMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 font-bold">React Memo</h1>
      <ChildComponent1 value={count1} onIncrease={handleCount1} />
      <ChildComponent2 value={count2} onIncrease={handleCount2} />
    </div>
  );
}

export default ReactMemo;
