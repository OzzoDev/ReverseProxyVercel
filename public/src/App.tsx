import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://reverse-proxy-vercel-nine.vercel.app/api/data");

      const result = await response.json();

      setData(result.data as string);
    })();
  }, []);

  return <div>{data}</div>;
}
