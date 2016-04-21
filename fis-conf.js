
// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });




fis.match('*.less', {
  
  parser: fis.plugin('less'),
  postprocessor: fis.plugin('px2rem',{
        baseDpr: 2,             // base device pixel ratio (default: 2)
        threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
        remVersion: true,       // whether to generate rem version (default: true)
        remUnit: 64,            // rem unit value (default: 75)
        remPrecision: 6         // rem precision (default: 6)
  }),
  
  rExt: '.css'
});



fis.media('prod')

    .match('*.less', {
  
      parser: fis.plugin('less'),
      postprocessor: fis.plugin('px2rem',{
        baseDpr: 2,             // base device pixel ratio (default: 2)
        threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
        remVersion: true,       // whether to generate rem version (default: true)
        remUnit: 64,            // rem unit value (default: 75)
        remPrecision: 6         // rem precision (default: 6)
  }),
      rExt: '.css'
    })
    .match('*.htm',{
    release : 'index.htm',
    charset : 'gbk'
    })
    
    //jsĿ¼�µ��ļ��ڷ������˵�Public�ļ����� ���蹹��
    .match('js/**.js',{
      
      release : false,
      
    })
    
    // cssĿ¼�µ��ļ��ڷ������˵�PublicĿ¼�� ���蹹��
    .match('css/**.css',{
      
      release : false,
      
    })
    .match('**.*', {
        charset : 'gbk',
        url : "/templets/zhuanti/fenqi$0"
    })
    
    .match('*.js', {
    optimizer: fis.plugin('uglify-js')
    })

    .match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
    })

    .match('*.png', {
    optimizer: fis.plugin('png-compressor')
    });


