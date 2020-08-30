var a = [
  { c6: "{'duringTime':1128}", ds: '1' },
  { c6: "{'duringTime':1027}", ds: '1' },
];
var sum = 0;
a.forEach((i) => {
  console.log(i);
  console.log('typeof i', typeof i);
  console.log('i.c6', i.c6);
var c=  JSON.parse(i.c6);
console.log('c', c);
  console.log('i.c6.duringTime', i.c6.duringTime);
//   sum += i.c6;
  //   let time = .test;
  //   sum += time;
});
console.log(sum);
SELECT COUNT(1),'2' as ds FROM holo_dwd_aes_common_records WHERE  pid = '@pid' 
    and type = 'event' and p1 = 'render_branch_match_page' and  ds <= '@endDs1' and ds > '@startDs1'


    select * from (
        SELECT COUNT(1),'1' as ds FROM holo_dwd_aes_common_records WHERE  pid = '@pid' 
            and type = 'event' and p1 = 'render_branch_match_page' and ds <= '@endDs' and ds > '@startDs'
        UNION
        SELECT COUNT(1),'2' as ds FROM holo_dwd_aes_common_records WHERE  pid = '@pid' 
            and type = 'event' and p1 = 'render_branch_match_page' and  ds <= '@endDs1' and ds > '@startDs1'
        ) a order by ds