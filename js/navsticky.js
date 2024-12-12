const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const body = document.body; // You can also target other containers if needed

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // Add padding to the top of the body (or any other element to prevent overlap)
    body.style.paddingTop = navbar.offsetHeight + "px"; // Dynamically set padding equal to navbar height
  } else {
    navbar.classList.remove("sticky");
    // Remove the padding when the navbar is not sticky
    body.style.paddingTop = 0;
  }
});
<script type="text/javascript">
$(document).ready(function(){$("#navigation1").navigation({hidden: true});});

$(".btn-show").click(function(){ 
		$("#navigation1").data("navigation").toggleOffcanvas();
});

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('menu-active');
}

</script>