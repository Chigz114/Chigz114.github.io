var posts=["2024/05/17/hello-world/","2024/05/18/ECE220-MP11/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };