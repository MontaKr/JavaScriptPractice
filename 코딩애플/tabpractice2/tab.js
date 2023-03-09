let clickedBtn = $(".tab-button");
let clickedDiv = $(".tab-content");

$(".list").click(function (e) {
  tabControl(e.target.dataset.id);
});

function tabControl(i) {
  clickedBtn.removeClass("orange");
  clickedBtn.eq(i).addClass("orange");
  clickedDiv.removeClass("show");
  clickedDiv.eq(i).addClass("show");
}
