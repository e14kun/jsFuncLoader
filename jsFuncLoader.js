/* Copyright(C) 2014 Lee Juyoung This software(or source code, or program or library, or ect... ) might have possibilities of using or referencing open sources such as MIT license in case. Thus, the copyrighter doesn't have a liability to open the source code which was used to build this contents up. however, basically this copyright itself has a strict right to the copyrighter. therefore, using or possessing this content is available only for the authorized purpose of use, period and reasons by the copyrighter. Also it has a responsibility to report to the copyrighter at the same time. (But, it might be able to be exempted conditionally based on the judgement of the copyrighter.) In addition, it is not possible to claim rights of secondary works based on the contents. Lastly, the copyrighter doesn't have responsibilities of all the problems and damages related to use this contents on the other hand, the users should accept the conditions of peried and contents asked by the copyrighter if they violate the agreement mentioned above regardless of the reasons such as their nations, languages, and regions and they might be liable to criminal punishiments in case. It will be considered to be agreed to use this literary work.*/ var jsFuncLoader= new Object();jsFuncLoader.message= function(arg){console.log(arg);};jsFuncLoader.loadJsFunc= function(func,args,ajaxrtn){if((typeof(window[func]) === 'function'||typeof(func) === 'function')){eval(func)(args,ajaxrtn);}else{jsFuncLoader.message("error: \'"+func+"\' is not function!");};};jsFuncLoader.load= function(schedule,offset,args){if(isNaN(offset))offset=0;offset= parseInt(offset);if(offset >= schedule.length)return;var preajax=schedule[offset].preajax;var preargs=schedule[offset].preargs;var func=schedule[offset].func;var args=schedule[offset].args;if(typeof(preajax)==="undefined")preajax = "";if(typeof(preargs)==="undefined")preargs = {};if(preajax!=""){$.post(preajax,preargs,function(rtn){jsFuncLoader.loadJsFunc(func,args,rtn);jsFuncLoader.load(schedule,offset+1,args);},'json');}else{jsFuncLoader.loadJsFunc(func,args);jsFuncLoader.load(schedule,offset+1,args);};};
