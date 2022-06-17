import ComponentDidmount from "./components/componentDidMount/Timer";
import ComponentDidUpdate from "./components/componentDidUpdate/Timer";
import ComponentWillUnmount from "./components/componentWillUnmount/Timer";

function App() {
  return (
    <>
    <ComponentDidmount />
    <ComponentDidUpdate />
    <ComponentWillUnmount />
    </>
  );
}

export default App;
