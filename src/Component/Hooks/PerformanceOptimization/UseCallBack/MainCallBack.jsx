import React, { useState, useCallback } from "react";
import Text from "./Text";
import Button from "./Button";
const MainCallBack = () => {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(50000);

  const inCrementAge = useCallback(() => {
    setAge(age + 10);
  }, [age]);

  const inCrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  // console.log("Main CB ");
  return (
    <div>
      <Text text="age" count={age} />
      <Button handleClick={inCrementAge}>Increment Age</Button>

      <Text text="salary " count={salary} />
      <Button handleClick={inCrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default React.memo(MainCallBack);
