/*export const initTwitter = () => {
    const head = document.querySelector('head');

    const addTwitterScript = () => {
        const twitterScript = document.createElement('script');
        twitterScript.type = 'text/javascript';
        twitterScript.async = true;
        twitterScript.src = 'https://static.ads-twitter.com/uwt.js';
        head.appendChild(twitterScript);
    };

    const initializeTwq = (windowObj, documentObj, elementType) => {
        if (!windowObj.twq) {
            const twitterEventTracker = (windowObj.twq = (...args) => {
                twitterEventTracker.exe
                    ? twitterEventTracker.exe.apply(twitterEventTracker, args)
                    : twitterEventTracker.queue.push(args);
            });
            twitterEventTracker.version = '1.1';
            twitterEventTracker.queue = [];
            const twitterScriptElement = documentObj.createElement(elementType);
            twitterScriptElement.async = true;
            twitterScriptElement.src = 'https://static.ads-twitter.com/uwt.js';
            const a = documentObj.getElementsByTagName(elementType)[0];
            a.parentNode.insertBefore(twitterScriptElement, a);
        }
    };

    addTwitterScript();
    initializeTwq(window, document, 'script');

    // Замените <YOUR PIXEL ID> на Ваш фактический ID события
    window.twq('config', 'or70k');
};*/
export const sendTwitterConversion = (email) => {
    if (!window.twq) {
        return;
    }
    window.twq('event', 'tw-or70k-or73k', {
       // conversion_id: null,
        email_address: email,
        //phone_number: phone,
    });
};
