function moreFunction(dotId, moreId, btnId) {
    var dots = document.getElementById(dotId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(btnId);

    // If read less is clicked, hide and change back to read more 
    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display= "inline";
    }
}