const Greeting = ({ name }: { name: string }) => {
  return <h1>Hello, {name}</h1>;
};

const Test = () => {
  return (
    <>
      <Greeting name="world" />
      <Greeting name="me" />
      <Greeting name="who" />
      <Greeting name="haha" />
    </>
  );
};

export default Test;
