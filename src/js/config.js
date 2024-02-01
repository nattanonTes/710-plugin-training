jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  var $form = $('.js-submit-settings');
  var $cancelButton = $('.js-cancel-button');
  var color = document.getElementById('color');
  var exceed = document.getElementById('exceed');
  var operator = document.getElementById('selectComp');

  KintoneConfigHelper.getFields("NUMBER").then(function(res) {
    console.log(res);
    var targetField = document.getElementById("targetField");
    console.log(targetField);
    for (let i = 0; i < res.length; i++) {
      var option = document.createElement("option");
      option.value = res[i].code
      option.innerText = res[i].label
      if (i === 0) {
        option.selected = true
      }
      targetField.append(option);
    }
  }).catch(function(err) {
    console.log(err);
  });

  $form.on('submit', function(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({color: color.value, exceed: exceed.value, target: targetField.value, operator: operator.value }, function() {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
  $cancelButton.on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
