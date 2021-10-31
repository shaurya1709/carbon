window.alert = function(text) {
	document.getElementById('notext').innerHTML = text;
}
window.onmessage = function(e) {
    if (e.data == 'restart') {
	if(confirm('Are You Sure You Want To Restart Vibra? Press Ok To Restart Vibra, Cancel To Dismiss This Notification') === true)	window.location.reload();
    } else if(e.data.includes('alert ')) {
		alert(e.data.replace('alert ', ''))
	} else if(e.data == 'version') {
		e.source.postMessage('ver1.3.5', '*')
	} else if(e.data = 'appY') {
		console.log(getOffset().left)
	}
	else {
		e.source.postMessage('cmd does not exist', '*')
	}
};

alert('p')