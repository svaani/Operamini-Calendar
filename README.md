Operamini-Calendar
==================

If I use a normal js calendar, for every date change the browser hits server. This is a simple calendar which can be used for operamini

This is a no-jquery, lightweight and simple js code.

How to use
=================

1. Copy the contents of t_operamini_cal.html in your html
2. Have some container like this,
``` html
<div id="cal_here"></div>
```
3. Create the calendar using,
``` js
	var op_cal = new ComboCal("2014","2015","2016");//you can add as many years you want, preferably lesser for usability
	op_cal.render("cal_here");
```

How it looks
=================
![Snapshot](https://github.com/bltvan/Operamini-Calendar/blob/master/snapshot.png)

Run the file run_here.html after referencing the js to see the output.
