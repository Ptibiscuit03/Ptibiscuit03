// Assigner le fond d'écran
document.body.style.backgroundImage = `url(${document.getElementById("background").src})`

// Lorsque la sourris de l'utilisateur se déplace sur une carte
$(".cards").mousemove(e =>
{
	// Obtenir le rectangle qui compose l'élément
	const rect = e.target.getBoundingClientRect()

	const	x = e.clientX - rect.left,		// Position X relative de la sourris de l'utilisateur
			y = e.clientY - rect.top,		// Position Y relative de la sourris de l'utilisateur
			width = e.target.clientWidth,	// Largeur de l'élément
			height = e.target.clientHeight	// Hauteur de l'élément

	const 	rotX = -20 * ((y - height / 2) / height),	// Déterminer l'orientation X de l'élément
			rotY = 20 * ((x - width / 2) / width)		// Déterminer l'orientation Y de l'élément

	// Appliquer l'orientation à l'élément
	e.target.style.transform = `perspective(500px) scale(1.05) rotateX(${rotX}deg) rotateY(${rotY}deg)`
})

// Lorsque la sourris de l'utiliseateur quitte une carte
$(".cards").mouseout(e =>
{
	// Réinitialiser l'orientation
	e.target.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)"
})
