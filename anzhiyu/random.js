var posts=["2024/07/07/Building-Guide构建指南/","2024/07/28/Minecraft 的无限可能——红石：基础与生电/","2024/08/21/NOI基础知识题库/","2024/07/06/【保姆级教程】Markdown轻松学 序！/","2024/07/07/【旅行Blog】去北京/","2024/07/27/如何下载高清无水印的教材PDF文件？/","2024/07/09/如何成为一个高质量MC服主？Vanilla版/","2024/06/16/怎样制作个人博客？/","2024/07/26/物理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };