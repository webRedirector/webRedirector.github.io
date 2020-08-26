window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    document.getElementById('url').innerHTML = params.get('url');
    document.getElementById('homeurl').innerHTML = params.get('homeurl');
    document.getElementById('protocol').innerHTML = params.get('protocol');

    setTimeout(function(){
        window.document.location = params.get('url');
    }, 3000);
});