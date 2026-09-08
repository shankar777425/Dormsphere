document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links .link-item");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(function(link){

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = this.getAttribute("data-target");

            if(!target) return;

            navLinks.forEach(function(item){
                item.classList.remove("active");
            });

            pages.forEach(function(page){
                page.classList.remove("active");
            });

            this.classList.add("active");

            const selectedPage = document.getElementById(target);

            if(selectedPage){
                selectedPage.classList.add("active");
            }

        });

    });

    const noticeBtn = document.getElementById("jump-to-notices");

    if(noticeBtn){
        noticeBtn.onclick = function(e){
            e.preventDefault();
            document.querySelector('[data-target="page-notices"]').click();
        };
    }

    const complaintBtn = document.getElementById("jump-to-complaints");

    if(complaintBtn){
        complaintBtn.onclick = function(e){
            e.preventDefault();
            document.querySelector('[data-target="page-complaints"]').click();
        };
    }

});