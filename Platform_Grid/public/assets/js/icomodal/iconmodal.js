//$(function(){"use strict";$.fn.RunIconM=function(e){function f(b){$(".icoM, .icoFA").removeClass("icoMRotate"),$(".sub-icomenu, .sub-famenu").hide(),$(".labraryDrop").slideUp(100),$(".library-floor").removeClass("rotate90"),$("#iconsFloor-innav .mCSB_container").css({top:0}),$(".library-floor .dropTextFonts").html(b.html())}function a(){this.runIcom()}let i=$.extend(!0,{},{data:{urlJson:"/assets/js/icomodal/icomodal.json"},icoFloorL:"#iconsFloor-innav .mCSB_container",main:{fawesome4:"fontawesomeFl",fawesome5:"fontawesomeFl5",fawesomePro:"fontawesomePro",fbootstrap:"bootstrapFontFl",ffoundation:"foundationFontFl",ficomFree:"icomoonFontFl",ficomPack:"icomoonpackFl"},clStcl:"closesettings",tlTipcl:"coseTooltip",mIcoDCl:"pro-imagesettings"},e);$.extend(a.prototype,{runIcom:function(){$(".labraryDrop").hide(),$.ajax({type:"GET",url:i.data.urlJson,success:function(b){d.icoModalData(b)}}),$.fn.icoModalData=function(n){let a="";for(let b in n.libraryData)a+="<li><span class=\""+n.libraryData[b].mainClass+"\">"+n.libraryData[b].data+"</span></li>";$(a).appendTo(".mainIcoMenu");let c="";for(let a in n.fontaweData)c+="<li><span class=\""+n.fontaweData[a].mainClass+"\">"+n.fontaweData[a].data+"</span></li>";$(c).appendTo(".sub-famenu");let o="";for(let a in n.icoMoonData)o+="<li><span class=\""+n.icoMoonData[a].mainClass+"\">"+n.icoMoonData[a].data+"</span></li>";$(o).appendTo(".sub-icomenu");let q="<div class=\"fontawesomeFl cDM\">";for(let a in n.fontawesome)q+="<span data-id=\"fa "+n.fontawesome[a].dataid+"\" class=\"ico-stage\"><i class=\"fa "+n.fontawesome[a].dataid+"\" aria-hidden=\"true\"><em>"+n.fontawesome[a].icoName+"</em></i></span>";q+="</div>",$(q).appendTo(i.icoFloorL);let r="<div class=\"fontawesomeFl5 cDM\">";for(let a in n.fontawesome5)r+="<span data-id=\""+n.fontawesome5[a].dataid+"\" class=\"ico-stage\"><i class=\""+n.fontawesome5[a].dataid+"\" aria-hidden=\"true\"><em>"+n.fontawesome5[a].icoName+"</em></i></span>";r+="</div>",$(r).appendTo(i.icoFloorL);let s="<div class=\"fontawesomePro cDM\">";for(let a in n.fontawesomePro)s+="<span data-id=\""+n.fontawesomePro[a].dataid+"\" class=\"ico-stage\"><i class=\""+n.fontawesomePro[a].dataid+"\" aria-hidden=\"true\"><em>"+n.fontawesomePro[a].icoName+"</em></i></span>";s+="</div>",$(s).appendTo(i.icoFloorL);let t="<div class=\"bootstrapFontFl cDM\">";for(let a in n.bootstrapFont)t+="<span data-id=\"glyphicon "+n.bootstrapFont[a].dataid+"\" class=\"ico-stage\"><i class=\"glyphicon "+n.bootstrapFont[a].dataid+"\"><em>"+n.bootstrapFont[a].icoName+"</em></i></span>";t+="</div>",$(t).appendTo(i.icoFloorL);let u="<div class=\"foundationFontFl cDM\">";for(let a in n.foundationFont)u+="<span data-id=\"fd "+n.foundationFont[a].dataid+"\" class=\"ico-stage\"><i class=\"fd "+n.foundationFont[a].dataid+"\"><em>"+n.foundationFont[a].icoName+"</em></i></span>";u+="</div>",$(u).appendTo(i.icoFloorL);let v="<div class=\"icomoonFontFl cDM\">";for(let a in n.icomoonFreeFont)v+="<span data-id=\"lnr "+n.icomoonFreeFont[a].dataid+"\" class=\"ico-stage\"><i class=\"lnr "+n.icomoonFreeFont[a].dataid+"\"><em>"+n.icomoonFreeFont[a].icoName+"</em></i></span>";v+="</div>",$(v).appendTo(i.icoFloorL);let w="<div class=\"icomoonpackFl cDM\">";for(let a in n.icomoonpack)w+="<span data-id=\"icon "+n.icomoonpack[a].dataid+"\" class=\"ico-stage\"><i class=\"icon "+n.icomoonpack[a].dataid+"\"><em>"+n.icomoonpack[a].icoName+"</em></i></span>";w+="</div>",$(w).appendTo(i.icoFloorL)},$.fn.OpenIconM=function(){return this.on(ck,".library-floor",function(b){b.stopPropagation(),$(".labraryDrop").slideToggle(100),$(this).toggleClass("rotate90")})},d.OpenIconM(),$.fn.icoMSlide=function(){return this.on(ck,".icoM",function(){$(this).toggleClass("icoMRotate"),$(".sub-icomenu").slideToggle(200)})},d.icoMSlide(),$.fn.icoFASlide=function(){return this.on(ck,".icoFA",function(){$(this).toggleClass("icoMRotate"),$(".sub-famenu").slideToggle(200)})},d.icoFASlide(),$.fn.GlobCk=function(){return this.on(ck,"*",function(){let c=$(this)[0].className;if(-1!=c.indexOf("saveChangesMenu")){var a=$(".selectedid").data("id");if(null!=a){var b=$("#menuGrid").data().kendoGrid,e=b.select(),f=b.dataItem(e);f.set("ImagePath",a),setTimeout(function(){$("#menuGrid").data("kendoGrid").dataSource.sync()})}$(this).addClass("saveNotallowed"),$("."+i.mIcoDCl).fadeOut(100)}else-1==c.indexOf("ico-stage")?-1!=c.indexOf(i.clStcl)&&$("."+i.mIcoDCl).fadeOut(100):($(".ico-stage").removeClass("focusColor"),$(this).addClass("focusColor"),$(".iconActive-floor .ico-stage").remove(),$(this).clone().appendTo(".iconActive-floor").removeClass("focusColor").addClass("selectedId"),$(".saveChangesMenu").removeClass("saveNotallowed"))})},d.GlobCk(),d.on(ck,".drop",function(){let b=$(this)[0].className;f($(this)),-1!=b.indexOf("opt-awesome")&&($("."+i.main.fawesome5).add("."+i.main.fbootstrap).add("."+i.main.ffoundation).add("."+i.main.ficomFree).add("."+i.main.ficomPack).add("."+i.main.fawesomePro).hide(),$("."+i.main.fawesome4).show()),-1!=b.indexOf("opt-awesome5")&&($("."+i.main.fawesome4).add("."+i.main.fbootstrap).add("."+i.main.ffoundation).add("."+i.main.ficomFree).add("."+i.main.ficomPack).add("."+i.main.fawesomePro).hide(),$("."+i.main.fawesome5).show()),-1!=b.indexOf("opt-awesomePro")&&($("."+i.main.fawesome4).add("."+i.main.fbootstrap).add("."+i.main.ffoundation).add("."+i.main.ficomFree).add("."+i.main.ficomPack).hide().add("."+i.main.fawesome5),$("."+i.main.fawesomePro).show()),-1!=b.indexOf("opt-other")&&($("."+i.main.fawesome4).add("."+i.main.fawesome5).add("."+i.main.ffoundation).add("."+i.main.ficomFree).add("."+i.main.ficomPack).add("."+i.main.fawesomePro).hide(),$("."+i.main.fbootstrap).show()),-1!=b.indexOf("opt-found")&&($("."+i.main.fawesome4).add("."+i.main.fawesome5).add("."+i.main.fbootstrap).add("."+i.main.ficomFree).add("."+i.main.ficomPack).add("."+i.main.fawesomePro).hide(),$("."+i.main.ffoundation).show()),-1!=b.indexOf("opt-icomoom")&&($("."+i.main.fawesome4).add("."+i.main.fawesome5).add("."+i.main.fbootstrap).add("."+i.main.ffoundation).add("."+i.main.ficomPack).add("."+i.main.fawesomePro).hide(),$("."+i.main.ficomFree).show()),-1!=b.indexOf("opt-icomoonessential")&&($("."+i.main.fawesome4).add("."+i.main.fawesome5).add("."+i.main.fbootstrap).add("."+i.main.ffoundation).add("."+i.main.ficomFree).add("."+i.main.fawesomePro).hide(),$("."+i.main.ficomPack).show())}),$.fn.closeOver=function(){return this.on("mouseover","."+i.clStcl,function(){$("."+i.tlTipcl).show()})},d.closeOver(),$.fn.closeLeave=function(){return this.on("mouseleave","."+i.clStcl,function(){$("."+i.tlTipcl).hide()})},d.closeLeave(),$.fn.searchitem=function(c){let a=$(c).val();return this.each(function(){-1<$(this).text().search(new RegExp(a,"i"))?$(this).show():$(this).hide()})},$("#iconsFloor-innav .ico-stage").searchitem(),$(".auto-search").on("keyup",function(){$("#iconsFloor-innav .ico-stage").searchitem(this)}),$("#iconsFloor-innav").mCustomScrollbar({theme:"minimal",scrollInertia:70})}});new a},d.RunIconM()});

$(function() {
    "use strict";
    $.fn.RunIconM = function(e) {
		
        function f(b) {
            $(".icoM, .icoFA").removeClass("icoMRotate"), 
			$(".sub-icomenu, .sub-famenu").hide(), 
			$(".labraryDrop").slideUp(100), 
			$(".library-floor").removeClass("rotate90"), 
			$("#iconsFloor-innav .mCSB_container").css({
                top: 0
            }), 
			$(".library-floor .dropTextFonts").html(b.html())
        }

        function a() {
            this.runIcom()
        }
        let i = $.extend(!0, {}, {
			
            //icoFloorL: "#iconsFloor-innav .mCSB_container",
            main: {
                fawesomePro: "fontawesomePro"
            },
            clStcl: "closesettings",
            tlTipcl: "coseTooltip",
            mIcoDCl: "pro-imagesettings"
        }, e);
		
        $.extend(a.prototype, {
            runIcom: function() {
				
				$.when($.ajax({ 
					type: "GET",
					async: true,
					cache: true,
					url: "assets/js/icomodal/icomodal.json",
					dataType: 'json'		
				}))
				.then(
					// success callback
					function(b) { 
				
						let s = "<div class=\"fontawesomePro cDM\">";
						for (let a in b.fontawesomePro) 
							s += "<span data-id=\"" + b.fontawesomePro[a].dataid + "\" class=\"ico-stage\"><i class=\"" + b.fontawesomePro[a].dataid + "\" aria-hidden=\"true\"><em>" + b.fontawesomePro[a].dataid + "</em></i></span>";
						s += "</div>", 
						$(s).appendTo('#iconsFloor-innav .mCSB_container');	
					}
				)
				
				$.fn.GlobCk = function() {
                    return this.on('click', "*", function() {
                        let c = $(this)[0].className;
                        if (-1 != c.indexOf("saveChangesMenu")) {
                            var a = $(".selectedid").data("id");
                            if (null != a) {
                                var b = $("#menuGrid").data().kendoGrid,
                                    e = b.select(),
                                    f = b.dataItem(e);
                                f.set("ImagePath", a),
								
								setTimeout(function() {
                                    $("#menuGrid").data("kendoGrid").dataSource.sync()
								})
                            }
                            $(this).addClass("saveNotallowed"), 
							$("." + i.mIcoDCl).fadeOut(100)
                        } else -1 == c.indexOf("ico-stage") ? -1 != c.indexOf(i.clStcl) && $("." + i.mIcoDCl).fadeOut(100) : ($(".ico-stage").removeClass("focusColor"), 
						$(this).addClass("focusColor"), 
						$(".iconActive-floor .ico-stage").remove(), 
						$(this).clone().appendTo(".iconActive-floor").removeClass("focusColor").addClass("selectedId"), 
						$(".saveChangesMenu").removeClass("saveNotallowed"))
                    })
                }, 
				//$(document).GlobCk(),
				
				
				$.fn.closeOver = function() {
                    return this.on("mouseover", "." + i.clStcl, function() {
                        $("." + i.tlTipcl).show()
                    })
                }, 
				$(document).closeOver(), 
				
				$.fn.closeLeave = function() {
                    return this.on("mouseleave", "." + i.clStcl, function() {
                        $("." + i.tlTipcl).hide()
                    })
                }, 
				$(document).closeLeave(), 
				
				$.fn.searchitem = function(c) {
                    let a = $(c).val();
                    return this.each(function() {
                        -1 < $(this).text().search(new RegExp(a, "i")) ? $(this).show() : $(this).hide()
                    })
                }, 
				
				//$("#iconsFloor-innav .ico-stage").searchitem(), 
				
				$("#asearch").on("keyup", function() {
                    $("#iconsFloor-innav .ico-stage").searchitem(this)
                }), 
				
				$("#iconsFloor-innav").mCustomScrollbar({
                    theme: "minimal",
                    scrollInertia: 70
                })
            }
        });
        new a
    }, 
    $(document).RunIconM()
});


$(function() {
	
	$(document).on('click', '.ico-stage', function(){
		$('.ico-stage').removeClass('focusColor');
		$(this).addClass('focusColor');
		$('.iconActive-floor .ico-stage').remove();
		$(this).clone().appendTo('.iconActive-floor').removeClass('focusColor').addClass('selectedid');
		$('#saveFont').removeClass('saveNotallowed');
	});
	
});