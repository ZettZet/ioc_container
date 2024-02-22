import { App as AppNone } from "./none";
import { App as AppBetter } from "./better";
import { App as AppGood } from "./good";

const controlDate = new Date(2007, 9, 1);

function App() {
  return (
    <>
      None:
      <AppNone date={controlDate} />
      <br />
      Better:
      <AppBetter date={controlDate} anchor={new Date(2007, 9)} />
      <br />
      Good:
      <AppGood date={controlDate} />
    </>
  );
}

export default App;
