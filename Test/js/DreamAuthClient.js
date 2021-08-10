// 페이지 이동
function moveToOtherPage(title, path) {
	var link = document.createElement("a"); 
    link.href = path;
    var toURL = link.protocol + "//" + link.host + link.pathname;

	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
		// iOS
		try {
			webkit.messageHandlers.moveToOtherPage.postMessage({title: title, url: toURL});
		} catch(err) {
			alert(err);
		}
	}
	else if (userAgent.indexOf('android') > -1) {
		// Android
		try {
			DreamAuth_Android.moveToOtherPage(title, toURL);
		} catch(err) {
			alert(err);
		}
	}
	else {
		// Others
		alert('Not Support : moveToOtherPage');
	}
}

// 단말의 브라우저로 페이지 띄우기
function openPageWithDeviceBrowser(path) {
    var link = document.createElement("a");
    link.href = path;
    var toURL = link.protocol + "//" + link.host + link.pathname;

    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
        // iOS
        try {
            webkit.messageHandlers.openPageWithDeviceBrowser.postMessage(toURL);
        } catch(err) {
            alert(err);
        }
    }
    else if (userAgent.indexOf('android') > -1) {
        // Android
        try {
            DreamAuth_Android.openPageWithDeviceBrowser(toURL);
        } catch(err) {
            alert(err);
        }
    }
    else {
        // Others
        alert('Not Support : openPageWithDeviceBrowser');
    }
}

// 현재웹뷰 닫기 (ex.약관화면의 X 버튼)
function closeCurrentPage() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
		// iOS
		try {
			webkit.messageHandlers.closeCurrentPage.postMessage("");
		} catch(err) {
			alert(err);
		}
	}
	else if (userAgent.indexOf('android') > -1) {
		// Android
		try {
			DreamAuth_Android.closeCurrentPage();
		} catch(err) {
			alert(err);
		}
	}
	else {
		// Others
		alert('Not Support : closeCurrentPage');
	}
}

// 약관화면에서 체크 후 앱으로 전달해주기
function moveToNext(json) {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
        // iOS
        try {
            webkit.messageHandlers.moveToNext.postMessage(json);
        } catch(err) {
            alert(err);
        }
    }
    else if (userAgent.indexOf('android') > -1) {
        // Android
        try {
            DreamAuth_Android.moveToNext(json);
        } catch(err) {
            alert(err);
        }
    }
    else {
        // Others
        alert('Not Support : moveToNext ' + json);
    }
}

// 튜토리얼에서 발급하기로 이동
function moveToIssue() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
        // iOS
        try {
            webkit.messageHandlers.moveToIssue.postMessage("");
        } catch(err) {
            alert(err);
        }
    }
    else if (userAgent.indexOf('android') > -1) {
        // Android
        try {
            DreamAuth_Android.moveToIssue();
        } catch(err) {
            alert(err);
        }
    }
    else {
        // Others
        alert('Not Support : moveToIssue');
    }
}

// 클립보드에 복사
function copyToPasteBoard(message) {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
		// iOS
		try {
			webkit.messageHandlers.copyToPasteBoard.postMessage(message);
		} catch(err) {
			alert(err);
		}
	}
	else if (userAgent.indexOf('android') > -1) {
		// Android
		try {
			DreamAuth_Android.copyToPasteBoard(message);
		} catch(err) {
			alert(err);
		}
	}
	else {
		// Others
		alert('Not Support : copyToPasteBoard');
	}
}

// 토스트 띄우기
function showToast(message) {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
		// iOS
		try {
			webkit.messageHandlers.showToast.postMessage(message);
		} catch(err) {
			alert(err);
		}
	}
	else if (userAgent.indexOf('android') > -1) {
		// Android
		try {
			DreamAuth_Android.showToast(message);
		} catch(err) {
			alert(err);
		}
	}
	else {
		// Others
		alert('Not Support : showToast');
	}
}

// 클립보드에 복사하고 토스트 띄우기
function copyToPasteBoardNShowToast(copyMessage, toastMessage) {
	copyToPasteBoard(copyMessage);
	showToast(toastMessage);
}
		
