(function () {
    "use strict";

    function pr(string) {
        console.log("[yt-ad-skip]: ", string);
    }

    function skipAds() {
        if (document.getElementsByClassName("ytp-ad-player-overlay")[0] != undefined) {
            pr("--Ad found--");

            for (var video of document.querySelectorAll("video")) {
                try {
                    (video.currentTime = Math.floor(video.duration) - 0), 5;
                    pr("Skipped forward to end of Ad");
                } catch (err) {
                    pr(err);
                }

                const skipButtons =
                    document.getElementsByClassName("ytp-ad-skip-button");

                if (skipButtons[0] != undefined) {
                    pr("Skip button found");

                    const buttons = [...skipButtons];
                    buttons.map((button) => {
                        button.click();
                        pr("Skip button clicked");
                    });
                }

            }
        }
    }

    setInterval(skipAds, 1000);
})();