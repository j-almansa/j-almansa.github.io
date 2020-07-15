//---[Plotly: radar chart]------------------------
data = [
  {
  type: 'scatterpolar',
  r: [0.5, 4.0, 4.5, 3.5, 4.5, 0.5],
  theta: ['Research','Theory','Programming', 'Applications', 'Strategy', 'Research'],
  fill: 'toself',
  fillcolor: 'rgba(255, 0, 255, 0.4)',//red | 'rgba(0, 164, 255, 0.4)'
  line: { color: 'rgba(255, 0, 255, 1)' },
  name: 'Deep Learning'
  },
  {
  type: 'scatterpolar',
  r: [0.5, 3.0, 4.5, 3.0, 3.0, 0.5],
  theta: ['Research','Theory','Programming', 'Applications', 'Strategy', 'Research'],
  fill: 'toself',
  fillcolor: 'rgba(255, 255, 0, 0.4)',//'rgba(0, 164, 255, 0.4)'
  line: { color: 'rgba(255, 255, 0, 1)' },
  name: 'Data Science'
  },
  {
  type: 'scatterpolar',
  r: [0.5, 3.0, 4.0, 2.0, 4.5, 0.5],
  theta: ['Research','Theory','Programming', 'Applications', 'Strategy', 'Research'],
  fill: 'toself',
  fillcolor: 'rgba(0, 255, 255 0.4)',//green | 'rgba(255, 216, 0, 0.4)'
  line: { color: 'rgba(0, 255, 255, 1)' },
  name: 'Machine Learning'
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

Plotly.plot("disciplines", data, layout)




//---[Plotly: sunburst]------------------------
/*
var ids = [
  "root",
    "FCP",
      "FCP-MNIST", "FCP-Fashion",
        "FCP-MNIST-TF1", "FCP-MNIST-TF2",
    "CNN",
      "CNN-MNIST", "CNN-Fashion",
    "TL",
      "TL-Cats&Dogs",
    "RL",
    "GAN"
  ];
var labels = [
  "",
    "FCP",
      "MNIST", "Fashion",
        "TF1", "TF2",
    "CNN",
      "MNIST", "Fashion",
    "TL",
      "Cats&Dogs",
    "RL",
    "GAN"
  ];
var parents = [
  "",
  "root",
    "FCP", "FCP",
      "FCP-MNIST","FCP-MNIST",
  "root",
    "CNN", "CNN",
  "root",
    "TL",
  "root",
  "root"
];

var data = [{
  type: "sunburst",
  ids: ids,
  labels: labels,
  parents: parents,
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 0.7},
  marker: {line: {width: 2}},
  branchvalue: 'relative'
}];

var layout = {
  title: {
    text: '<b>DL Techniques</b>',
    font: {
      family: 'Open Sans',
      size : 20
    }
  },
  //margin: {l: 0, r: 0, b: 0, t:0},
  sunburstcolorway:["#2CBFCA","#54D3D6","#75DDE0","#9DEBED","#D0EFF0"],
};


Plotly.newPlot('dltechniques', data, layout)
*/






//---[Highcharts: parallel coordinates]------------------------
var data2 = [
  [4, 5, 2, 3, 4, 4, 2, 3], //Python
  [3, 3, 2, 2, 3, 2, 2, 2], //Scala
  [4, 4, 1, 3, 4, 4, 2, 3], //JavaScript
  [4, 5, 0, 3, 4, 3, 2, 3], //Matlab
  [2, 2, 1, 2, 2, 2, 0, 1] //Bash
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
  var language = ['Python', 'Scala', 'JavaScript', 'Matlab', 'Bash'];
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
      subtitle : {
        text: '<a href="https://science.raphael.poss.name/programming-levels.html" target="_blank">self-assessment matrix</a>',
          style: {
            color: '#ccc',
            fontSize: '11px'
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
               //'rgba(255, 128, 0, 0.8)',
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
function stepfwd(str) {
  var date = str.split('-').map(x=>Number(x));
  return (date[1]%12==0)? date[0]+1+ '-01': date[0] + '-' + ((date[1]<9)? '0':'') + (date[1]+1);
}

function timelapse(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = stepfwd(currentDate);
  }
  return dateArray;
}

var studies = {
  0: { degree: 'BSc Mathematics',
       institute: 'National University of Colombia',
       thesis: 'Syntax and Semantics of Simply-typed &lambda;calculus',
       duration: '4 years, 1 month',
       years: timelapse('1991-01', '1996-09')
     },
  1: { degree: 'MSc Software Eng.',
       institute: 'Los Andes University',
       thesis: 'A Type System for a Concurrent Constrained Calculus',
       duration: '2 years',
       years: timelapse('1997-01', '1998-12')
     },
  2: { degree: 'Phd Computer Science',
       institute: 'BRICS, Aarhus University',
       thesis: 'A Study of Cryptologic Protocols',
       duration: '4 years',
       years: timelapse('2001-09', '2005-09')
     },
  3: { degree: 'MSc Mapping and Navigation',
       institute: 'DTU Space, Technical University of Denmark',
       thesis: '3D Reconstruction of Environments from Full Waveform LiDAR Data',
       duration: '2 years, 8 months',
       years: timelapse('2013-09', '2016-05')
     }
};

var work = {
  0: { position: 'Research Assistant',
       employer: 'Los Andes University',
       duties: 'investigated on typed OO+CP languages; implemented an application in a visual prog. language',
       outcomes: 'íd.',
       duration: '1 year',
       years: timelapse('1997-06', '1998-06')
     },
  1: { position: 'Part-time Lecturer',
       employer: 'National University of Colombia',
       duties: 'lectured on vector calculus to undergraduates',
       outcomes: 'effective speech, attentive listening, discussion enabling, ...',
       duration: '5 months',
       years: timelapse('1998-08', '1998-12')
     },
  2: { position: 'Part-time Lecturer',
       employer: 'Colombian College of Engineering',
       duties: 'lectured on foundational engineering subjects to undergraduates',
       outcomes: 'íd.',
       duration: '5 months',
       years: timelapse('1998-08', '1998-12')
     },
  3: { position: 'Part-time Lecturer',
       employer: 'Los Andes University',
       duties: 'lectured on basic computer science subjects to undergraduates',
       outcomes: 'íd.',
       duration: '1 year, 3 months',
       years: timelapse('2000-02', '2001-05')
     },
  4: { position: 'Teacher Assistant',
       employer: 'Aarhus University',
       duties: 'assisted undergraduate course on compiler construction',
       outcomes: 'íd.',
       duration: '4 months',
       years: timelapse('2001-09', '2002-01')
     },
  5: { position: 'Postdoc Fellow',
       employer: 'NTT Corporation',
       duties: 'created a framework to analyze cryptographic schemes',
       outcomes: 'íd.',
       duration: '3 years',
       years: timelapse('2005-12', '2008-12')
     },
  6: { position: 'Teacher Assistant',
       employer: 'Technical University of Denmark',
       duties: 'assisted undergraduate course on surveying and GIS',
       outcomes: 'íd.',
       duration: '1 month',
       years: timelapse('2014-06', '2014-07')
     },
  7: { position: 'Intern',
       employer: 'DHI GRAS',
       duties: 'implemented a ConvNet for impervious-surface mapping',
       outcomes: 'íd.',
       duration: '3 months',
       years: timelapse('2017-03', '2017-06')
     },
  8: { position: 'Data Scientist/Engineer',
       employer: 'LiveIntent',
       duties: 'implemented ETL tasks on a DWH in Scala',
       outcomes: 'íd.',
       duration: '1 year, 2 months',
       years: timelapse('2018-08', '2019-10')
     },
  9: { position: 'Consultant - Data Science',
       employer: 'Capgemini',
       duties: 'consulting in production-ready scalable data science solutions',
       outcomes: 'íd.',
       duration: '6 months',
       years: timelapse('2020-02', '2020-07')
     }
};

var other = {
  0: { subject: 'Personal development',
       where: 'Europe, Colombia, USA',
       activities: 'self-learning, sports, traveling',
       outcomes: 'íd.',
       duration: '5 years',
       years: timelapse('2009-08', '2013-08')
     },
  1: { subject: 'Personal development',
       where: 'Europe, Colombia, USA',
       activities: 'self-learning, paternity leave',
       outcomes: 'íd.',
       duration: '8 months',
       years: timelapse('2016-06', '2017-02')
     },
  2: { subject: 'Personal development',
       where: 'Europe',
       activities: 'self-learning',
       outcomes: 'íd.',
       duration: '1 year',
       years: timelapse('2017-07', '2018-07')
     }
};

var colors_studies = [
  'rgba(131,191,67, 1)',
  'rgba(248,255,0, 1)',
  'rgba(0,54,116, 1)',
  'rgba(184,50,50, 1)'
];

var colors_work = '#82c2da';

var colors_other = '#ee99ee'//'#ff9a03';

var data3 = [];

for ( var idx in studies ) {
  var trace = {
    x: studies[idx].years,
    y: Array(studies[idx].years.length).fill(19),
    //hovermode: 'closest',
    hovertext: Array(studies[idx].years.length).fill( '<b>' + studies[idx].degree + '</b><br>' +
                                                      studies[idx].institute + '<br>' +
                                                      studies[idx].duration
                                                    ),
    hoverinfo: Array(studies[idx].years.length).fill('x+text'),
    name: '<b>' + studies[idx].degree + '</b>',
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors_studies[ Number(idx) ],
      width: 15
    }
  };
  data3.push(trace);
}

//-------------------------------------
for ( var idx in work ) {
  var trace = {
    x: work[idx].years,
    y: Array(work[idx].years.length).fill(12),
    //hovermode: 'closest',
    hovertext: Array(work[idx].years.length).fill( '<b>' + work[idx].position + '</b><br>' +
                                                      work[idx].employer + '<br>' +
                                                      work[idx].duration
                                                    ),
    hoverinfo: Array(work[idx].years.length).fill('x+text'),
    name: '<b>Work</b>',
    showlegend: ( Number(idx) < 1 )? true : false,
    legendgroup: 'work',
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors_work,
      width: 15
    }
  };
  data3.push(trace);
}


//-------------------------------------
for ( var idx in other ) {
  var trace = {
    x: other[idx].years,
    y: Array(other[idx].years.length).fill(5),
    //hovermode: 'closest',
    hovertext: Array(other[idx].years.length).fill( '<b>' + other[idx].subject + '</b><br>' +
                                                      other[idx].activities + '<br>' +
                                                      other[idx].duration
                                                    ),
    hoverinfo: Array(other[idx].years.length).fill('x+text'),
    name: '<b>Other</b>',
    showlegend: ( Number(idx) < 1 )? true : false,
    legendgroup: 'other',
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors_other,
      width: 15
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
    y: -0.3
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
  height: 300,
  margin: {
    autoexpand: true,
    l: 0,//100
    r: 0,//20
    t: 30
  },
};

Plotly.newPlot('studies', data3, layout);


//---[Plotly: horizontal stacked bars]------------------------

//#e30b5d #db5572 #d07b89 #bf9aa0 #a6b7b9 #7ed3d1 #00eeeb

var strengths = document.getElementsByClassName('strengths');

for (var i=0; i<strengths.length; i++) {
    var values = strengths[i].getAttribute('values').split(',').map( n => 10*Number(n) );
    var trace1 = {
      x: [values[0]],
      y: ['<b>Strengths</b>'],
      name: 'Management',
      hovertext: (values[0]/10).toString(),
      hoverinfo: 'text',
      orientation: 'h',
      marker: {
        color: '#e30b5d',
        //width: 1
      },
      type: 'bar',
      width: 0.10
    };

    var trace2 = {
      x: [values[1]],
      y: ['<b>Strengths</b>'],
      name: 'Communication',
      hovertext: (values[1]/10).toString(),
      hoverinfo: 'text',
      orientation: 'h',
      type: 'bar',
      width: 0.10,
      marker: {
        color: '#d07b89',
        //width: 1
      }
    };

    var trace3 = {
      x: [values[2]],
      y: ['<b>Strengths</b>'],
      name: 'Organization',
      hovertext: (values[2]/10).toString(),
      hoverinfo: 'text',
      orientation: 'h',
      type: 'bar',
      width: 0.10,
      marker: {
        color: '#7ed3d1',
        //width: 1
      }
    };

    var trace4 = {
      x: [values[3]],
      y: ['<b>Strengths</b>'],
      name: 'Research',
      hovertext: (values[3]/10).toString(),
      hoverinfo: 'text',
      orientation: 'h',
      type: 'bar',
      width: 0.10,
      marker: {
        color: '#00eeeb',
        //width: 1
      }
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
      barmode: 'stack',
      xaxis:{
        showgrid: false,
        zeroline: false,
        showline: false,
        showticklabels: false
      },
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        y: 0.4
      },
      height: 150,
      margin: {
        t:0,
        l:80,
        r:0,
        b:0
      }
    };

    var options = {modeBarButtonsToRemove: ['sendDataToCloud',
                                            'zoom2d',
                                            'pan2d',
                                            'select2d',
                                            'lasso2d',
                                            'zoomIn2d',
                                            'zoomOut2d',
                                            'autoScale2d',
                                            'toggleSpikelines',
                                            'hoverClosestCartesian']};
    Plotly.newPlot(strengths[i], data, layout, options);
}
