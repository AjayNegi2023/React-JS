import "./App.css";
import AppContext from "./Component/COntext/ContextInClass/AppContext";
import ComponentA from "./Component/COntext/ContextInClass/ComponentA";
import ClickCounter from "./Component/HOC/ClickCounter";
import HoverCounter from "./Component/HOC/HoverCount";
import HookMain from "./Component/Hooks/HookMain";
import JSX from "./Component/JSX";
import Parent from "./Component/PureComponent/Parent";
import MainREF from "./Component/REF/MainREF";
import RenderApp from "./Component/Render/RenderApp";
import StateManagement from "./Component/State";
import StateCounter from "./Component/StateCounter";
import SyntheticsEvent from "./Component/SyntheticEvent/SyntheticEvent";
import MemoApp from "./Component/Hooks/Memo/MemoApp";
export default function App() {
  return (
    <main>
      {/* <JSX /> */}
      {/* <StateManagement /> */}
      {/* <StateCounter /> */}

      <MainREF />
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <RenderApp /> */}
      {/* <SyntheticsEvent /> */}
      {/* <AppContext /> */}

      {/* ********************MEMO********************** */}
      {/* <Parent /> */}
      {/* <MemoApp /> */}
      {/********** Hooks**********/}
      {/* <HookMain /> */}
    </main>
  );
}
