var posts=["2024/05/18/SuiBi/","2024/05/19/Dynamic Resizing/","2024/05/19/Cpp/","2024/05/21/Containers-and-Iterators/","2024/05/21/Function-Pointers-and-Callbacks/","2024/05/22/IO-in-C/","2024/05/23/three-part-IO/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };