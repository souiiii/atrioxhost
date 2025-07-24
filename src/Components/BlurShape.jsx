export default function BlurShape({
  width = 600,
  height = 600,
  borderRadius = "50%",
  color = "#68eed8",
  opacity = 0.1,
  blurId = "blur-heavy",
  style = {},
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: color,
        opacity,
        filter: `url(#${blurId})`,
        ...style,
      }}
    />
  );
}
