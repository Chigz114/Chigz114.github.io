var posts=["2024/05/18/ECE220-MP11/","2024/05/17/hello-world/","2024/05/18/SuiBi/","2024/05/19/Dynamic Resizing/","2024/05/19/Fully Dynamic Allocation/","2024/05/19/Cpp/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };