document.addEventListener("DOMContentLoaded", function() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");

    if (btnVoltarTopo) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                btnVoltarTopo.classList.add("mostrar");
            } else {
                btnVoltarTopo.classList.remove("mostrar");
            }
        });

        btnVoltarTopo.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});