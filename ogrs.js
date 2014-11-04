var ce = document.getElementById("ogrsCanvas");
var c = ce.getContext("2d");
var f = document.getElementById("ogrsForm");
var ogrsLogo = new Image();
ogrsLogo.src = "http://www.rectar2.net/ogrs/graphics/x2/logo_black.png";

var ratingImg = {
    "Y": new Image(),
    "C": new Image(),
    "P": new Image(),
    "T": new Image(),
    "A": new Image()
}
ratingImg.Y.src = "graphics/x2/rating_icon_y.png";
ratingImg.C.src = "graphics/x2/rating_icon_c.png";
ratingImg.P.src = "graphics/x2/rating_icon_p.png";
ratingImg.T.src = "graphics/x2/rating_icon_t.png";
ratingImg.A.src = "graphics/x2/rating_icon_a.png";

var ratingBannerImg = {
    "Y": new Image(),
    "C": new Image(),
    "P": new Image(),
    "T": new Image(),
    "A": new Image()
}
ratingBannerImg.Y.src = "graphics/x2/rating_banner_y.png";
ratingBannerImg.C.src = "graphics/x2/rating_banner_c.png";
ratingBannerImg.P.src = "graphics/x2/rating_banner_p.png";
ratingBannerImg.T.src = "graphics/x2/rating_banner_t.png";
ratingBannerImg.A.src = "graphics/x2/rating_banner_a.png";

function generate() {
    reasons = [];
    var names = [];
    var options = f.getElementsByTagName("input");
    for (i = 0; i < options.length; i++) {
        var o = options[i];
        if (o.type != "button" && o.value != "None" && o.value == f[o.name].value) {
            if (o.type == "radio") {
                reasons.push(o.value);
            }
            if (o.type == "checkbox" && o.checked) {
                reasons.push(o.value);
            }
        }
    }
    reasons.sort();
    if ((0.25 + reasons.length) * 16 > ce.height) {
        ce.height = (0.25 + reasons.length) * 16;
    } else {
        ce.height = 96;
    }

    if (ogrsImgSettings.size.value == "Large") {
        ce.width = 320;
    } else {
        ce.width = 68;
    }

    c.fillStyle = "white";
    c.fillRect(0, 0, 512, 512);
    c.fillStyle = "black";
    c.font = "Bold 11pt Arial";
    for (r = 0; r < reasons.length; r++) {
        var y = ((r + 1) * 16);
        var x = 72;
        var t = reasons[r];
        c.fillText(t, x, y);
        console.log(":", t, x, y);
    }
    c.fillStyle = "black";
    c.fillRect(0, 0, 68, 512);              // Fill sidebar

    c.fillRect(0, 0, 512, 2);               // Top border
    c.fillRect(0, ce.height - 2, 512, 512); // Bottom border
    c.fillRect(ce.width - 2, 0, 512, 512);  // Right border

    c.drawImage(ogrsLogo, 2, 0);            // Draw logo

    c.drawImage(ratingImg[ogrsImgSettings.rating.value], 2, 16);
    c.drawImage(ratingBannerImg[ogrsImgSettings.rating.value], 2, 80);
}