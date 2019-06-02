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
                    el.html(el.html().substr(0, el.html().length-1));
                }
                el.append(txt.charAt(i) + line)
                if (i === txt.length - 1){
                    res();
                    if (!(lineEnabled === false)) {
                        setInterval(() => {
                            if (el.html()[el.html().length - 1] === line) {
                                el.html(el.html().substr(0, el.html().length-1));
                            } else {
                                el.append(line);
                            }
                        }, 500)
                    }
                }
            }
            , i * 150);
        }
    })
};

/*
* INIT
*/
$(document).ready(() => {
    $("#title_sub").hide();
    $(".chevron").hide();
    $("main").hide();
    $("footer").hide();
    typeEffect($("#title"), false).then(() => {
        $("#title_sub").show();
        $(".chevron").show();
        typeEffect($("#title_sub"), false);
    });
});

let scrolled = false;
$(window).scroll(() => {
    console.log("SCROLLING")
    // const px = $(window).scrollTop();
    if (!scrolled) {
        scrolled = true;
        window.scrollTo(0, 0);
        $("body").css("overflow", "auto");
        $("main").show();
        $("footer").show();

        $("header").css("height", "0vh");
        $("#title").css("opacity", "0");
        $("#title_sub").css("opacity", "0");
        $(".particles-js-canvas-el").hide();
        $(".chevron").hide();
    }
})