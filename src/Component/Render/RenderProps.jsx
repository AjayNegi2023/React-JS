import React,{useState} from "react";

const RenderProps = (props) => {
  const [count , setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1)
  }
  
  // return <div>{props.name(true)}</div>;
  // return <div>{props.render(true)}</div>;

  return (
    <div>
      {props.render(count , increment)}
  </div>
          )
};

export default RenderProps;
