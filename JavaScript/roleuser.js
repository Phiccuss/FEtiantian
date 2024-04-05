/*********************************dialoglist.jsp*******************************************/
//模式窗体页面 根据角色条件获取用户
function beforajaxListUser(p){ 
	var param ={};
	//角色
	var roleidArray=$("input[name='rck']").filter(function(){return this.checked==true;});
	//部门 
	var deptidArray=$("input[name='dept_ck']").filter(function(){return this.checked==true;});
	//职务
	var jobidArray=$("input[name='job_ck']").filter(function(){return this.checked==true;});
	//年级
	var gradeArray=$("input[name='ck_grade']").filter(function(){return this.checked==true});
	//班级
	var clsArray=$("input[name='ck_cls']").filter(function(){return this.checked==true});
	//授课科目
	var courseArray =$("input[name='ck_course']").filter(function(){return this.checked==true;});
	var year=$("#year").val();
	if(year.Trim().length<1){ 
		alert('系统未获取到年份信息!请设置!');
		return;  
	}   
	//查询选框(用户名或者姓名)
	var usernameOrRealName=$("#selInput").val().Trim();
	//角色ID
	var ridarr='';
	if(roleidArray.length>0){  
		$.each(roleidArray,function(idx,itm){
			if(ridarr.length>0)
				ridarr +=",";
			ridarr+=itm.value.Trim(); 
		});
		param.roleidstr = ridarr;
	}
	//部门ID
	var deptidstr='';
	if(deptidArray.length>0){
		$.each(deptidArray,function(idx,itm){
			if(deptidstr.length>0)
				deptidstr +=",";
			deptidstr+=itm.value.Trim();
		});
		param.deptidstr = deptidstr;
	}
	//职务ID
	var jobidstr='';
	if(jobidArray.length>0){
		$.each(jobidArray,function(idx,itm){
			if(jobidstr.length>0)
				jobidstr +=",";
			jobidstr+=itm.value.Trim();
		});
		param.jobidstr=jobidstr; 
	}
	//年级
	if(gradeArray.length>0){
		param.grade =gradeArray.val(); 
	} 
	//班级id
	var clsidarr="";
	if(clsArray.length>0){
		$.each(clsArray,function(idx,itm){
			if(clsidarr.length>0)
				clsidarr+=",";
			clsidarr+=itm.value.Trim();
		});
		param.clsidstr = clsidarr; 
	}
	//科目
	var coursearr="";
	if(courseArray.length>0){
		$.each(courseArray,function(idx,itm){
			if(coursearr.length>0)
				coursearr +=","
			coursearr+=itm.value.Trim();
		});
		param.subjectidstr = coursearr; 
	}
	param.year = year;  
	param.username = usernameOrRealName;
	param.realname = usernameOrRealName;
	p.setPostParams(param); 
}
function afterajaxListUser(rps){ 
	var html = '';
	if(rps.type=="error"){
		alert(rps.msg);
		return;
	}else{
		if(rps.objList.length>0){
			html+="<tr><th><input type='checkbox' onclick='ckAll(this)' id='ck_all'/>全选/不选</th><th>编号</th>";			
			html+="<th>姓名</th><th>性别</th><th>用户名</th></tr>";
			$.each(rps.objList,function(idx,itm){
				html+="<tr";  
				if(idx%2==0) 
					html+=' class="trbg2"';
				html+='>';
				if(ptype.Trim().length>0)//职务参数 ptype  
					html+="<td><input name='ck_data' type='checkbox' onclick='ckOne(this)' value="+ itm.ref +" /></td>"; 
				else if(psign==2){
					html+="<td><input name='ck_data' type='checkbox' onclick='ckOne(this)' value='"+itm.ref+"|"+itm.realname+"' /></td>";					
				}else 
					html+="<td><input name='ck_data' type='checkbox' onclick='ckOne(this)' value="+ itm.userid +" /></td>";
				var seno=itm.stuno=="-1" ? (idx+1) : itm.stuno;
				html+="<td>"+ seno +"</td>";  
				html+="<td>"+ itm.realname +"</td>";
				html+="<td>"+ (typeof(itm.sex)=='undefined'?'N/N':itm.sex)+"</td>";  
				html+="<td>"+ itm.username +"</td>"; 
				html+="</tr>";  
			});      
		}else{   
			html+="<tr><th>暂无数据!</th></tr>";  
		}
		pu.setPageSize(rps.presult.pageSize);
		pu.setPageNo(rps.presult.pageNo);
		pu.setRectotal(rps.presult.recTotal); 
		pu.setPagetotal(rps.presult.pageTotal);
		pu.Refresh();
	}
	$("#datatbl").html(html);
	
	
	//选中以选中的
	var seuserarray=$("input[type='hidden']").filter(function(){
				return this.name=='hd_userid'
			}); 
	if(seuserarray.length>0){
		$.each(seuserarray,function(idx,itm){
			var itmCkobj=$("input[type='checkbox']").filter(function(){
							return (this.name=='ck_data'&&this.value.Trim()==itm.value.Trim());
						}); 
			if(itmCkobj.length>0){ 
				itmCkobj.prop("checked",true); 
			} 
		});
	}
}

//点击角色方法
function rolechecked(rid,rname){
	if(typeof(rid)=="undefined" || isNaN(rid)){
		alert("系统未获取到角色标识，请刷新后重试！");
		return;
	}
	var stuid = "1";
	var isselStu=$("input[name='rck']").filter(function(){
		return this.value==stuid && this.checked;
	});
	if(isselStu.length>0){
		if(rid==stuid){
			$("tr").filter(function(){
				return this.id.Trim()=='tr_student_grade';
			}).show();
			//隐藏教授科目
			$("#tr_tea_course").hide();
			$("input[name='ck_course']").prop("checked",false);
			//默认选中初一
			$("input[name='ck_grade']").first().prop("checked",true);
			//去查询
			getClassByGrade($("input[name='ck_grade']").first().val());
		}
	}else{
		var tea=$("input[type='checkbox']").filter(function(){
			return this.value=='2'&&this.checked;
		});
		if(tea.length>0)
			$("#tr_tea_course").show();
		else{
			$("#tr_tea_course").hide();
		}
		$("tr").filter(function(){
			return this.id.indexOf("tr_student")!=-1;
		}).hide();
		$("input[name='ck_cls']").prop("checked",false);
		$("input[name='ck_grade']").prop("checked",false);
	}
}
function onYearChange(){ 
	var obj=$("input[name='rck']").filter(function(){return this.value=="1"&&this.checked==true});
	if(obj.length>0)  
		getClassByGrade($("input[name='ck_grade']").first().val()); 
}    

//查询班级
function getClassByGrade(grade){
	if(typeof(grade)=="undefined" || grade.Trim().length<1){
		alert("系统未获取到年级信息,请刷新后重试!");
		return;
	}
	var year=$("#year").val();
	if(typeof(year)=="undefined" || year.Trim().length<1){
		alert("系统未获取到年份信息,请刷新后重试!"); 
		return;  
	} 
	
	$("#tr_student_cls").show();
	$.ajax({
		url:'cls?m=ajaxlist', 
		type:'post',
		data:{
			classgrade:grade,
			year:year
		},
		dataType:'json',
		error:function(){},
		success:function(rps){
			var html="";
			if(rps.type=="error"){
				html="<li>暂无班级数据！</li>";
			}else{
				if(rps.objList.length<1)
					html="<li>暂无班级数据！</li>";
				else{
					$.each(rps.objList,function(idx,itm){
						html+='<li><input type="checkbox" value="'+itm.classid+'" name="ck_cls"/>'+itm.classname+' </li>';
					})
				} 
				$("#td_cls").html(html);
			}
		}
	});
	
}

//全选
function ckAll(obj){
	$("input[name='ck_data']").each(function(idx,itm){
		$(this).prop("checked",obj.checked);
		if(this.checked){
			var htm ='<li><input type="hidden" name="hd_userid" value='+ itm.value +' /></li>';
			$("#seldiv").append(htm);
		}else{
			$("input[name='hd_userid']").filter(function(){
				return this.value==itm.value;
			}).remove();
		}
	});
}
//单选
function ckOne(obj){
	var ckarr =$("input[name='ck_data']");
	var checkedLen =$("input[name='ck_data']").filter(function(){return this.checked==true});
	var bo = ckarr.length == checkedLen.length ? true : false;
	$("input[id='ck_all']").prop("checked",bo);
	
	//数据
	if(obj.checked){
		var ck=$("input[type='hidden'][name='hd_userid']").filter(function(){
			return this.value.Trim()== obj.value.Trim();
		});
		if(ck.length<1){
			$("#seldiv").append("<li><input type='hidden' name='hd_userid' value="+ obj.value.Trim() +" /></li>");
		}
	}else{
		$("input[name='hd_userid']").filter(function(){
			return this.value.Trim()==obj.value.Trim();
		}).remove();
	}
}