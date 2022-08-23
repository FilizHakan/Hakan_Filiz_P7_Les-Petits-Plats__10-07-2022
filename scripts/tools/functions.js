export function getFromQueryString(key)
{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params[key]; 
}

export function normalise(str, withTrim = false)
{
    if (withTrim)
    {
        return str.toLowerCase().trim();
    }
    return str.toLowerCase();
}