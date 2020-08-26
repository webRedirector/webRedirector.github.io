var url, homeurl, protocol, fulurl;

function change() {
    url = document.getElementById('url').value;
    homeurl = document.getElementById('homeurl').value;
    protocol = document.getElementById('protocol').value;
    fulurl = 'relink.html?url=' + url + '&homeurl=' + homeurl + '&protocol=' + protocol;
}

function result() {
    document.getElementById('finalLink').href = fulurl;
    document.getElementById('finalLink').innerHTML = fulurl;
    document.getElementById('result').style.display = 'unset';
}