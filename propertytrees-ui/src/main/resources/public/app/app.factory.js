altairApp
  .factory('windowDimensions', [ '$window', function($window) {
    return {
      height : function() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      },
      width : function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }
  } ])
  .factory(
    'utils',
    [ function() {
      return {
        calculate : function(calculationType, calculationInput, userInput) {
          if (calculationType == "FIXED") {
            return calculationInput;
          } else if (calculationType == "PERCENTAGE") {
            return userInput * (calculationInput / 100);
          }
        },
        preparefilterDataFromDatatableData : function(dtData, additionalCriteria, operator) {
          var columns = null;
          var filterData = {};
          filterData.size = null;
          filterData.page = null;
          filterData.criterias = new Array();
          filterData.sorts = new Array();
          $(dtData).each(function() {
            var _$this = this;
            if (_$this.name == "columns") {
              columns = _$this.value;
            } else if (_$this.name == "start") {
              filterData.page = _$this.value;
            } else if (_$this.name == "length") {
              filterData.size = _$this.value;
            } else if (_$this.name == "order") {
              $(_$this.value).each(function() {
                var sort = new Object();
                sort.property = columns[this.column].data;
                sort.direction = this.dir;
                filterData.sorts.push(sort);
              });
            } else if (_$this.name == "search") {
              $(columns).each(function() {
                if (this.searchable) {
                  var criteria = new Object();
                  criteria.key = this.data;
                  criteria.value = "%" + _$this.value.value + "%";
                  criteria.operator = "LIKE";
                  filterData.criterias.push(criteria);
                }
              });
            }
          })
          if (additionalCriteria) {
            filterData.criterias.push(additionalCriteria);
          }
          if (operator) {
            filterData.operator = operator;
          }
          filterData.page = (filterData.page / filterData.size) + 1;
          return JSON.stringify(filterData);
        },
        prepareDatatableDataFromResponse : function(response) {
          var data = {};
          data.recordsTotal = 0;
          data.recordsFiltered = 0;
          data.data = new Array();
          if (response == null || response.data == null) {
            return data
          }
          data.data = response.data.contents;
          data.recordsTotal = response.data.metadata.totalElements;
          data.recordsFiltered = response.data.metadata.filteredElements;
          return data;
        },

        // Util for finding an object by its 'id' property among an array
        findByItemId : function findById(a, id) {
          for (var i = 0; i < a.length; i++) {
            if (a[i].item_id == id)
              return a[i];
          }
          return null;
        },
        // serialize form
        serializeObject : function(form) {
          var o = {};
          var a = form.serializeArray();
          $.each(a, function() {
            if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
              }
              o[this.name].push(this.value || '');
            } else {
              o[this.name] = this.value || '';
            }
          });
          return o;
        },
        // high density test
        isHighDensity : function() {
          return ((window.matchMedia && (window
              .matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window
              .matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
        },
        // touch device test
        isTouchDevice : function() {
          return !!('ontouchstart' in window);
        },
        // local storage test
        lsTest : function() {
          var test = 'test';
          try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
          } catch (e) {
            return false;
          }
        },
        // show/hide card
        card_show_hide : function(card, begin_callback, complete_callback, callback_element) {
          $(card).velocity({
            scale : 0,
            opacity : 0.2
          }, {
            duration : 400,
            easing : [ 0.4, 0, 0.2, 1 ],
            // on begin callback
            begin : function() {
              if (typeof begin_callback !== 'undefined') {
                begin_callback(callback_element);
              }
            },
            // on complete callback
            complete : function() {
              if (typeof complete_callback !== 'undefined') {
                complete_callback(callback_element);
              }
            }
          }).velocity('reverse');
        }
      };
    } ]).factory(
  'eChartDataBuilder',
  [ function() {
    return {
      buildForPieChart : function(originalData) {
        var finalData = {
          "legends" : [],
          "data" : [],
        };
        for (var l = 0; l < originalData.length; l++) {
          finalData.legends.push(originalData[l].name);
          finalData.data.push({
            "name" : originalData[l].name,
            "value" : originalData[l].data
          });
        }
        return finalData;
      },

      buildFor2DChart : function(originalData) {
        var finalData = {
          "xAxis" : [],
          "legends" : [],
          "data" : [],
          "count" : []
        };
        for (var i = 0; i < originalData.data.length; i++) {
          finalData.xAxis.push(originalData.data[i].name);
          if (finalData.legends.length == 0) {
            for (var j = 0; j < originalData.data[i].data.length; j++) {
              finalData.legends.push(originalData.data[i].data[j].name);
            }
          }
        }
        for (var j = 0; j < finalData.legends.length; j++) {
          var seriesData = {
            "name" : finalData.legends[j],
            "data" : []
          };
          finalData.data.push(seriesData);
          for (var i = 0; i < originalData.data.length; i++) {
            seriesData.data.push(
              originalData.data[i].data[j].data
            );
          }
        }

        if (originalData.count) {
          for (var l = 0; l < originalData.count.length; l++) {
            finalData.count.push({
              "name" : originalData.count[l].name,
              "value" : originalData.count[l].data
            });
          }
        }
        return finalData;
      },
      buildForTimelineChart : function(originalData) {
        var finalData = {
          "xAxis" : [],
          "timeline" : [],
          "legends" : [],
          "data" : [],
          "count" : []
        };
        for (var i = 0; i < originalData.data.length; i++) {
          finalData.timeline.push(originalData.data[i].name);
          for (var j = 0; j < originalData.data[i].data.length; j++) {
            if (finalData.xAxis.indexOf(originalData.data[i].data[j].name) < 0) {
              finalData.xAxis.push(originalData.data[i].data[j].name);
            }
            if (finalData.legends.length == 0) {
              for (var k = 0; k < originalData.data[i].data[j].data.length; k++) {
                finalData.legends.push(originalData.data[i].data[j].data[k].name);
              }
            }
          }
        }
        for (var i = 0; i < originalData.data.length; i++) {
          var data = {};
          data.title = {
            "text" : originalData.data[i].name + " Statistics"
          };
          finalData.data.push(data);
          data.series = [];
          for (var j = 0; j < finalData.legends.length; j++) {
            var seriesData = {};
            data.series.push(seriesData);
            seriesData.data = [];
            for (var k = 0; k < originalData.data[i].data.length; k++) {
              var t = {};
              seriesData.data.push(t);
              t.name = originalData.data[i].data[k].name
              t.value = originalData.data[i].data[k].data[j].data
            }
          }
          if (originalData.data[i].additionalData) {
            var temp = [];
            for (var l = 0; l < originalData.data[i].additionalData.length; l++) {
              temp.push({
                "name" : originalData.data[i].additionalData[l].name,
                "value" : originalData.data[i].additionalData[l].data
              });
            }
            data.series.push({
              "data" : temp
            });
          }
        }

        if (originalData.count) {
          for (var l = 0; l < originalData.count.length; l++) {
            finalData.count.push({
              "name" : originalData.count[l].name,
              "value" : originalData.count[l].data
            });
          }
        }
        //        if (finalData.xAxis.length > 20) {
        //          for(var l = 0; l < finalData.xAxis.length; l++){
        //            if (l % 2 == 0) {
        //              finalData.xAxis[l] = "\n" + finalData.xAxis[l];
        //            } 
        //          }
        //        }
        return finalData;
      }
    }
  } ]).factory(
  'eChartBuilder',
  [ function() {
    return {
      buildPieChart : function(dom, chartData, option) {
        var chart = echarts.init(dom);
        var option = {
          tooltip : {
            trigger : 'item',
            formatter : "{a} <br/>{b} : {c} ({d}%)"
          },
          legend : {
            data : chartData.legends,
            bottom : '10%',
          },
          color : (option.color ? option.color : [ '#f4511e', '#ffb300', '#00897b', '#7CB342', '#708090' ]),
          series : [
            {
              name : option.title,
              type : 'pie',
              radius : (option.radius ? option.radius : '90%'),
              center : [ '50%', '30%' ],
              avoidLabelOverlap : false,
              label : {
                normal : {
                  show : false,
                  position : 'center'
                },
                emphasis : {
                  show : true,
                  textStyle : {
                    fontSize : '10',
                    fontWeight : 'bold'
                  }
                }
              },
              labelLine : {
                normal : {
                  show : false
                }
              },
              data : chartData.data
            }
          ]
        };
        chart.setOption(option, true);
        return chart;
      },
      buildGaugeChart : function(dom, chartData, option) {
        var chart = echarts.init(dom);
        var option = {
          tooltip : {
            formatter : "{a} <br/>{b} : {c}%"
          },
          series : [
            {
              title : {
                offsetCenter : [ 0, '-50%' ],
                fontSize : 5,
                fontStyle : 'italic'
              },
              axisLine : {
                lineStyle : {
                  width : 4
                }
              },
              axisTick : {
                length : 10,
                lineStyle : {
                  color : [ [ 0.2, '#f4511e' ], [ 0.8, '#ffb300' ], [ 1, '#00897b' ] ],
                  color : 'auto'
                }
              },
              splitLine : {
                length : 10,
                lineStyle : {
                  color : 'auto'
                }
              },
              pointer : {
                width : 2
              },
              detail : {
                offsetCenter : [ 0, '50%' ],
                textStyle : {
                  fontWeight : 'bolder',
                  fontSize : 20,
                },
                formatter : '{value}%'
              },
              name : option.title,
              type : 'gauge',
              radius : '100%',
              data : chartData.data
            }
          ]
        };
        chart.setOption(option, true);
        return chart;
      },

      buildTimelineChart : function(dom, chartData, option) {
        var chart = echarts.init(dom);
        var tOption = {
          baseOption : {
            timeline : {
              bottom : 20,
              axisType : "category",
              loop : ((option.timeline && option.timeline.loop) ? option.timeline.loop : true ),
              autoPlay : ((option.timeline && option.timeline.autoPlay) ? option.timeline.autoPlay : true ),
              currentIndex : ((option.timeline && option.timeline.currentIndex) ? option.timeline.currentIndex : 0  ),
              playInterval : ((option.timeline && option.timeline.playInterval) ? option.timeline.playInterval : 1000),
              controlStyle : {
                position : "left"
              },
              padding : [
                0,
                0
              ],
              data : chartData.timeline,
              label : {

              }
            },
            title : {
              subtext : option.title
            },
            tooltip : {

            },
            legend : {
              x : "right",
              data : chartData.legends
            },
            color : (option.color ? option.color : [ '#f4511e', '#ffb300', '#00897b', '#7CB342', '#708090' ]),
            calculable : true,
            grid : {
              top : 80,
              bottom : 100,
              left : '35',
              right : '15',
              tooltip : {
                trigger : "axis",
                axisPointer : {
                  type : "shadow",
                  label : {
                    show : true
                  }
                }
              }
            },
            xAxis : [
              {
                type : "category",
                //                axisLabel : {
                //                  interval : 10
                //                },
                //                nameRotate : 30,
                data : chartData.xAxis,
                splitLine : {
                  show : false
                }
              }
            ],
            yAxis : [
              {
                type : "value",
                name : option.yAxis
              }
            ],
            series : option.chartConfigurations
          },
          options : chartData.data
        }
        if (chartData.xAxis.length > 20) {
          tOption.baseOption.timeline.bottom = 40;
          tOption.baseOption.dataZoom = [
            {
              type : 'inside',
              start : 0,
              end : 20
            },
            {
              show : true,
              height : 17,
              type : 'slider',
              top : '90%',
              xAxisIndex : [ 0 ],
              start : 0,
              end : 20,
              realtime : true,
              handleIcon : 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize : '120%',
              handleStyle : {
                color : '#009688',
                shadowBlur : 3,
                shadowColor : 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX : 2,
                shadowOffsetY : 2
              }
            } ];
        }
        chart.setOption(tOption, true);
        return chart;
      },

      buildSeriesChart : function(dom, chartData, option) {
        for (var i = 0; i < option.chartConfigurations.length; i++) {
          for (var j = 0; j < chartData.data.length; j++) {
            if (option.chartConfigurations[i].name == chartData.data[j].name) {
              var series = option.chartConfigurations[i];
              series.data = chartData.data[j].data;
              chartData.data[j] = series;
            }
          }
        }
        var chart = echarts.init(dom);
        var tOption = {
          title : {
            text : option.title,
            subtext : option.subTitle
          },
          tooltip : {
            trigger : 'axis',
            axisPointer : {
              type : 'shadow' // 'line' | 'shadow'
            }
          },
          legend : {
            data : chartData.legends
          },
          color : (option.color ? option.color : [ '#f4511e', '#ffb300', '#00897b', '#7CB342', '#708090' ]),
          grid : {
            left : '35',
            right : '15',
            bottom : '25',
            containLabel : true
          },
          xAxis : [
            {
              type : 'category',
              data : chartData.xAxis
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : option.chartConfigurations,
        }
        if (chartData.xAxis.length > 20) {
          tOption.grid.bottom = '45';
          tOption.dataZoom = [
            {
              type : 'inside',
              start : 0,
              end : 20
            },
            {
              show : true,
              height : 17,
              type : 'slider',
              top : '90%',
              xAxisIndex : [ 0 ],
              start : 0,
              end : 20,
              realtime : true,
              handleIcon : 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize : '120%',
              handleStyle : {
                color : '#009688',
                shadowBlur : 3,
                shadowColor : 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX : 2,
                shadowOffsetY : 2
              }
            } ];
        }
        chart.setOption(tOption, true);
        return chart;
      }
    }
  } ])

angular.module("ConsoleLogger", [])
  // router.ui debug
  // app.js (run section "PrintToConsole")
  .factory("PrintToConsole", [ "$rootScope", function($rootScope) {
    var handler = {
      active : false
    };
    handler.toggle = function() {
      handler.active = !handler.active;
    };

    if (handler.active) {
      console.log($state + ' = ' + $state.current.name);
      console.log($stateParams + '=' + $stateParams);
      console.log($state_full_url + '=' + $state.$current.url.source);
      console.log(Card_fullscreen + '=' + card_fullscreen);

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log("$stateChangeStart --- event, toState, toParams, fromState, fromParams");
        console.log(arguments);
      });
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        console.log("$stateChangeError --- event, toState, toParams, fromState, fromParams, error");
        console.log(arguments);
      });
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        console.log("$stateChangeSuccess --- event, toState, toParams, fromState, fromParams");
        console.log(arguments);
      });
      $rootScope.$on('$viewContentLoading', function(event, viewConfig) {
        console.log("$viewContentLoading --- event, viewConfig");
        console.log(arguments);
      });
      $rootScope.$on('$viewContentLoaded', function(event) {
        console.log("$viewContentLoaded --- event");
        console.log(arguments);
      });
      $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
        console.log("$stateNotFound --- event, unfoundState, fromState, fromParams");
        console.log(arguments);
      });
    }

    return handler;
  } ]);