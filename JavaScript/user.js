
function loadEttUserName(ref,unameid){
    $.ajax({
        url:"tpuser?loadEttUserNameNew",
        data:{ref:ref},
        type:"post",
        dataType:'json',
        cache: false,
        error:function(){
            //alert('系统未响应，请稍候重试!');
        },
        success:function(json){
            if(json.objList[0]!=null&&typeof json.objList[0]!='undefined'){
               var userName=json.objList[0].userName;
               var pwd=json.objList[0].password;

                if(typeof userName!='undefined'){
                    $("#"+unameid).val(userName);
                    $("#"+unameid).html(userName);
                }
                if(typeof pwd!='undefined')
                    $("#txt_password").val(pwd);

                $("#txt_username").prop('readonly','');
            }
        }
    });
}


function closeModel(showId){
	showAndHidden(showId,'hide');
	showAndHidden('fade','hide');
	try{
	if(yearSelect!=undefined&&yearSelect!="undefined"&&yearSelect==null){
	yearSelect=false;
	}
	}catch(e){}
	//$("body").css("overflow","auto");
}  

  
//在执行ajax查询之前		
	function beforajaxList(p){
		var param ={};
		//角色
		var roleidArray=$("input[name='sel_role']").filter(function(){return this.checked==true;});
		//部门 
		var deptidArray=$("input[name='sel_dept']").filter(function(){return this.checked==true;});
		//职务
		var jobidArray=$("input[name='sel_job']").filter(function(){return this.checked==true;});
		//查询选框(用户名或者姓名)
		var usernameOrRealName=$("#sel_username").val().Trim();
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
		//身份
		var identityname=$("#sel_identity").val();
		if(identityname.Trim().length>0)
			param.identityname=identityname;
		//角色
		var roleid=$("#sel_role").val();
		if(roleid!=null&&roleid.Trim().length>0)
			param.roleidstr=roleid; 
		//param.year = year;   
		if(usernameOrRealName.length>0&&usernameOrRealName!='用户名/姓名')  
			param.username = usernameOrRealName;
        param.dcschoolid=$("#dcSchoolID").val();
		p.setPostParams(param);      
	} 
	
	function reset(vobj){
		$("#"+vobj+" input[type='text']").val('');  
		$("#"+vobj+" input[type='checkbox']").prop('checked',false);
	}   
	
	function showThContents(obj) {
		
		var htm = $(obj).children("input").val().Trim();
		if (typeof htm == 'undefined') {
			return;
		}
		// 鼠标位置
		var x = mousePostion.x;
		var y = mousePostion.y;
		// 浏览器版本
		if ($.browser.msie && (parseInt($.browser.version) <= 7)) {
			y += parseFloat(document.documentElement.scrollTop);
			x += parseFloat(document.documentElement.scrollLeft);
		}
		y += 5;
		var h = '<div id="div_tmp_content" '
				+ 'style ="position:absolute;padding:5px;border:1px solid green;'
				+ 'left:' + x + 'px;top:' + y + 'px;background-color:white">' + htm
				+ '</div>';

		$("body").append(h);
	} 
	 
	//执行分页查询后
	function afterajaxList(rps){
		var ghtml='';
		 
		if(rps.type=="error"){ 
			alert(rps.msg);
			ghtml+='<tr><td colspan="7">'+rps.msg+'</td></tr>';
		}else{			 
			if(rps.objList.length>0){			
				ghtml+='<tr>'; 
				ghtml+='<th>姓名</th><th>性别</th>';//<th>用户名</th>
				ghtml+='<th>身份</th><th>角色</th><th colspan="1">隶属组织</th><th>添加预习王卡</th><th>预习统计</th></tr>';
				$.each(rps.objList,function(idx,itm){    
					var rolename=itm.rolename.split(","),rolestr='',str='';
					var tname='',tstr=''; 
					if(typeof(itm.classname)!='undefined'&&itm.identityname=='教职工')
						tname=itm.classname.split(",");
					else if(typeof(itm.classname)!='undefined'&&itm.identityname=='学生')
						tname=itm.classname.split(","); 
					 
					ghtml+='<tr class=" ';
					if(idx%2==0)
						ghtml+='trbg1';
					if(itm.stateid==1)
						ghtml+=' font-gray';
					ghtml+='">';
                    /*ghtml+='<td>';
					if(itm.stateid==0)
						ghtml+='<a class="font-blue"  href="javascript:edit_page(\''+itm.ref+'\')">'+itm.username+'</a>';
					else
						ghtml+='<a  href="javascript:edit_page(\''+itm.ref+'\')">'+itm.username+'</a>';
					ghtml+='</td>'; */
                    if(itm.stateid==0)
					    ghtml+=	'<td><a class="font-blue"  href="javascript:edit_page(\''+itm.ref+'\')">'+(typeof(itm.realname)=="undefined"?'N/N':itm.realname)+'</a></td>';
                    else
                        ghtml+=	'<td><a href="javascript:edit_page(\''+itm.ref+'\')">'+(typeof(itm.realname)=="undefined"?'N/N':itm.realname)+'</a></td>';
					ghtml+=	'<td>'+(typeof(itm.sex)=="undefined"?'N/N':itm.sex)+'</td>';
					ghtml+=	'<td>'+(typeof(itm.identityname)=="undefined"?'N/N':itm.identityname)+'</td>';
					if(rolename.length>2){ 
						$.each(rolename,function(idx,itm){
							if(rolestr.length>0) 
								rolestr+=",";
							rolestr+=itm;
						})
						if(rolestr.length>7)
							str=rolestr.substring(0, 7)+'...'+'<input type="hidden" name="ipt_show" value="'+rolestr+'"/>';
					}else
						str=itm.rolename
					ghtml+=	'<td >'+str+'</td>';
					 
					if(tname.length>2){
						$.each(tname,function(idx,itm){
							if(tstr.length>0)
								tstr+=",";
							tstr+=itm;
						});      
						if(tstr.length>10)
							str=tstr.substring(0, 10)+'...'+'<input type="hidden" name="ipt_show" value="'+tstr+'"/>';
					}else   
						str=tname.length>0?tname.join(","):''; 
					ghtml+=	'<td colspan="1">'+str+'</td>';
                    ghtml+='<td>';

                    if(itm.yxwflag&&itm.yxwflag=='1')
                        ghtml+='<a class="font-blue" href="javascript:showAddCardDiv(\''+itm.userid+'\',\''+itm.realname+'\',\''+itm.cardcommand+'\');">添加</a>'
                    else
                        ghtml+='--';
                    ghtml+='</td>';

                    ghtml+='<td>';

                    if(itm.yxwflag&&itm.yxwflag=='1'&&itm.ettuserid)
                        ghtml+='<a class="font-blue" target="_blank" href="'+preStudyStatUrl+'?jid='+itm.ettuserid+'&reportDate='+dateStr+'">查看</a>'
                    else
                        ghtml+='--';
                    ghtml+='</td>';
					ghtml+='</tr>';  
				});	     
			}else{    
				ghtml+='<tr><th>暂无数据 !</th></tr>';
			}
			
				p1.setPageSize(rps.presult.pageSize);
				p1.setPageNo(rps.presult.pageNo);
				p1.setRectotal(rps.presult.recTotal);
				p1.setPagetotal(rps.presult.pageTotal);
				p1.Refresh(); 
		}
		$('#maintbl').html(ghtml);
        $("#page1form").show();

		$("#maintbl td").filter(function() {
			return $(this).children("input").length > 0
		}).hover(function() { 
			showThContents(this);  
		}, function() {
			var divObj = $("#div_tmp_content");
			if (divObj.length > 0) {
				divObj.remove();
			}
		});
	}
	 
	function edit_page(uid){
		var identityname='',rolestr='',username='';
		rolestr=$("#sel_role").val();
		username=$("#sel_username").val();
		identityname=$("#sel_identity").val(); 
		toPostURL('user?m=adminview',{ref:uid,identityname:identityname,rolestr:rolestr,username:username},false,null);
	}
	  
	/**
	 * 验证用户名
	 * @param txtid
	 * @return
	 */
	function validateUsername(txtid){
		var uname=$("#"+txtid).val().Trim();
		if(uname.length<1){
			return; 
		}
        $("#username_flag").val("0");

        var reg = new RegExp("^([_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if(!reg.test(uname)){
            $("#username_err").html('用户名格式错误');
            return;
        }else
            $("#username_err").html('');

		//开始测试  
		$ajax("user?m=ajaxuser",{username:encodeURI(uname)},'POST','json',
				function(rps){
				if(rps.objList.length>0){					
					$("#"+txtid).focus();
					$("#"+txtid).select();
					$("#username_err").html(rps.objList[0]);
					$("#username_flag").val("0"); 
				}else{
					$("#username_flag").val("1");
					$("#username_err").html('');
                    _checkEttUserName(txtid)
				}  
		},function(){});//alert('错误,系统未响应！');});
	}


/**
 * 验证密码
 * @param txtid
 * @return
 */
function validatePassword(txtid){
    var pwd=$("#"+txtid).val().Trim();
    if(pwd.length<1){
        return;
    }
    $("#pwd_flag").val("0");
    //开始测试
    $ajax("user?m=ajaxUserPassword",{password:pwd},'POST','json',
        function(rps){
            if(rps.objList.length>0){
                $("#"+txtid).focus();
                $("#"+txtid).select();
                $("#pwd_err").html(rps.objList[0]);
                $("#pwd_flag").val("0");
            }else{
                $("#pwd_flag").val("1");
                $("#pwd_err").html('');
            }
        },function(){});
}


/**
 * 验证密码
 * @param txtid
 * @return
 */
function validatePasswordByAdd(txtid){
    var pwd=$("#"+txtid).val().Trim();
    if(pwd.length<1){
        return;
    }
    $("#pwd_flag").val("0");
    //开始测试
    $ajax("user?m=ajaxUserPassword",{password:pwd},'POST','json',
        function(rps){
            if(rps.objList.length>0){
                $("#"+txtid).focus();
                $("#pwd_err").html(rps.objList[0]);
                $("#pwd_flag").val("0");
            }else{
                $("#pwd_flag").val("1");
                $("#pwd_err").html('');
            }
        },function(){});
}






function _checkEttUserName(id){
    var username=$("#"+id).val();
    $.ajax({
        url:"tpuser?checkEttUserName",
        type:"post",
        data:{userName:username.Trim()},
        dataType:'json',
        cache: false,
        error:function(){
            //alert('系统未响应，请稍候重试!');
        },
        success:function(json){
            if(json.type=='error'){
                if(json.objList[0]!=null&&json.objList[0].toString().length>0){
                    $("#username_err").html(json.objList[0]);
                    $("#username_flag").val("0");
                }
            }else{
                $("#username_flag").val("1");
                $("#username_err").html('');
            }
        }
    });
}
	/**
	 * 验证学号
	 * @param txtid 学号
	 * @return
	 */
	function validateStuno(txtid){
		var stuno=$("#"+txtid).val().Trim();
		if(stuno.length<1){
			alert('请输入学号再检测!');
			return; 
		}
		$("#stuno_flag").val("0"); 
		//开始测试
		$ajax("student?m=ajaxlist",{stuno:stuno},'POST','json',
				function(rps){
				if(rps.objList.length>0){					
					$("#"+txtid).focus();
					//$("#"+txtid).select();
					$("#stuno_flag").val("0");
					$("#stuno_err").html('学号已存在');
				}else{ 
					$("#stuno_flag").val("1");
					$("#stuno_err").html('');
				} 
		},function(){/*//alert('错误,系统未响应！');*/})
	}

	function validateStuDistrictno(txtid) {
		console.log("abcded")
		$("#studistrictno_flag").val("1");
		$("#studistrictno_err").html('');
		var studistrictno = $("#" + txtid).val().Trim();
        if (studistrictno.length > 0) {
            if (studistrictno == $("input[id='stuno']").val().Trim()) {
                $("#studistrictno_flag").val("0");
                $("#studistrictno_err").html('区考号不能和学号一样');
            } else {
                $ajax("student?m=ajaxlistByStuDistrictNo", {studistrictno: studistrictno}, 'POST', 'json',
                    function (rps) {
                        if (rps.objList.length > 0) {
                            $("#" + txtid).focus();
                            $("#studistrictno_flag").val("0");
                            $("#studistrictno_err").html('区考号已存在');
                        } else {
                            $("#studistrictno_flag").val("1");
                            $("#studistrictno_err").html('');
                        }
                    }, function () {
                    }
                )
			}
		}
	}
	/**
	 * 添加，修改角色后的处理
	 * @param rval
	 * @return
	 */
	function roleChange(rval,type){
		if(typeof(rval)!="undefined"&&!isNaN(rval.value)){
			if(rval.value.Trim()==$BANZR_ID){
				$("#tr_bzr").css('display',rval.checked==true?'block':'none');
				$("#cls_bzr_result").html('');
			}else if(rval.value.Trim()==$GRADE_ID||rval.value.Trim()==$GRADE_FU_ID){
				edit_ckb(rval.value,$GRADE_ID,$GRADE_FU_ID);
				dept4add(3);  
				$("#tr_gradeleader").css('display',rval.checked==true?'block':'none');
				$("#sel_gradeleader").html('');
			}else if(rval.value.Trim()==$DEPT_ID||rval.value.Trim()==$DEPT_FU_ID){
				edit_ckb(rval.value,$DEPT_ID,$DEPT_FU_ID);
				dept4add(1);   
				$("#tr_dept").css('display',rval.checked==true?'block':'none');
				$("#sel_dept").html(''); 
			}else if(rval.value.Trim()==$TEACH_ID||rval.value.Trim()==$TEACH_FU_ID){
				edit_ckb(rval.value,$TEACH_ID,$TEACH_FU_ID); 
				dept4add(2);    
				$("#tr_teachleader").css('display',rval.checked==true?'block':'none');
				$("#sel_teachleader").html('');
			}else if(rval.value.Trim()==$PREPARE_ID){
				dept4add(5);
				$("#tr_prepareleader").css('display',rval.checked==true?'block':'none');
				$("#sel_prepareleader").html('');
			}else if(rval.value.Trim()==$DEPT_FZR_ID){
                dept4add(4);
                $("#tr_dept_fzr").css('display',rval.checked==true?'block':'none');
                $("#sel_dept_fzr").html('');
            }
		}
	}
	function edit_ckb(val,rval,dval){
		if(val==rval){
			$('input[name="role"]').filter(function(){return this.value==dval}).prop("checked",false);
		}else if(val==dval){
			$('input[name="role"]').filter(function(){return this.value==rval}).prop("checked",false);
		}
	} 
	
	function ckAdminRole(ckobj){ 
		$("#td_admin_role").css("display",ckobj.checked==true?'':'none');
        $("#td_admin_role").parent("td").css("display",ckobj.checked==true?'':'none');
	}

	

	function dept4add(type){
		$.ajax({
			url:'dept?m=ajaxlist',
			type:'post',
			data:{
				typeid:type  
			},    
			dataType:'json',
			error:function(){
                //alert('系统未响应!')
            },
			success:function(json){ 
				var htm='';
				if(json.objList.length>0){
					$.each(json.objList,function(idx,itm){
						if(itm.parentdeptid!=-1)
							htm+='<option value="'+itm.deptid+'">'+itm.deptname+'</option>';
					}); 
				} 
				if(type==1)
					$("#sel_dept").html(htm);
				else if(type==2)	
					$("#sel_teachleader").html(htm);
				else if(type==3)
					$("#sel_gradeleader").html(htm);
                else if(type==4)
                    $("#sel_dept_fzr").html(htm);
				else if(type==5)
					$("#sel_prepareleader").html(htm);

			}  
		});  
	}
	
	
	function roleChangeUpd(rval,type){
		if(typeof(rval)!="undefined"&&!isNaN(rval.value)&&rval.checked){
			//如果当前用户不等于学生
			if(rval.value.Trim()!=$STU_ID){
				$("#role_"+$STU_ID).prop("checked",false);
				$("#addteacher").show();
				$("#addstudent").hide();  
				  
				var banobj=$("input[name='role']:checked").filter(function(){return this.value==$BANZR_ID});
				if(rval.value.Trim()==$BANZR_ID||banobj.length>0)    
					$("#addclassmaster").show();  
			}else{       
				$("input[name='role']").    
					filter(function(){return this.value!=$STU_ID}).prop("checked",false);	
				 
				if(type=="add"){ 
					$("#addstudent").show();
					$("#addteacher").hide();
					$("#addclassmaster").hide();
				}  
			}			  
		}else if(!rval.checked){
			if(rval.value.Trim()==$BANZR_ID){     
				$("div[id='addclassmaster']").hide(); 
			}       
		}    
	} 
	 
	function clsLiChange(fseid,fsex,tseid,dobj){
		var year=$("#"+dobj+" select[id='sel_year']").find("option:selected");
		var grade=$("#"+dobj+" select[id='sel_grade']").find("option:selected");
		var cls=$("#"+dobj+" select[id='sel_cls']").find("option:selected");
		    
		if(year.val().length<1||grade.val().length<1||cls.val().length<1)
			return;
		
		var seObjs=$("#"+dobj+" select[id='"+fseid+"']");//#userinfo 
		var toObjs=$("#"+dobj+" ol[id='"+tseid+"']");
		if(seObjs.length<1){
			alert('异常错误!');
			return;
		} 
		
		var clsSubject=$("#cls_subject");
		if(tseid=='cls_result'){ 
			if((clsSubject.val()==null||clsSubject.val().length<1)&&cls.val().split("|").length<2){
				alert('请选择班级科目!'); 
				return;     
			} 	
		}
		
		var clsopts=$("#cls_subject").find("option:selected");
		var subjectid='';subjectname='';
		if(cls.val().split("|").length>1){
			subjectid=cls.val().split("|")[1];   
			subjectname=$(cls).text().split("-")[1].Trim();  
		}else 
			subjectid=$(clsopts).val(),subjectname=$(clsopts).text().Trim();
		
		var selopts=seObjs[0].options[seObjs[0].selectedIndex];
		if(selopts.value.Trim().length<1){
			alert('请先选择班级后，再点击确定!');
			return;   
		} 
		
		var seflag=false;
		$.each(toObjs.children('li'),function(idx,itm){
			if(tseid=='cls_result'){
				if(cls.val().split("|").length>1){
					if($(itm).attr('data')==selopts.value.Trim()){
						seflag=true;
						return;  
					}  
				}else{
					if($(itm).attr('data')==selopts.value.Trim()+"|"+subjectid){
						seflag=true;
						return;
					}  
				}
			}else if($(itm).attr('data')==selopts.value.split("|")[0]){
				seflag=true;
				return;
			} 
			 
		});
        //添加管理班级信息的时候判断，是否为班级的授课教师，
        if(tseid=='cls_bzr_result'){
            //添加的管理班级信息
            var isTeachClass=false;
            var manageClass=selopts.value.split('|')[0]
            //授课班级
            var clsobj=$("ol[id='cls_result']").children('li');
            var clsStr='';
            if(clsobj.length>0){
                $.each(clsobj,function(idx,itm){
                    if($(itm).attr('data').Trim().split("|")[0]==manageClass)
                        isTeachClass=true;
                });
            }else{
				var teachObj=$("ul[id='sp_teacls']").children('li');
				if(teachObj.length>0){
					$.each(teachObj,function(idx,itm){
						if($(itm).attr('data').Trim()==manageClass)
							isTeachClass=true;
					});
				}
			}
            //添加的管理班级不是该教师的授课班级
            if (!isTeachClass) {
                alert('班主任所管理的班级必须是其授课班级，请先设置授课班级!');//,如是体育教师，则必须选择性别！
                return;
            }
        }

		if(!seflag){    
			if(tseid=='cls_result'){   
				var id='';
				if(selopts.value.split("|").length>1)
					id=selopts.value.split('|')[0]+selopts.value.split('|')[1];
				else  
					id=selopts.value+subjectid; 
				var value=selopts.value.split('|')[0]+"|"+subjectid;
				var name=$(year).val()+$(grade).val()+selopts.text.split("-")[0]+"|"+subjectname; 
				$(toObjs).append('<li id="'+id+'"  data="'+value+'">'+name+'<a href="javascript:delLi(\''+id+'\',\''+dobj+'\')"><span title="删除"></span></a></li>');
			}else{        
				var id='';
				if(selopts.value.split("|").length>1)
					id=selopts.value.split('|')[0]+selopts.value.split('|')[1];
				else 
					id=selopts.value;  
				var value=selopts.value.split('|')[0];      
				var name=$(year).val()+$(grade).val()+selopts.text  
				$(toObjs).append('<li id="'+id+'" data="'+value+'">'+name+'<a href="javascript:delLi(\''+id+'\',\''+dobj+'\')"><span title="删除"></span></a></li>');
			}
 
			
		}   
	} 
	
	function delLi(obj,dvobj){
        //获得班级id
        var  classId=$("#"+obj).attr('data').Trim().split("|")[0];
        //删除了授课班级，同时应该删除对应的班级管理信息
		if (dvobj == 'addteacher' || dvobj == 'view_body') {
			//所有授课班级数量
			var clsobj=$("ol[id='cls_result']").children('li');
			var clsCount=0;;
			if(clsobj.length>0){
				$.each(clsobj,function(idx,itm){
					if($(itm).attr('data').Trim().split("|")[0]==classId)
						clsCount++;
				});
			}
			//管理班级
			var manageobj = $("ol[id='cls_bzr_result']").children('li');
			//管理班级不为空
			if (manageobj.length > 0) {
				var maCount=0;
				$.each(manageobj, function (idx, itm) {
					if ($(itm).attr('data').Trim().split("|")[0] == classId&&clsCount==1){
						//如果在删除班级下仅存在一个授课学科，则同时删除管理班级中对应班级
						//$("#" + classId).remove();
						maCount++;
					}
				});
				if(maCount>0&&clsCount==1){
					alert('删除此授课班级，请先清除对应的班主任身份');//删除授课班级前应先删除对应的管理班级
					return;
				}else{
					//移出授課班級
					$("#" + obj).remove();
				}
			} else if (manageobj.length <= 0 && dvobj == 'view_body') {
				//判断是否存在管理班级
				var spClass=$("input[name='sp_bzr_class']");
				var spCount=0;
				if(spClass.length > 0){
					$.each(spClass, function (idx, itm) {
						if ($(itm).attr('data').Trim()== classId){
							spCount++;
						}
					});
					//管理班级中存在待删除班级，且授课学科唯一，则提示用户应该先在【角色信息】中删除管理班级
					if(spCount>0&&clsCount==1){
						alert('删除此授课班级，请先清除对应的班主任身份');//删除授课班级前应先删除对应的管理班级
						return;
					}else{
						//移出授課班級
						$("#" + obj).remove();
					}
				}else{
					//移出授課班級
					$("#" + obj).remove();
				}

			}else if(clsCount>0){
                $("#" + obj).remove();
            }
		} else {
			//移出授課班級
			$("#" + obj).remove();
		}

	}  
	/**
	 * 班级改变的时候
	 * @param fseid 来自的selectid
	 * @param tseid  去向的selectid
	 * @return
	 */
	function clsChange(fseid,fsex,tseid,dobj){  
		var year=$("#"+dobj+" select[id='sel_year']").find("option:selected");
		var grade=$("#"+dobj+" select[id='sel_grade']").find("option:selected");
		var cls=$("#"+dobj+" select[id='sel_cls']").find("option:selected");
		    
		if(year.val().length<1||grade.val().length<1||cls.val().length<1)
			return;
		
		var seObjs=$("#"+dobj+" select[id='"+fseid+"']");//#userinfo 
	//	var sexObjs=$("#userinfo select[id='"+fsex+"']");  ||sexObjs.length<1||toObjs.length<1
		var toObjs=$("#"+dobj+" select[id='"+tseid+"']");
		if(seObjs.length<1){
			alert('异常错误!');
			return;
		}
		
		var clsSubject=$("#cls_subject");
		if(tseid=='cls_result'){
			if(clsSubject.val()==null||clsSubject.val().length<1&&cls.val().split("|").length<1){
				alert('请选择班级科目!');
				return;    
			} 	
		}
		 
		var clsopts=$("#cls_subject").find("option:selected");
		var subjectid='';subjectname='';
		if(cls.val().split("|").length>1){
			subjectid=cls.val().split("|")[1];   
			subjectname=$(cls).text().split("-")[1].Trim();  
		}else 
			subjectid=$(clsopts).val(),subjectname=$(clsopts).text().Trim();
		
		var selopts=seObjs[0].options[seObjs[0].selectedIndex];
		if(selopts.value.Trim().length<1){
			alert('请先选择班级后，再点击确定!');
			return;  
		}
		var seflag=false;
		$.each(toObjs[0].options,function(idx,itm){
			if(tseid=='cls_result'){
				if(cls.val().split("|").length>1){
					if(itm.value.Trim()==selopts.value.Trim()){
						seflag=true;
						return;  
					}  
				}else{
					if(itm.value.Trim()==selopts.value.Trim()+"|"+subjectid){
						seflag=true;
						return;
					}  
				}
			}else if(itm.value.Trim()==selopts.value.Trim()){
				seflag=true;
				return;
			} 
			
		});
		 
		
		if(!seflag){    
			if(tseid=='cls_result'){   
				toObjs[0].options.add(new Option($(year).val()+$(grade).val()+selopts.text.split("-")[0]+"|"+subjectname, selopts.value.split("|")[0]+"|"+subjectid));
			}else          
				toObjs[0].options.add(new Option($(year).val()+$(grade).val()+selopts.text, selopts.value));
		}  
		
	}
	/**
	 * 删除班级
	 * @param fseid 来自的selectid
	 * @param tseid 去向的selectid
	 * @return
	 */
	function removeCls(fseid,tseid,divobj){
		var seObjs=$("#"+divobj+" select[id='"+fseid+"']");//#userinfo
		var toObjs=$("#"+divobj+" select[id='"+tseid+"']");  
		
		var op=toObjs[0].options[toObjs[0].selectedIndex];	
		if(!op){
			alert("请先选择选项，再删除!");
			return; 
		}
		var bl=false;
		$.each(seObjs[0].options,function(idx,itm){
			if(itm.value==op.value)
				bl=true;
		}); 
		//if(!bl)     
		//	seObjs[0].options.add(new Option(op.text,op.value)); 		
		toObjs[0].options.remove(toObjs[0].selectedIndex);		 
	}
	
	
	/**
	 * 添加用户
	 * @return
	 */
	function doOperateUser(uid){
		var param={};
		//usernameObj
		var usernameObj=$("#username");
		if(usernameObj.val().Trim().length<1){
			alert('用户名不能为空，请输入用户名!\n\n提示：用户名由16位除%,\',<,>,/的字符外的字母，字符，数字组成!');
			return;
		}
		var username_flag=$("#username_flag").val();
		if(username_flag<1){ 
			alert('用户名不可用!');
			return;     
		}    
		param.username=usernameObj.val().Trim();
		//pass
		var passObj=$("#pass");
		if(passObj.val().Trim().length<6){
			alert('密码不能少于6个字符，请输入密码!\n\n提示：密码长度请限制在16位以内，以除英文(\',<,>,%,/)以外的字母，数字，符号组成!');
			passObj.focus();
			return; 
		}
        var pwd_flag=$("#pwd_flag").val();
        if(pwd_flag<1){
            alert('密码不可用!');
            return;
        }
        param.password=passObj.val().Trim();
		var stateidsObj=$("input[name='user_state']").filter(function(){return this.checked;});
		if(stateidsObj.length<1){
			alert('用户状态不能为空!请选择!');
			return;
		}
		param.stateid=stateidsObj.val().Trim();
		
		var mailaddressObj=$("input[name='mail_address']");
		if(mailaddressObj.val().Trim().length>0){
			param.mailaddress=mailaddressObj.val().Trim();
		} 

		var _IS_STU=false; 
		var _IS_BZR=false;  
		var identity=$('input[name="identity"]:checked');
		if(identity.length<1){
			alert('请选择身份!');  
			return;
		}  
		param.identityname=identity.val();
		
		if(identity.val().Trim()=='学生')
			_IS_STU=true;  
		var rolesStr=''; 
		var rolesObj=$("input[name='role']").filter(function(){return this.checked;});
		$.each(rolesObj,function(idx,itm){
			if(rolesStr.length>0)
				rolesStr+=',';
			rolesStr+=itm.value.Trim();
			
			if(itm.value.Trim()==$BANZR_ID)
				_IS_BZR=true;
		}); 
		if(rolesStr.Trim().length>0){
			param.roles=rolesStr;
		}
		param.isstu=_IS_STU;
		//学生 
		if(_IS_STU){
			//name
			var stunameObj=$("#realname");
			if(stunameObj.val().Trim().length<1){
				alert('学生姓名不能为空!请输入 !\n\n提示：由30个字符组成!');
				stunameObj.focus();
				return;
			}
			param.stuname=stunameObj.val().Trim(); 
			//no 
			var stunoObj=$("input[id='stuno']");
			if(stunoObj.val().Trim().length<1){
				alert('学生学号不能为空!请输入 !\n\n提示：由20个字符或数字组成!不可为空!且唯一');
				stunoObj.focus();
				return;				
			}
			var stuno_flag=$("#stuno_flag").val();
			if(stuno_flag<1){ 
				alert('学号不可用!');
				return;     
			}    
			param.stuno=stunoObj.val().Trim();
			//stusex
			var stusexObj=$("input[name='sex']").filter(function(){return this.checked;});
			if(stusexObj.length<1){
				alert('学生性别不能为空!请选择!');		
				stusexObj.focus();
				return;
			}
			param.sex=stusexObj.val().Trim();
			//stuclass
			var clsobj=$("ol[id='stucls_result']").children('li');
			if(clsobj.length<1){
				alert('学生所在班级不能为空，请选择!提示：学生所在班级! 选择后，点击 确定链接,如是体育教师，则必须选择性别！');
				return;
			}
			var clsStr='';
			$.each(clsobj,function(idx,itm){
				if(clsStr.Trim().length>0)
					clsStr+=',';
				clsStr+=$(itm).attr('data').Trim();  				
			}); 
			if(clsStr.length<1){
				alert('学生所在班级不能为空，请选择!提示：学生所在班级! 选择后，点击 确定链接,如是体育教师，则必须选择性别！');
				return;
			}
			param.clsstr=clsStr;
			//islearnguide
			var islearnguideObj=$("#userinfo input[name='islearnguide']").filter(function(){return this.checked;});
			if(islearnguideObj.length>0)
				param.islearnguide=islearnguideObj.val().Trim();

            var studistrictno_flag=$("#studistrictno_flag").val();
            if(studistrictno_flag<1){
                alert('区考号不可用!');
                return;
            }
            var stuDistrictNoObj = $("input[id='stuDistrictNo']");
            if (stuDistrictNoObj.val().Trim().length > 0) {
                param.stuDistrictNo = stuDistrictNoObj.val().Trim();
            }

			//linkman
			var linkmanObj=$("input[id='linkman']");
			if(linkmanObj.val().Trim().length>0){
//				alert('学生的监护人不能为空，请选择!提示：监护人由30个字符组成!');
//				linkmanObj.focus();
//				return;
				param.linkman=linkmanObj.val().Trim();
			}
			
			//linkmanphoneObj
			var linkmanphoneObj=$("input[id='linkmanPhone']");
			if(linkmanphoneObj.val().Trim().length>0){
//				alert('学生的监护人电话不能为空，请选择!提示：监护人电抗由手机或固话组成!');
//				linkmanphoneObj.focus();
//				return;  
				param.linkmanphone=linkmanphoneObj.val().Trim();
			}  
			
			//stuAddress
			var stuaddressObj=$("input[id='stuAddress']");
			if(stuaddressObj.val().Trim().length>0){
//				alert('由50个字符组成!<');
//				stuaddressObj.focus();
//				return;
				param.address=stuaddressObj.val().Trim();
			}
						
		}else{ //教师
			//name
			var realnameObj=$("input[id='realname']");
			if(realnameObj.val().Trim().length<1){
				alert('教师姓名不能为空!请输入 !\n\n提示：由30个字符组成!');
				realnameObj.focus();
				return;
			}
			param.realname=realnameObj.val(); 
			//sex 
			var teacherSexsObj=$("input[name='sex']").filter(function(){return this.checked;});
			if(teacherSexsObj.length<1){
				alert('教师性别不能为空!请选择!');		
				teacherSexsObj.focus();
				return;
			}
			param.sex=teacherSexsObj.val().Trim();
			
			//subject
			var subjectsObj=$("input[name='subject']").filter(function(){return this.checked});
			if(subjectsObj.length>0){
				var subjectStr='';
				$.each(subjectsObj,function(idx,itm){
					if(subjectStr.length>0)
						subjectStr+=',';
					subjectStr+=itm.value.Trim();
				});
				param.subject=subjectStr; 
			}
			
			var clssubobj=$("input[name='subject_major']").filter(function(){return this.checked==true});
			if(clssubobj.length>0){ 
				var clssubStr=''; 
				$.each(clssubobj,function(idx,itm){		
					if(clssubStr.Trim().length>0)
						clssubStr+=','; 
					clssubStr+=itm.value.Trim();
				});  
				param.subjectmajor=clssubStr;
			}
			
			//管理员角色
			var adminrolesObj=$("#td_admin_role input[name='admin_role']:checked");
			$.each(adminrolesObj,function(idx,itm){
				if(rolesStr.length>0)
					rolesStr+=',';
				rolesStr+=$(itm).val();
			}); 
			if(rolesStr.length>0) 
				param.roles=rolesStr;
			 
			//年级组长
			var gradeid=$("#sel_gradeleader").val();
			if(gradeid!=null&&gradeid.Trim().length>0)
				param.gradeid=gradeid;
			var gradeleadergrd=$("#sel_gradeleader_grd").val();
			if(gradeleadergrd!=null&&gradeleadergrd.Trim().length>0)
				param.gradeleadergrd=gradeleadergrd;

			//部门主任
			var deptid=$("#sel_dept").val();
			if(deptid!=null&&deptid.Trim().length>0)
				param.deptid=deptid;
			//教研组长
			var teachleaderid=$("#sel_teachleader").val();
			if(teachleaderid!=null&&teachleaderid.Trim().length>0)
				param.teachleaderid=teachleaderid;
			var teachleadersubid=$("#sel_teachleader_subject").val();
			if(teachleadersubid!=null&&teachleadersubid.Trim().length>0)
				param.teachleadersubid=teachleadersubid;
			//备课组长
			var prepareid=$("#sel_prepareleader").val();
			if(prepareid!=null&&prepareid.Trim().length>0)
				param.prepareid=prepareid;
			var prepareleadergrd=$("#sel_prepareleader_grd").val();
			if(prepareleadergrd!=null&&prepareleadergrd.Trim().length>0)
				param.prepareleadergrd=prepareleadergrd;
			var prepareleadersubject=$("#sel_prepareleader_subject").val();
			if(prepareleadersubject!=null&&prepareleadersubject.Trim().length>0)
				param.prepareleadersubject=prepareleadersubject;

            //部门负责人
            var deptfzrid=$("#sel_dept_fzr").val();
            if(deptfzrid!=null&&deptfzrid.Trim().length>0)
                param.deptfzrid=deptfzrid;
			
			//teacherclass
			var clsobj=$("ol[id='cls_result']").children('li');
			var clsStr='';
			if(clsobj.length>0){
				$.each(clsobj,function(idx,itm){
					if(clsStr.Trim().length>0)
						clsStr+=',';   
					clsStr+=$(itm).attr('data').Trim();
				});
			} 
			if(clsStr.length>0){
				param.clsstr=clsStr;
			}
			
			//teacherphoneObj
			var teacherphoneObj=$("input[name='teacherphone']");
			if(teacherphoneObj.val().Trim().length>0){
				param.teacherphone=teacherphoneObj.val().Trim();
			}

			var teacheraddressObj=$("input[name='teacheraddress']");
			if(teacheraddressObj.val().Trim().length>0){
				param.teacheraddress=teacheraddressObj.val().Trim();
			} 
			   
			if(_IS_BZR){ 
				var clsbzrobj=$("ol[id='cls_bzr_result']").children('li');
				if(clsbzrobj.length<1){
					alert('班主任所管理班级不能为空，请选择!提示：班主任管理班级! 选择后，点击 确定链接');//,如是体育教师，则必须选择性别！
					return;
				} 
				var clsStr='';
				$.each(clsbzrobj,function(idx,itm){
					if(clsStr.Trim().length>0)
						clsStr+=',';
					clsStr+=$(itm).attr('data').Trim();
				});
				if(clsStr.length<1){ 
					alert('班主任所管理班级不能为空，请选择!提示：班主任所管理班级! 选择后，点击 确定链接');//,如是体育教师，则必须选择性别！
					return;
				}
				param.clsbzrstr=clsStr; 
			}  
		}
        param.dcschoolid=$("#dcSchoolID").val();
		//提示
		if(!confirm('确定新建此账户?'))
			return; 
		//ajax提交
		var url="user?m=doadd"; 
		if(typeof(uid)!="undefined"&&uid.length>0)
			url="user?m=domodify&ref="+uid;  
		$ajax(url,param,'POST','json',function(rps){
			if(rps.type=='success'){  
				alert(rps.msg);
				//location.href='user?m=list';
                edit_page(typeof rps.objList[0]=='undefined'?uid:rps.objList[0]);
			}else
				alert(rps.msg);
		},function(){});//alert('错误,系统未响应！');})
	} 
	 

	/**
	 * 修改用户
	 * @return
	 */  
	function doOperateUserUpd(uid){
		var param={};
		//usernameObj
		var usernameObj=$("#username");
		if(usernameObj.val().Trim().length<1){
			alert('用户名不能为空，请输入用户名!\n\n提示：用户名由16位除%,\',<,>,/的字符外的字母，字符，数字组成!');
			return;
		}
		var username_flag=$("#username_flag").val();
		if(username_flag<1){ 
			alert('用户名不可用!');
			return;     
		}    
		param.username=usernameObj.val().Trim();
		//pass
		var passObj=$("#pass");
		if(passObj.val().Trim().length<6){
			alert('密码不能少于6个字符，请输入密码!\n\n提示：密码长度请限制在16位以内，以除英文(\',<,>,%,/)以外的字母，数字，符号组成!');
			passObj.focus();
			return; 
		}
        var pwd_flag=$("#pwd_flag").val();
        if(pwd_flag<1){
            alert('密码不可用!');
            return;
        }
        param.password=passObj.val().Trim();
		//repass
		var repassObj=$("#repass");
		if(repassObj.val().Trim().length<1){
			alert('确认密码不能为空!请输入确认密码!\n\n提示：确认密码必须与密码一致!');
			repassObj.focus();
			return;
		}
		if(passObj.val().Trim()!=repassObj.val().Trim()){
			alert('密码与确认密码不一致,请确认后重新输入!\n\n提示：确认密码必须与密码一致!');
			repassObj.focus();
			return;
		}
//		//passquestion
//		var passquesObj=$("#passquestion");
//		if(passquesObj.val().Trim().length<1){
//			alert('密保问题不能为空!请输入密保问题!\n\n提示：密码丢失后，可用此种问题找回!由50个字符组成!');
//			passquesObj.focus();
//			return;
//		}
//		param.passquestion=passquesObj.val().Trim();
//		//passanswer
//		var passanswerObj=$("#quastionanswer");
//		if(passanswerObj.val().Trim().length<1){
//			alert('密保答案不能为空!请输入密保答案!\n\n提示：密码丢失后，可根据密保问题与答案重新修改密码!由50个字符组成!');
//			passanswerObj.focus();
//			return;
//		}
//		param.questionanswer=passanswerObj.val().Trim();
		//stateid
		var stateidsObj=$("input[name='user_state']").filter(function(){return this.checked;});
		if(stateidsObj.length<1){
			alert('用户状态不能为空!请选择!');
			return;
		}
		param.stateid=stateidsObj.val().Trim();
		//birth
//		var birth=$("#birth");
//		if(birth.val().Trim().length>0){
////			alert('生日信息不能为空!');
////			birth.focus();
////			return;
//			param.birthdate=birth.val().Trim();
//		}
		
		var mailaddressObj=$("input[name='mail_address']");
		if(mailaddressObj.val().Trim().length>0){
//			alert('邮箱不能为空!请选择!\n\n提示：格式：aaa@123.com!');		
//			mailaddressObj.focus();
//			return;  
			param.mailaddress=mailaddressObj.val().Trim();
		} 
	
		
		var jobsStr='';
		var jobsObj=$("input[name='job']").filter(function(){return this.checked;});
		if(jobsObj.length>0){
			$.each(jobsObj,function(idx,itm){
				if(jobsStr.length>0)
					jobsStr+=',';
				jobsStr+=itm.value.Trim();
			});
		}
		if(jobsStr.Trim().length>0)
			param.jobs=jobsStr;
		//role  
		var _IS_STU=false; 
		var _IS_BZR=false;  
		var rolesStr='';
		var rolesObj=$("input[name='role']").filter(function(){return this.checked;});
		if(rolesObj.length<1){
			alert('角色不能为空，请选择!');
			return;
		}else{
			$.each(rolesObj,function(idx,itm){
				if(rolesStr.length>0)
					rolesStr+=',';
				rolesStr+=itm.value.Trim();
				
				if(itm.value.Trim()==$STU_ID)
					_IS_STU=true;
				else if(itm.value.Trim()==$BANZR_ID)
					_IS_BZR=true;
			});
		} 
		if(rolesStr.Trim().length<1){
			alert('角色不能为空，请选择!');
			return;
		}
		param.roles=rolesStr;
		param.isstu=_IS_STU;
		//学生 
		if(_IS_STU){
			//name
			var stunameObj=$("input[id='stuname']");
			if(stunameObj.val().Trim().length<1){
				alert('学生姓名不能为空!请输入 !\n\n提示：由30个字符组成!');
				stunameObj.focus();
				return;
			}
			param.stuname=stunameObj.val().Trim(); 
			//no 
			var stunoObj=$("input[id='stuno']");
			if(stunoObj.val().Trim().length<1){
				alert('学生学号不能为空!请输入 !\n\n提示：由20个字符或数字组成!不可为空!且唯一');
				stunoObj.focus();
				return;				
			}
			var stuno_flag=$("#stuno_flag").val();
			if(stuno_flag<1){ 
				alert('学号不可用!');
				return;     
			}    
			param.stuno=stunoObj.val().Trim();
			//stusex
			var stusexObj=$("input[name='stusex']").filter(function(){return this.checked;});
			if(stusexObj.length<1){
				alert('学生性别不能为空!请选择!');		
				stusexObj.focus();
				return;
			}
			param.stusex=stusexObj.val().Trim();
			//stuclass
			var clsobj=$("select[id='stucls_result']");
			if(clsobj[0].options.length<1){
				alert('学生所在班级不能为空，请选择!提示：学生所在班级! 选择后，点击 确定链接,如是体育教师，则必须选择性别！');
				return;
			}
			var clsStr='';
			$.each(clsobj[0].options,function(idx,itm){
				if(clsStr.Trim().length>0)
					clsStr+=',';
				clsStr+=itm.value;				
			});
			if(clsStr.length<1){
				alert('学生所在班级不能为空，请选择!提示：学生所在班级! 选择后，点击 确定链接,如是体育教师，则必须选择性别！');
				return;
			}
			param.clsstr=clsStr;
			//islearnguide
			var islearnguideObj=$("input[name='islearnguide']").filter(function(){return this.checked;});
			if(islearnguideObj.length>0)
				param.islearnguide=islearnguideObj.val().Trim();

            var stuDistrictNoObj = $("input[id='stuDistrictNo']");
            if (stuDistrictNoObj.val().Trim().length > 0) {
                param.stuDistrictNo = stuDistrictNoObj.val().Trim();
            }

			//linkman
			var linkmanObj=$("input[id='linkman']");
			if(linkmanObj.val().Trim().length>0){
//				alert('学生的监护人不能为空，请选择!提示：监护人由30个字符组成!');
//				linkmanObj.focus();
//				return;
				param.linkman=linkmanObj.val().Trim();
			}
			
			//linkmanphoneObj
			var linkmanphoneObj=$("input[id='linkmanPhone']");
			if(linkmanphoneObj.val().Trim().length>0){
//				alert('学生的监护人电话不能为空，请选择!提示：监护人电抗由手机或固话组成!');
//				linkmanphoneObj.focus();
//				return;  
				param.linkmanphone=linkmanphoneObj.val().Trim();
			}  
			
			//stuAddress
			var stuaddressObj=$("input[id='stuAddress']");
			if(stuaddressObj.val().Trim().length>0){
//				alert('由50个字符组成!<');
//				stuaddressObj.focus();
//				return;
				param.address=stuaddressObj.val().Trim();
			}
						
		}else{ //教师
			//name
			var realnameObj=$("input[id='realname']");
			if(realnameObj.val().Trim().length<1){
				alert('教师姓名不能为空!请输入 !\n\n提示：由30个字符组成!');
				realnameObj.focus();
				return;
			}
			param.realname=realnameObj.val(); 
			//sex 
			var teacherSexsObj=$("input[name='sex']").filter(function(){return this.checked;});
			if(teacherSexsObj.length<1){
				alert('教师性别不能为空!请选择!');		
				teacherSexsObj.focus();
				return;
			}
			param.teachersex=teacherSexsObj.val().Trim();
			//subject
			var subjectsObj=$("input[name='subject']").filter(function(){return this.checked});
			if(subjectsObj.length>0){
				//alert('教师所教授科目不能为空，请选择!');
				//return;
				var subjectStr='';
				$.each(subjectsObj,function(idx,itm){
					if(subjectStr.length>0)
						subjectStr+=',';
					subjectStr+=itm.value.Trim();
				});
				param.subject=subjectStr; 
			}
			
			var clssubobj=$("input[name='subject_major']").filter(function(){return this.checked==true});
			if(clssubobj.length>0){ 
				var clssubStr=''; 
				$.each(clssubobj,function(idx,itm){		
					if(clssubStr.Trim().length>0)
						clssubStr+=','; 
					clssubStr+=itm.value.Trim();
				});  
				param.subjectmajor=clssubStr;
			}
		
			
			
			//teacherclass
			var clsobj=$("select[id='cls_result']");
//			if(clsobj.length<1||clsobj[0].options.length<1){
//				alert('教师所教授班级不能为空，请选择!提示：教师所教授班级! 选择后，点击 确定链接');//,如是体育教师，则必须选择性别！
//				return;
//			}
			var clsStr='';
			if(clsobj.length>0&&clsobj[0].options.length>0){
				$.each(clsobj[0].options,function(idx,itm){
					if(clsStr.Trim().length>0)
						clsStr+=',';  
					clsStr+=itm.value.Trim();
				});
			} 
			if(clsStr.length>0){
				param.clsstr=clsStr;
			}
			
			 
			//cardid
			var teachercardidObj=$("input[name='teachercardid']");
			if(teachercardidObj.val().Trim().length>0){
//				alert('教师身份证号不能为空!请选择!');		
//				teachercardidObj.focus();  
//				return;
				param.teachercardid=teachercardidObj.val().Trim();
			}
			
			
			//teacherphoneObj
			var teacherphoneObj=$("input[name='teacherphone']");
			if(teacherphoneObj.val().Trim().length>0){
//				alert('教师联系电话不能为空!请选择!\n\n提示：手机或固话!');		
//				teacherphoneObj.focus();
//				return;
				param.teacherphone=teacherphoneObj.val().Trim();
			}
			
			//teacherpostObj
//			var teacherpostObj=$("#userinfo input[name='teacherpost']");
//			if(teacherpostObj.val().Trim().length<1){
//				alert('教师联系邮箱不能为空!请选择!\n\n提示：格式：aaa@123.com!');		
//				teacherpostObj.focus();
//				return;
//			}
//			param.teacherpost=teacherpostObj.val().Trim();
			//teacheraddressObj
			var teacheraddressObj=$("input[name='teacheraddress']");
			if(teacheraddressObj.val().Trim().length>0){
//				alert('教师联系地址不能为空!请选择!');		
//				teacheraddressObj.focus();
//				return;
				param.teacheraddress=teacheraddressObj.val().Trim();
			}
			 
			
			
			if(_IS_BZR){ 
				var clsbzrobj=$("select[id='cls_bzr_result']");
				if(clsbzrobj.length<1||clsbzrobj[0].options.length<1){
					alert('班主任所管理班级不能为空，请选择!提示：班主任管理班级! 选择后，点击 确定链接');//,如是体育教师，则必须选择性别！
					return;
				} 
				var clsStr='';
				$.each(clsbzrobj[0].options,function(idx,itm){
//					var sex=0;
//					if(itm.value.indexOf(' | ')!=-1)
//						sex=itm.value.split(' | ')[1]=='男'?1:2;				
					if(clsStr.Trim().length>0)
						clsStr+=',';
					clsStr+=itm.value.Trim();
				});
				if(clsStr.length<1){ 
					alert('班主任所管理班级不能为空，请选择!提示：班主任所管理班级! 选择后，点击 确定链接');//,如是体育教师，则必须选择性别！
					return;
				}
				param.clsbzrstr=clsStr; 
			}
		}
		//提示
		if(!confirm('您确认开始验证信息吗？\n\n提示：如验证开始，验证通过后，系统将自己进行数据提交!'))
			return; 
		//ajax提交
		var url="user?m=doadd"; 
		if(typeof(uid)!="undefined"&&uid.length>0)
			url="user?m=domodify&ref="+uid;  
		$ajax(url,param,'POST','json',function(rps){
			if(rps.type=='success'){  
				alert(rps.msg);
				location.href='user?m=list';	
			}else    
				alert(rps.msg);
		},function(){});//alert('错误,系统未响应！');})
	}
	 
	
/**
 * 为选中用户指定页面权限
 * @param uid
 * @param issingleop 是否是批量操作
 * @return
 */  
function setPageRight(uid,isbatch){ 
	if((!isbatch)&&(typeof(uid)=="undefined")){  
		alert("系统未获取到用户标识，请刷新页面重试!");
		return;  
	}
	var uidstr='',returnValue ='',param ="dialogWidth:500px;dialogHeight:700px;status:no;location:no;";
	if(isbatch){
		uidstr=uid;
		returnValue = window.showModalDialog("pageright?m=dialoglist&userid="+uid,param); 
	}else{      
		var dataObj=[];
		var uidArray=$("input[type='checkbox']").filter(function(){ 
			return this.name=='ckuserid' && this.checked==true;
		});
		if(uidArray.length<1){  
			alert('您尚未选择用户!');
			return; 
		}else{
			$.each(uidArray,function(idx,itm){
				if(uidstr.length>0)
					uidstr+=','; 
				uidstr+=itm.value.Trim(); 
			});
		}
		returnValue = window.showModalDialog("pageright?m=dialoglist",param); //dataarray
		
	} 
	if(returnValue==null || returnValue.Trim().length<1){
		alert("您未选择权限或未提交!"); 
		return;
	}   
      
	$.ajax({
		url:'rightuser?m=setRightByUserid',
		type:'post', 
		data:{
			useridstr  : uidstr, 
			prightidstr : returnValue
		},
		dataType:'json',
		error:function(){alert("网络异常!")},  
		success:function(rps){ 
			alert(rps.msg);   
		}
	});
}

function selAllCkObj(obj){ 
	$("input[name='ckuserid']").prop("checked",obj.checked);
}   
   
function selOneCkObj(){   
	var ck = $("input[name='ckuserid']");
	var cked = $("input[name='ckuserid']").filter(function(){ return this.checked==true});
	$("input[id='ck_all']").prop("checked",ck.length==cked.length);
}   
  
/**
 * 批量设置用户状态
 * @return
 */
function dosetUserStateid(stateid){
	if(isNaN(stateid)){return;}
	var iptArray=$("input[name='ckuserid']").filter(function(){return this.checked==true});
	if(iptArray.length<1){
		alert('您尚未选择用户!');
		return;
	}  
	var useridArray=''; 
	$.each(iptArray,function(idx,itm){
		if(useridArray.length>0)
			useridArray+=',';
		useridArray+=itm.value; 
	}); 
	var msg=stateid==0?'启用':'禁用';
	if(!confirm("提示：确认"+msg+"选中用户？")){return;} 
    
	$.ajax({
		url:'user?m=dosetUserState',
		type:'post',
		data:{
			stateid:stateid,
			useridstr:useridArray
		},
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){ 
			pageGo('p1'); 
			alert(json.msg);
		}
	});
}


/**
 * 根据身份查角色
 */
function getRoleByIdentity(iname,roleid){
	var identityname=$("#sel_identity").val();
	if(typeof(iname)!='undefined')
		identityname=iname;
	$("#sel_role").html('');  
//	if(identityname.Trim().length<1){
//		$("#sel_role").html('<option value="">全部</option>');
//		$("#sel_role").val("");
//		return;
//	}
	$.ajax({
		url:'identity?m=ajaxlist',
		type:'post',
		data:{
			identityname:identityname
		},  
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){ 
			var html='<option value="">全部</option>';
			if(json.objList.length>0){
				$.each(json.objList,function(idx,itm){
                    if(itm.roleid!=1&&itm.roleid!=4)
                        html+='<option value="'+itm.roleid+'">'+itm.rolename+'</option>';
				});
			}
			$("#sel_role").html(html);
			if(typeof(roleid)!='undefined')
				$("#sel_role").val(roleid);
		}  
	});  
}



/**
 * 自动补全班级
 * @return
 */  
function getClsByYear(dobj){
	var year=$("#"+dobj+" select[id='sel_year']").val();
	var grade=$("#"+dobj+" select[id='sel_grade']").val();
	
	if(year==null||year.length<1){
		alert('请选择学年!');
		return;
	}
	
	if(grade==null||grade.length<1){
		alert('请选择年级!');
		return;
	}

    var subIdArray=new Array();
    //教职工获取已选学科
    var subject_major=$("#"+dobj+" input[name='subject_major']").filter(function(){return this.checked==true;});
    var subject=$("#"+dobj+" input[name='subject']").filter(function(){return this.checked==true;});
    if(subject_major.length>0)
        subIdArray.push(subject_major.get(0).value);
    if(subject.length>0){
        $.each(subject,function(idx,itm){
            subIdArray.push(itm.value);
        });
    }
	
	
	$.ajax({
		url:'cls?m=ajaxlist',
		type:'post',
		dataType:'json',
		data:{
			year:year,
			classgrade:grade,
            flag:1,
            subject:subIdArray.join(',')
		},
		error:function(){
			//alert('系统未响应，请稍候重试!');
		},
		success:function(rps){
			if(rps.type=="error"){
				alert(rps.msg);
			}else{
				var htm='<option value="">==请选择==</option>';
				if(rps.objList.length>0){
					$.each(rps.objList,function(idx,itm){ 
						if(itm.pattern=='行政班'){    
							htm+='<option value="'+itm.classid+'">'+itm.classname+'</option>';
						}else if(itm.pattern=='分层班'){  
							htm+='<option value="'+itm.classid+'|'+itm.subjectid+'">'+itm.classname+"-"+itm.subjectname+'</option>';
						}   
					});
				}    
				$("#"+dobj+" select[id='sel_cls']").html(htm);
			}    
		}
	});
}



/**
 * 设置班级
 */

function setClsSubject(div){
	var clsid=$("#"+div+" select[id='sel_cls']").val();
	if(clsid==null||clsid.Trim().length<1){
		alert('请先选择教授科目!');
		return;
	}     
	
	$("#cls_subject").show();
	if(clsid.split("|").length>1){
		$("#cls_subject").hide(); 
		return; 
	}

	  
	$.ajax({
		url:'cls?m=ajaxlist',
		type:'post',
		dataType:'json',
		data:{
			classid:clsid
		},
		error:function(){
			//alert('系统未响应，请稍候重试!');
		},
		success:function(rps){ 
			if(rps.objList.length>0){ 
				if(typeof(isStu)!='undefined'&&isStu){return;}
                //教职工获取已选学科
                var subject_major=$("#"+div+" input[name='subject_major']").filter(function(){return this.checked==true;});
                var subject=$("#"+div+" input[name='subject']").filter(function(){return this.checked==true;});

                var options=$("#cls_subject").get(0).options;

                var isJunior=false,isPrimary=false;

                if($("select[id='sel_grade'][name='sel_grade']").val().indexOf("初")!=-1)
                    isJunior=true;
                if($("select[id='sel_grade'][name='sel_grade']").val().indexOf("小")!=-1)
                    isPrimary=true;
                if(isfiveschool&&$("select[id='sel_grade'][name='sel_grade']").val().indexOf("小学六年级")!=-1){
                    //如果学校是五四制学校，教师选择小学六年级的授课学科时按照初中的学科选择
                    isJunior=true;isPrimary=false;
                }

				//清空 
				$("#cls_subject").html(""); 
				$.each(subject_major,function(idx,itm){
					var bo=true;
					for(var i=0;i<options.length;i++){
						var tmpval=options[i].value;
						if(tmpval==$(itm).val())
							bo=false;
					}  
					if(bo)  
						options.add(new Option($(itm).next('label').text(),$(itm).val()));
				});
				    
				$.each(subject,function(idx,itm){
					var bo=true;
					for(var i=0;i<options.length;i++){
						var tmpval=options[i].value;
						if(tmpval==$(itm).val())
							bo=false;
					}
					if(bo)
						options.add(new Option($(itm).next('label').text(),$(itm).val()));
				});

                var subArr=[4,5,6,7,8,9];
                //高中
                if(!isJunior&&!isPrimary)
                    $("#cls_subject").find("option[value=10]").remove()
                //小学
                if(isPrimary){
                    for(var i=0;i<subArr.length;i++){
                        $("#cls_subject").find('option[value='+subArr[i]+']').remove()
                    }
                }
			}
		}
	});
	
	 
}


function role4add(identityname){
	if(identityname==null||identityname.length<1){
		return;
	}   
	  
	$.ajax({
		url:'identity?m=ajaxlist',
		type:'post',
		data:{
			identityname:identityname
		},  
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){ 
			var adminhtm='',htm='';
			if(json.objList.length>0){
				var ishasB=false;
				$.each(json.objList,function(idx,itm){
					if(itm.roleid!=$STU_ID&&itm.roleid!=$TEA_ID
                        &&itm.roleid!=$XQADMIN_ID
                        &&itm.roleid!=$XQADMIN_AREA_ID){
						if(itm.isadmin!=null&&itm.isadmin>0) {
							adminhtm += '<li><input type="checkbox" name="admin_role" value="' + itm.roleid + '" id="admin_role' + itm.roleid + '" />';
							adminhtm += '<label for="admin_role' + itm.roleid + '">' + itm.rolename + '</label></li>';
						}else if(itm.isadmin!=null&&itm.isadmin==0){
							if(itm.roleid==5)
								 ishasB=true;
							else
							  htm+='<li><input onclick="roleChange(this,\'\')" type="checkbox" name="role" id="role'+idx+'"  value="'+itm.roleid+'"/> <label for="role'+idx+'">'+itm.rolename+'</label></li>';
						}
					}  
				});
				if(ishasB)
					htm+='<li><input onclick="roleChange(this,\'\')" type="checkbox" name="role" id="role5"  value="5"/> <label for="role5">班主任</label></li>';
			}
			$("#td_admin_role").html(adminhtm);
			$("#td_role").html(htm);
		}
	});    
}  




function identityChange(rval){
	if(rval.Trim()=='教职工'){
		$("#dv_jsxx").show();
		$("#addteacher").show();
		$("#addstudent").hide();
		$("#model_admin_2").show();
		$("#model_admin_1").show();
	}else{
		$("#dv_jsxx").hide();
		$("#addstudent").show();  
		$("#addteacher").hide(); 
		$("#model_admin_2").hide();
		$("#model_admin_1").hide();
	}	     
}
	

/*********管理员编辑用户*************/
/**
 * 禁用用户
 * 1:禁用
 * 0:启用
 */
function unUse(uid,type){
	if(uid==null||uid.Trim().length<1){
		alert('未获取到用户标识!请刷新页面重试!');
		return;
	}
    if(type==1){
        if(!confirm('一旦禁用，将解除用户所有的班级关系，是否禁用?')){return;}
    }else{
        if(!confirm('确认操作？')){return;}
    }
	
	$.ajax({
		url:'user?m=offuser',
		type:'post',
		data:{
			ref:uid,
			stateid:type
		},  
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){
			if(json.type=='error'){
				alert(json.msg);
			}else{    
				$('#btn_offuser').unbind("click");
				$('#btn_offuser').attr("onclick",""); 
				if(type==0){ 
					$('#btn_offuser').bind("click",function(){
						unUse(uid,1);
					});	
					$("#btn_offuser").html("禁&nbsp;用");
				}else if(type==1){
					$('#btn_offuser').bind("click",function(){
						unUse(uid,0);
					});
					$("#btn_offuser").html("启&nbsp;用");
				}
			}      
		}  
	}); 
}


function edit_base(ref){
	var username=$("#sp_username");
	var password=$("#sp_password");
	var realname=$("#sp_realname");
	var sex=$("#sp_sex");

	$(username).html('<input readonly="readonly"  type="text" read id="txt_username" value="'+username.html().Trim()+'"/>');
	$(password).html('<input type="password"  id="txt_password" />');
	$(realname).html('<input type="text" id="txt_realname" value="'+realname.html().Trim()+'"/>');

	var tmpsex=sex.html().Trim();
	var sexhtml=['<input type="radio" name="sex" id="sex1" value="男"/> <label for="sex1">男</label>',
			'<input type="radio" name="sex" id="sex2" value="女"/> <label for="sex2">女</label>'];
	$(sex).html(sexhtml.join(' '));
	$('input[name="sex"]').filter(function(){return this.value==tmpsex}).prop("checked",true);

	$.ajax({
		url:"tpuser?loadEttUserNameNew",
		data:{ref:ref},
		type:"post",
		dataType:'json',
		cache: false,
		error:function(){
			//alert('系统未响应，请稍候重试!');
		},
		success:function(json){
			if(json.objList[0]!=null&&typeof json.objList[0]!='undefined'){

				var userName=json.objList[0].userName;
				var pwd=json.objList[0].password;

				if(typeof userName!='undefined'){
					$("#txt_username").val(userName);
					$("#txt_username").html(userName);
				}
				if(typeof pwd!='undefined')
					$("#txt_password").val(pwd);

				$("#txt_username").prop('readonly','');
			}
			$("#edit_base").hide();
			$("#btn_base").show();

		}
	});
}

function edit_info(){
	$("#edit_info").hide();
	$("#btn_info").show();
	$("#p_history").hide();


	 
	if(isTea){
		var mail=$("#sp_mail");
		var phone=$("#sp_phone");
		var address=$("#sp_teaaddress");
		//获取隐藏值
		var major=$("input[name='hd_major']");
		var subject=$("input[name='hd_subject']");
		var cls=$("select[id='hd_cls']")[0].options;
		
		$("#sp_major").html($("#edit_major").html());
		$("#sp_subject").html($("#edit_subject").html());
		$("#sp_teacls").html($("#edit_cls").html());


		
		$(mail).html('<input  type="text" id="txt_mail" value="'+mail.html().Trim()+'"/>');
		$(phone).html('<input  type="text" id="txt_phone" value="'+phone.html().Trim()+'"/>');
		$(address).html('<input  type="text" id="txt_address" value="'+address.html().Trim()+'"/>');


        $("#view_body input[name='subject_major']").each(function(idx,itm){
            $(itm).bind("click",function(){
                $('#view_body input[name="subject"][value="'+itm.value+'"]').attr({"checked":false,"disabled":true});
                $('#view_body input[name="subject"][value!="'+itm.value+'"]').attr({"disabled":false});
                getClsByYear('view_body');
            });
        });

        $('#view_body input[name="subject"]').each(function(idx,itm){
            $(itm).bind("click",function(){
                getClsByYear('view_body');
                if(itm.value==$("#view_body input[name='subject_major']:checked").val())
                    $(itm).attr({"checked":false,"disabled":true});
            });
        });


        //学科
		$.each(major,function(idx,itm){
			$("#view_body input[name='subject_major']").filter(function(){return this.value==itm.value}).prop("checked",true);
		});
		$.each(subject,function(idx,itm){
			$("#view_body input[name='subject']").filter(function(){return this.value==itm.value}).prop("checked",true);
		});

        getClsByYear('view_body');

		//班级   
		$("#view_bodyr ol[id='cls_result']").html(''); 
		$.each(cls,function(idx,itm){
			/*var id='';
			if($(itm).val().split('|').length>1)
				id=$(itm).val().split('|')[0]+$(itm).val().split('|')[1];
			else
				id=$(itm).val();   
			 
			$("#view_body ol[id='cls_result']").append('<li id="'+id+'"  data="'+$(itm).val()+'">'+$(itm).text()+'<a href="javascript:delLi(\''+id+'\',\'view_body\')"><span title="删除"></span></a></li>');
			*/
			genderLi(itm,'cls_result','view_body');
		});  
		
	}else if(isStu){
		var stuno=$("#sp_stuno");
        var stuDistrictNo=$("#sp_stuDistrictNo");
		var linkman=$("#sp_linkman");
		var linkphone=$("#sp_linkphone");
		var stuaddress=$("#sp_stuaddress");
		
		$(stuno).html('<input   type="text" id="txt_stuno" value="'+stuno.html().Trim()+'"/>');
        $(stuDistrictNo).html('<input   type="text" id="txt_stuDistrictNo" value="'+stuDistrictNo.html().Trim()+'"/>');
		$(linkman).html('<input  type="text" id="txt_linkman" value="'+linkman.html().Trim()+'"/>');
		$(linkphone).html('<input  type="text" id="txt_linkphone" value="'+linkphone.html().Trim()+'"/>');
		$(stuaddress).html('<input  type="text" id="txt_stuaddress" value="'+stuaddress.html().Trim()+'"/>');
		//班级
		var cls=$("select[id='hd_cls']")[0].options;  
		$("#sp_stucls").html($("#edit_cls").html());
		$("#view_body ol[id='stucls_result']").html('');
        getClsByYear('view_body');
		$.each(cls,function(idx,itm){
			/*var id='';
			if($(itm).val().split('|').length>1)
				id=$(itm).val().split('|')[0]+$(itm).val().split('|')[1];
			else 
				id=$(itm).val();    
			 
			$("#view_body ol[id='stucls_result']").append('<li id="'+id+'"  data="'+$(itm).val()+'">'+$(itm).text()+'<a href="javascript:delLi(\''+id+'\',\'view_body\')"><span title="删除"></span></a></li>');
			*/
			genderLi(itm,'stucls_result','view_body');
		});
		  
	}
}

function genderLi(itm,sobj,dobj){
	var id='';
	if($(itm).val().split('|').length>1)
		id=$(itm).val().split('|')[0]+$(itm).val().split('|')[1];
	else 
		id=$(itm).val();
	
	$("#"+dobj+" ol[id='"+sobj+"']").append('<li id="'+id+'"  data="'+$(itm).val()+'">'+$(itm).text()+'<a href="javascript:delLi(\''+id+'\',\''+dobj+'\')"><span title="删除"></span></a></li>');
}
 
function edit_role(){
	$("#btn_edit_role").hide();
	$("#edit_role").show();
	$("#view_role").hide();  
	if(isTea){
		//获取隐藏值
		var hd_role=$("input[name='hd_role']");
		var hd_admin_role=$("select[id='hd_admin_role']");
		var hd_cls=$("select[id='hd_bzr']");;
		var hd_grade=$("input[name='hd_grade']");
		var hd_dept=$("input[name='hd_dept']");
		var hd_tchdept=$("input[name='hd_tchdept']");
		var hd_prepare=$("input[name='hd_prepare']");
        var hd_deptfzr=$("input[name='hd_dept_fzr']");
		
		//角色
		$.each(hd_role,function(idx,itm){
			$('#edit_role input[name="role"]').filter(function(){return this.value==itm.value}).prop("checked",true);
		});
		//if(hd_admin_role.get(0).options.length>0){
			//$("#admin_result").html('');
			//$("#ck_adminrole").prop("checked",true);
			//$("#td_admin_role").show();
			$.each(hd_admin_role.get(0).options,function(idx,itm){
				//$("#admin_result")[0].options.add(new Option($(itm).text(),$(itm).val()));
			//	genderLi(itm,'admin_result','edit_role');
				var id='';
				if($(itm).val().split('|').length>1)
					id=$(itm).val().split('|')[0]+$(itm).val().split('|')[1];
				else
					id=$(itm).val();
				$("#admin_role"+id).prop("checked",true);
			});
		//} 
		//班级
		if(hd_cls.get(0).options.length>0){ 
			$("#cls_bzr_result").html('')
			$("#tr_bzr").show();
            getClsByYear('edit_role');
			$.each(hd_cls.get(0).options,function(idx,itm){ 
				//$("#cls_bzr_result")[0].options.add(new Option($(itm).text(),$(itm).val()));
				genderLi(itm,'cls_bzr_result','edit_role');
			});
		}  
		//年级组长
		if(hd_grade.length>0){
			$("#tr_gradeleader").show();
			$.each(hd_grade,function(idx,itm){ 
				$("#sel_gradeleader").val(itm.value);
			});
		}
		$("#sel_gradeleader_grd").val($("#hd_gradeleadergrd").val().Trim());
		//部门主任
		if(hd_dept.length>0){
			$("#tr_dept").show();
			$.each(hd_dept,function(idx,itm){ 
				$("#sel_dept").val(itm.value);
			});
		}
		//教研组长
		if(hd_tchdept.length>0){
			$("#tr_teachleader").show();
			$.each(hd_tchdept,function(idx,itm){ 
				$("#sel_teachleader").val(itm.value);
			});
		}
		$("#sel_teachleader_subject").val($("#hd_teachleadersubid").val().Trim());
		//备课组长
		if(hd_prepare.length>0){
			$("#tr_prepareleader").show();
			$.each(hd_prepare,function(idx,itm){ 
				$("#sel_prepareleader").val(itm.value);
			}); 
		}
		$("#sel_prepareleader_subject").val($("#hd_prepareleadersubject").val().Trim());
		$("#sel_prepareleader_grd").val($("#hd_prepareleadergrd").val().Trim());
        //备课组长
        if(hd_deptfzr.length>0){
            $("#tr_dept_fzr").show();
            $.each(hd_deptfzr,function(idx,itm){
                $("#sel_dept_fzr").val(itm.value);
            });
        }
		//备课组长
		if($("input[id='role_17']:checked").length>0)
			$("#tr_prepareleader").show();
		//教研组长
		if($("input[id='role_13']:checked").length>0||$("input[id='role_14']:checked").length>0)
			$("#tr_teachleader").show();
		//年级组长
		if($("input[id='role_9']:checked").length>0||$("input[id='role_10']:checked").length>0)
			$("#tr_gradeleader").show();


        getClsByYear('edit_role');
		//角色提示
		/*var options=$("#admin_result").get(0).options;
	        $.each(options,function(idx,itm){
	        	$(itm).bind("mouseover",function(idx,itm){
	            	alert(123);
	            });    
	        });*/  
	}else if(isStu){
		var hd_role=$("input[name='hd_role']");
		$.each(hd_role,function(idx,itm){
			$('#edit_role input[name="role"]').filter(function(){return this.value==itm.value}).prop("checked",true);
		});
	}
}

/**
 * 
 * @param sobj
 * @param tobj
 * @return
 */
function setAdminRole(sobj,tobj,div){
	var s=$("#"+div+" select[id='"+sobj+"']");
	var t=$("#"+div+" ol[id='"+tobj+"']");
	 
	var selOpn=s.find("option:selected");
	var b=false;
	$.each(t.children('li'),function(idx,itm){
		b=false;
		if($(itm).attr('data')==selOpn.val()){
			b=true; 
			return; 
		} 
	}); 
	if(!b) 
		$(t).append('<li data="'+selOpn.val()+'" id="li_'+selOpn.val()+'">'+$(selOpn).text().Trim()+'<a href="javascript:delLi(\'li_'+selOpn.val()+'\',\''+div+'\')"><span title="删除"></span></a></li>');
}


var allowOperateUser=true;
function operateUser(callback,arguments){
    if(!allowOperateUser){
        return;
    }else{
        if(callback && typeof callback ==='function')
            callback(arguments);
        beginUserJs();
    }
}

function beginUserJs(){
    allowOperateUser=false;
    setTimeout(function(){
        allowOperateUser=true;
    },2000);
}

/**
 * 保存基础信息
 * @param uid
 * @return
 */
function save_base(uid){
	var password=$("#txt_password");
	var realname=$("#txt_realname");
    var username=$("#txt_username");
	var sex=$('input[name="sex"]').filter(function(){return this.checked==true});
	
	if(uid.length<1){
		alert('系统未获取到用户标识!请刷新页面重试!');
		return;
	}
	if(password.val().Trim().length<6){
		alert('密码不能少于6个字符，请输入密码!');
		return;
	}
	if(realname.val().Trim().length<1){
		alert('请输入姓名!');
		return;
	}
    if(username.val().Trim().length<1){
        alert('请输入用户名!');
        return;
    }
	if(sex.length<1){
		alert('请选择性别!');
		return;
	}
	
	$.ajax({
		url:'user?m=edit_base',
		type:'post',
		data:{
			password:password.val(),
			realname:realname.val(),
            username:username.val(),
			sex:sex.val(),
			isTea:isTea,  
			isStu:isStu,
			ref:uid
		},    
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){ 
			if(json.type=='error'){
				alert(json.msg);
				return;
			}else{  
				if(json.objList.length>0){  
					$("#sp_username").html(json.objList[0].username);
					$("#sp_password").html("******");
					$("#sp_realname").html(json.objList[0].realname);
					$("#sp_sex").html(json.objList[0].usersex);
					$("#edit_base").show();
					$("#btn_base").hide();
				}  
			}
		}
	}); 
} 

/**
 * 保存教职工、学生信息
 * @param uid
 * @return
 */

function save_info(uid){
	if(uid.length<1){
		alert('系统未获取到用户标识!请刷新页面重试!');
		return;
	}
	var param={ref:uid,isTea:isTea,isStu:isStu};
	if(isStu){
        var stuno=$("#txt_stuno");
        var stuDistrictNo=$("#txt_stuDistrictNo");
		var linkman=$("#txt_linkman");
		var linkphone=$("#txt_linkphone");
		var stuaddress=$("#txt_stuaddress");
        if(stuno.val().length>0)
            param.stuno=stuno.val();
        if(stuDistrictNo.val().length>0)
            param.stuDistrictNo=stuDistrictNo.val();
		if(linkman.val().length>0)
			param.linkman=linkman.val();
		if(linkphone.val().length>0)
			param.linkphone=linkphone.val();
		if(stuaddress.val().length>0)
			param.stuaddress=stuaddress.val();
		
		var clsstr='',stucls_result=$("#view_body ol[id='stucls_result']").children('li');
		if(stucls_result.length<1){
			alert('请选择班级!');
			return;
		}
		$.each(stucls_result,function(idx,itm){
			if(clsstr.length>0)
				clsstr+=',';
			clsstr+=$(itm).attr('data');
		}); 
		if(clsstr.length>0)
			param.clsstr=clsstr;
	}else if(isTea){
		var mail=$("#txt_mail");
		var phone=$("#txt_phone");
		var address=$("#txt_address");
		if(mail.val().length>0)
			param.mail=mail.val();
		if(phone.val().length>0)
			param.phone=phone.val();
		if(address.val().length>0)
			param.address=address.val();
		
		//学科
		var majorstr='',subjectstr='';
		var major=$("#view_body input[name='subject_major']").filter(function(){return this.checked==true});
		var subject=$("#view_body input[name='subject']").filter(function(){return this.checked==true});
		$.each(major,function(idx,itm){
			majorstr+=itm.value;
		});
		$.each(subject,function(idx,itm){
			if(subjectstr.length>0)
				subjectstr+=',';
			subjectstr+=itm.value;
		});
        if(majorstr.length>0)
            param.majorstr=majorstr;
        if(subjectstr.length>0)
            param.subjectstr=subjectstr;
		
		//班级
		var clsstr='',cls_result=$("#view_body ol[id='cls_result']").children('li');
		$.each(cls_result,function(idx,itm){
			if(clsstr.length>0)
				clsstr+=',';
			clsstr+=$(itm).attr('data');
		}); 
		if(clsstr.length>0)
			param.clsstr=clsstr;
	}
	
	$ajax('user?m=edit_info',param,'POST','json',function(rps){
		if(rps.type=='success'){  
			$("#edit_info").show();
			$("#btn_info").hide();
			
			if(isTea){
				if(rps.objList[0]!=null){
					$("#sp_mail").html(typeof(rps.objList[0].teacherpost)!='undefined'?rps.objList[0].teacherpost:'');
					$("#sp_phone").html(typeof(rps.objList[0].teacherphone)!='undefined'?rps.objList[0].teacherphone:'');
					$("#sp_teaaddress").html(typeof(rps.objList[0].teacheraddress)!='undefined'?rps.objList[0].teacheraddress:'');
				}
				//任课班级
				if(rps.objList[1]!=null){
					var htm='',hdhtm='';
					$.each(rps.objList[1],function(idx,itm){
						htm+='<li data="'+itm.classid+'">'+itm.year+itm.classgrade+itm.classname+'</li>';
						hdhtm+='<option value="'+itm.classid+"|"+itm.subjectid+'">'+itm.year+itm.classgrade+itm.classname+"|"+itm.subjectname+'</option>';
					}); 
					$("#sp_teacls").html(htm);
					$("#hd_cls").html(hdhtm);
				} 
				
				//历史班级
				if(rps.objList[2]!=null){
					var h='';
					$.each(rps.objList[2],function(idx,itm){
						h+='<tr>';
						h+='<td>'+itm.year+'</td>';
						h+='<td>'+itm.classgrade+itm.classname+'</td>';
						h+='</tr>';
					});
					$("#div_history_cls tbody[id='tb_his_cls']").html(h);
                    $("#p_history").show();
				}

				//授课科目
				if(rps.objList[3]!=null){
					var subject='',major='';
					$.each(rps.objList[3],function(idx,itm){
						if(itm.ismajor==1){
							major+=itm.subjectname+'<input type="hidden" value="'+itm.subjectid+'" name="hd_major"/>';
						}else if(itm.ismajor==0){
							if(subject.length>0)
								subject+='&nbsp;'
							subject+=itm.subjectname+'<input type="hidden" value="'+itm.subjectid+'" name="hd_subject"/>';
						} 
					});
					$("#sp_subject").html(subject);
					$("#sp_major").html(major);
				}  
			}else if(isStu){
				if(rps.objList[0]!=null){ 
					$("#sp_stuno").html(rps.objList[0].stuno);
                    $("#sp_stuDistrictNo").html(typeof(rps.objList[0].stuDistrictNo)!='undefined'?rps.objList[0].stuDistrictNo:'');
					$("#sp_linkman").html(typeof(rps.objList[0].linkman)!='undefined'?rps.objList[0].linkman:'');
					$("#sp_linkphone").html(typeof(rps.objList[0].linkmanphone)!='undefined'?rps.objList[0].linkmanphone:'');
					$("#sp_stuaddress").html(typeof(rps.objList[0].stuaddress)!='undefined'?rps.objList[0].stuaddress:'');
				}
				
				//班级
				if(rps.objList[1]!=null){
					var htm='',hdhtm='';
					$.each(rps.objList[1],function(idx,itm){
						htm+='<li>'+itm.year+itm.classgrade+itm.classname+'</li>';
						hdhtm+='<option value="'+itm.classid+'">'+itm.year+itm.classgrade+itm.classname+'</option>';
					});
					$("#sp_stucls").html(htm);
					$("#hd_cls").html(hdhtm);
				}
				
				//历史班级
				if(rps.objList[2]!=null){
					$.each(rps.objList[2],function(){
						h+='<tr>';
						h+='<td>'+itm.year+'<td>';
						h+='<td>'+itm.classgrade+itm.classname+'<td>';
						h+='</tr>';
					});
					$("#div_history_cls tbody[id='tb_his_cls']").html(h);
				}
			}
			
		}else    
			alert(rps.msg);
	},function(){});//alert('错误,系统未响应！');})
}


/**
 * 验证当前班级是否有班主任
 */
function validateClsBzr(classIdArray){
    var msg='';
    if(typeof classIdArray=='undefined'||classIdArray.length<1)
        return false;

    return msg;
}


/**
 * 保存角色信息
 * @param uid
 * @return
 */

function save_role(uid){
	if(uid.length<1){
		alert('系统未获取到用户标识!请刷新页面重试!');
		return;
	}
	var param={ref:uid,isTea:isTea,isStu:isStu};
	var rolestr='',role=$("#edit_role input[name='role']").filter(function(){return this.checked==true});
	$.each(role,function(idx,itm){
		if(rolestr.length>0)
			rolestr+=',';
		rolestr+=itm.value;
	});
	if(rolestr.length>0)
		param.rolestr=rolestr;
	if(isStu){
		
	}else if(isTea){
		//管理班级
        getClsByYear('edit_role');
		var clsstr='',cls_bzr_result=$("#edit_role ol[id='cls_bzr_result']").children('li');
		$.each(cls_bzr_result,function(idx,itm){
			if(clsstr.length>0)
				clsstr+=',';
			clsstr+=$(itm).attr('data');
		});
		if(clsstr.length>0){
            param.clsstr=clsstr;
        }
		//管理员角色
		var adminstr='',admin_result=$("input[name='admin_role']:checked");
		$.each(admin_result,function(idx,itm){
			if(adminstr.length>0)
				adminstr+=',';
			adminstr+=$(itm).val();
		}); 
		if(adminstr.length>0)
			param.adminstr=adminstr;
		
		//年级组长
		var gradeid=$("#edit_role select[id='sel_gradeleader']").val();
		var gradeleadergrd=$("#sel_gradeleader_grd").val();
		if(gradeleadergrd!=null&&gradeleadergrd.Trim().length>0)
			param.gradeleadergrd=gradeleadergrd;
		//教研组长
		var tchid=$("#edit_role select[id='sel_teachleader']").val();
		var teachleadersubid=$("#sel_teachleader_subject").val();
		if(teachleadersubid!=null&&teachleadersubid.Trim().length>0)
			param.teachleadersubid=teachleadersubid;

		var prepareleadergrd=$("#sel_prepareleader_grd").val();
		if(prepareleadergrd!=null&&prepareleadergrd.Trim().length>0)
			param.prepareleadergrd=prepareleadergrd;
		var prepareleadersubject=$("#sel_prepareleader_subject").val();
		if(prepareleadersubject!=null&&prepareleadersubject.Trim().length>0)
			param.prepareleadersubject=prepareleadersubject;
		//部门主任
		var deptid=$("#edit_role select[id='sel_dept']").val();
		//备课组长
		var prepareid=$("#edit_role select[id='sel_prepareleader']").val();
        //部门负责人
        var deptfzrid=$("#edit_role select[id='sel_dept_fzr']").val();
		if(gradeid!=null&&gradeid.length>0)
			param.gradeid=gradeid;
		if(tchid!=null&&tchid.length>0)
			param.tchid=tchid;
		if(deptid!=null&&deptid.length>0)
			param.deptid=deptid;
		if(prepareid!=null&&prepareid.length>0)
			param.prepareid=prepareid;
        if(deptfzrid!=null&&deptfzrid.length>0)
            param.deptfzrid=deptfzrid;
	}
	
	$ajax('user?m=edit_role',param,'POST','json',function(rps){
		if(rps.type=='success'){  
			$("#edit_role").hide();
			$("#view_role").show();
			$("#btn_edit_role").show();
			
			//清空span中内容
			$("#view_role span").filter(function(){return this.id.indexOf('sp_')!=-1}).html(''); 
			    
			if(isTea){
				if(rps.objList[0]!=null&&rps.objList[0].length>0){
					var rolestr='',roleadmin='',hdstr='';
					$.each(rps.objList[0],function(idx,itm){
						if(rolestr.length>0)
							rolestr+='&nbsp;';  
						if(roleadmin.length>0)
							roleadmin+='&nbsp;';
						if(typeof(itm.isadmin)!='undefined'&&itm.isadmin==0){
                            var role=itm.roleid==2?"":itm.rolename;
							rolestr+=role+'<input type="hidden" name="hd_role" value="'+itm.roleid+'"/>';
                        }else if(typeof(itm.isadmin)!='undefined'&&itm.isadmin==1){
							roleadmin+=itm.rolename+"&nbsp;";
							hdstr+='<option value="'+itm.roleid+'">'+itm.rolename+'</option>';
						}
							
					});
					$("#sp_role").html(rolestr);
					$("#sp_admin_role").html(roleadmin);
					$("#hd_admin_role").html(hdstr);
				} 
				//任课班级
				$("#hd_bzr").html('');
				$("#sp_bzr").parent().hide();
				$("#cls_bzr_result").html('');
				if(rps.objList[1]!=null&&rps.objList[1].length>0){
					var htm='',hdhtm='';
					$.each(rps.objList[1],function(idx,itm){
						if(htm.length>0)  
							htm+='&nbsp;'  
						htm+=itm.classgrade+itm.classname;
						htm+='<input type="hidden" name="sp_bzr_class" data="'+itm.classid+'" />';
						hdhtm+='<option value="'+itm.classid+'">'+itm.classgrade+itm.classname+'</option>';
					});
					$("#sp_bzr").html(htm);
					$("#sp_bzr").parent().show();
					$("#hd_bzr").html(hdhtm);
				}
				
				//行政部门
				$("#sp_dept").parent().hide();
				if(rps.objList[2]!=null&&rps.objList[2].length>0){
					var depthtm='';
					$.each(rps.objList[2],function(idx,itm){
						depthtm+=itm.deptname+'<input type="hidden" name="hd_dept" value="'+itm.deptid+'" />';
					});
					$("#sp_dept").html(depthtm);
					$("#sp_dept").parent().show();
				}  
				  
				//教研组长
				$("#sp_tchdept").parent().hide();
				if(rps.objList[3]!=null&&rps.objList[3].length>0){
					var tchhtm='';
					$.each(rps.objList[3],function(idx,itm){
						tchhtm+=itm.deptname+'<input type="hidden" name="hd_tchdept" value="'+itm.deptid+'" />';
					});
					$("#sp_tchdept").html(tchhtm);
					$("#sp_tchdept").parent().show();
				}   
				
				//年级组长
				$("#sp_grade").parent().hide();
				if(rps.objList[4]!=null&&rps.objList[4].length>0){
					var gradehtm='';
					$.each(rps.objList[4],function(idx,itm){
						gradehtm+=itm.deptname+'<input type="hidden" name="hd_grade" value="'+itm.deptid+'" />';
					});
					$("#sp_grade").html(gradehtm);
					$("#sp_grade").parent().show();
				}
				 
				//备课组长 
				$("#sp_prepareleader").parent().hide();
				if(rps.objList[5]!=null&&rps.objList[5].length>0){
					var preparehtm='';
					$.each(rps.objList[5],function(idx,itm){
						preparehtm+=itm.deptname+'<input type="hidden" name="hd_prepare" value="'+itm.deptid+'" />';
					});
					$("#sp_prepareleader").html(preparehtm);
					$("#sp_prepareleader").parent().show();
				}


                //部门负责人
                $("#sp_dept_fzr").parent().hide();
                if(rps.objList[6]!=null&&rps.objList[6].length>0){
                    var deptfzrhtm='';
                    $.each(rps.objList[6],function(idx,itm){
                        deptfzrhtm+=itm.deptname+'<input type="hidden" name="hd_dept_fzr" value="'+itm.deptid+'" />';
                    });
                    $("#sp_dept_fzr").html(deptfzrhtm);
                    $("#sp_dept_fzr").parent().show();
                }
				var gradeleadergrd=$("#sel_gradeleader_grd").val();
				var teachleadersubid=$("#sel_teachleader_subject").val();
				var prepareleadergrd=$("#sel_prepareleader_grd").val();
				var prepareleadersubject=$("#sel_prepareleader_subject").val();

				$("#hd_prepareleadersubject").val(prepareleadersubject);
				$("#hd_prepareleadergrd").val(prepareleadergrd);
				$("#hd_teachleadersubid").val(teachleadersubid);
				$("#hd_gradeleadergrd").val(gradeleadergrd);
            }else if(isStu){
				if(rps.objList[0]!=null&&rps.objList[0].length>0){
					var rolestr='';
					$.each(rps.objList[0],function(idx,itm){
						if(rolestr.length>0)
							rolestr+='&nbsp;';
						if(typeof(itm.isadmin)!='undefined'&&itm.isadmin==0)
							rolestr+=itm.rolename+'<input type="hidden" name="hd_role" value="'+itm.roleid+'"/>'
					});
					$("#sp_role").html(rolestr);
				} 
			}
			
		}else    
			alert(rps.msg);
	},function(){});//alert('错误,系统未响应！');})
}



function verifyBzr(ref){
    var param={ref:ref};
    var clsstr='',cls_bzr_result=$("#edit_role ol[id='cls_bzr_result']").children('li');
    $.each(cls_bzr_result,function(idx,itm){
        if(clsstr.length>0)
            clsstr+=',';
        clsstr+=$(itm).attr('data');
    });
    if(clsstr.length>0){
        param.clsstr=clsstr;
        $ajax('user?m=verifyBzr',param,'POST','json',function(rps){
            if(rps.type=='error'){
                alert(rps.msg);
            }else{
                if(rps.msg.length>0){
                    if(!confirm(rps.msg+",确定替换?"))return;
                    else
                        save_role(ref);
                }else
                    save_role(ref);
            }
        },function(){});
    }else
        save_role(ref);

}



/**
 * 获取角色备注
 * @param robj 
 * @return
 */
function getRoleRemark(robj){
	var roleid=$(robj).val();
	if(roleid.length<1){
		alert('系统未获取到角色标识!请刷新页面重试!');
		return;
	}
	
	
	$.ajax({
		url:'role?m=ajaxlist',
		type:'post',
		data:{
			roleid:roleid
		},    
		dataType:'json',
		error:function(){alert('系统未响应!')}, 
		success:function(json){ 
			if(json.type=='error'){
				alert(json.msg);
				return;
			}else{  
				if(json.objList.length>0){  
					if(json.objList[0]!=null&&typeof(json.objList[0].remark)!='undefined') 
						$("#sp_role_remark").html("("+json.objList[0].remark+")"); 
				}   
			}
		}
	});
	
}