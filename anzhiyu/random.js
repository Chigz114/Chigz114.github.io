var posts=["2024/09/09/任务一/","2024/09/09/第一次例会/","2024/09/09/重要通知/","2024/09/19/任务二/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };