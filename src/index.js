var app = new Vue({
  el: "#app",
  data: {
    message: "Pick the best sibling"
  },
  methods: {
    sound1() {
      let url = "media/Hello.mp3";
      let sound = new Audio(url);
      sound.play();
    },
    sound2() {
      let url = "media/Zombie.mp3";
      let sound = new Audio(url);
      sound.play();
    }
  }
});
