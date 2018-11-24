$("#download_data").click(function(){
      // alert('f')
    var selected_values = $("#dropdowns :selected").map(function (i,sel) {
      return sel.value;
    }).toArray();

    selected_values = selected_values.toString().replace(/,/g, "/");
    file_name = selected_values.toString().replace(/\//g, "_");
    selected_values = "conjunto/mapabase_2018/"+ selected_values + "/" + file_name+ ".zip";
    $("a").attr("href", selected_values);
  });