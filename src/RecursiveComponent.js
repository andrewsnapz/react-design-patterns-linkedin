// display all keys and values it contains

const isObject = (x) => typeof x === "object" && x !== null;
export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
