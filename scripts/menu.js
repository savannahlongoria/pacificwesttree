function accessible_menus_ie() {
	/*
	based on http://www.htmldog.com/articles/suckerfish/dropdowns/
	see also http://www.htmldog.com/ptg/archives/000050.php#comment131
	- lines 13 and 18 are a workaround for IE not correctly interpreting multiple
	css classes
	*/
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=(this.className.length>0? " ": "") + "sfhover";
			this.parentNode.className+=(this.parentNode.className.length>0? " ": "") + "sfhover";
			this.className=this.className.replace(new RegExp("( ?|^)sub_menu\\b"), "sub_mnu_sfhvr");
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
			this.className=this.className.replace(new RegExp("( ?|^)sub_mnu_sfhvr\\b"), "sub_menu");
		}
	}
	var mcEls = document.getElementById("nav").getElementsByTagName("A");
	for (var i=0; i<mcEls.length; i++) {
		mcEls[i].onfocus=function() {
			this.className+=(this.className.length>0? " ": "") + "sffocus"; //a:focus
			this.parentNode.className+=(this.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < a:focus
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sub_menu\\b"), "sub_mnu_sffcsprnt"); //li < a:focus
			this.parentNode.parentNode.className+=(this.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //ul < li < a:focus
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") { //li < ul < li < a:focus
				this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < ul < li < a:focus
				this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sub_menu\\b"), "sub_mnu_sffcsprnt"); //li < ul < li < a:focus
				this.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //ul < li < ul < li < a:focus
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {  //li < ul < li < ul < li < a:focus
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < ul < li < ul < li < a:focus
					this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //#nav < li < ul < li < ul < li < a:focus
				}
			}
		}
		mcEls[i].onblur=function() {
			this.className=this.className.replace(new RegExp("( ?|^)sffocus\\b"), "");
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
			this.parentNode.parentNode.className=this.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sub_mnu_sffcsprnt\\b"), "sub_menu");
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
				this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				this.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sub_mnu_sffcsprnt\\b"), "sub_menu");
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
					this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				}
			}
		}
	}
}
function accessible_menus_non_ie() {
	var mcEls = document.getElementById("nav").getElementsByTagName("A");
	for (var i=0; i<mcEls.length; i++) {
		mcEls[i].onfocus=function() {
			this.className+=(this.className.length>0? " ": "") + "sffocus"; //a:focus
			this.parentNode.className+=(this.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < a:focus
			this.parentNode.parentNode.className+=(this.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //ul < li < a:focus
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") { //li < ul < li < a:focus
				this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < ul < li < a:focus
				this.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //ul < li < ul < li < a:focus
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {  //li < ul < li < ul < li < a:focus
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //li < ul < li < ul < li < a:focus
					this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sffocusparent"; //#nav < li < ul < li < ul < li < a:focus
				}
			}
		}
		mcEls[i].onblur=function() {
			this.className=this.className.replace(new RegExp("( ?|^)sffocus\\b"), "");
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
			this.parentNode.parentNode.className=this.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
				this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				this.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
					this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sffocusparent\\b"), "");
				}
			}
		}
	}
}

// only ie needs the sfHover script. all need the accessibility script...
// thanks http://www.brothercake.com/site/resources/scripts/onload/
if(window.addEventListener) window.addEventListener('load', accessible_menus_non_ie, false); // gecko, safari, konqueror and standard
else if(document.addEventListener) document.addEventListener('load', accessible_menus_non_ie, false); // opera 7
else if(window.attachEvent) window.attachEvent('onload', accessible_menus_ie); // win/ie
else { // mac/ie5
	if(typeof window.onload == 'function') {
		var existing = onload;
		window.onload = function() {
			existing();
			accessible_menus_ie();
		}
	} else {
		window.onload = accessible_menus_ie;
	}
}
