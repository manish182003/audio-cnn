const ColorScale = ({
  width = 200,
  height = 16,
  min = -1,
  max = 1,
}: {
  width?: number;
  height?: number;
  min?: number;
  max: number;
}) => {
  const gradient =
    "Linear-gradient(to right, rgb(255,128,51),rgb(255,255,255),rgb(51,128,255))";
  return (
    <div className="flex items-center gap-3">
      <span className="text-x5 text-stone-500">{min}</span>
      <div
        className="rounded border border-stone-500"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background:
            "Linear-gradient(to right, rgb(255,128,51),rgb(255,255,255),rgb(51,128,255))",
        }}
      ></div>
      <span className="text-x5 text-stone-500">{max}</span>
    </div>
  );
};
export default ColorScale;
