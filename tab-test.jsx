import Tabs from "./tabs";
import './styles.css';

function Randomcomponent() {
  return <h1>some random component</h1>;
}

export default function Tabtest() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content of tab1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content of tab2</div>,
    },
    {
      label: "Tab3",
      content: <Randomcomponent />,
    },
  ];
  function handlechange(currenttabindex){
    console.log(currenttabindex);
  }
  return <Tabs tabscontent={tabs} onchange={handlechange} />;
}
