(function($){
	$.fn.convertTime = function(option){
		var defaults = {
			format 		: 'd.m.Y h:i:s',
			temptime 	: [],
			titleFormat : 'd.m.Y h:i:s',
			timeAgo 	: false
		},displaytime,
		setting = $.extend({}, defaults, option);
		Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };

		var weekdayConvert = function(day){
			var d = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			return d[day];
		}
		var monthConvert = function(month){
			var m = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			return m[month];
		}
		var shortWeekdayConvert = function(day){
			var d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			return d[day];
		}
		var shortMonthConvert = function(month){
			var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return m[month];
		}

		this.each(function(){
			var displaytime = '';
			var $this = $(this),
				html = '',
				usertime = $this.html(),
				format = $this.attr('format'),
				titleformat = $this.attr('title-format'),
				timeago = $this.attr('timeago'),
				clas = $this.attr('class'),
				style = $this.attr('style'),
				id = $this.attr('id');
			if (typeof format != 'undefined') {
				setting.format = format;
			}
			if (typeof titleformat != 'undefined') {
				setting.titleFormat = titleformat;
			}
			if (typeof timeago != 'undefined') {
				setting.timeAgo = $.parseJSON(timeago);
			}

			if (usertime){
				usertime = parseInt(usertime);
				_temptime = new Date(usertime*1000);
				_displaytime='', _titleformat='';
				displaytime = setting.format.split('');
				if(!setting.timeAgo){
					setting.temptime['weekDay'] 	= weekdayConvert(_temptime.getDay());
					setting.temptime['shortWeekDay']= shortWeekdayConvert(_temptime.getDay());
					setting.temptime['day'] 		= _temptime.getDate();
					setting.temptime['month'] 		= _temptime.getMonth();
					setting.temptime['monthName'] 	= monthConvert(_temptime.getMonth());
					setting.temptime['year'] 		= _temptime.getYear();
					setting.temptime['fullyear'] 	= _temptime.getFullYear();
					setting.temptime['hour'] 		= _temptime.getHours();
					setting.temptime['minutes'] 	= _temptime.getMinutes();
					setting.temptime['secound'] 	= _temptime.getSeconds();
					$.each(displaytime, function(i, val) {
						if(displaytime[i] == '/'){
							displaytime[i] = displaytime[i] + displaytime[i+1];
							displaytime.splice(i+1,1);
						}
						if(displaytime[i] == 'd'){
							_displaytime += (setting.temptime['day']<10 ? '0' : '') + setting.temptime['day'];
						}
						else if(displaytime[i] == 'D'){
							_displaytime += setting.temptime['shortWeekDay'];
						}
						else if(displaytime[i] == 'j'){
							_displaytime += setting.temptime['day'];
						}
						else if(displaytime[i] == 'l'){
							_displaytime += setting.temptime['weekDay'];
						}
						else if(displaytime[i] == 'N'){
							_displaytime += _temptime.getDay();
						}
						else if(displaytime[i] == 'S'){
							_displaytime += (setting.temptime['day'] % 10 == 1 && setting.temptime['day'] != 11 ? 'st' : (setting.temptime['day'] % 10 == 2 && setting.temptime['day'] != 12 ? 'nd' : (setting.temptime['day'] % 10 == 3 && setting.temptime['day'] != 13 ? 'rd' : 'th')));
						}
						else if(displaytime[i] == 'w'){
							_displaytime += _temptime.getDay();
						}
						else if(displaytime[i] == 'W'){
							var start = new Date(_temptime.getFullYear(), 0, 0);
							_displaytime += Math.floor((_temptime - start) / (1000 * 60 * 60 * 24));
						}
						else if(displaytime[i] == 'F'){
							_displaytime += monthConvert(setting.temptime['month']);
						}
						else if(displaytime[i] == 'm'){
							_displaytime += (setting.temptime['month']<10 ? '0' : '') + setting.temptime['month'];
						}
						else if(displaytime[i] == 'M'){
							_displaytime += shortMonthConvert(setting.temptime['month']);
						}
						else if(displaytime[i] == 'n'){
							_displaytime += setting.temptime['month'];
						}
						else if(displaytime[i] == 't'){
							var d = new Date(usertime);
							_displaytime += new Date(d.setMonth(setting.temptime['month']+1, 0)).getDate();
						}
						else if(displaytime[i] == 'Y'){
							_displaytime += setting.temptime['fullyear'];
						}
						else if(displaytime[i] == 'y'){
							_displaytime += setting.temptime['year'];
						}
						else if(displaytime[i] == 'a'){
							_displaytime += setting.temptime['hour'] < 12 ? 'am' : 'pm';;
						}
						else if(displaytime[i] == 'A'){
							_displaytime += setting.temptime['hour'] < 12 ? 'AM' : 'PM';;
						}
						else if(displaytime[i] == 'g'){
							_displaytime += setting.temptime['hour'] % 12 || 12;
						}
						else if(displaytime[i] == 'G'){
							_displaytime += setting.temptime['hour'];
						}
						else if(displaytime[i] == 'h'){
							_displaytime += (setting.temptime['hour']<10 ? '0' : '')+setting.temptime['hour'];
						}
						else if(displaytime[i] == 'H'){
							_displaytime +=  (setting.temptime['hour']% 12<10 ? '0' : '')+setting.temptime['hour'] % 12 || 12;
						}
						else if(displaytime[i] == 'i'){
							_displaytime += (setting.temptime['minutes']<10 ? '0' : '')+setting.temptime['minutes'];
						}
						else if(displaytime[i] == 's'){
							_displaytime += (setting.temptime['secound']<10 ? '0' : '')+setting.temptime['secound'];
						}
						else if(displaytime[i] == 'G'){
							_displaytime += setting.temptime['hour'];
						}
						else if(displaytime[i] == 'G'){
							_displaytime += setting.temptime['hour'];
						}
						else{
							if(displaytime[i]){
								_displaytime += displaytime[i];
							}
						}
					});
					_dt = _displaytime.split('');
					_displaytime='';
					$.each(_dt, function(i, val) {
						if(_dt[i] == '/'){
							_displaytime += _dt[i+1];
							_dt.splice(i+1,1);
						}
						else if(_dt[i]){
							_displaytime += _dt[i];
						}
					});
				}
				else{
				    $periods = ["second", "minute", "hour", "day", "week", "month", "year", "decade"];
				    $lengths = ["60","60","24","7","4.35","12","10"];
				    $now     = parseInt((new Date).getTime()/1000);
				    $unix_date = usertime;
				    console.log($now, new Date($now), $unix_date);
				    
				    if($now > $unix_date) {    // is it future date or past date
				        $difference     = $now - $unix_date;
				        $tense         = "ago";} 
					else { //if not future
				        $difference     = $unix_date - $now;
				        $tense         = "remaining";}
				    for($j = 0; $difference >= $lengths[$j] && $j < $lengths.length-1; $j++) {
				        $difference /= $lengths[$j];}
				    $difference = Math.round($difference);
				    if($difference != 1) {
				        $periods[$j]+= "s";}
				    _displaytime = $difference+' '+$periods[$j]+' '+$tense;
				}
			}

			$this.hide();
			html = '<div';
			if(typeof id != 'undefined'){
				html+= ' id="'+id+'"';
			}
			if(typeof clas != 'undefined'){
				html+= ' class="'+clas+'"';
			}
			if(typeof style != 'undefined'){
				html+= ' style="'+style+'"';
			}
			if(typeof titleformat != 'undefined'){
				html+= ' title="'+_titleformat+'"';
			}
			html+= '>';
			html+= _displaytime+'</div>';
			$this.after(html);
			$this.remove();
		});
	}
})(jQuery);
window.onload = function(e) {
	$('timestamp').convertTime();
};