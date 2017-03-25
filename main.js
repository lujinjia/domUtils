/**
 * Created by Administrator on 2017/3/25 0025.
 */
//DOM元素操作的统一入口
require.config({
    path : {
        'domUtils' : 'doucumentTest'
    }
});

/** DOM元素操作单元测试 **/
define(['domUtils'], function(domUtils) {

});

require(['domUtils'], function() {
    //用于测试DOM元素操作代码2
    //1.获取Elment元素的首个和最后一个元素

    //2.获取Element元素的子元素数量

    //3.获取Elment元素的上个或者下个兄弟元素
    var change = 'change';

});