alert(1);
module.exports=function() {
  alert(1);
  Handlebars.registerHelper('each_with_sort', function(array, key, opts) {
    var data;
    if (opts.data) {
      data = Handlebars.createFrame(opts.data);
    }
    array = array.sort(function(a, b) {
      a = a[order];
      b = b[order];
      if (a > b) {
        return 1;
      }
      if (a === b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
    });
  });
};
