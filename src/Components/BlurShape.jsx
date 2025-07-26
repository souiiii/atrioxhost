// export default function BlurShape({
//   width = 600,
//   height = 600,
//   borderRadius = "50%",
//   color = "#68eed8",
//   opacity = 0.1,
//   blurId = "blur-heavy",
//   style = {},
// }) {
//   return (
//     <div
//       style={{
//         width,
//         height,
//         borderRadius,
//         backgroundColor: color,
//         opacity,
//         filter: `url(#${blurId})`,
//         ...style,
//       }}
//     />
//   );
// }


export default function BlurShape({
  width = 600,
  height = 600,
  borderRadius = "50%",
  color = "#68eed8",
  opacity = 0.1,
  style = {},
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: "blur(100px) brightness(1.1)", // mimic stdDeviation 250
        position: "absolute",

        ...style,
      }}
    />
  );
}
