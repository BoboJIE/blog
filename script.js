var qrqq=document.getElementById('qrqq');
var qrWechat=document.getElementById('qrWechat');
var qrGithub=document.getElementById('qrGithub');

var iconqq=document.getElementById('iconqq');
var iconWechat=document.getElementById('iconWechat');
var iconGithub=document.getElementById('iconGithub');

function qqIn(){
	qrqq.style.display="block";
}

function qqOut(){
	qrqq.style.display="none";
}

function wechatIn(){
	qrWechat.style.display="block";
}

function wechatOut(){
	qrWechat.style.display="none";
}

function githubIn(){
	qrGithub.style.display="block";
}

function githubOut(){
	qrGithub.style.display="none";
}

// 内容切换
	var index=document.getElementById("index");

	function firstDay(){
		index.src="./content/firstDay.html"
	}
	
	function secondDay(){
		index.src="./content/secondDay.html"
	}
	
	function selecter(){
		index.src="./content/selecter.html"
	}

	function position(){
		index.src="./content/position.html"
	}