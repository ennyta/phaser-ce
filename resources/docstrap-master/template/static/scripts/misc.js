var _scrollSpyListGroup = {

  activate: function activate (target) {
    this.activeTarget = target;
    this.clear();

    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).addClass('active');

    active.trigger('activate.bs.scrollspy');
  },

  clear: function clear () {
    $(this.selector).removeClass('active');
  },

};

jQuery(function ($) {
  $.toc({
    attrClass: 'list-group-item',
    destination: '#toc-insert',
    prefix: 'toc-',
    search: '#main',
    selector: 'h1, h2, h3, h4'
  });

  holmes({
    find: '#toc a',
    input: '#filter',
    placeholder: '<div class="alert alert-warning" role="alert">None match.</div>'
  })
    .start();

  $('.dropdown-toggle')
    .dropdown();

  $('table')
    .addClass('table');

  var $scrollElement = $('body').scrollspy({
    offset: $('.navbar').height(),
    target: '#toc',
  });
  var scrollspy = $scrollElement.data('bs.scrollspy');

  scrollspy.selector = scrollspy.options.target + ' .list-group-item';
  Object.assign(scrollspy, _scrollSpyListGroup);
  scrollspy.refresh();

  console.log('offsets', scrollspy.offsets);
  console.log('targets', scrollspy.targets);
  console.log('scrollspy', scrollspy);
});