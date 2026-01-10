

// Evita l'apertura della modale se i campi sono vuoti
document.getElementById("openModal").addEventListener("click", function () {
	const form = document.querySelector("form");

	if (!form.checkValidity()) {
		form.reportValidity();
		return;
	}

	new bootstrap.Modal(document.getElementById('feedbackModal')).show();
});
