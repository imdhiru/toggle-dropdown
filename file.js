   $(document).ready(function(){
        

        function fnSubNavigationToggle() {

            var animSpeed = 500;
            var subnav = $(".sub-nav-content");
            if (subnav){
                
                var button = $(".toggle-sub-nav-button");
                if (button) {
                    if (subnav.css('display') == 'none') {                        
                        if (button.hasClass('sub-nav-up')) {
                            button.removeClass('sub-nav-up');
                            button.removeClass('sub-nav-up-text');
                        }
                        subnav.slideDown(animSpeed);
                        button.addClass('sub-nav-down');
                        button.addClass('sub-nav-down-text');
                    }
                    else {
                        if (button.hasClass('sub-nav-down')) {
                            button.removeClass('sub-nav-down');
                            button.removeClass('sub-nav-down-text');
                        }                        
                        subnav.slideUp(animSpeed, function () {
                            button.addClass('sub-nav-up');
                        });
                        button.addClass('sub-nav-up-text');
                    }
                }

            }

            /* &#9650; '\25B2' UP ARROW */
            /* &#9660; '\25BC' DOWN ARROW */

        }

        $(".toggle-sub-nav-button").click(fnSubNavigationToggle);

    });
