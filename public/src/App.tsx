import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/data");

      const result = await response.json();

      setData(result.data as string);
    })();
  }, []);

  return <div>{data}</div>;
}
