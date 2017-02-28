/*
 * onLoadAllImagesプラグイン
 */
;(function($){
    'use strict';
    
    $.fn.onLoadAllImages = function(callback) {
        if (!callback) {
            callback = function () {
                console.log('callback require');
            };
        }
        
        var $this = this;
        var len = $this.length;
        var cnt = 0;
            
        return this.each(function() {
            var $img = $('<img>');
            $img.on('load error', function() {
                cnt++;
                if (cnt === len) {
                    callback($this);
                }
            });
            $img.attr('src', $(this).attr('src'));
        });
    };
}(jQuery));
