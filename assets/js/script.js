const clock = (timeEl, dateEl) => {
    console.log("timeEl", timeEl);

    const _IntlTime = new Intl.DateTimeFormat(navigator.language ?? "en-us", {hour: "numeric", minute: "numeric"})
    const _IntlDate = new Intl.DateTimeFormat(navigator.language ?? "en-us", {year: 'numeric', month: 'long', day: 'numeric'})

    const _setTime = () => {
        timeEl.textContent = _IntlTime.format(new Date());
    }

    dateEl.textContent = _IntlDate.format(new Date());

    _setTime()
    setTimeout(() => {
        _setTime();
        setInterval(_setTime, 60000)
    }, (60 - new Date().getSeconds()) * 1000);
};

clock(document.getElementById("time"), document.getElementById("date"));
