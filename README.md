edge-lazy-tabs
==============

The charts are being displayed in a set of tabs, with each tab containing an iframe. Without the lazy-loading solution, the chart in first tab renders correctly but the charts in the other tabs don't render correctly as they are hidden when they attempt to render.
Many browsers have problems determining the size of hidden elements, resulting in dynamic components not rendering correctly in hidden tabs.
The following link from the jQuery-UI documentation explains why this phenomena occurs when you try to embed sliders, google maps or other dynamic components inside hidden tabs

http://docs.jquery.com/UI/API/1.8/Tabs#...my_slider.2C_Google_Map.2C_sIFR_etc._not_work_when_placed_in_a_hidden_.28inactive.29_tab.3F

In addition, these link from the Highcharts forum explain why this happens and how it can be fixed:
http://highslide.com/forum/viewtopic.php?f=12&t=20670
http://highslide.com/forum/viewtopic.php?f=10&t=10712

The focus here is on JQuery, but the issue is with the interaction between tabbed/hidden content & dynamic content in general and the proposed solution & example should be universal, regardless of what tabbing-method you use.
The actual lazy-loading function can be found and is clearly marked in scripts.js (along with basic tab implementation), with style.css just added to neaten up the tabs a bit.


