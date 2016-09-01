// JavaScript Document
$(document).ready(function() {
var tld_ = new Array()
tld_[0] = "com";
tld_[1] = "org";
tld_[2] = "net";
tld_[3] = "ws";
tld_[4] = "info";
tld_[10] = "co.uk";
tld_[11] = "org.uk";
tld_[12] = "gov.uk";
tld_[13] = "ac.uk";
var topDom_ = 13;
var m_ = "mailto:";
var a_ = "@";
var d_ = ".";


function mail2(name, dom, tl, params, display)
{
	document.write('<a href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
}
function e(name, dom, tl)
{
	var s = name+a_;
	if (tl!=-2)
	{
		s+= dom;
		if (tl>=0)
			s+= d_+tld_[tl];
	}
	else
		s+= swapper(dom);
	return s;
}


 $(document).ready(function() {

      // Initialize the plugin
      $('#modal').popup();

    });

});