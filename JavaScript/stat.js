




<!DOCTYPE html>




























<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/ueditor/themes/default/css/ueditor.css?ver=1710814942179">
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/dtree.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/WdatePicker.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/jquery.autocomplete.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="js/fancybox/zoom.css?ver=1710814942179" media="all"/>
<link rel="stylesheet" type="text/css" href="css/course/cpxt_question.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/common.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/master.css?ver=1710814942179"/>
<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/style.css?ver=1710814942179"/>
<script src="//school-web.ai-classes.com/dl910/uploadweb/js/jquery-1.9.1.min.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/fancybox/jquery-1.8.3.min.js?ver=1710814942179" type="text/javascript"></script>

<script src="//school-web.ai-classes.com/dl910/js/common/common.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/commonValidate.min.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/date-extend-property.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/teachpaltform/paper-chose-ques.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/pageControl-0.1.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/dtree.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/util/My97DatePicker/WdatePicker.js?ver=1710814942179" language="javascript" type="text/javascript"></script>
<script src="//school-web.ai-classes.com/dl910/util/xheditor/xheditor-1.2.1.min.js?ver=1710814942179" type="text/javascript"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/util/xheditor/xheditor_lang/zh-cn.js?ver=1710814942179"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/notes-zhengzhou-0.1-zh-cn.js?ver=1710814942179" type="text/javascript"></script>
<script src="//school-web.ai-classes.com/dl910/js/common/ajaxfileupload.js?ver=1710814942179" type="text/javascript"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/jquery.json-2.4.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/common/jquery.autocomplete.js?ver=1710814942179"></script>
<script type="text/javascript" src="//school-web.ai-classes.com/dl910/js/fancybox/zoom.min.js?ver=1710814942179"></script>
<link rel="stylesheet" type="text/css" href="//cdn1-school.ai-classes.com/staticimgs/componentscdn/mathquill/mathquill.css?ver=1710814942179">
<script type="text/javascript" src="//cdn1-school.ai-classes.com/staticimgs/componentscdn/mathquill/mathquill.min.js?ver=1710814942179"></script>



<script type="text/javascript">
    var $STU_ID =1, $TEA_ID =2, $PARENT_ID = "3", $ADMIN_ID =4,
        $BANZR_ID =5;
    var $GRADE_ID =9;
    var $DEPT_ID =11;
    var $TEACH_ID =13;
    var $XQADMIN_ID =22;
    var $XQADMIN_AREA_ID =23;

    //是否是教研组长

    //年级组长

    //备课组长

    //是否仅是公告管理员
    var isAnnouncementAdmin =
    false
    //是否有班级关系
    var hasClass =
    true

    var isStudent =false;
    var isTeacher =true;
    var isBzr =true;
    var fileSystemIpPort = '//school-web.ai-classes.com/dl910/fileoperate/';
    var localResourceCdnPath = 'https%3A%2F%2Flocal81-axp.ai-classes.com:444';
    var viewEttUserURL = 'https://resource.etiantian.com/ett20/schoolmanage/student_v2/viewStuInfo.jsp?userID=';
    var fromType = "szschool";
    var localServerIp = 'https://local81-axp.ai-classes.com:444';
    var videoLine = 3;
    var isfiveschool =false;
    var _uploadServer = '//school-sxfile.ai-classes.com/tcfileupload/';
    var _uplodifyServer = '//school-sxfile.ai-classes.com/tcfileupload/uploadify/uploadFile.jsp';
    var _basePath = '//school-web.ai-classes.com/dl910/';
    var isPageRedirect = true;
    var isAxpzhkt =  false;
    var isAiXuePad =  false;
    var _contextPath = "//school-web.ai-classes.com/dl910/";
    var _resourceCdnPath = 'https://cdn1-school.ai-classes.com/fpupload/';
    var basePath = '//school-web.ai-classes.com/dl910/';
    var originalPath = '//school-web.ai-classes.com/dl910/';
    var cdnHost = '//cdn1-school.ai-classes.com/sz_school/';
    $(function () {
        $('li[name="ett_video_line"]').each(function (ix, im) {
            var line = $(im).attr('data-bind');
            if (line == videoLine)
                $(im).children('a').append('<span class="ico99"></span>');
        });

        $("a[name='a_video_source']").bind("click", function () {
            var ul = $(this).next('ul');
            if (ul.css('display') == 'none')
                $(ul).css('display', '')
            else
                $(ul).css('display', 'none');
        });
    })
</script>
<title>长沙市教育资源平台
</title>

<script src="//web.ai-classes.com/js/o/jplugins/ui/1.8.16/js/jquery-ui-1.8.16.custom.min.js?ver=1710814942179"></script>
<script src="//web.ai-classes.com/js/o/jplugins/cross-domian/1.0.3/jquery.xdomainrequest.min.js?ver=1710814942179"></script>
<script src="//web.ai-classes.com/js/o/jplugins/ba-postmessage/0.5/jquery.ba-postmessage.min.js?ver=1710814942179"></script>
<script src="//web.ai-classes.com/js/o/jplugins/ba-bbq/1.2.1/jquery.ba-bbq.min.js?ver=1710814942179"></script>
<script src="//web.ai-classes.com/js/ett/frame-bridge/jquery.top-dialog.js?ver=1710814942179" charset="utf-8"></script>
<script src="//web.ai-classes.com/js/ett/frame-bridge/jquery.top-bridge.js?ver=1710814942179" charset="utf-8"></script>
<div id="loading" style='display:none;position: absolute;z-index:9999;width:32px;height:32px'><img
        src="images/loading.gif"/></div>






<style type="text/css">
    /*body{-moz-user-select: none}*/
    /*body{-moz-user-select: none}*/
</style>
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?8b2d016c7a7351dc6cce42ca30b2632b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<div id="_fade" class="black_overlay"
     style="background:black; filter: alpha(opacity=10); opacity: 0; -moz-opacity:0.1;"></div>

<div class="home_public_float" id="dv_ach_award" style="display: none;z-index:9999">
    <p></p>
</div>


<script type="text/javascript">
    (function () {
        var _alert = window.alert;                   // <-- Reference
        window.alert = function (e) {
            e = e + "";
            if (e != null && e.indexOf("$awardMsg$") > -1) {
                $("#dv_ach_award p").empty();

                var achAwardMsg = e;

                try {
                    achAwardMsg = eval('(' + achAwardMsg + ')');
                } catch (e) {
                    achAwardMsg = undefined;
                }
                if (typeof achAwardMsg != 'undefined') {
                    $.each(achAwardMsg, function (x, m) {
                        var type = '';
                        if (m.type == 1) {
                            type = '经验'
                        } else if (m.type == 2) {
                            type = '积分'
                        }
                        $("#dv_ach_award p").append(type + '+' + m.value);
                        if (x == 0)
                            $("#dv_ach_award p").append('&nbsp;');

                        if ((x + 1) == achAwardMsg.length) {
                            showAwardModel('dv_ach_award', 'fade', 100);
                            $("#fade").hide();
                            _hideAchAwardDiv();
                        }
                    })

                }
            } else {
                _alert(e);
            }
        };
    })();

    function _closeAchAwardDiv() {
        $("#dv_ach_award").fadeOut('slow');
    }

    //显示一秒后自动消失
    var _achAwardTime = 0;

    function _hideAchAwardDiv() {
        if (_achAwardTime == 1) {
            _closeAchAwardDiv();
            _achAwardTime = 0;
            return;
        }
        _achAwardTime++;
        setTimeout("_hideAchAwardDiv()", 2500);
    }
</script>



<link rel="stylesheet" type="text/css" href="//school-web.ai-classes.com/dl910/css/tongji.css?ver=1710814942179"/>
<script type="text/javascript">
    var ques_mp3_path='https://attach.ai-classes.com/ett20/study/service/testonline/package';
    var bathPath='//school-web.ai-classes.com/dl910/';
</script>

<html>
<head>
    <script type="text/javascript"
            src="fancybox/jquery.mousewheel-3.0.4.pack.js?ver=1710814942179"></script>
    <script type="text/javascript"
            src="fancybox/jquery.fancybox-1.3.4.js?ver=1710814942179"></script>

    <link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css?ver=1710814942179"/>
    <script type="text/javascript">
        var classObj=undefined;
        $(function(){
            handleModel();
        });

        function yxwLogin(){
            $(".tongji_nav li[data-model=6] a").attr('href','javascript:;');
            $.ajax({
                async: false,
                url: 'https://web.ai-classes.com/'+'yuxiwang/teacherLogin.do',
                data: {
                    time:'1711795440540',
                    userId:'1010217863',
                    sign:'d4864f619a773a92a91d3e588645440e'
                },
                type: "get",
                dataType: "jsonp",
                jsonp: "callback",
                error: function (data) {},
                success:function(){
                    $(".tongji_nav li[data-model=6] a").attr({'href':'https://web.ai-classes.com/yuxiwang/pages/statistics/teacherReport.html','target':'_blank'});
                }
            });
        }

        function handleModel(modelId){
            var url='';
            switch (parseInt(modelId)){
                case  1: url='stat?m=taskIndex';break;
                case  2: url='stat?m=courseScoreIndex';break;
                case  3: url='stat?m=teachStatIndex';break;
                case  4: url='stat?m=resourceStatIndex';break;
                case  5: url='stat?m=termReportIndex';break;
                case  7: url='stat?m=practiceIndex';break;
            }
            if(modelId!=6){
                $("#stat_stu_main").html('').hide();
                $("#stat_main").load(url,function(){
                    $("#stat_main").show()
                    if(modelId == 1){
                        setTimeout(function () {
                            $("#stat_ul_subs li[data-sub=''][data-bind='']").click();
                        },300);
                    }
                });
            }else{
                $("#stat_main").html('');
            }

        }
    </script>
</head>
<body>

<meta id="metaViewport" name="viewport" content="" />
<meta http-equiv="Cache-control" content="no-cache">














<link  rel="stylesheet" type="text/css" href="css/pwdmodal.css?ver=1710814942179"/>

<script>
    // 跳走到新开页 了解详情
    function getVersionMsg() {
        closeModel('showReversionPrompt');
        var url = 'user?m=foundDetail';
        url = encodeURI(encodeURI(url));
        window.open(url);
    }

    function loadEttCepingJID(etUrl) {
        var toEttUrl = etUrl.replace("USER?", "user?").replace("MID=", "mid=");
        $.ajax({
            url: "user?m=loadJIDRight",
            dataType: 'json',
            type: 'post',
            cache: false,
            async: false,
            error: function () {
            }, success: function (rps) {
                if (rps.type == "success") {
                    if (rps.objList[0] == 0) {
                        //如果是0，表示有存在的
                        //user?m=toEttUrl&mid=134&isVip=0
                        window.open(toEttUrl);//存在jid情况跳转至在线测评页面
//                        $("#a_open_toUrl").unbind("click");
//                        $("#a_open_toUrl").bind("click",function(){
//
//                        });
//                        $("#a_open_toUrl").click();
                    } else {

                    }
                } else
                    alert(rps.msg);
            }
        })
    }
</script>


<script type="text/javascript">
    function headImageErr(obj) {
        obj.src = 'images/pic01_121214.png';
        obj.onerror = null;
    }

    function logoInit(obj) {
        obj.src = 'images/logo_ax01_150720.png';
        $(obj).css({"width": 253, "height": 64});
        obj.onerror = null;
    }
</script>
<div class="head_layou"
        
>
    <div id="header">
        
        
        
            
            
                <ul>
                    <li>
                        
                        <img style="cursor: pointer;" src="https://cdn1-school.ai-classes.com/fpupload/imagesSchoolLogo/logo540211708169530082zz.png" onerror="logoInit(this)"
                             width="253" height="64" onclick="tabSettings(5)" data-bind="5"/>
                        
                        <span class="logoBg"></span></li>
                    <li class="headNewTitle">统计
                    </li>
                </ul>
            
            
        

        <p class="one"><span style="cursor: pointer" onclick="displayObj('ol_settings')"></span>
            
            <img src="//cdn1-school.ai-classes.com/common/cooperateschool/teacher/upload/1010217863_59392491.jpg" id="hd_smImg" width="40" height="40"
                 onerror="headImageErr(this);"/>
            
        </p>
        <ol id="ol_settings" class="public_drop hide">
            
            
                <li data-bind="1">
                    
                    <a href="linkWeb?m=toUserCenter" target="_blank">个人中心</a>
                    
                </li>
            

            
                
                <li onclick="tabSettings(5)" data-bind="5">
                    <a href="javascript:;">体验新版</a>
                </li>
                
            

            


            
            <li onclick="tabSettings(2)" data-bind="2">
                <a id="Q_Help" target="_blank" href="javascript:;">使用手册</a>
            </li>
            
          
            
                <li onclick="tabSettings(3)" data-bind="3">
                    <a href="javascript:;">退出</a>
                </li>
            
        </ol>
        
        

        
        
        
        <div>
            
        </div>
        
        
        
        
        
    </div>
</div>

<div class="public_windows home_float_620" style="display: none" id="Q_Account">
    <input type="hidden" value="" id="oldpass"/>
    <input type="hidden" value="" id="oldname"/>
    <h3><a href="javascript:closeModel('Q_Account')" class="ico32" title="关闭"></a>账户设置</h3>
    <div class="nr">
        <ul class="public_list5">
            <li class="crumb" data-bind="1" name="li_accont"><a href="javascript:;">账号</a></li>
            

            
                
            

            
        </ul>
        

        <div style="display: none;" id="Q_ModifySrc">
            <ul class="set_list">
                <li><span class="ico73"></span><input id="modify_uname" onblur="validateUsernameModify('modify_uname')"
                                                      type="text" placeholder="（4~32个字符，数字/字母/下划线/汉字，不能只是数字）"/>
                    <p class="set_tishi" id="modify_username_err"></p>
                    <input type="hidden" id="modify_username_flag" value="0"/>
                </li>
                <li class=""><span class="ico74" title="密码"></span><input id="modify_pass" type="password"
                                                                          placeholder="密码"/><a
                        href="javascript:showPwd('modify_pass')" class="ico10"></a>
                    <!-- onblur="validatePassword('pass')" -->
                    <p class="set_tishi" id="modify_pwd_err"></p>
                    <input type="hidden" id="modify_pwd_flag" value="0"/>
                </li>
            </ul>
            <p class="t_c p_b_20"><a href="javascript:toModifyEttAccount()" class="an_blue_big">确&nbsp;定</a></p>
        </div>

        

        <div style="display: none" id="Q_StudentCard">
            <div class="set_yuxiwang">
                <div class="set_yuxiwang_nr" id="dv_yxw_subject" style="display: none;">
                    <p>请为预习王卡（卡号：<span id="sp_yxw_card"></span>）选择学科</p>
                    <ul id="ul_yxw_sub">
                    </ul>
                </div>

                <!--success-->
                <div class="set_yuxiwang_nr" id="dv_yxw_subject_success" style="display: none;"></div>


                <table id="tbl_yxw" border="0" cellpadding="0" cellspacing="0" class="public_tab1 public_input">
                    <col class="w60"/>
                    <col class="w470"/>
                    <tr>
                        <th>卡 号：</th>
                        <td><input id="yxw_card_no" type="text" class="w200"/></td>
                    </tr>
                    <tr>
                        <th>密 码：</th>
                        <td><input id="yxw_card_pwd" type="password" class="w200"/>
                            <a class="ico10" href="javascript:showPwd('yxw_card_pwd')"></a>
                        </td>
                    </tr>
                </table>
                <p><a id="a_yxw_submit" href="javascript:getStudentCardSubject();" class="an_blue_big">确&nbsp;定</a></p>
            </div>


            <p class="set_title">历史信息</p>
            <div class="set_table" id="yxw_card_content">

            </div>
        </div>
    </div>


</div>
</div>


<script type="text/javascript">
    $(function () {
        if (navigator.userAgent.match(/axpzhkt/i)) {
            $(".head_layou").hide();
        }
        //点击预习王记在线用户列表log，统计预习王使用量
        $(".li_yxw_title").click(function () {
            $.ajax({
                url: 'onlineUserStat?m=ajaxSave',
                type: "post",
                dataType: 'json',
                cache: false,
                error: function () {
                    //alert('系统未响应，请稍候重试!');
                }, success: function (rmsg) {
                    if (rmsg.type == "error") {
                        //alert(rmsg.msg);
                    } else {
                        //alert(rmsg.msg);
                    }
                }
            });
        });

        <!--资源系统权限-->
        

        

        


        $("li[name='li_accont']").bind("click", function () {
            $(this).addClass("crumb").siblings().removeClass("crumb");
            var idx = $(this).attr('data-bind');
            if (idx == 2) {
                var url = "user?m=toCardPage"
                $("#card_content").load(url, function () {
                    $("#card_no").val('');
                    $("#card_pwd").val('');
                });

                $("#Q_TeachCard").show();
                $("#Q_Modifyuser").hide();
                $("#Q_ModifySrc").hide();
                $("#Q_StudentCard").hide();
            } else if (idx == 1) {
                loadEttUserName();
                $("#Q_Modifyuser").show();
                $("#Q_TeachCard").hide();
                $("#Q_ModifySrc").hide();
                $("#Q_StudentCard").hide();
            } else if (idx == 3) {
                $("#Q_ModifySrc").show();
                $("#Q_TeachCard").hide();
                $("#Q_Modifyuser").hide();
                $("#Q_StudentCard").hide();
            } else if (idx == 4) {
                var url = "user?m=toPreStudyCardListPage&userId=309164170"
                $("#yxw_card_content").load(url, function () {
                    $("#card_no").val('');
                    $("#card_pwd").val('');
                });

                $("#Q_StudentCard").show();
                $("#Q_Modifyuser").hide();
                $("#Q_ModifySrc").hide();
                $("#Q_TeachCard").hide();

                //初始注册状态
                initStudentCardDiv(true);
            }

        })

    });


    function initStudentCardDiv(flag) {
        $("#tbl_yxw").show();
        $("#dv_yxw_subject").hide();
        $("#dv_yxw_subject_success").hide();
        $("#a_yxw_submit").attr('href', 'javascript:getStudentCardSubject();');
        if (flag) {
            $("#yxw_card_no").val('');
            $("#yxw_card_pwd").val('');
        }
    }

    /*****个人信息页面******/
    function skipUserPages(type) {
        var href = "personal?m=toPersonalIndex&ptype=" + type;
        location.href = href;
    }

    function editUser() {
        
        skipUserPages(1)
        
    }

    function operateLzxEttUser() {
        

        

        
    }

    /**
     *1:账户设置 2：使用手册 3:退出
     * @param type
     */
    function tabSettings(type) {
        //删除在线用户列表记录
        if (type == 3) {
            $.ajax({
                url: 'onlineUserStat?m=delOnlineUserLogById',
                type: "post",
                dataType: 'json',
                cache: false,
                error: function () {
                    //alert('系统未响应，请稍候重试!');
                }, success: function (rmsg) {
                    if (rmsg.type == "error") {
                        //alert(rmsg.msg);
                    } else {
                        //alert(rmsg.msg);
                    }
                }
            });
        }
        displayObj('ol_settings');
        switch (type) {
            case 0:
                operateLzxEttUser();
                break;
            case 1:
                editUser();
                break;
            case 2:
                downHelpDoc();
                break;
            case 3: {
                sessionStorage.removeItem("indexTip");
                
                
                <!--如果不是乐知行,网校进入，则显示退出-->
                
                
                loginDestory('//school-web.ai-classes.com/dl910/');
                break;
                
                

                <!--教师版-->
                
            }
            case 4: {
                $("li[name='li_accont'][data-bind='4']").click();
                showModel('Q_Account');
                break;
            }
            case 5: {
                location.href = 'linkWeb?m=toIndexPage';
                break;
            }
        }

        //初始注册状态
        initStudentCardDiv(true);
    }

    function loadEttUserName() {
        $.ajax({
            url: "tpuser?loadEttUserName",
            type: "post",
            dataType: 'json',
            cache: false,
            error: function () {
                //alert('系统未响应，请稍候重试!');
            },
            success: function (json) {
                if (json.objList[0] != null && json.objList[0].toString().length > 0) {
                    $("#uname").val(json.objList[0]);
                    //$("#uname").html(json.objList[0]);
                    $("#oldname").val(json.objList[0]);
                }
            }
        });
    }

    function downHelpDoc() {
        var utype, ftype;
        
        utype = 2;
        
        //lzx
        
        //在线班
        
        //数校
        
        ftype = 'school';
        
        //实体班
        
        var url = '';
        if (utype == 1){
            if(ftype=='school'){
                url='https://cdn1-school.ai-classes.com/fpupload/'+'helpdoc/'+ftype+'/student/student_help.zip';
            }else {
                url='https://cdn1-school.ai-classes.com/fpupload/'+'helpdoc/'+ftype+'/student/jxxt-help.docx';
            }
        }
        if(utype==2){
            if(ftype=='school'){
                url='https://cdn1-school.ai-classes.com/fpupload/'+'helpdoc/'+ftype+'/teacher/teacher_help.zip';
            }else {
                url='https://cdn1-school.ai-classes.com/fpupload/'+'helpdoc/'+ftype+'/teacher/help.zip';
            }
        }
        $("#Q_Help").attr('href', url);
    }

    function doRegisterCard() {
        var cardNo = $("#card_no");
        var cardPwd = $("#card_pwd");
        if (cardNo.val().Trim().length < 1) {
            alert('请输入卡号!');
            return;
        }
        if (cardPwd.val().Trim().length < 1) {
            alert('请输入卡密码!');
            return;
        }
        $.ajax({
            url: 'user?m=registerCard',
            type: 'post',
            data: {cardNo: cardNo.val().Trim(), cardPwd: cardPwd.val().Trim()},
            dataType: 'json',
            cache: false,
            error: function () {
                //alert('系统未响应，请稍候重试!');
            },
            success: function (rps) {
                var noMsg = $("#card_no_msg");
                if (rps.type == 'success') {
                    $("#card_content").load('user?m=toCardPage');
                    noMsg.html('');
                } else {
                    alert(rps.msg);
                }
            }
        });
    }

    function getStudentCardSubject() {
        var cardNo = $("#yxw_card_no");
        var cardPwd = $("#yxw_card_pwd");
        if (cardNo.val().Trim().length < 1) {
            alert('请输入卡号!');
            return;
        }
        if (cardPwd.val().Trim().length < 1) {
            alert('请输入卡密码!');
            return;
        }
        $.ajax({
            url: 'user?m=getCardAndSubject',
            type: 'post',
            data: {
                cardNo: cardNo.val().Trim(),
                cardPwd: cardPwd.val().Trim(),
                cardCommand: cardcommand,
                userId: '309164170'
            },
            dataType: 'json',
            cache: false,
            error: function () {
            },
            success: function (rps) {
                if (rps.type == 'success') {
                    if (rps.objList) {
                        var htm = '';
                        $.each(rps.objList, function (x, m) {
                            htm += '<li name="li_yxw_sub"><a data-bind="' + m.subjectId + '" href="javascript:;">' + m.subjectName + '</a></li>';
                        })
                        $("#sp_yxw_card").html(cardNo.val().Trim());
                        $("#ul_yxw_sub").html(htm);
                        $("#dv_yxw_subject").show();
                        $("#tbl_yxw").hide();

                        $("li[name='li_yxw_sub']").each(function (idx, itm) {
                            $(itm).bind("click", function () {
                                $(itm).siblings().removeClass("crumb").end().addClass("crumb");
                            })
                        })

                        $("#a_yxw_submit").attr('href', "javascript:doRegisterStudentCard();")
                    }
                } else {
                    if (rps.msg) {
                        alert(rps.msg);
                    }
                }
            }
        });
    }


    function doRegisterStudentCard() {
        var cardNo = $("#yxw_card_no");
        var cardPwd = $("#yxw_card_pwd");
        var subjectId = $("li[name='li_yxw_sub'].crumb a").attr('data-bind');
        if (cardNo.val().Trim().length < 1) {
            alert('请输入卡号!');
            return;
        }
        if (cardPwd.val().Trim().length < 1) {
            alert('请输入卡密码!');
            return;
        }
        if (!subjectId) {
            alert('请选择学科!');
            return;
        }

        initRegisterClick(false);

        $.ajax({
            url: 'user?m=doRegisterStudentCard',
            type: 'post',
            data: {
                cardNo: cardNo.val().Trim(),
                cardPwd: cardPwd.val().Trim(),
                cardCommand: cardcommand,
                userId: '309164170',
                subjectId: subjectId
            },
            dataType: 'json',
            cache: false,
            error: function () {
                initRegisterClick(true);
            },
            success: function (rps) {

                initRegisterClick(true);

                if (rps.type == 'success' && rps.objList) {
                    var h = '<p class="t_c">预习王卡（卡号：' + rps.objList[0] + '）添加成功！<br>到期日：' + rps.objList[1] + '</p>';
                    $("#dv_yxw_subject_success").html(h).show();
                    $("#dv_yxw_subject").hide();

                    $("#a_yxw_submit").attr("href", "javascript:initStudentCardDiv(true);");

                    var url = "user?m=toPreStudyCardListPage&userId=309164170";
                    $("#yxw_card_content").load(url);
                } else {
                    if (rps.msg) {
                        alert(rps.msg);
                    }
                }
            }
        });
    }

    function initRegisterClick(flag) {
        if (flag)
            $("#a_yxw_submit").attr("href", "javascript:doRegisterStudentCard();");
        else
            $("#a_yxw_submit").attr("href", "javascript:;");
    }

    /**
     * 验证用户名
     * @param txtid
     * @return
     */
    function validateUsername(txtid) {
        var uname = $("#" + txtid).val().Trim();
        if (uname.length < 1) {
            return;
        }
        $("#username_flag").val("0");

        var reg = new RegExp("^([@_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if (!reg.test(uname)) {
            $("#username_err").html('用户名格式错误');
            return false;
        } else
            $("#username_err").html('');

        //开始测试
        $ajax("user?m=ajaxAlluser", {username: encodeURI(uname)}, 'POST', 'json',
            function (rps) {
                if (rps.objList.length > 0) {
                    // $("#"+txtid).focus();
                    //$("#"+txtid).select();
                    $("#username_err").html(rps.objList[0]);
                    $("#username_flag").val("0");
                    return false;
                } else {
                    $("#username_flag").val("1");
                    $("#username_err").html('');
                    return _checkEttUserName(txtid)
                }
            }, function () {
                return false;
            });
    }


    function validateNameForUpdate(txtid) {
        var uname = $("#" + txtid).val().Trim();
        if (uname.length < 1) {
            return;
        }
        $("#username_flag").val("0");

        var reg = new RegExp("^([@_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if (!reg.test(uname)) {
            $("#username_err").html('用户名格式错误');
            return false;
        } else
            $("#username_err").html('');

        //开始测试
        var param = {
            url: "user?m=validateUserNameForUpdate",
            type: 'post',
            data: {username: encodeURI(uname)},
            dataType: 'json',
            async: false,
            error: function () {
                return false;
            },
            success: function (rps) {
                if (rps.objList.length > 0) {
                    // $("#"+txtid).focus();
                    //$("#"+txtid).select();
                    $("#username_err").html(rps.objList[0]);
                    $("#username_flag").val("0");
                } else {
                    $("#username_flag").val("1");
                    $("#username_err").html('');
                    _checkEttUserName(txtid)
                }
            }
        }
        $.ajax(param);
    }

    /**
     * 验证用户名
     * @param txtid
     * @return
     */
    function validateUsernameModify(txtid) {
        var uname = $("#" + txtid).val().Trim();
        if (uname.length < 1) {
            return;
        }
        $("#modify_username_flag").val("0");

        var reg = new RegExp("^([_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if (!reg.test(uname)) {
            $("#modify_username_err").html('用户名格式错误');
            return;
        } else
            $("#modify_username_err").html('');
    }

    /**
     * 验证用户名
     * @param txtid
     * @return
     */
    function validateLzxUnameModify(txtid, errid) {
        var uname = $("#" + txtid).val().Trim();
        if (uname.length < 1) {
            return;
        }
        $("#" + txtid + "_flag").val("0");

        var reg = new RegExp("^([_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if (!reg.test(uname)) {
            $("#" + errid).html('用户名格式错误');
            return;
        } else
            $("#" + errid).html('');
    }

    function _checkEttUserName(id) {
        var username = $("#" + id).val();
        $.ajax({
            url: "tpuser?checkEttUserName",
            type: "post",
            data: {userName: username.Trim()},
            dataType: 'json',
            cache: false,
            async: false,
            error: function () {
                return false;
            },
            success: function (json) {
                if (json.type == 'error') {
                    if (json.objList[0] != null && json.objList[0].toString().length > 0) {
                        $("#username_err").html(json.objList[0]);
                        $("#username_flag").val("0");
                    }
                } else {
                    $("#username_flag").val("1");
                    $("#username_err").html('');
                }
            }
        });
    }


    /**
     * 验证密码
     * @param txtid
     * @return
     */
    function validatePassword(txtid) {
        var pwd = $("#" + txtid).val().Trim();
        if (pwd.length < 1) {
            return;
        }
        $("#pwd_flag").val("0");
        //开始测试

        $.ajax({
            url: "user?m=ajaxUserPassword",
            type: "post",
            data: {password: pwd},
            dataType: 'json',
            cache: false,
            error: function () {
            }, success: function (rps) {
                if (rps.objList.length > 0) {
                    //$("#"+txtid).focus();
                    //$("#"+txtid).select();
                    if (txtid == 'pass')
                        $("#pwd_err").html(rps.objList[0]);
                    else
                        $("#re_pwd_err").html(rps.objList[0]);
                    $("#pwd_flag").val("0");
                } else {
                    $("#pwd_flag").val("1");
                    if (txtid == 'pass')
                        $("#pwd_err").html('');
                    else
                        $("#re_pwd_err").html('');
                }
            }
        });
    }


    function updatePass() {
        var newPwd = $("#repass").get(0);
        var oldPwd = $("#pass").get(0);
        if (!(validateNewPass(newPwd) && validateMorePass(oldPwd)))
            return;

        var uname = $("#uname").val().Trim();
        if (uname.length < 1) {
            return;
        }
        $("#username_flag").val("0");

        var reg = new RegExp("^([@_a-zA-Z0-9]|[\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$");
        if (!reg.test(uname)) {
            $("#username_err").html('用户名格式错误');
            return false;
        } else
            $("#username_err").html('');

        //开始测试
        var param = {
            url: "user?m=validateUserNameForUpdate",
            type: 'post',
            data: {username: encodeURI(uname)},
            dataType: 'json',
            async: false,
            error: function () {
                return false;
            },
            success: function (rps) {
                if (rps.objList.length > 0) {
                    $("#username_err").html(rps.objList[0]);
                    $("#username_flag").val("0");
                } else {
                    $("#username_flag").val("1");
                    $("#username_err").html('');
                    checkEttUserName($("#uname").get(0), true);
                }
            }
        }
        $.ajax(param);

    }

    /**
     *ett
     */
    function toModifyEttAccount() {
        var oldPwd = $("#modify_pass").get(0);
        if (!(validateMorePassModify(oldPwd)))
            return;
        doUpdEttAccount($("#modify_uname").get(0), oldPwd.value);
    }

    /**
     *lzx
     */
    function lzxToModifyEttAccount() {
        var oldPwd = $("#lzx_pwd").get(0);
        if (!(validateMorePassModify(oldPwd)))
            return;
        lzxDoUpdEttAccount($("#lzx_uname").get(0), oldPwd.value);
    }

    /**
     *ett
     * @param obj
     * @param pwd
     */
    function doUpdEttAccount(obj, pwd) {
        var username = obj.value;
        if (username.Trim().length < 1) {
            $("#modify_username_err").html('请输入用户名!');
        } else {
            $.ajax({
                url: "tpuser?doUpdateEttAccount",
                type: "post",
                data: {userName: username.Trim(), pwd: pwd},
                dataType: 'json',
                cache: false,
                error: function () {
                    //alert('系统未响应，请稍候重试!');
                },
                success: function (json) {
                    if (json.type == 'error') {
                        alert(json.msg);
                    } else {
                        alert(json.msg);
                        closeModel('Q_Account');
                    }

                }
            });
        }
    }


    function lzxDoUpdEttAccount(obj, pwd) {
        var username = obj.value;
        if (username.Trim().length < 1) {
            $("#lzx_uname_err").html('请输入用户名!');
        } else {
            $.ajax({
                url: "tpuser?doUpdateEttAccount",
                type: "post",
                data: {userName: username.Trim(), pwd: pwd},
                dataType: 'json',
                cache: false,
                error: function () {
                    //alert('系统未响应，请稍候重试!');
                },
                success: function (json) {
                    if (json.type == 'error') {
                        alert(json.msg);
                    } else {
                        alert(json.msg);
                        closeModel('dv_modify_ettAccount');
                    }

                }
            });
        }
    }


    function checkEttUserName(obj, issub) {
        var username = obj.value;
        if (username.Trim().length < 1) {
            $("#username_err").html('请输入用户名!');
        } else {
            $.ajax({
                url: "tpuser?checkEttUserName",
                type: "post",
                data: {userName: username.Trim()},
                dataType: 'json',
                cache: false,
                error: function () {
                    //alert('系统未响应，请稍候重试!');
                },
                success: function (json) {
                    if (json.type == 'error') {
                        if (json.objList[0] != null && json.objList[0].toString().length > 0) {
                            $("#username_err").html(json.objList[0]);
                        }
                    } else {
                        $("#username_err").html('');
                        if (typeof issub != 'undefined' && issub) {
                            doUpdPwd();
                        }
                    }

                }
            });
        }
    }

    function doUpdPwd() {
        var param = {};
        param.oldUserName = $("#oldname").val().Trim();
        param.newUserName = $("#uname").val().Trim();
        param.oldPwd = $("#pass").val().Trim();
        param.newPwd = $("#repass").val().Trim();


        $.ajax({
            url: 'tpuser?modifyEttUser',
            dataType: 'json',
            type: 'POST',
            data: param,
            cache: false,
            error: function () {
                // //alert('系统未响应，请稍候重试!');
            }, success: function (rps) {
                if (rps.type == 'error') {
                    if (rps.objList[0] != null && rps.objList[0].toString().length > 0) {
                        alert(rps.objList[0]);
                    }
                } else {
                    alert("修改成功!");
                    /*closeModel('Q_Account');*/
                }
            }
        });
    }


    function showPwd(divid) {
        try {
            var controlObj = $("#" + divid);
            var ty = $("#" + divid).attr("type");
            var val = $("#" + divid).val();

            var newHtml = document.getElementById(divid).outerHTML;
            var typeBoo = newHtml.indexOf('type="') == -1;
            var tyHtml = isIE && typeBoo ? 'type=' + ty + '' : 'type="' + ty + '"';
            newHtml = newHtml.replace(tyHtml, isIE && typeBoo ? 'type=' + (ty == 'password' ? 'text' : 'password') + '' : 'type="' + (ty == 'password' ? 'text' : 'password') + '"');
            $(controlObj).after(newHtml).remove();
            $("#" + divid).val(val);
        } catch (e) {
            console.log(e);
        }
    }


    function validateNewPass(obj) {
        var pass = obj.value;
        if (pass.Trim().length < 1) {
            $("#re_pwd_err").html("请输入新密码");
            return false;
        } else {
            $("#re_pwd_err").html('');
        }
        if (pass.Trim().length < 6 || pass.Trim().length > 16) {
            $("#re_pwd_err").html("请输入6-16个字符的密码长度");
            return false;
        } else {
            $("#re_pwd_err").html('');
        }
        return true;
    }

    function validateMorePass(obj) {
        var pass = $("#pass").val();
        var pass2 = obj.value;
        if (pass2.Trim().length < 1) {
            $("#pwd_err").html("请输入密码");
            return;
        } else {
            $("#pwd_err").html('');
        }
        return true;
    }

    function validateMorePassModify(obj) {
        var pass2 = obj.value;
        if (pass2.Trim().length < 1) {
            $("#modify_pwd_err").html("请输入密码");
            return;
        } else {
            $("#modify_pwd_err").html('');
        }
        return true;
    }

    function displayObj(id, type) {
        if (type == undefined || type == null) {
            if ($("#" + id).is(":hidden"))
                $("#" + id).show();
            else
                $("#" + id).hide();
            return;
        }
        if (type) {
            $("#" + id).show();
            return;
        }
        if (!type) {
            $("#" + id).hide();
            return;
        }
    }

    //注册网校帐号
    function doBindEttAccount() {
        //  var uNameValidateBo=validateEttUName('up_ettUserName','p_up_msg_ettUserName','sp_up_ettUserName_isRight',false)
        var passValidateBo = $("#sp_up_ettUserName_isRight .ico01").length > 0 ? true : false;
//        var emailValidateBo=validateEttEmail('add_ettEmail','p_add_msg_ettEmail','sp_add_ettEmail_isRight');
        //用户名通过
        //uNameValidateBo&&
        if ($("#sp_up_ettUserName_isRight .ico01").length > 0) {
            //密码通过,邮箱通过
            if (passValidateBo) {
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    async: false,
                    url: "operateEtt?m=bindEttAccount",
                    data: {
                        userName: $("#up_ettUserName").val().Trim(),
                        password: $("#up_ettPass").val().Trim()
                    },
                    error: function () {
                        alert('网络不通畅!');
                    },
                    success: function (rps) {     //根据后台返回的result判断是否成功!
                        if (rps.type == "success") {
//                            $("#a_open_toUrl").unbind("click");
//                            $("#a_open_toUrl").bind("click",function(){
//                                var toUrlHtm=$("#dv_op_ettAccountColumn input[name='toUrl']").val();
//                                if(toUrlHtm.Trim()=="WEBIM"){
//                                    $("#li_web_im").load("util/webim.jsp",function(){
//                                        $("#webimopen").click();
//                                    });
//                                }else{
//                                    window.open(toUrlHtm);
//                                }
//                            });
//                            //取消弹出层
//                            $.fancybox.close();
//                            $("#a_open_toUrl").click();
                            $("#dv_do_register").hide();
                            $("#dv_register_ok").show();
                            $("#dv_register_ok h2").attr("title", "绑定成功");

                            //获取预习王跳转连接
                            $("#li_head_yxw").load('util/yuxiwang/nav.jsp');
                            $("#a_yxw_stat").attr({
                                "href": 'https://web.ai-classes.com/yuxiwang/pages/statistics/teacherReport.html?subjectId=' + global_subjectid + "&gradeId=" + global_gradeid,
                                "target": "_blank"
                            });
                        } else {
                            alert(rps.msg);
                        }
                    }
                });
            }
        }
    }
</script>



<div id="fade" class="black_overlay"
     style="background:black; filter: alpha(opacity=30); opacity: 0.3; -moz-opacity:0.3;"></div>


<div class="public_windows yhsqxy_float" id="dv_disclaimer" style="display: none;z-index: 10003">
    <h3>用户上传协议</h3>
    <div class="nr">
        <div class=" yhsqxy_info">
            <p class="t_c"><strong><b>用户上传协议</b></strong></p>
            <p><b>第一章　对用户上传内容的管理</b></p>
            <p>
                　　用户在数字校园教学系统网站上传文字、图片、录音、视频等内容时，必须遵守国家有关法律规定，并承担一切因自己发布信息不当导致的民事、行政或刑事法律责任。用户在数字校园教学系统网站上所发布的信息，不得含有以下内容：<br>
                违反宪法确定的基本原则的；<br>
                　　（1） 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>
                　　（2） 损害国家荣誉和利益，攻击党和政府的；<br>
                　　（3） 煽动民族仇恨、民族歧视，破坏民族团结的；<br>
                　　（4） 破坏国家、地区间友好关系的；<br>
                　　（5） 违背中华民族传统美德、社会公德、论理道德、以及社会主义精神文明的；<br>
                　　（6） 破坏国家宗教政策，宣扬邪教和封建迷信的；<br>
                　　（7） 散布谣言或不实消息，扰乱社会秩序 ，破坏社会稳定的；<br>
                　　（8） 煽动、组织、教唆恐怖活动、非法集会、结社、游行、示威、聚众扰乱社会秩序的；<br>
                　　（9） 散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；<br>
                　　（10）侮辱或诽谤他人，侵害他人合法权益的；<br>
                　　（11）侵犯他人肖像权、姓名权、名誉权、隐私权或其他人身权利的；<br>
                　　（12）使用漫骂、辱骂、中伤、恐吓、诅咒等不文明语言的；<br>
                　　（13）以非法民间组织名义活动的；<br>
                　　（14）含有法律、行政法规禁止的其他内容的。<br>
                　　
                如果用户在数字校园教学系统网站上传文字、图片、录音、视频等内容时，不能履行和遵守协议中的规定，为维护本网站的形象、信誉、安全，本网站有权删除用户上传的内容，同时保留依法追究当事人法律责任的权利。用户需独立对自己在网上的以上行为承担法律责任。
            </p>
            <p><b>第二章　内容的所有权</b></p>
            <p>
                　　数字校园教学系统网站提供的文字、声音、图片、录像、视频、图表、广告中的全部内容、以及为用户提供的其他信息的内容受版权、商标和其它财产所有权法律的保护。所以，用户只能在数字校园教学系统网站和相关权利人授权下才能使用这些内容，而不能擅自复制、发布、转载、播放、改编、汇编或以其他方式使用这些内容或将该等内容用于其他任何商业目的。<br>
                　　用户在数字校园教学系统网站上传文字、图片、录音、视频等内容前，须确定对该内容拥有绝对版权，或经版权方允许发布。<br>
                　　用户一经在数字校园教学系统网站上传文字、图片、录音、视频等内容，即视为其同意授予数字校园教学系统网站在全世界范围内永久性的、不可撤销的、免费的、非独家的和再许可的权利和许可，数字校园教学系统网站可以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示该内容的全部或部分，或将此内容的全部或部分编入其他任何形式的作品、媒体或技术中。
            </p>
            <p><b>第三章　损害赔偿责任</b></p>
            <p>
                　　数字校园教学系统网站反对用户上传自身不享有相关权利或含有侵害第三方权利的内容。对此产生的任何版权纠纷，由该用户直接与权利人沟通解决，数字校园教学系统网站作为第三方，不负任何法律责任，若因此给数字校园教学系统网站造成损失的，该用户应承担全部赔偿责任。<br>
                　　用户同意保障和维护数字校园教学系统网站及第三方用户的利益，如因用户违反有关法律、法规或本协议的任何条款给数字校园教学系统网站或任何其他第三人造成损失的，用户同意承担由此造成的全部损害赔偿责任。</p>
            <p class="t_r"> 北京龙之门网络教育技术股份有限公司<br>2016年5月26日 　　　　　</p>
        </div>
        <p class="yhsqxy_an"><span class="f_right">
            <span id="sp_noalert"><a href="javascript:;" class="ico69b"></a>不再提示</span>
        </span><a data-bind="1" href="javascript:;" class="ico69b"></a>我已阅读并接受此协议</p>
        <p class="t_c m_t_15"><a href="javascript:;" onclick="doReadDisclaimer()" class="an_blue_big">确定</a></p>
        <input id="hd_common_sharestatus" type="hidden" value="3">
    </div>
</div>


<div id="changePwdModal" class="modal" style="display: block;display:none">
    <div class="pwd-box-popup">
        <h3 class="title">修改密码</h3>
        <div class="passBox">
            <div class="passHelp">由于您的密码太过于简单，需要先修改密码后再登录</div>
            <div class="passDiv">
                <label>用户名</label>
                <input id="userName" name="" type="text"  readonly="readonly" />
            </div>
            <div class="passTip"></div>
            <div class="passDiv">
                <label>新密码</label>
                <input id="password" name="" type="password" placeholder="6-16字符,数字/字母/下划线,必须有数字和字母" />
            </div>
            <ul id="pwd-level" class="pwd-level">
                <li class="low active">弱</li>
                <li class="mid">中</li>
                <li class="strong">强</li>
            </ul>
            <div id="pwHint" class="passTip">

            </div>
            <div class="passDiv">
                <label>再次输入</label>
                <input id="repassword" name="" type="password" placeholder="6-16字符,数字/字母/下划线,必须有数字和字母" />
            </div>
            <div id="repwHint" class="passTip">

            </div>
            <div class="passBtnBox">
                <a onclick="updateUserPassword();" target="_blank" class="passSure">确定</a>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        $(".yhsqxy_an a").bind("click", function () {
            if ($(this).hasClass('ico69a'))
                $(this).removeClass().addClass('ico69b');
            else
                $(this).removeClass('ico69b').addClass("ico69a");

            if ($(this).attr('data-bind') == 1 && $(this).hasClass('ico69b')) {
                $("#sp_noalert").show();
                $("#sp_noalert a").removeClass().addClass('ico69b');
            } else if ($(this).attr('data-bind') == 1 && $(this).hasClass('ico69a')) {
                $("#sp_noalert").hide();
                $("#sp_noalert a").removeClass().addClass('ico69a');
            }

        })
    });

    function doReadDisclaimer(isupd) {
        var protocalValue = $("p.yhsqxy_an>a").hasClass('ico69b') ? 1 : 0;
        var isalert = $("p.yhsqxy_an #sp_noalert a:first").hasClass('ico69b') ? 1 : 0;
        var originalStatus = $("#hd_common_sharestatus").val()


        if (isNaN(protocalValue))
            return;

        if (protocalValue == 0) {
            $("input[name$='hareStatus'][value=" + originalStatus + "]").prop("checked", true);
            $("div[id='dv_disclaimer']").hide();
        } else if (protocalValue == 1 && isalert == 1) {
            $ajax('task?m=doSetDisclaimer', {}, 'post', 'json', function (rps) {
                if (rps.type == 'success') {
                    $("div[id='dv_disclaimer']").hide();
                }
            })
        } else if (protocalValue == 1 && isalert == 0) {
            $("div[id='dv_disclaimer']").hide();
        }
        if (typeof isupd == 'undefined') {
            $("#fade").hide();
        }

        if (typeof isResPublish != 'undefined' && protocalValue == 1) {
            try {
                $.ajax(_ajaxResPublist);
            } catch (e) {
            }

        }

    }

    function initDisclaimerDiv() {
        $("#sp_noalert").show();
        $("#sp_noalert a").removeClass().addClass('ico69a');
        $("p.yhsqxy_an>a").removeClass().addClass('ico69b');

        $ajax('task?m=getDisclaimer', {}, 'post', 'json', function (rps) {
            if (rps.type == 'success' && typeof rps.objList != 'undefined' && rps.objList.length > 0) {
                return;
            } else {
                showModelUnClose('dv_disclaimer')
            }
        })
    }

    function showModelUnClose(showId, isdrop, height, func) {

        $("div[id='fade']").each(function (idx, itm) {
            if (idx > 0)
                $(this).remove();
        });

        var h = 0;
        var loadJqObj = $("#" + showId);
        if (typeof height != 'undefined')
            h = height;
        else
            h = parseInt(loadJqObj.css("height")) / 2;
        try {
            $("#fade").css({
                "width": $(document).width() + "px",
                "height": $(document).height() + "px",
                "z-index": 1000
            }).show();

            var w = $(document).width() / 2 - parseInt(loadJqObj.css("width")) / 2;
            var h = $(window).height() / 2 - h + $(document).scrollTop();
//        alert($(document).height()+"   "+$(window).height());
            $("#fade").css({"width": $(document).width() + "px", "height": $(document).height() + "px"}).fadeIn('fast');
            loadJqObj.css({"left": w + "px", "top": h + "px", "position": "absolute", "z-index": 10003}).fadeIn('fast');

            // $(".white_content").css("top",15);
        } catch (e) {
        }

        /*$("#fade").bind("click",function(){
         closeModel(showId);
         })*/

        $("#fade").unbind("click");

        if (typeof(isdrop) == "undefined")
            isdrop = false;
        if (isdrop == true) {
            // 允许拖拽事件
            $("#" + showId).bind("mousedown", function (e) {
                if (!wcontentflag) {
                    wcontentflag = true;
                    wcontentX = e.pageX;
                    wcontentY = e.pageY;
                    offsetWidth = e.pageX - parseFloat($(this).css("left"));
                    offsetHeight = e.pageY - parseFloat($(this).css("top"));

                    $(this).css("cursor", "pointer");
                }
            });
            $("body").bind("mousemove", function (e) {
                if (wcontentflag) {
                    var nowPageX = e.pageX;
                    var nowPageY = e.pageY;

                    var nowObjX = parseFloat($("#" + showId).css("left"));
                    var nowObjY = parseFloat($("#" + showId).css("top"));

                    if (typeof(nowObjX) == 'undefined' || nowObjX == "" || nowObjX == null || nowObjX == NaN) {
                        alert('异常错误!');
                    }
                    if (typeof(nowObjY) == 'undefined' || nowObjY == "" || nowObjY == null || nowObjY == NaN) {
                        alert('异常错误!');
                    }

                    nowObjX = parseFloat(nowObjX) + (nowPageX - nowObjX);
                    nowObjY = parseFloat(nowObjY) + (nowPageY - nowObjY);

                    nowObjX -= offsetWidth;
                    nowObjY -= offsetHeight;

                    $("#" + showId).css({left: nowObjX, top: nowObjY});
                    $("#" + showId).css({left: nowObjX, top: nowObjY});
                }
            });

            $("body").bind("mouseup", function (e) {
                if (wcontentflag) {
                    wcontentflag = false;
                    isaddoffset = false;
                    $("#" + showId).css("cursor", "default");
                }
            });
        }
        showAndHidden(showId, 'show');
        showAndHidden('fade', 'show');

        if (typeof func != "undefined")
            func();
    }

    /*判断密码是否需要修改*/
    $(document).ready(function(){
       setTimeout(verifyPassword,1000);
        function verifyPassword() {
          var modelId = $("#header ul ").find("li.crumb").attr("data-bind");
          if(modelId !=null && modelId > 0){
              $.ajax({
                  url: "user?m=toVerifyPassword",
                  type: 'get',
                  cache: false,
                  async: false,
                  error: function () {
                      //alert('系统未响应，请稍候重试!');
                  }, success: function (rps) {
                      if(rps.success == true){
                          //密码没有通过验证
                          if(rps.data.flag ==false){

                              $("#changePwdModal").show();
                              $("#userName").attr("value",rps.data.userName);
                          }
                      }
                  }
              })
          }
      }
    });

    /*修改用户密码*/
    function updateUserPassword(password) {
        $("#pwHint").html("");
        $("#repwHint").html("");
        var password = $("#password").val();
        var passSize = password.length;
        if(passSize < 6 || passSize > 16){
            $("#pwHint").html("密码长度为6-16个字符");
            return;
        }
        var reg=new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
        if(!reg.test(password)){
            $("#pwHint").html("密码必须包含数字和字母!");
            return;
        }

        var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){6,16}$");
        var res = regex.test(password);
        if(!res){
            $("#pwHint").html("密码只能包含数字、字母、下划线!");
            return;
        }

        var repassword =  $("#repassword").val();
        if(password != repassword){
            $("#repwHint").html("两次输入的不一致，请重新输入");
            return;
        }
        var score = getPwdScore(password);
        if(score <= 45){
            $("#repwHint").html("密码强度太弱，您可尝试加入大写字母或下划线");
            return;
        }

        $.ajax({
            url: "user?m=doUpdatePassword&password="+password,
            type: 'put',
            cache: false,
            async: false,
            error: function () {
                //alert('系统未响应，请稍候重试!');
            }, success: function (rps) {
                $("#changePwdModal").hide();
            }
        })
    }


    function getPwdScore(pwd) {
        var score = 0;
        if( !pwd ){
            return score;
        } else {
            var size = pwd.length;
            if (size < 7) {
                score += 5;
            } else if (size >= 7 && size <= 9) {
                score += 10;
            } else {
                score += 20;
            }
            var numCount = 0, lowerCount = 0, upperCount = 0,specialCount = 0;
            for ( var i = 0; i < size; i++ ){
                var code = pwd.charCodeAt(i);
                var mode = charMode(code);
                switch(mode){
                    case 1:
                        numCount++;
                        break;
                    case 2:
                        upperCount++;
                        break;
                    case 3:
                        lowerCount++;
                        break;
                    case 4:
                        specialCount++;
                        break;
                    default:
                        break;
                }
            }
            if (upperCount > 0 && lowerCount == 0) {
                score += 10;
            } else if (upperCount == 0 && lowerCount > 0) {
                score += 10;
            } else if (upperCount > 0 && lowerCount > 0) {
                score += 25;
            }
            if (numCount > 2) {
                score += 20;
            } else if (numCount > 0 && numCount <= 2) {
                score += 10;
            }
            if (specialCount == 1) {
                score += 10;
            } else if (specialCount > 1) {
                score += 25;
            }
            if (upperCount > 0 && lowerCount > 0 && numCount > 0 && specialCount > 0) {
                score += 5;
            } else if ((upperCount > 0 || lowerCount > 0) && numCount > 0 && specialCount > 0) {
                score += 3;
            } else if ((upperCount > 0 || lowerCount > 0) && numCount > 0 && specialCount == 0) {
                score += 2;
            }

            return score;
        }
    }

    function charMode(schar){
        if (schar >= 48 && schar <= 57) {
            //数字
            return 1;
        }
        if (schar >= 65 && schar <= 90){
            //大写
            return 2;
        }
        if (schar >= 97 && schar <= 122){
            //小写
            return 3;
        } else {
            //特殊符号
            return 4;
        }
    }

    $("#password").keyup(function(){
        getPwdLevel($(this).val());
    });

    $("#password").change(function(){
        getPwdLevel($(this).val());
    });

    function getPwdLevel(password) {
        var score = getPwdScore(password);
        if(password){
            if( score > 45 && score <= 60 ) {
                $("#pwd-level .low").attr("class","low active");
                $("#pwd-level .mid").attr("class","mid active");
                $("#pwd-level .strong").attr("class","strong");
                $("#password").attr("data-level","2");
            } else if (score > 60) {
                $("#pwd-level .low").attr("class","low active");
                $("#pwd-level .mid").attr("class","mid active");
                $("#pwd-level .strong").attr("class","strong active");
                $("#password").attr("dta-level","3");
            } else {
                $("#pwd-level .low").attr("class","low active");
                $("#pwd-level .mid").attr("class","mid");
                $("#pwd-level .strong").attr("class","strong");
                $("#password").attr("data-level","1");
            }
        } else{
            $("#pwd-level li").removeClass("active");
        }
    }
</script>

<div class="revisePass" style="display: none;" id="ruleDec">
    <h3><a href="javascript:;" onclick="closeModel('ruleDec');" class="ico32" title="关闭"></a>规则说明</h3>
    <div class="passBox">
        <div>
            <div class="report-content-height">
                <p>创建任务数：当前时间段教师创建的任务总数；</p>
                <p> 创建课程数：当前时间段教师创建的课程总数;</p>
                <p>已结束任务数：当前时间段教师创建任务总数中已结束的任务数；</p>
                <p> 任务完成率：当前时间段创建任务总数中已结束任务数的完成率；</p>
            </div>
            <div class="passReversionBox">
                <a href="javascript:;" onclick="closeModel('ruleDec');" class="passKnow">我知道了</a>
            </div>
        </div>
    </div>
</div>

<a id="b_click" href="#dv_content" style="display: none"></a>
<div id="dv_content"  style="display: none;"></div>

<div class="content_layout content_bg">
    <div class="content_border tongji_bottom">
        <div class="home_content">
            
            <!--学生详情 -->
            <div id="stat_stu_main"></div>
            <!--学生详情 -->

            <!-- 统计main区域 begin-->
            <div id="stat_main"></div>
            <!-- 统计main区域 end-->
        </div>
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



<div class="revisePass" style="display: none;" id="showExplainTea">
    <h3>说明</h3>
    <div class="passBox">
        <div>创建课程数：当前时间段教师创建的课程总数</div>
        <div>创建任务数：当前时间段教师创建的任务总数</div>
        <div>已结束任务数：当前时间段教师创建任务总数中已结束的任务数</div>
        <div>任务完成率：当前时间段创建任务总数中已结束任务数的完成率</div>
        <div class="passReversionBox">
            <a href="javascript:;" onclick="closeModel('showExplainTea');" class="passKnow">知道了</a>
        </div>
    </div>
</div>
<div class="revisePass" style="display: none;" id="showExplainCls">
    <h3>说明</h3>
    <div class="passBox">
        <div>创建课程数：当前时间段班级的创建课程总数</div>
        <div>创建任务数：当前时间段班级的创建任务总数</div>
        <div>已结束任务数：当前时间段班级的创建任务总数中已结束的任务数</div>
        <div>任务完成率：当前时间段创建任务总数中已结束任务数的完成率</div>
        <div class="passReversionBox">
            <a href="javascript:;" onclick="closeModel('showExplainCls');" class="passKnow">知道了</a>
        </div>
    </div>
</div>
</body>
</html>