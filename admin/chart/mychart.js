			/* 变量区域 */
			var chart;
			var legend;
			var monthData=["一月","二月","三月","四月","五月","六月"];
			var curVisitData =[2025,1582,2809,2322,3122,2814];
			var lastVisitData =[1828,1282,2609,2422,2722,2614];
			var timeVisitedChartData = [];
            var columnChartData = [
                {
                    "month":monthData[0],
                    "visits": curVisitData[0],
                    "color": "#FF0F00"
                },
                {
                    "month": monthData[1],
                    "visits": curVisitData[1],
                    "color": "#FF6600"
                },
                {
                    "month": monthData[2],
                    "visits": curVisitData[2],
                    "color": "#FF9E01"
                },
                {
                     "month": monthData[3],
                    "visits": curVisitData[3],
                    "color": "#FCD202"
                },
                {
                     "month": monthData[4],
                    "visits": curVisitData[4],
                    "color": "#F8FF01"
                },
                {
                     "month": monthData[5],
                    "visits": curVisitData[5],
                    "color": "#B0DE09"
                },          
            ];

			 var pieChartData = [
                {
                    "month": monthData[0],
                    "litres": curVisitData[0]
                },
                {
                    "month": monthData[1],
                    "litres": curVisitData[1]
                },
                {
                    "month": monthData[2],
                    "litres": curVisitData[2]
                },
                {
                    "month": monthData[3],
                    "litres": curVisitData[3]
                },
                {
                    "month": monthData[4],
                    "litres": curVisitData[4]
                },
                {
                    "month": monthData[5],
                    "litres": curVisitData[5]
                },
            ];
            
            var lineChartData = [
                {
                    "month": monthData[0],
                    "thisyear": curVisitData[0],
                    "lastyear": lastVisitData[0]
                },
                {
                    "month": monthData[1],       
                    "thisyear": curVisitData[1],
                    "lastyear": lastVisitData[1]
                },
                {
                    "month": monthData[2],
                    "thisyear": curVisitData[2],
                    "lastyear": lastVisitData[2]
                },
                {
                   "month": monthData[3],
                   "thisyear": curVisitData[3],
                   "lastyear": lastVisitData[3]
                },
                {
                    "month": monthData[4],
                    "thisyear": curVisitData[4],
                    "lastyear": lastVisitData[4]
                },
                {
                    "month": monthData[5],
                    "thisyear": curVisitData[5],
                    "lastyear": lastVisitData[5]
                },
                
            ];
            
            /* 函数区 */
            AmCharts.ready(function () {
                column3D();
            });
            
           function pie3D(){
           		chart = new AmCharts.AmPieChart();//创建饼状图对象
           		chart.dataProvider = pieChartData;
                chart.titleField = "month";//类别域
                chart.valueField = "litres";//值域

                // LEGEND
                legend = new AmCharts.AmLegend();//创建图表说明，自动调整图形的颜色设置
                legend.align = "center";//居中对齐
                legend.markerType = "circle";//图标类型，可能的值有：方形，圆形，菱形，triangleUp，triangleDown，triangleLeft，triangleDown，泡沫，行，没有。
                chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
         		legend.maxColumns=3;//设置列数：3列
                chart.addLegend(legend);
                
                //3d
                chart.depth3D = 10;
                chart.angle = 10;
                                          
                // WRITE
                chart.write("chartdiv");
                
               
           }
           
           function column3D(){  
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = columnChartData;
                chart.categoryField = "month";//类别域：x轴上类别名称
                chart.startDuration = 1;
                chart.depth3D = 50;//创建一个3D效果，并设置3D部分的深度，默认值0
                chart.angle = 30;//设置3D效果的角度，两者值都必须大于0，默认值0
                chart.marginRight = -45;//右外间隔-45，默认20

                // AXES
                // category
         	
//              var categoryAxis = chart.categoryAxis;//图表自身创建
//              categoryAxis.gridAlpha = 0;//网格线透明度，默认值：0.15 竖网格线
//              categoryAxis.axisAlpha = 0;//轴的透明度。取值范围为0 - 1。默认值：1 x轴透明

                // value
//              var valueAxis = new AmCharts.ValueAxis();//创建刻度坐标轴
//              valueAxis.axisAlpha = 0;//y轴
//              valueAxis.gridAlpha = 0;//横网格线透明
//              chart.addValueAxis(valueAxis);
//		
//              // GRAPH
//              var graph = new AmCharts.AmGraph();
//              graph.valueField = "visits";//dataProvider
//              graph.colorField = "color";
//              graph.balloonText = "<b>[[category]]: [[value]]</b>";
//              graph.type = "column";//绘图类型
//              graph.lineAlpha = 0.5;//边框透明度
//              graph.lineColor = "#FFFFFF";//边框线颜色
//              graph.topRadius = 1;//顶部半径
//              graph.fillAlphas = 0.9;//填充透明度
//              chart.addGraph(graph);
//				
//				// CURSOR
//              var chartCursor = new AmCharts.ChartCursor();//光标对象，相应鼠标移动事件
//              chartCursor.cursorAlpha = 0;
//              chartCursor.zoomable = false;//不支持缩放
//             // chartCursor.categoryBalloonEnabled = false;//指定类别气球是否启用。默认true
//             chartCursor.categoryBalloonEnabled = true;
//              chartCursor.valueLineEnabled = true;         
//              chartCursor.valueLineBalloonEnabled = true;
//              chartCursor.valueLineAlpha = 1;
//              chart.addChartCursor(chartCursor);
//
//              //chart.creditsPosition = "top-right";//商标位置

                // WRITE
                chart.write("chartdiv");//添加图表到指定的DIV
           }
                   
           function setLabelPosition() {
                	chart = new AmCharts.AmPieChart();
	           		chart.dataProvider = pieChartData;
	                chart.titleField = "month";
	                chart.valueField = "litres";
	
	                // LEGEND
	                legend = new AmCharts.AmLegend();
	                legend.align = "center";
	                legend.markerType = "circle";
	                chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
	                legend.maxColumns=3;//设置列数：3列
	                chart.addLegend(legend);
	                
	                //3d
	                chart.depth3D = 10;
	                chart.angle = 10;
	                                          
                    chart.labelRadius = -30;//标签和饼状片的距离，设置为负值，可让标签在饼状片内显示，默认值20
                    chart.labelText = "[[percents]]%";
                    
                    // WRITE
	                chart.write("chartdiv");         
            }
            
            function lineGraph(){
            	
            	chart = new AmCharts.AmSerialChart();//创建线，面，柱，栏，步线，平滑线，蜡烛柱状图表。图表支持具有简单或对数刻度多个轴，数据点可以以相等的/不规则间隔或时间线的基础上显示。
                chart.dataProvider = lineChartData;//数据源
                chart.categoryField = "month";//类别字段名(String类型),获取在dataProvider对象中字段的名称，根据该字段的名称，获取对应的值，用于图表类别轴上。
                chart.startDuration = 0.5;//动画持续时间，以秒为单位
                chart.balloon.color = "#000000";//动态气泡字体颜色
            
                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.fillAlpha = 1;
                categoryAxis.fillColor = "#FAFAFA";
                categoryAxis.gridAlpha = 0;
                categoryAxis.axisAlpha = 0;
                categoryAxis.gridPosition = "start";
                categoryAxis.position = "top";
            
                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.title = "访问量对比图";
                valueAxis.dashLength = 5000;
                valueAxis.axisAlpha = 0;
                valueAxis.minimum = 500;
                valueAxis.maximum = 5000;
                valueAxis.integersOnly = true;
                valueAxis.gridCount = 10;
                valueAxis.reversed = false; // this line makes the value axis reversed
                chart.addValueAxis(valueAxis);
                
                var graph = new AmCharts.AmGraph();
                graph.title = "2014系统访问量";
                graph.valueField = "thisyear";
                graph.balloonText = "2014年访问量 [[category]]: [[value]]";
                graph.bullet = "round";
                chart.addGraph(graph);
            
                var graph = new AmCharts.AmGraph();
                graph.title = "2013系统访问量";
                graph.valueField = "lastyear";
                graph.balloonText = "2013访问量 [[category]]: [[value]]";
                graph.bullet = "round";
                chart.addGraph(graph);
                
                // CURSOR
				var chartCursor = new AmCharts.ChartCursor();
				chartCursor.cursorPosition = "mouse";
				chartCursor.zoomable = false;
				chartCursor.cursorAlpha = 0;
				chart.addChartCursor(chartCursor);                
				
				// LEGEND
				var legend = new AmCharts.AmLegend();
				legend.useGraphSettings = true;
				chart.addLegend(legend);
            
                // WRITE
                chart.write("chartdiv");
            }
            
            

            function timeVisitedChart() {
                // first we generate some random data
                generateTimeVisitedChartData();

                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.pathToImages = "amcharts/amcharts/images/";//获取拖动按钮图片
                chart.dataProvider = timeVisitedChartData;
                chart.categoryField = "date";

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.parseDates = true; // 如果类别轴值（x轴）是Date对象，设置为true。在这种情况下，图表将解析日期，并把日期数据点分布在类别轴上。
                categoryAxis.minPeriod = "mm"; //前置条件：parseDates = true。 设置数据可设置值：FFF - 毫秒，SS - 秒,mm - 分钟，HH - 小时，DD - 天，MM - 个月，YYYY - 年。			 
                categoryAxis.gridAlpha = 0.07;
                categoryAxis.axisColor = "#DADADA";

                // Value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.gridAlpha = 0.07;
                valueAxis.title = "Time Visted Chart";
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.type = "line"; // try to change it to "column"
                //graph.title = "red line";
                graph.valueField = "visits";
                graph.lineAlpha = 1;
                graph.lineColor = "#d1cf2a";
                graph.fillAlphas = 0.3; // setting fillAlphas to > 0 value makes it area graph
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorPosition = "mouse";
                chartCursor.categoryBalloonDateFormat = "JJ:NN, DD MMMM";
                chart.addChartCursor(chartCursor);

                // SCROLLBAR
                var chartScrollbar = new AmCharts.ChartScrollbar();

                chart.addChartScrollbar(chartScrollbar);

                // WRITE
                chart.write("chartdiv");
            }

            // generate some random data, quite different range 
            function generateTimeVisitedChartData() {
                // current date
                var firstDate = new Date();//Date 对象会自动把当前日期和时间保存为其初始值
                // now set 1000 minutes back                 
                firstDate.setMinutes(firstDate.getDate()-1000);

                // and generate 1000 data items
                for (var i = 0; i < 1000; i++) {
                    var newDate = new Date(firstDate);
                    // each time we add one minute
                    newDate.setMinutes(newDate.getMinutes() + i);
                    // some random number      
                    var visits = Math.round(Math.random() * 40) + 10;
                    // add data item to the array                          
                    timeVisitedChartData.push({
                        date: newDate,
                        visits: visits
                    });
                }
            }

  