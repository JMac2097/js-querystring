
// Get the page elements
const inputVal = document.querySelector('#queryInput'),
    link = document.querySelector('.linked'),
    innerContent = document.querySelector('.inner-content'),
    body = document.querySelector('body');

// Check which page we are on -- only really useful for this demo
if (body.classList.contains('page1')) {

    console.log('Page 1');

    link.addEventListener('click', getSetHref);
    // Get the current href val, then apply the new param onto it
    function getSetHref(e) {
        let that = this;
        let _href = that.getAttribute("href");
        let value = inputVal.value;
        that.setAttribute("href", _href + "?value=" + value);
    };

} else {
    // If we are on page 2
    console.log('Page 2');
    // Get the href
    function getQueryString(field) {
        const href = window.location.href,
            reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i'),
            string = reg.exec(href);
        return string ? string[1] : null;
    };
    
    const queryValue = getQueryString('value');
    
    innerContent.innerHTML = queryValue;

}



