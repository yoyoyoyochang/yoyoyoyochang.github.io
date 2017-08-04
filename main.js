let links = [
"http://www.en8848.com.cn/d/file/201212/76abcecea6c1a9ce581ae9c427da3e70.jpg",
  "https://lh4.ggpht.com/qaD77NRoDUNVJZspmXJBSzDLPh8nwD-d70Cf7uPk7gB7zklTCzqlNdPAC2WtAQvAaw=w300",
"https://vignette3.wikia.nocookie.net/hunterxhunter/images/a/a9/Hunter_x_hunter_by_xvrcardoso-d54co4a.jpg/revision/latest/scale-to-width-down/400?cb=20140327000131&path-prefix=zh",
"http://cw1.tw/CH/images/channel_master/c292db39-1270-41bc-8f92-d2ce575d8d6a.jpg",
"http://res1.360myb.com/editor/image/20130522/20130522085813_73217.jpg"
]
let titles = ["basketball最愛運動","drum打鼓超帥的","hunter X hunter最好看的動漫","video game平時休閒娛樂","發呆....最好消磨時間"]
let autoplay = false
let index = 0;
function prevPic() {
  let img = document.getElementById("pic");
  index = index - 1;
  img.src = links[index % links.length];
 let title = document.getElementById("title");
  title.innerHTML = titles[index % titles.length];
}
function nextPic() {
  console.log("nextPic: " + index);
  let img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
   
  let title = document.getElementById("title");
  title.innerHTML = titles[index % titles.length];
  
  
  
  
  if(autoplay){
setTimeout(nextPic, 3000)
  }
}
if(autoplay) {
    setTimeout(nextPic, 3000);
}
