export default function (context, inject) {
	const gtag_report_conversion = function (url) {
	  var callback = function () {
		if (typeof url !== 'undefined') {
		  window.location = url;
		}
	  };
	  context.$gtag.event('conversion', {
		'send_to': 'AW-11170063115/mI9HCIWDpaIYEIvGps4p',
		'event_callback': callback,
	  });
	  return false;
	};

	inject('gtag_report_conversion', gtag_report_conversion);
  }
