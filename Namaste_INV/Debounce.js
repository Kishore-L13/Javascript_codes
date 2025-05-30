function debounce(fn, delay) {
    // Your implementation
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args)
        },delay)
    }
}
