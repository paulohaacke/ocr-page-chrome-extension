function recognizeImage(img) {
    var borderProperties = [img.style.borderWidth, img.style.borderColor];
    Tesseract.recognize(img.src, {
            lang: 'por'
        })
        .then(function(result) {
            img.style.borderColor = borderProperties[0];
            img.style.borderWidth = borderProperties[1];
            console.log(result.text);
        })
        .progress(function(result) {
            img.style.borderColor = 'red';
            img.style.borderWidth = 'thick';
            console.log('Progress [' + img.src + ']: ', result);
        });
}

var imgList = document.getElementsByTagName("img");
for (i = 0; i < imgList.length; i++) {
    recognizeImage(imgList[i]);
}