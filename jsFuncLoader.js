var jsFuncLoader        = new Object();
jsFuncLoader.message    = function(arg){
        console.log(arg);
}
jsFuncLoader.loadJsFunc = function(func,args,ajaxrtn){        if((typeof(window[func]) === 'function')){
                eval(func)(args,ajaxrtn);
        }else{
                jsFuncLoader.message("error: \'"+func+"\' is not function!");
        }
}
jsFuncLoader.load       = function(schedule,offset,args){

        if(isNaN(offset))       offset=0;
        offset= parseInt(offset);
        if(offset >= schedule.length)   return;

        var preajax                             =       schedule[offset].preajax;
        var preargs                     =       schedule[offset].preargs;
        var func        =       schedule[offset].func;        var args                                =       schedule[offset].args;        if(typeof(preajax)==="undefined")                       preajax = "";        if(typeof(preargs)==="undefined")                       preargs = {};        if(preajax      !=      ""){                $.post(preajax,preargs,function(rtn){                        jsFuncLoader.loadJsFunc(func,args,rtn);                        jsFuncLoader.load(schedule,offset+1,args);                        },'json');        }else{                jsFuncLoader.loadJsFunc(func,args);                jsFuncLoader.load(schedule,offset+1,args);        }
}
