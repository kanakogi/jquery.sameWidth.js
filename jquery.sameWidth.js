/**
 * HTML width same as the widest element for each col.
 * (This file was maden by jquery.tile.js modification.)
 *
 * Copyright (c) 2016 Masahiro Nakashima
 * @author: Masahiro Nakashima (https://github.com/kanakogi/jquery.sameWidth.js)
 * @version: 0.0.1
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * 
 * [jquery.tile.js]
 * Copyright (c) 2011 Hayato Takenaka
 * @author: Hayato Takenaka (https://github.com/urin/jquery.tile.js)
 * @version: 0.0.3
**/
;
(function($) {
    $.fn.sameWidth = function(cols) {
        var el, max, c, h, last = this.length - 1,
            style;
        if (!cols) {
            cols = this.length;
        }
        this.each(function() {
            style = this.style;
            if (style.removeProperty) {
                style.removeProperty("width");
            } else if (style.removeAttribute) {
                style.removeAttribute("width");
            }
        });
        return this.each(function(i) {
            c = i % cols;
            if (c == 0) {
                el = [];
            }
            el[c] = $(this);
            h = el[c].width();
            
            if (c == 0 || h > max) {
                max = h;
            }

            if (i == last || c == cols - 1) {
                $.each(el, function() { this.width(max); });
            }
        });
    };
})(jQuery);