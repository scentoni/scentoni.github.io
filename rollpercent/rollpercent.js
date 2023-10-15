$(function () {
    UpdateRolls();
    $('input').on('change', function () {
        UpdateRolls();
    });
});

function UpdateRolls() {
    var minroll = $("input.minroll").val();
    var thisroll = $("input.thisroll").val();
    var maxroll = $("input.maxroll").val();
    var fracroll = (thisroll - minroll) / (maxroll - minroll);
    $('label.thisroll').text(Math.round(100 * fracroll) + "%");
}
