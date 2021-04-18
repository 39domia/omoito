/**
 * Created by Domia Shon on 8/26/2017.
 */
function chapter1() {
	var i = 0;
	for (i; i < 43; i++) {
		if (i < 10) {
			$('.chapter-1').append('<img src="chapter-1/00' + i + '.png"/>');
		} else {
			$('.chapter-1').append('<img src="chapter-1/0' + i + '.png"/>');
		}
	}
	for (i = 55; i < 60; i++) {
		$('.chapter-1').append('<img src="chapter-1/0' + i + '.png"/>');
	}
	$('.chapter-1').append('<img src="chapter-1/999.png"/>');
}

function chapter2() {
	$('.chapter-2').append('<img src="chapter-2/000.png"/>');
	var i = 1;
	for (i; i < 39; i++) {
		if (i < 10) {
			$('.chapter-2').append('<img src="chapter-2/ICg_Zwei_00' + i + '.png"/>');
		} else {
			$('.chapter-2').append('<img src="chapter-2/ICg_Zwei_0' + i + '.png"/>');
		}
	}
	for (i = 53; i < 56; i++) {
		$('.chapter-2').append('<img src="chapter-2/ICg_Zwei_0' + i + '.png"/>');
	}
	$('.chapter-2').append('<img src="chapter-2/ICg_Zwei_999.png"/>');
}

function chapter3() {
	var i = 0;
	for (i; i < 55; i++) {
		if (i < 10) {
			$('.chapter-3').append('<img src="chapter-3/00' + i + '.png"/>');
		} else {
			$('.chapter-3').append('<img src="chapter-3/0' + i + '.png"/>');
		}
	}
	for (i = 83; i < 87; i++) {
		$('.chapter-3').append('<img src="chapter-3/0' + i + '.png"/>');
	}
}

function chapter4() {
	var i = 0;
	for (i; i < 103; i++) {
		if (i === 2) {
			$('.chapter-4').append('');
		} else {
			if (i < 10) {
				$('.chapter-4').append('<img src="chapter-4/00' + i + '.png"/>');
			} else {
				if (i < 100) {
					$('.chapter-4').append('<img src="chapter-4/0' + i + '.png"/>');
				} else {
					$('.chapter-4').append('<img src="chapter-4/' + i + '.png"/>');
				}
			}
		}
	}
	for (i = 133; i < 137; i++) {
		if (i < 100) {
			$('.chapter-4').append('<img src="chapter-4/0' + i + '.png"/>');
		} else {
			$('.chapter-4').append('<img src="chapter-4/' + i + '.png"/>');
		}
	}
	$('.chapter-4').append('<img src="chapter-4/999.png"/>');
}
$(document).ready(function () {
	chapter1();
	chapter2();
	chapter3();
	chapter4();
});