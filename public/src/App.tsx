import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://reverse-proxy-vercel-one.vercel.app/api/data");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("API fetch failed:", error);
        setData("Failed to load data.");
      }
    })();
  }, []);

  return (
    <div>
      <p>Hello world</p>
      {data}
    </div>
  );
}
