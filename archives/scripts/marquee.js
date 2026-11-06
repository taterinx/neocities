var lyrics = [
  "I want a love like water through me; I should've poured my honey slowly",
  "Wash it away, my Rorschach", 
  "Like hell, my hands will give up to twenty times",
  "Hm, my heart will give up too many times",
  "Luck's fallen, I've seen it; my intrusion, there's a limit I can take",
  "Look at me, look at me; 나를 바라봐 나를 바라봐",
  "사탕처럼 달콤하다는데; 하늘을 나는 것 같다는데, (I wanna know, know, know, know, what is love?), 사랑이 어떤 느낌인지?",
  "누가 먼저 좋아하면 어때; 지금 너에게로 갈래",
  "Signal 보내 signal 보내; 찌릿 찌릿 찌릿 찌릿",
  "Can't stop the groove licks jaws clear off them locks relentless raw movement",
  "It goes it goes it goes it goes it goes it goes it goes it goes GUILLOTINE",
  ];

// chooses a random number from all available indices
var randomLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log(randomLyric);

// append to marquee
document.getElementById("marquee-text").innerText = randomLyric;