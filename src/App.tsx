import Test from "./components/test";
const Greeet = () => {
  return <div>hello from greeting</div>;
};

const App = () => {
  return (
    <>
      <div className="text-center text-bold text-2xl">
        App test of nvim test
      </div>
      <Test />
      <div className="text-center font-bold">hello world</div>
      <div>hahaha</div>
      <h2>hello world form the cmd terminal</h2>
      <h1>hello world</h1>
      <Greeet />
      <Hello name="world" />
    </>
  );
};

const Hello = async ({ name }: { name: string }) => {
  return <div>hello {name}</div>;
};

export default App;
