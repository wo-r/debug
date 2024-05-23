(async function () {
    $(document).ready(async function () {
        $("#total").append($("#list").length)

        $("#search").on("input", function() {
            var search = $(this).val();
            $("#list a").each(function() {
                if (search.length === 0) {
                    $(this).html($(this).text()).show();
                    $(this).show()
                } else {            
                    if ($(this).text().match(new RegExp(search, "gi"))) {
                        var highlightedText = $(this).text().replace(new RegExp(search, "gi"), `<span class="text-brown">$&</span>`);
                        $(this).html(highlightedText).show();
                        $(this).show()
                    } else {
                        $(this).hide();
                    }
                }
            });
        });
    });
})();