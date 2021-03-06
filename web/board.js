
              

window.onload= init();
//
var data;
var arrInfo;


var Action= 0;
var Adventrue= 0;
var Casual= 0;
var Indie= 0;
var Platformer= 0;
var Racing= 0;
var RPG= 0;
var Strategy= 0;
var Sports= 0;
var Simulation= 0;


function init()
{
    //alert("init");
    Parse.initialize("V9qM2MTpfW6TFeaud1GEh5uIGKmMOa94N8NQDAdb", "9bkxnxKoZQiDl8KR6aKk5C6G5OR9ZQK8IvKwAARE"); 
        
    $(document).ready(function()
    {
        
        
        
    });
}

function test()
{
    data= $("#my_genre_list");
    arrInfo= data.text().split(',');

    for(var i=0; i<arrInfo.length; i++)
    {
        if(arrInfo[i] == "Action")
        {
            Action += 1;
        }
        else if(arrInfo[i] == "Adventrue")
        {
            Adventrue += 1;
        }
        else if(arrInfo[i] == "Casual")
        {
            Casual += 1;
        }
        else if(arrInfo[i] == "Indie")
        {
            Indie += 1;
        }
        else if(arrInfo[i] == "Platformer")
        {
            Platformer += 1;
        }
        else if(arrInfo[i] == "Racing")
        {
            Racing += 1;
        }
        else if(arrInfo[i] == "RPG")
        {
            RPG += 1;
        }
        else if(arrInfo[i] == "Strategy")
        {
            Strategy += 1;
        }
        else if(arrInfo[i] == "Sports")
        {
            Sports += 1;
        }
        else if(arrInfo[i] == "Simulation")
        {
            Simulation += 1;
        }
    }
    
    data.hide();
}


function checkLogin()
{
    // signup 을 띄울 것인지, dashboard로 가는 버튼을 띄울 것인지
    //var cookie= getCookie("login");
    var currentUser = Parse.User.current();

    
    //var dom1= $("div .jumbotron");
    var dom2= $("#top3");    
        
    if(currentUser)    // 로그인 되어있으면...
    {
        dom2.html("Logout");
        //UseSteamAPI(currentUser);
        
    }else{
        alert("잘못된 접근입니다~ :)");
        history.go(-1);
        //var url = "http://steamob.com/steam/signin.html";    
        //$(location).attr('href',url);
        //dom2.html("Login");
    }    
}

function UseSteamAPI(user)
{
    var steamID= user.get("steam_id");
    alert(steamID);
    
}

function onLogInStat()
{    
    var top3= $("#top3");     
    if(top3.html() == "Login")
    {
        var url = "http://steamob.com/signin.html";    
        $(location).attr('href',url);
    }
    else
    {
        Parse.User.logOut();    // 로그 아웃
        //setCookie("login", 0, -1);  // 쿠키 삭제.
        
        var url = "http://steamob.com/";    
        $(location).attr('href',url);
    }
}


$(function ()
{
    test();
    
Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
//      backgroundColor: {
//         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
//         stops: [
//            [0, '#2a2a2b'],
//            [1, '#3e3e40']
//         ]
//      },
    backgroundColor: ["#272B30"],
      style: {
         fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
    
    // 여기까지 high chart theme
    	
    	// Radialize the colors
		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
		        ]
		    };
		});
		
		// Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Genre list'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'genre list',
                data: [
                    
                    ['액션',   Action],
                    ['어드벤처',       Adventrue],
                    {
                        name: '캐주얼',
                        y: Casual
                    },
                    ['인디',    Indie],
                    ['플랫포머',     Platformer],
                    ['레이싱',   Racing],
                    ['롤플레잉',   RPG],
                    ['전략',   Strategy],
                    ['스포츠',   Sports],
                    ['시뮬레이션',   Simulation]
                    
                    
//                    ['Action',   Action],
//                    ['Adventrue',       Adventrue],
//                    {
//                        name: 'Casual',
//                        y: Casual
//                    },
//                    ['Indie',    Indie],
//                    ['Platformer',     Platformer],
//                    ['Racing',   Racing],
//                    ['RPG',   RPG],
//                    ['Strategy',   Strategy],
//                    ['Sports',   Sports],
//                    ['Simulation',   Simulation]
                    
//                    ['Action',   10.0],
//                    ['Adventrue',       10.0],
//                    {
//                        name: 'Casual',
//                        y: 10.0
//                    },
//                    ['Indie',    10.0],
//                    ['Platformer',     10.0],
//                    ['Racing',   10.0],
//                    ['RPG',   10.0],
//                    ['Strategy',   10.0],
//                    ['Sports',   10.0],
//                    ['Simulation',   10.0]
                    

                    
//                    ['데이터1',   45.0],
//                    ['데이터2',       26.8],
//                    {
//                        name: '데이터3',
//                        y: 12.8
//                    },
//                    ['데이터4',    8.5],
//                    ['데이터5',     6.2],
//                    ['데이터6',   0.7]
                ]
            }]
//            series: [{
//                type: 'pie',
//                name: 'Browser share',
//                data: [
//                    ['Firefox',   45.0],
//                    ['IE',       26.8],
//                    {
//                        name: 'Chrome',
//                        y: 12.8,
//                        sliced: true,
//                        selected: true
//                    },
//                    ['Safari',    8.5],
//                    ['Opera',     6.2],
//                    ['Others',   0.7]
//                ]
//            }]
        });
    });
    