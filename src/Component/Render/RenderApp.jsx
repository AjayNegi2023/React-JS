import React from "react";
import RenderProps from "./RenderProps";
import ClickCounter from "./ClickCount";
import HoverCount from "./HoverCount";

const RenderApp = () => {
  return (
    <div>
      {/* <RenderProps name= {()=> 'Hello'} /> */}
      {/* <RenderProps name= {(isLogin)=> isLogin? "User":"Guest"} /> */}
      {/* <RenderProps render= {(isLogin)=> isLogin? "User":"Guest"} /> */}
    <RenderProps render = {(count , increment )=>(<ClickCounter count={count} increment = {increment} />) }/>
    <RenderProps render = {(count , increment )=>(<HoverCount count={count} increment = {increment} />) }/>
    </div>
  );
};

export default RenderApp;
