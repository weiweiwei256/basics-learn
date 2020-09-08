//
// @a : 160px;
// @b : 80px;
// @s : 40;

// .loop(@index) when (@index < @s+1) {
//     .loop((@index + 1));
//     @keyframeSel: @index * 100%/@s;
//     @{keyframeSel}{transform: translate(@a*cos(360deg/@s*@index),@b*sin(360deg/@s*@index),);};
// }

// @keyframes move{
//     .loop(0);
// }
const rx = 361;
const ry = 108;
// 轨道信息：左上定点   402,309    半径：361，108，    中心：763，417
const step = 40;
const starr = 160;
for (let i = 10; i < 50; i++) {
  const pt = (i * 100) / step;
  const translateX =
    rx * Math.cos(((i / step) * 360 * Math.PI) / 180).toFixed(2);
  const translateY =
    ry * Math.sin(((i / step) * 360 * Math.PI) / 180).toFixed(2);

  let radius;
  if (i <= 30) {
    radius = (starr * Math.pow(0.985, i - 10)).toFixed(2);
  } else {
    radius = (starr * Math.pow(0.985, 50 - i)).toFixed(2);
  }
  console.log(
    ` {width:'${radius}px', height:'${radius}px', duration: moveSmallStep,left: "${
      translateX + 763
    }px",top: "${translateY + 417}px"},  // ${pt}%  i:${i} `
  );
  if (pt == 25 || pt == 45 || pt == 70 || pt == 80 || pt == 105) {
    // console.log(
    //   ` transform: tanslate(${translateX + 763}px,${translateY + 417}px);`
    // );o
    console.info('  ...jump,');
  }
}
