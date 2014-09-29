ComboCal = function(){
	this.years = Array.prototype.splice.call(arguments,0);
}

ComboCal.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

ComboCal.prototype.render = function(id){
	_31entries = (function(){
		var _op_template = $("#combo_cal_opt").innerHTML;
		var return_string = [];
		for (var i = 1; i <= 31; i++) {
			return_string.push(parseTemplate(_op_template,{entry:i}));
		};
		return return_string.join('');
	})();
	_monthyear = (function(years){
		var _op_template = $("#combo_cal_opt").innerHTML;
		var return_string = [];
		for (var i = 0; i < years.length; i++) {
			var month = 0;
			if(years[i]==new Date().getFullYear()){
				month = new Date().getMonth();
			}
			for (""; month < ComboCal.months.length; month++) {
				return_string.push(parseTemplate(_op_template,{entry:ComboCal.months[month]+" "+years[i]}));	
			}
		};
		return return_string.join('');
	})(this.years);
	$("#"+id).innerHTML = parseTemplate($("#combo_cal").innerHTML,{
		dates : _31entries,
		'month-year' : _monthyear
	});
}

/*-------- lib related content ----------*/
parseTemplate = function(template_string,obj){
	for(var entry in obj){
		template_string = template_string.replace("<="+entry+"=>",obj[entry]);
	}
	return template_string;
}

$ = function(query){
	return document.querySelector(query);
}