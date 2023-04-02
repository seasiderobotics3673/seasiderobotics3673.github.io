var imgItem = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var imgPath = "source/22-23-Slideshow/";
var imgExtension = ".jpg";



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

async function replaceImage() {

    var index;
    for (; ;) {
        for (index = 0, len = imgItem.length; index < len; ++index) {
            document.getElementById("slideshowjs").src = imgPath + imgItem[index] + imgExtension;
            await sleep(3500);
        }
    }
};
