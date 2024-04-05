//AJAX查询之前执行方法
function beforajaxList(p){
	var param = {};
	//学生编号
	var stunolike = $("#sel_stunolike").val();
	if(stunolike.Trim().length>0){
		param.stunolike = stunolike;
	}
	//学生姓名
	var stuname = $("#sel_stuname").val();
	if(stuname.Trim().length>0){
		param.stuname = stuname;
	}
	//学生帐号
	var userid = $("#sel_userid").val();
	if(userid.Trim().length>0){
		param.username = userid;
	}
	//学生性别
	var stusex = $("input[name='sel_stusex']").filter(function(){
		return this.checked && this.value.Trim().length>0;
	});
	stusex = stusex.val();
	param.stusex = stusex;
	//是否为导读学案学生
	var islearnguide = $("input[name='sel_islearnguide']").filter(function(){
		return this.checked && this.value.Trim().length>0;
	});
	islearnguide = islearnguide.val();
	param.islearnguide = islearnguide;
	p.setPostParams(param);
}

//执行成功后返回方法 
function afterajaxList(rps){
	var html = '';
	if(rps.type=='error'){
		alert(rsp.msg);
		return;
	}else{
		if(rps.objList.length>0){
			html+='<tr><th>学生编号</th><th>学生姓名</th><th>学生性别</th>';
			html+='<th>家庭住址</th><th>监管人</th><th>监管人电话</th>';
			html+='<th>学生帐号信息</th></tr>';
			$.each(rps.objList,function(idx,itm){
				html+='<tr>';
				if(!(typeof(itm.stuno)=="undefined")){
					html+='<td>'+ itm.stuno +'</td>';
				}else
					html+='<td></td>';
				if(!(typeof(itm.stuname)=="undefined")){
					html+='<td>'+ itm.stuname +'</td>';
				}else
					html+='<td></td>';
				if(!(typeof(itm.stusex)=="undefined")){
					html+='<td>'+ itm.stusex +'</td>';
				}else
					html+='<td></td>';
				if(!!(itm.stuaddress)){
					html+='<td>'+ itm.stuaddress +'</td>';
				}else
					html+='<td></td>';
				if(!(typeof(itm.linkman)=="undefined")){
					html+='<td>'+ itm.linkman +'</td>';
				}else
					html+='<td></td>';
				if(!(typeof(itm.linkmanphone)=="undefined")){
					html+='<td>'+ itm.linkmanphone +'</td>';
				}else
					html+='<td></td>';
				if(!!(itm.userinfo.username)){
					html+='<td>'+ itm.userinfo.username +'</td>';
				}else
					html+='<td></td>';
				html+='<tr>'
			});
		}else{
			html+="<tr><th>暂无数据!</th></tr>";
		}
		p1.setPageSize(rps.presult.pageSize);
		p1.setPageNo(rps.presult.pageNo);
		p1.setRectotal(rps.presult.recTotal);
		p1.setPagetotal(rps.presult.pageTotal);
		p1.Refresh();
	}
	$("#datatbl").html(html);
}