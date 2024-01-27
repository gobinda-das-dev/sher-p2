const image = document.querySelector(".content-image");

gsap.set(".mouse-follower", {
    scale: 0
})

image.onmousemove = (dets) => {
    gsap.to(".mouse-follower", {
        top: dets.layerY,
        left: dets.layerX,
    })
}

image.onmouseenter = () => {
    gsap.to(".mouse-follower", {
        scale: 1
    })
}

image.onmouseleave = () => {
    gsap.to(".mouse-follower", {
        scale: 0
    })
}

image.onclick = () => {
    window.location.href = "https://unsplash.com/photos/a-woman-with-an-afro-is-looking-at-the-camera-_cvwXhGqG-o";
}