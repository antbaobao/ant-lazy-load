const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        // 如果元素可见
        if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImageObserver.unobserve(lazyImage)
        }
    })
})

function lazyLoad (lazyImages) {
    lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
    })
}
