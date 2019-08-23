//---[Plotly: radar chart]------------------------
data = [
  {
  type: 'scatterpolar',
  r: [3.9, 2.8, 0.8, 0.7, 2.8, 3.9],
  theta: ['Research','Theory','Programming', 'Applications', 'Strategy', 'Research'],
  fill: 'toself',
  name: 'ML'
  },
  {
  type: 'scatterpolar',
  r: [0.15, 1, 3.9, 3.1, 1.5, 0.15],
  theta: ['Research','Theory','Programming', 'Applications', 'Strategy', 'Research'],
  fill: 'toself',
  name: 'DL'
  }
]

layout = {
  title: {
    text: '<b>Disciplines</b>',
    font: {
      family: 'Open Sans',
      size : 20
    }
  },
  showlegend: true, //this is default
  legend: {
    x: 0.8,
    y: 1.2,
    borderwidth: 1,
  },
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 5]
    }
  }
}

Plotly.plot("disciplines", data, layout, {showSendToCloud: true})



//---[Highcharts: parallel coordinates]------------------------
var data2 = [
  [3, 2, 2, 3, 4, 4, 2, 2],
  [4, 5, 2, 2, 3, 1, 0, 0],
  [2, 5, 3, 4, 5, 0, 4, 0],
  [5, 4, 5, 5, 0, 1, 5, 0],
  [0, 5, 0, 0, 4, 2, 3, 2],
  [0, 3, 2, 0, 1, 0, 1, 2],
];

var Activities = [
  'Writing',
  'Refactoring',
  'Embedding',
  'Reusing',
  'Explaining',
  'Self-learning',
  'Environment',
  'Troubleshooting'
];

var progActivities = [
  'Writing',
  'Refactoring',
  'Embedding',
  'Reusing',
  'Explaining',
  'Self-learning',
  'Environment',
  'Troubleshooting'
];

var profLevels = [
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'C2'
];

var maxVal = profLevels.length - 1;

function toLevel(v) {
  var level = ['basic 1', 'basic 2', 'intermediate 1', 'intermediate 2', 'advanced 1', 'advanced 2'];
  return level[v];
}


function progLanguage(n) {
  var language = ['Python', 'Scala', 'JavaScript', 'Matlab', 'Bash','Another'];
  return language[n];
}

    Highcharts.chart('proglanguages', {
      chart: {
        styleMode: true,
        type: 'spline',
        parallelCoordinates: true,
        parallelAxes: {
          lineWidth: 0
        }
      },
      title: {
        text: 'Programming Language Proficiency',
        style: {
          fontSize: 20
        }
      },
      plotOptions: {
        series: {
          animation: false,
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
          },
          states: {
            hover: {
              halo: {
                size: 0
              }
            }
          },
          events: {
            mouseOver: function () {
              this.group.toFront();
            }
          }
        }
      },
      tooltip: {
        formatter: function() {
          //this.x+'<br/>'+ 
          return this.series.name + ': '+ '<b>' + toLevel(this.y) + '</b>';
        }
      },
      xAxis: {
        categories: progActivities,
        offset: 10
      },
      yAxis: progActivities.map(function(act){
        return {
          min: 0,
          max: maxVal,
          categories: profLevels
        };
      }),
      colors: ['rgba(0, 0, 255, 0.8)',
               'rgba(0, 164, 255, 0.8)',
               'rgba(0, 255, 0, 0.8)',
               'rgba(255, 128, 0, 0.8)',
               //'rgba(153, 102, 0, 0.8)',
               'rgba(255, 216, 0, 0.8)',
               'rgba(255, 0, 0, 0.8)'],
      legend: {
        enabled: true
      },
      series: data2.map(function (set, i) {
        return {
          name: progLanguage(i),
          data: set,
          hover: {color: 'rgba(0,0,0,0.8)'},
          shadow: true
        };
      })
    });


/*function elcolor(value) {
    //var minimum, maximum = float(minimum), float(maximum);
    var minimum = 1;
    var maximum = 6;
    var ratio = 2 * (value-minimum) / (maximum - minimum);
    var b = Math.round(Math.max(0, 255*(1 - ratio)));
    var r = Math.round(Math.max(0, 255*(ratio - 1)));
    var g = 255 - b - r;
    var res = 'rgba(' + r.String() + ',' + g.String() + ',' + b.String() + ', 0.1)';
    alert(res);
    return res;
}*/


//---[Plotly: timeline]------------------------
var degrees =[ '<b>BSc Mathematics</b><br>' + 
                   'National University of Colombia<br>' + 
                   '4 years, 1 month',
               'MSc Software Eng.',
               'Phd Computer Science',
               'MSc Mapping and Navigation'
];

var bachelor = [ 1991, 1992, 1993, 1994, 1995, 1996 ];
var master1 = [ 1997, 1998 ];
var phd = [ 2001, 2002, 2003, 2004, 2005 ];
var master2 = [ 2013, 2014, 2015, 2016 ];
var studies = { 0: bachelor,
                1: master1,
                2: phd,
                3: master2 };

var colors_studies = [
  'rgba(160,75,187, 1)',
  'rgba(235,212,68, 1)',
  'rgba(68,124,235, 1)',
  'rgba(235,68,68, 1)'
];

var data3 = [];

for ( var idx in studies ) {
  var trace = {
    x: studies[idx],
    y: Array(studies[idx].length).fill(15),
    //hovermode: 'closest',
    hovertext: Array(studies[idx].length).fill(degrees[Number(idx)]),
    hoverinfo: Array(studies[idx].length).fill('x+text'),
    name: degrees[ Number(idx) ].split('<br')[0],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors_studies[ Number(idx) ],
      width: 12
    }
  };
  data3.push(trace);
}


var layout = {
  title: {
    text: '<b>Timeline</b>',
    font: {
      family: 'Open Sans',
      size : 20
    },
    yref: 'paper',
    y: 1
  },
  showlegend: true,
  legend: {
    //bordercolor: '#000',
    //borderwidth: 1,
    orientation: 'h',
    //yref: 'paper',
    y: -1
  },
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: true,
    linecolor: 'rgb(204,204,204)',
    linewidth: 2,
    autotick: false,
    tickmode: 'array',
    //tickvals: xData,
    ticktext: [1990, '', '', '', '', 1995, '', '', '', '',
               2000, '', '', '', '', 2005, '', '', '', '',
               2010, '', '', '', '', 2015, '', '', '', '',2020],
    ticks: 'outside',
    tickcolor: 'rgb(204,204,204)',
    tickwidth: 2,
    ticklen: 5,
    tickfont: {
      family: 'Arial',
      size: 12,
      color: 'rgb(82, 82, 82)'
    }
  },
  yaxis: {
    range: [0, 30],
    showgrid: false,
    zeroline: false,
    showline: false,
    showticklabels: false
  },
  autosize: false,
  height: 250,
  margin: {
    autoexpand: false,
    l: 0,//100
    r: 0,//20
    t: 30
  },
};

Plotly.newPlot('studies', data3, layout, {showSendToCloud: true});
