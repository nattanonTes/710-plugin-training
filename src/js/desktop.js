jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);
    console.log('config->', config);

    // get records
    var records = event.records;
    // get target number fields
    var numberFields = kintone.app.getFieldElements(config.target);
    console.log('field->', numberFields);
    // check value of each records and change it's bg color
    switch (config.operator) {
      case 'greater':
        for (var i = 0; i < records.length; i++) {
          if (records[i].number.value > config.exceed) {
            numberFields[i].style.backgroundColor = config.color;
          }
        }
        break;
      case 'lesser':
        for (var i = 0; i < records.length; i++) {
          if (records[i].number.value < config.exceed) {
            numberFields[i].style.backgroundColor = config.color;
          }
        }
        break;
      case 'equal':
        for (var i = 0; i < records.length; i++) {
          if (records[i].number.value === config.exceed) {
            numberFields[i].style.backgroundColor = config.color;
          }
        }
        break;
      default:
        break;
    }

  });
})(jQuery, kintone.$PLUGIN_ID);
