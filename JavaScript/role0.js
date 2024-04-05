//AJAX查询之前的方法
function beforajaxList(p){
	var param = {};
//	var rolename =$("#sel_rolename").val();
//	if(rolename.Trim().length>0){
//		param.rolename = rolename;
//	} 
	var flag=$("#flag").val();
	if(typeof(flag)=='undefined'||flag.length<1)
		flag=1; 
	param.flag=flag; 	 
	p.setPostParams(param);
} 

//执行成功后返回方法
function afterajaxList(rps){
	var html = ''; 
	if(rps.type=="error"){
		alert(rps.msg);
		return;
	}else{ 
		if(rps.objList.length>0){
			html+="<tr><th>名称</th><th>隶属身份</th><th>操作</th></tr>";			
			$.each(rps.objList,function(idx,itm){
                if(itm.roleid==1)
                    return;
				html+='<tr';
				if(idx%2==0)
					html+=' class="trbg1"';
				html+='>';
				html+="<td>"+ itm.rolename +"</td>";  
				html+="<td>"+ itm.identityname +"</td>";  
				html+="<td>";
               // html+='<a class="font-blue" href="javascript:toShowDIV(\'div_upd\','+itm.roleid+')">修改</a>&nbsp;';
				html+="<a class='font-blue' href='javascript:load_role_right("+itm.roleid+")'>查看权限</a>&nbsp;";
				html+="</td>";   
				/**************************/
				html+="</tr>";
			});     
		}else{   
			html+="<tr><th>暂无数据！</th></tr>"; 
		}
		p1.setPageSize(rps.presult.pageSize);
		p1.setPageNo(rps.presult.pageNo);
		p1.setRectotal(rps.presult.recTotal);
		p1.setPagetotal(rps.presult.pageTotal);
		p1.Refresh();
	}
	$("#datatbl").html(html);
}
//重置 
function reset(div){
	$("#"+div+" input").val("");
}
//显示DIV
function toShowDIV(div,id){
	if(typeof(id)!="undefined" && !isNaN(id)){
		$("#hidden_for_id").val(id);
	}
	$("#div_add").hide();
	showModel('div_upd');
	$.ajax({ 
		url:'role?m=toupd&roleid='+id,
		type:'post',
		dataType:'json',  
		error:function(){ 
			//alert('系统未响应，请稍候重试!');
		}, 
		success:function(rps){
			if(rps.type=="error"){
				alert(rsp.msg);
				return;
			}
			if(rps.objList.length>0){
				if(rps.objList[0]!=null){
					$("#upd_rolename").val(rps.objList[0].rolename);
					$("#"+div+" select[id='identity']").val(rps.objList[0].identityname);
					$("#"+div+" select[id='identity']").change();
					if(rps.objList[0].isadmin==1)
						$("#"+div+" input[id='ck_isadmin']").prop("checked",true);
					else
						$("#"+div+" input[id='ck_isadmin']").prop("checked",false);
					if(typeof(rps.objList[0].remark)!='undefined')  
						$("#"+div+" textarea[id='remark']").val(rps.objList[0].remark);
				}
				
				//角色权限  
				$("#"+div+" div[id='div_ul_result']").html('');
				if(rps.objList[1]!=null&&rps.objList[1].length>0){
					var h='';  
					$.each(rps.objList[1],function(idx,itm){
						var ul=$("#"+div+" ul[id='ul_right_"+itm.columnid+"']");
						if(ul.length>0){
							$("#"+div+" ul[id='ul_right_"+itm.columnid+"']").append('<li id="'+itm.columnrightid+'">'+itm.columnname+"--"+itm.columnrightname+'<a href="javascript:delLi('+itm.columnrightid+',\''+div+'\')">×</a></li>');
						}else{
							var h=['<div>',
							       '<strong>'+itm.columnname+'</strong>',
						           '<ul id="ul_right_'+itm.columnid+'">',
						           		'<li id="'+itm.columnrightid+'">'+itm.columnname+"--"+itm.columnrightname+'<a href="javascript:delLi('+itm.columnrightid+',\''+div+'\')">×</a></li>',
						            '</ul>', 
						            '<h5></h5>',
							       '</div>'];
							$("#"+div+" div[id='div_ul_result']").append(h.join(""));
						}
					});  
				} 
				showModel(div);
			}   
		}
	});
} 

//添加
function doAdd(){
	var param={};
	var rolename = $("#add_rolename");
	if(rolename.val().Trim().length<1){
		alert("请您填写角色名称!");
		rolename.focus();
		return;
	}
	param.rolename=rolename.val().Trim();
	
	var identity = $("#div_add select[id='identity']");
	if(identity.val().Trim().length<1){
		alert("请选择身份!");
		identity.focus();
		return;
	}
	param.identityname=identity.val();
	
	var liArray=$("#div_add ul").filter(function(){return this.id.indexOf('ul_right_')!=-1}).children('li');
	if(liArray.length<1){
		alert('请设置角色权限!');
		return;
	}
	var rightstr='';
	$.each(liArray,function(idx,itm){
		if(rightstr.length>0)
			rightstr+=',';
		rightstr+=$(itm).attr('id');
	});
	param.rightstr=rightstr;
	
	var isadmin=$("#div_add input[id='ck_isadmin']").val();
	if(isadmin!=null&&!isNaN(isadmin))
		param.isadmin=isadmin;
	
	var remark=$("#div_add textarea[id='remark']");
	
	if(qhs.GetLength(remark.val().Trim())>25){
		alert('角色说明最多25个汉字!');
		remark.focus();
		return;
	}
	
	if(remark.val().Trim().length>0){
		param.remark=remark.val().Trim(); 
	}
	
	
	
	
	$.ajax({
		url:'role?m=ajaxsave',
		type:'post',
		data:param,
		dataType:'json',
		error:function(){},
		success:function(rps){
			if(rps.type=="error"){
				alert(rps.msg);
				return;
			}else{
				closeModel('div_add');
				//reset("div_add"); 
				load_role();
				alert(rps.msg);
			} 
			
		}
	});
} 

//删除 
function doDel(id){
	if(!confirm("确认删除该角色？")){
		return;
	}
	if(typeof(id)=="undefined" || isNaN(id)){
		alert("未获取到角色标识！");
		return;
	}
	$.ajax({
		url:'role?m=del&roleid='+id,
		type:'post',		
		dataType:'json',
		error:function(){},//alert('系统未响应，请稍候重试!');},
		success:function(rps){
			if(rps.type=='error'){
				alert(rps.msg);
				return;
			}
			pageGo("p1");
			load_role();
		}
	});
}

//修改
function doUpd(){
	var roleid = $("#hidden_for_id").val();  
	if(typeof(roleid)=="undefined" || isNaN(roleid)){   
		alert("未获取到角色标识，请刷新后重试！");
		return;
	}
	var param={};
	var rolename = $("#upd_rolename");
	if(rolename.val().Trim().length<1){
		alert("请您填写角色名称!");
		rolename.focus();
		return;
	}
	param.rolename=rolename.val().Trim();
	
	var identity = $("#div_upd select[id='identity']");
	if(identity.val().Trim().length<1){
		alert("请选择身份!");
		identity.focus();
		return;
	}
	param.identityname=identity.val();
	
	var liArray=$("#div_upd ul").filter(function(){return this.id.indexOf('ul_right_')!=-1}).children('li');
	if(liArray.length<1){ 
		alert('请设置角色权限!');
		return;  
	}
	var rightstr='';
	$.each(liArray,function(idx,itm){
		if(rightstr.length>0)
			rightstr+=',';
		rightstr+=$(itm).attr('id');
	});
	param.rightstr=rightstr;
	 
	var isadmin=$("#div_upd input[id='ck_isadmin']:checked").val();
	if(isadmin!=null&&!isNaN(isadmin)) 
		param.isadmin=isadmin; 
	else  
		param.isadmin=0; 
	 
	var remark=$("#div_upd textarea[id='remark']");
	if(remark.val().Trim().length<1){
		alert('请添加角色说明!');
		remark.focus();
		return; 
	} 
	if(qhs.GetLength(remark.val().Trim())>25){
		alert('角色说明最多25个汉字!');
		remark.focus();
		return;
	}
	
	if(remark.val().Trim().length>0){
		param.remark=remark.val().Trim(); 
	}
	
	$.ajax({
		url:'role?m=modify&roleid='+roleid,  
		data:param,
		type:'post', 
		dataType:'json',
		error:function(){alert("网络异常!");},    
		success:function(rps){   
			if(rps.type=='error'){
				alert(rps.msg);
				return;
			}
			closeModel('div_upd');
			load_role();
			alert(rps.msg);  
		}
	}); 
}
//指定用户
function selRoleUser(roleid){
	if(typeof(roleid)=="undefined" || isNaN(roleid)){
		alert("系统未获取到角色标识!请刷新后重试!"); 
		return;
	}	
	var param = "dialogWidth:500px;dialogHeight:700px;status:no;location:no";
	var returnValue=window.showModalDialog("roleuser?m=toSetRoleUser&roleid="+roleid,param);
	if(returnValue==null||returnValue.Trim().length<1){  
		alert("您未选择用户或未提交!"); 
		return;
	}
	var uidarr = returnValue.split(","); 
	if(uidarr.length<1){ 
		alert("系统未获取到用户标识!请刷新后重试!"); 
		return;
	}
	var uidstr='';
	$.each(uidarr,function(idx,itm){
		if(uidstr.length>0){
			uidstr+=",";
		}else{  
			uidstr+=itm;
		} 
	});  
	$.ajax({ 
		url:'roleuser?m=doManageRoleUser', 
		data:{ 
			roleid : roleid,
			useridArray : uidstr 
		}, 
		type:'post',
		dataType:'json',
		error:function(){alert("网络异常!");},
		success:function(rps){
			if(rps.type=='error'){
				alert(rps.msg);
				return;
			}else
				alert(rps.msg);
		}
	});
}

/**
 * 为选中用户指定页面权限
 */
function setPageRight(rid){
	if(typeof(rid)=="undefined" || isNaN(rid)){
		alert("系统未获取到权限标识，请刷新后重试!"); 
		return;
	}
 	var param ="dialogWidth:500px;dialogHeight:700px;status:no;location:no;";
	var returnValue = window.showModalDialog("pageright?m=dialoglist&roleid="+rid,param);
	
	if(returnValue==null || returnValue.Trim().length<1){
		alert("您未提交或关闭窗口!");  
		return;   
	} 
	$.ajax({
		url:'rightuser?m=setRightByRole',  
		type:'post',
		data:{ 
			rid  : rid,
			prightidstr : returnValue,  
		},
		dataType:'json',
		error:function(){alert("网络异常!")}, 
		success:function(rps){
			alert(rps.msg);   
		}
	});
}


/**
 * 栏目权限
 * @return
 */
function columnChange(dvobj){ 
	var column=$("#"+dvobj+" select[id='column']").val();
	if(column==null||isNaN(column)||column.length<1)
		return;
	     
	$.ajax({
		url:'columnright?m=ajaxlist',  
		type:'post',
		data:{ 
			columnid:column  
		},
		dataType:'json',
		error:function(){alert("网络异常!")}, 
		success:function(rps){
			var h='<option value="">全选</option>';
			if(rps.objList.length>0){
				$.each(rps.objList,function(idx,itm){
					h+='<option value="'+itm.columnrightid+'">'+itm.columnrightname+'</option>';
				});
				$("#"+dvobj+" select[id='column_right']").html(h);
			}  
		}
	});
}

/**
 * 添加权限li
 * @return
 */
function edit_ul(dvobj){
	var columnright=$("#"+dvobj+" select[id='column_right']").val(); 
	var columnid=$("#"+dvobj+" select[id='column']").val();     
	var columnname=$("#"+dvobj+" select[id='column']").find("option:selected").text().Trim();
	if(columnid.length<1&&(columnright==null||columnright.length<1)){
		alert('请选择栏目后再操作权限!');
		return; 
	} 
	if(columnright==null){
		alert('请选择栏目后再操作权限!');
		return; 
	}
	if(columnid.length>0&&columnright.length<1)
		edit_li(columnid,dvobj,columnname);
	else if(columnid.length>0&&columnright.length>0){
		filter_li(columnid,columnright,dvobj,columnname);
	}	 
}
 
function filter_li(columnid,columnrightid,dvobj,columnname){
	var columnrightname=$("#"+dvobj+" select[id='column_right']").find("option:selected").text().Trim();
	var liArray=$("#"+dvobj+" ul[id='ul_right_"+columnid+"'] li");
	if(liArray.length>0){
		var bo=false;
		for(var i=0;i<liArray.length;i++){
			if(columnrightid==$(liArray[i]).attr('id')){
				bo=true;
				return;
			}  
		}         
		if(!bo)
			$("#"+dvobj+" ul[id='ul_right_"+columnid+"']").append('<li id="'+columnrightid+'">'+columnname+"--"+columnrightname+'<a href="javascript:delLi('+columnrightid+',\''+dvobj+'\')">×</a></li>');
	}else{
		var h=['<div>',
		       '<strong>'+columnname+'</strong>', 
	           '<ul id="ul_right_'+columnid+'">',
	           		'<li id="'+columnrightid+'">'+columnname+"--"+columnrightname+'<a href="javascript:delLi('+columnrightid+',\''+dvobj+'\')">×</a></li>',
	            '</ul>', 
	            '<h5></h5>',
		       '</div>'];
		$("#"+dvobj+" div[id='div_ul_result']").append(h.join(""));
	} 
}  

function delLi(obj,dvobj){
	var ul=$("#"+dvobj+" li[id='"+obj+"']").parent('ul');
	$("#"+dvobj+" li[id='"+obj+"']").remove();
	if(ul.children('li').length<1)
		ul.parent().remove();
}       
  
function identityChange(dvobj,sobj){
	if($(sobj).val()=='学生'){
		$("#"+dvobj+" span[id='sp_admin']").html('');
	}else if($(sobj).val()=='教职工'){
		var h='<input type="checkbox" id="ck_isadmin" value="1" /><label for="ck_isadmin">设为管理员类别</label>';
		$("#"+dvobj+" span[id='sp_admin']").html(h); 
		$("#ck_isadmin").prop("checked",true);
	} 
}
 
	

function edit_li(columnid,dvobj,columnname){
	if(typeof(columnname)=='undefined'||columnid==null||isNaN(columnid)||columnid.length<1){
		alert('系统未获取到栏目标识!');  
		return;  
	}   
	$.ajax({
		url:'columnright?m=ajaxlist',  
		type:'post',
		data:{ 
			columnid:columnid  
		},
		dataType:'json',
		error:function(){alert("网络异常!")}, 
		success:function(rps){
			if(rps.objList.length>0){
				var liArray=$("#"+dvobj+" ul[id='ul_right_"+columnid+"'] li");
				var bo=false; 
				$.each(rps.objList,function(idx,itm){
					bo=false;
					if(liArray.length>0){
						for(var i=0;i<liArray.length;i++){
							if(itm.columnrightid==$(liArray[i]).attr('id')){
								bo=true;
								return;
							}
						}  
					}
					if(!bo){
						var ul=$("#"+dvobj+" ul[id='ul_right_"+columnid+"']");
						if(ul.length>0){
							$(ul).append('<li id="'+itm.columnrightid+'">'+itm.columnname+"--"+itm.columnrightname+'<a href="javascript:delLi('+itm.columnrightid+',\''+dvobj+'\')">×</a></li>');
						}else{
							var h=['<div>',
							       '<strong>'+columnname+'</strong>',
						           '<ul id="ul_right_'+columnid+'">',
						           		'<li id="'+itm.columnrightid+'">'+itm.columnname+"--"+itm.columnrightname+'<a href="javascript:delLi('+itm.columnrightid+',\''+dvobj+'\')">×</a></li>',
						            '</ul>',
						            '<h5></h5>',
							       '</div>'];
							$("#"+dvobj+" div[id='div_ul_result']").append(h.join(""));
						} 
					}
				});
			}  
		}
	}); 
}


/**
 * 加载自定义角色
 * @return
 */
function load_role(){
	$.ajax({
		url:'role?m=ajaxlist',  
		type:'post',
		data:{ 
			flag:0
		},
		dataType:'json',
		error:function(){alert("网络异常!")}, 
		success:function(rps){
			var h='<tr><th>名称</th><th>隶属身份</th><th>操作</th></tr>'; 
			if(rps.objList.length>0){
				$.each(rps.objList,function(idx,itm){
					h+='<tr';  
					if(idx%2==0)
						h+=' class="trbg1" ';
					h+='>'; 
					h+='<td>'+itm.rolename+'</td>';
					h+='<td>'+itm.identityname+'</td>';      
					h+='<td><a class="font-blue" href="javascript:toShowDIV(\'div_upd\','+itm.roleid+')">修改</a>&nbsp;<a class="font-blue" href="javascript:void(0);" onclick="doDel('+itm.roleid+')">删除</a></td>';
					h+='</tr>';   
				});  
			}
			$("#freetbl").html(h);
		} 
	});
}

function checkLength(tobj){
	if(typeof(tobj)=='undefined')
		return;  
	var h='';  
	var length=qhs.GetLength($(tobj).val());
	if(length>25)
		h='<span style="color:red">'+length+'</span>/25';
	else
		h='<span >'+length+'</span>/25';
	$(tobj).siblings().html(h);
} 

/**
 * 获取角色权限
 * @return
 */
function load_role_right(rid){
	if(typeof(rid)=='undefined'||isNaN(rid))
		return;
	 
	showModel('div_sys_role');
	$.ajax({ 
		url:'roleColumnRight?m=ajaxlist&roleid='+rid,  
		type:'post',  
		dataType:'json',
		error:function(){alert("网络异常!");},    
		success:function(rps){   
			if(rps.type=='error'){ 
				alert(rps.msg);
				return; 
			}else{
				var h='';
				if(rps.objList.length>0){
					h+='<tr>';
					h+='<th>栏目名称</th><th>权限名称</th>';
					h+='</tr>';
					$.each(rps.objList,function(idx,itm){
						h+='<tr>'; 
						h+='<td>'+itm.columnname+'</td>';
						h+='<td>'+itm.columnrightname+'</td>';
						h+='</tr>';
					});
				}  
				$("#tb_sys_role").html(h);
			}
		}
	});
}

