var common = {
    obj:{
        gateway : {
            host : 'gateway.1ctech.cn',
            port: '443',
            url : function () {
                return 'https://'+common.obj.gateway.host+':'+common.obj.gateway.port;
            }
        }
    }
    ,fn:{
        /**
         * ajax请求封装
         * @param obj 参数
         */
        ajax:function (obj) {
            if(obj.contentType==null){
                obj.contentType = 'application/json';
            }
            if(obj.url.indexOf('http')<0){
                obj.url = common.obj.gateway.url() + obj.url;
            }
            $.ajax(obj);
        }
    }
}

