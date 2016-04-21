# mobile-style
手机端模板

专题制作完成后需要使用fis3进行项目构建
1.先修改fis-conf.js 将

```.match('**.*', {
        charset : 'gbk',
        url : "/templets/zhuanti/NAME$0"
    })
 ```
    
中的NAME更改成与你专题目录的名称一致

2.打开命令提示行进入专题目录 运行

fis3 release prod -d ./NAME

3.将构建后的目录上传到服务器templets/专题下，并在后台进行相关设置
