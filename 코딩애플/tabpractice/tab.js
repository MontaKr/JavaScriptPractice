let clickedBtn = $(".tab-button");
let clickedDiv = $(".tab-content");

for (let i = 0; i < 3; i++) {
  clickedBtn.eq(i).on("click", function () {
    clickedBtn.removeClass("orange");
    clickedBtn.eq(i).addClass("orange");
    clickedDiv.removeClass("show");
    clickedDiv.eq(i).addClass("show");
  });
}
