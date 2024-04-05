

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">













  
 


<link rel="stylesheet" type="text/css"	href="//school-web.ai-classes.com/dl910/old/css/common.css?ver=1710814942179" />
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/old/css/master.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/old/css/style.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css"	href="//school-web.ai-classes.com/dl910/old/css/dtree.css?ver=1710814942179" />
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/old/css/WdatePicker.css?ver=1710814942179" />
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/old/css/jquery.autocomplete.css?ver=1710814942179"/>
<script src="//school-web.ai-classes.com/dl910/js/fancybox/jquery-1.8.3.min.js?ver=1710814942179" type="text/javascript"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/common.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/date-extend-property.js?ver=1710814942179"></script> 
<script type="text/javascript"	src="//school-web.ai-classes.com/dl910/js/common/pageControl-0.1.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/dtree.js?ver=1710814942179"></script>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/old/css/jcpt.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css"	href="//school-web.ai-classes.com/dl910/old/css/jquery-ui-1.10.2.custom.css?ver=1710814942179" />
<script src="//school-web.ai-classes.com/dl910/util/My97DatePicker/WdatePicker.js?ver=1710814942179" language="javascript" type="text/javascript"></script>
<!-- xheditor 1.2.1 -->
<script src="//school-web.ai-classes.com/dl910/util/xheditor/xheditor-1.2.1.min.js?ver=1710814942179"type="text/javascript"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/util/xheditor/xheditor_lang/zh-cn.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/notes-zhengzhou-0.1-zh-cn.js?ver=1710814942179"	type="text/javascript"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/ajaxfileupload.js?ver=1710814942179" type="text/javascript"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/jquery.json-2.4.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/UUID.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/jquery.autocomplete.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/ckeditor/ckeditor.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/ckfinder/ckfinder/ckfinder.js?ver=1710814942179"></script>

        
      
<script type="text/javascript"> 
	var $STU_ID=1,$TEA_ID=2,$PARENT_ID="3",$ADMIN_ID=4,$BANZR_ID=5;
	var $GRADE_ID=9;
	var $GRADE_FU_ID=10;
	var $DEPT_ID=11;
	var $DEPT_FU_ID=12;
	var $TEACH_ID=13;
	var $TEACH_FU_ID=14; 
	var $PREPARE_ID=17;
    var $DEPT_FZR_ID=18;

    var $XQADMIN_ID=22;
    var $XQADMIN_AREA_ID=23;
 
	var isStudent=false;
	var isTeacher=true;
    var _isAdmin = false;
	var fileSystemIpPort='//school-web.ai-classes.com/dl910//fileoperate/';
    var isfiveschool=false;
    var _uploadServer='//school-sxfile.ai-classes.com/tcfileupload/';
    var _uplodifyServer='//school-sxfile.ai-classes.com/tcfileupload/uploadify/uploadFile.jsp';
</script>
<title>北京四中网校--数字化校园</title>




<!--
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/yhqx.css?ver=1710814942179"/> 
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/sz_style.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/szbbs.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/szkjj.css?ver=1710814942179"/>
	 -->
	 <title>北京四中网校--数字化校园--用户权限</title>
	<meta name="keywords" content="北京四中网校,数字化校园,用户权限,教学平台,资源系统" />

<head>
	<style type="text/css">
		h5 {
		    border-bottom: 1px dashed #CDCDCD;
    		margin: 10px auto;
		}
	</style>
	<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/role.js?ver=1710814942179"></script>
	<script type="text/javascript">
  	 
  	/*********功能权限控制**********/   
    $(function(){
    	$("#div_add select[id='identity']").val("教职工");             
 		$("#div_add select[id='identity']").change(); 
 		load_role(); 
    });  
    var grade_leader_id=9;  
    var grade_fu_leader_id=10;  
    var isSelect = true,isUpdate=false,isSetRoleUser=true,isDelete=false;  
  	var p1,uploadControl; 
	$(function(){
	 	//if(isSelect){  
			//翻页控件
				p1=new PageControl({
					post_url:'role?m=ajaxlist',
					page_id:'page1',
					page_control_name:"p1",		//分页变量空间的对象名称
					post_form:document.page1form,		//form
					http_free_operate_handler:beforajaxList,
					gender_address_id:'page1address',		//显示的区域						
					http_operate_handler:afterajaxList,	//执行成功后返回方法
					return_type:'json',								//放回的值类型
					page_no:1,					//当前的页数
					page_size:10,				//当前页面显示的数量
					rectotal:0,				//一共多少
					pagetotal:1,
					operate_id:"datatbl"
				});
				pageGo('p1');  
			//}
	});

	/*  uploadControl=new ajaxUpload({
	 		_posturl:'role?m=uploadImg', 
	 		_filename:'upload',
	 		//_postparam:{uid:111},
	 		_success:imguploadSuccess,
	 		_error:errormethod,
	 		_returnType:'json'
	 	}); */	
		/** 
		*文件上传失败
		*/
		function errormethod(rps){
	 		alert(rps.msg);
	 	}
	 	/**
	 	*文件上传成功
	 	*/
		function imguploadSuccess(rps){
		 	if(rps.type=='error'){
		 		alert(rps.msg);
		 		return;	 
	 		} 
	 		alert(rps.msg);
	 	}
  	</script>
</head>

<body> 
	







 


    <div id="header">

  <ul>
    
         <li ><a href="//school-web.ai-classes.com/dl910/user?m=toIndex">首&nbsp;页</a></li>
      
   <!-- <li ><a href="user?m=userview">个人主页</a></li>
    <li><a href="sms?m=inbox" target="_blank">
  	消息中心
  	</a></li>-->
    <li><a href="javascript:;" onclick="loginDestory('//school-web.ai-classes.com/dl910/')">退出</a></li>
  </ul>
 
     <p><span></span><img src="//school-web.ai-classes.com/dl910/images/logo.png" width="253" height="64" /></p>

 
</div>
	










<script type="text/javascript">var current_parent_path="rolepage";
href="user?m=toIndex";

</script>
<div class="head_crumb">
 <p><strong>
    Admin</strong>&nbsp;您好！
 </p>
    
</div>

	
	
	<div id="nav">
    <ul>
      <li class="crumb"><a href="user?m=list">用户管理</a></li>
      <li><a href="cls?m=list">组织管理</a></li>
      <li><a href="term?m=list">系统设置</a></li>  
    </ul>  
</div>


	<div class="content">
 <div class="contentT">
    <div class="contentR">
      <table border="0" cellpadding="0" cellspacing="0" class="public_tab2 m_t_10">
      <colgroup span="3" class="w180"></colgroup>
      <caption>系统角色</caption>
      <tbody id="datatbl">
		 <tr>
         <th>名称</th>
         <th>隶属身份</th>
         <th>操作</th>
        </tr>
       <tr>
         <td>班主任</td>
         <td>教职工</td>
         <td><a href="1" class="font-blue">查看权限</a></td>
        </tr>
       <tr class="trbg1">
         <td>&nbsp;</td>
         <td><br></td>
         <td>&nbsp;</td>
        </tr>
       <tr>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
        </tr>
       <tr class="trbg1">
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
        </tr>
	  </tbody>
   </table>
     <form action="/role/ajaxlist" id="page1form" name="page1form" method="post">
		<p align="center" id="page1address"></p>
	 </form>
   <h6></h6>
   <table border="0" cellpadding="0" cellspacing="0" class="public_tab2 m_t_10">
     <colgroup span="3" class="w180"></colgroup>
     <caption>自定义角色<br><a href="javascript:showModel('div_add')" class="an_small m_t_5">新建角色</a></caption>
     <tbody id="freetbl">
	     <tr>
	       <th>名称</th>
	       <th>隶属身份</th>
	       <th>操作</th>
	     </tr>
	     <tr>
	       <td>班主任</td>
	       <td>教职工</td>
	       <td><a href="1" class="font-blue">修改</a>&nbsp;&nbsp;<a href="1" class="font-blue">删除</a></td>
	     </tr>
	     <tr class="trbg1">
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	     </tr>
	     <tr>
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	     </tr>
	     <tr class="trbg1">
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	       <td>&nbsp;</td>
	     </tr>
     </tbody>
   </table>
    </div>
   
   <div class="contentL"> 
    <ul>
    <li><a href="user?m=list">查询</a></li>
    <li><a href="user?m=toAdd">添加</a></li> 
    <li class="crumb"><a href="role?m=list">角色管理</a></li>
    </ul>
   </div>
   <div class="clear"></div>
</div>
<div class="contentB"></div>
</div>
    
 <div class="public_windows jcpt_yfgl_float01" id="div_add" style="display: none;">
  <h3><a href="javascript:closeModel('div_add')" title="关闭"></a>新建角色</h3>
  <table border="0" cellpadding="0" cellspacing="0" class="public_tab1 public_input">
     <tr class="public_tab1">
        <th><span class="ico06"></span>名&nbsp;&nbsp;&nbsp;&nbsp;称：</th>
        <td><input id="add_rolename" type="text"/></td>
    </tr>
      <tr>
        <th><span class="ico06"></span>隶属身份：</th>
        <td>
        	<select id="identity" onchange="identityChange('div_add',this)">
						
							
								<option value="学生">
									学生
								</option>
							
								<option value="教职工">
									教职工
								</option>
							
						
			</select>
			<span id="sp_admin"></span>
       	</td>
      </tr>
      <tr>
        <th><span class="ico06"></span>选择权限：</th>
        <td><select id="column" onchange="columnChange('div_add')">
						<option value="">
							请选择栏目
						</option>
						
							
								<option value="1">
									基础平台
								</option>
							
								<option value="13">
									直播课堂
								</option>
							
								<option value="14">
									网络备课
								</option>
							
								<option value="2">
									教学系统
								</option>
							
								<option value="3">
									教学系统
								</option>
							
								<option value="4">
									资源系统
								</option>
							
								<option value="5">
									资源审核权限
								</option>
							
								<option value="9">
									通知公告
								</option>
							
								<option value="900">
									公告管理
								</option>
							
								<option value="910">
									我的课程
								</option>
							
								<option value="920">
									酷蒙课程计划
								</option>
							
								<option value="921">
									自建计划
								</option>
							
								<option value="930">
									错题本
								</option>
							
								<option value="940">
									慧考试
								</option>
							
								<option value="950">
									酷蒙ai
								</option>
							
								<option value="951">
									AI测试
								</option>
							
								<option value="952">
									AI报告
								</option>
							
								<option value="960">
									账户信息
								</option>
							
								<option value="970">
									用户管理
								</option>
							
								<option value="980">
									班级管理
								</option>
							
								<option value="990">
									系统管理
								</option>
							
						
			</select>
			
			<select id="column_right">

			</select>
          &nbsp;&nbsp;<a id="add_right" onclick="edit_ul('div_add')" class="an_public2">添&nbsp;加</a>
          <div class="jcpt_yfgl_info" id="div_ul_result">
          
          </div>
        </td>
    </tr>
      <tr>
        <th>&nbsp;&nbsp;角色说明：</th>
        <td>
        	<textarea onkeyup="checkLength(this)" id="remark" class="w300" ></textarea>
        	<br/>
        	<span style="float:right"></span>
        </td>
    </tr>
      <tr>
        <th>&nbsp;</th>
        <td class="t_r"><a class="an_public1" href="javascript:doAdd();">创建</a></td>
      </tr>
  </table>
</div>




 <div class="public_windows jcpt_yfgl_float01" id="div_upd" style="display: none;">
  <h3><a href="javascript:closeModel('div_upd')" title="关闭"></a>修改角色</h3>
  <table border="0" cellpadding="0" cellspacing="0" class="public_tab1 public_input">
     <tr class="public_tab1">
        <th><span class="ico06"></span>名&nbsp;&nbsp;&nbsp;&nbsp;称：<input type="hidden" id="hidden_for_id"> </th>
        <td><input id="upd_rolename" type="text"/></td>
    </tr>
      <tr>
        <th><span class="ico06"></span>隶属身份：</th>
        <td>
        	<select id="identity" onchange="identityChange('div_upd',this)">
						
							
								<option value="学生">
									学生
								</option>
							
								<option value="教职工">
									教职工
								</option>
							
						
			</select>
			<span id="sp_admin"></span>
       	</td>
      </tr>
      <tr>
        <th><span class="ico06"></span>选择权限：</th>
        <td><select id="column" onchange="columnChange('div_upd')">
						<option value="">
							请选择栏目
						</option>
						
							
								<option value="1">
									基础平台
								</option>
							
								<option value="13">
									直播课堂
								</option>
							
								<option value="14">
									网络备课
								</option>
							
								<option value="2">
									教学系统
								</option>
							
								<option value="3">
									教学系统
								</option>
							
								<option value="4">
									资源系统
								</option>
							
								<option value="5">
									资源审核权限
								</option>
							
								<option value="9">
									通知公告
								</option>
							
								<option value="900">
									公告管理
								</option>
							
								<option value="910">
									我的课程
								</option>
							
								<option value="920">
									酷蒙课程计划
								</option>
							
								<option value="921">
									自建计划
								</option>
							
								<option value="930">
									错题本
								</option>
							
								<option value="940">
									慧考试
								</option>
							
								<option value="950">
									酷蒙ai
								</option>
							
								<option value="951">
									AI测试
								</option>
							
								<option value="952">
									AI报告
								</option>
							
								<option value="960">
									账户信息
								</option>
							
								<option value="970">
									用户管理
								</option>
							
								<option value="980">
									班级管理
								</option>
							
								<option value="990">
									系统管理
								</option>
							
						
			</select>
			
			<select id="column_right">

			</select>
          &nbsp;&nbsp;<a id="add_right" onclick="edit_ul('div_upd')" class="an_public2">添&nbsp;加</a>
          <div class="jcpt_yfgl_info" id="div_ul_result">
           
          </div>
        </td>
    </tr>
      <tr>
        <th>&nbsp;&nbsp;角色说明：</th>
        <td>
        	<textarea id="remark" onkeyup="checkLength(this)" class="w300" ></textarea>
        	<br/> 
        	<span style="float:right"></span>
        </td>
    </tr>
      <tr>
        <th>&nbsp;</th>
        <td class="t_r"><a class="an_public1" href="javascript:doUpd();">修改</a></td>
      </tr>
  </table> 
</div> 

 
<div class="public_windows" id="div_sys_role" style="display: none;">
<h3><a href="javascript:closeModel('div_sys_role')" title="关闭"></a>角色权限</h3>
  <div class="jcpt_yfgl_float02"> 
  <table border="0" cellpadding="0" cellspacing="0" class="public_tab3">
  <col class="w100" />
  <col class="w320" />
  	<tbody id="tb_sys_role">
   
    </tbody>
    </table>
    </div>
</div>





 
<div class="footer_bg"
        >

<div class="foot">数字校园教学系统 龙之门教育集团 <a  target="_blank" class="one"></a>
    Copyright  <span id="foot_year"></span> etiantian.ALL Rights Reserved.<br>
    京公网备案110102001311-2　　建议使用<a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank">谷歌浏览器</a></div>
</div>
<script type="text/javascript">$("#foot_year").html(new Date().getFullYear().toString())</script>



<div class="home_tongzhi_float" id="tishi" style="display: none;">
    <p><a href="javascript:closeModel('tishi')" title="关闭"></a></p>
    <h1>
        
            12月18日23:30 — 12月19日7:00
        
    </h1>
</div>


<div class="home_tongzhi_float home_tongzhi_float1" id="admin_tishi" style="display: none;">
    <p><a href="javascript:closeModel('admin_tishi')" title="关闭"></a></p>
</div>


<script type="text/javascript">
    $(function(){
        if (navigator.userAgent.match(/axpzhkt/i)) {
            $(".footer_bg").hide();
            if (navigator.userAgent.indexOf("605FC") < 0) {
                var fixWidth = 1000,w1=screen.width,scale=w1/fixWidth;
                document.getElementById('metaViewport').content='width='+fixWidth+',initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no';
            }
            $(".content_layout").css("paddingTop",0);
        }
        $("body").bind("click",function(evt){
            if($(evt.target).parents("#header > p ").length==0){
                $('#ol_settings').hide();
            }
        })
    })
</script>


 
</body>

