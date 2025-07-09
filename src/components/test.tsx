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
      <Greeting name="why I'm here in vim" />
    </>
  );
};

export default Test;
