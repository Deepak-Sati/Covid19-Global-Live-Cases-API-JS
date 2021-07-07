$(document).ready(function(){
        init()
        function init(){
            var url = "https://api.covid19api.com/summary"
            var data = ''
            $.get(url,function(info){
              console.log(info.Global)
              data = `
                      <td>${info.Global.TotalConfirmed}</td>
                      <td>${info.Global.TotalDeaths}</td>
                      <td>${info.Global.TotalRecovered}</td>
                      <td>${info.Global.NewDeaths}</td>
                      <td>${info.Global.NewConfirmed}</td>
                     `
              $("#data").html(data)
            })
        }
        function refreshData(){
            $("data").empty()
            init()
        }
})