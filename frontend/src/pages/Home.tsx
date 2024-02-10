import { useEffect, useState } from "react";

export const Home = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="border">
      <p>
        ({mousePos.x}, {mousePos.y})
      </p>
      <div className="w-full h-full relative border">
        <div
          className={`h-4 w-4 bg-red-300 absolute`}
          style={{ top: mousePos.y - 64, left: mousePos.x - 240 }}
        ></div>
      </div>
    </div>
  );
};
