if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
	
(function($){
	$.fn.parallel = function(options) {
		if (this.length) {
			return this.each(function(){
				var myEditor = Object.create(ParallelEditor);
				myEditor.init(options, this);
				$.data(this, 'parallel', myEditor);
			});
		}
	};
})(jQuery);

var ParallelEditor = {
	init: function(options, elem) {
		this.options = $.extend({},this.options,options);
		this.elem = elem;
		this.$elem = $(elem);
		
		this.__build();
	},
	options: {
		
	},
	__build: function() {
		this.editor = $('<div>').addClass('parallel-editor-container');
		this.appendEditor();
		
		this.$elem.focus(function(me){
			me.showEditor();
		}(this)).blur(function(me){
			me.hideEditor();
		}(this));
		console.log(this);
	},
	showEditor: function() {
		this.editor.show();
	},
	hideEditor: function() {
		this.editor.hide();
	},
	appendEditor: function() {
		$('body').append(this.editor);
	}
}

//$('textarea.parallel-editor').livequery(function(){$(this).parallel()});
$(document).ready(function(){
	$('textarea.parallel-editor').parallel();
});