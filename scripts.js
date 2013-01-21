/* Tab Switching */
$(function() {
    $(".tabMenu").each(function(B,D) {
        var A=$(D).children("li");
        var C=$(D).nextAll(".tabContent");
        var eventtype="click";
        A.each(function(F,E)
        {
            C.eq(F)[$(E).hasClass("selected")?"show":"hide"]();
                $(E).find("a").click(function(G)
                {
                    A.removeClass("selected").eq(F).addClass("selected");
                    G.preventDefault();
                    C.hide();
                    C.eq(F).show();
                    return false
                })  
        })
    })
});

/*
*
* THIS IS THE BIT THAT DOES THE 'LAZY-LOADING' OF IFRAMES - THE CONTENT OF THE IFRAME IS ONLY FETCHED AND LOADED WHEN THE USER CLICKS ON THE RELEVANT TAB
*
*/


 $(document).ready(function() {
//find & render the active chart tab first
	fetchThisIframe = $('#tabbedCharts .selected').attr('id');
	selectActiveIframe (fetchThisIframe);
//now attach event handlers to lazy-load the rest on click	
 $("#tabbedCharts a.chartLink").one("click", function(event) {
	var fetchThisIframe = $(this).parent().attr('id')
	selectActiveIframe (fetchThisIframe)
  return false;
 });

function selectActiveIframe (renderThisIframe) {
	if (renderThisIframe == "demex_chart") {
  	   renderIframe("http://gizmos.inet.co.za/demo/basic_charting_snippets/MjAxMy0wMS0xOCAwNjo1OTozMyBVVEM0NjBkZW1vX2hhc2hkZW1vNjdiZDdkZTMw", 'iframe_id_1_could_be_anything', 'tab_demex_1', 300, 192);
  	} else if (renderThisIframe == "semdex_chart") {
  	   renderIframe("http://gizmos.inet.co.za/demo/basic_charting_snippets/MjAxMi0wOC0wMSAwODozNjo0MiBVVEMxOTFkZW1vX2hhc2gwNjk1Mjc4NzAw", 'iframe_id_2_could_be_anything', 'tab_semdex_1', 300, 192);
	}
}
 
function renderIframe(url, iframeID, containerID, width, height) {  
   $("#"+containerID+" span").first().html('<iframe id="'+iframeID+'" src="' + url + '" width="' + width + '" height="' + height + '" style="border:none">')
}
});

