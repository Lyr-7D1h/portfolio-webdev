// Initialize Particles.js
particlesJS.load('particles-js', './particles.json', function() {
    console.log('particles.js loaded..');
});


const typeEffect = (el, lineEnabled) => {
    const txt = el.html();
    let line = "|";
    if (lineEnabled === false) {
        line = "";
    }
    el.empty();
    return new Promise((res) => {
        for (let i = 0; i < txt.length; i++) {
            setTimeout(() => {
                if (el.html()[el.html().length - 1] === line) {
                    el.html(el.html().substr(0, el.html().length - 1));
                }
                el.append(txt.charAt(i) + line)
                if (i === txt.length - 1) {
                    res();
                    if (!(lineEnabled === false)) {
                        setInterval(() => {
                            if (el.html()[el.html().length - 1] === line) {
                                el.html(el.html().substr(0, el.html().length - 1));
                            } else {
                                el.append(line);
                            }
                        }, 500)
                    }
                }
            }, i * 150);
        }
    })
};

const checkFadeIn = () => {
    $(".fade-in").each((i, el) => {
        let bottom_of_object = $(el).offset().top + 100;// 100 to delay fadeIn effect on scroll   if fully on page: + $(el).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(el).css("opacity", "1");
        }
    })
}


/*
 * INIT
 */
$(document).ready(() => {
    $("#title_sub").hide();
    typeEffect($("#title"), false).then(() => {
        $("#title_sub").show();
        typeEffect($("#title_sub"), false);
    });

    checkFadeIn();

    $(window).scroll(() => {
        checkFadeIn();
     })

    console.log(`bootstrap ${$.fn.tooltip.Constructor.VERSION} loaded..`);
});


