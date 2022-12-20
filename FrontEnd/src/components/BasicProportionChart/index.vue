<template>
  <div ref="basicProportionChart" style="width: 100%; height: 100%"></div>
</template>
<script>
let chart = null;
const calculateProportion = (value, total) => {
  return ((value / total) * 100).toFixed(0);
};
export default {
  props: {
    data: Object,
  },
  methods: {
    initChart() {
      if (null != chart && undefined != chart) {
        chart.dispose();
      }
      chart = this.$echarts.init(this.$refs.basicProportionChart);
      this.setOptions();
    },
    setOptions() {
      var currentConfirmedCount = 0;
      var confirmedCount = 0;
      var curedCount = 0;
      var deadCount = 0;
      this.axios
        .get("http://localhost:8080/api/getCountryNow", {
          params: {
            name: this.$store.state.worldMapSelect,
          },
        })
        .then((response) => {
          confirmedCount = response.data.confirmedCount;
          curedCount = response.data.curedCount;
          deadCount = response.data.deadCount;
          currentConfirmedCount = confirmedCount - curedCount - deadCount;
          let list = [
            {
              name: this.$store.state.worldMapSelect + "现有确诊占比",
              value: calculateProportion(currentConfirmedCount, confirmedCount),
            },                                                          
            {
              name: this.$store.state.worldMapSelect + "累计治愈占比",
              value: calculateProportion(curedCount, confirmedCount),
            },
            {
              name: this.$store.state.worldMapSelect + '累计死亡占比',
              value: calculateProportion(deadCount, confirmedCount)
            },
          ];
          let titleList = [],
            seriesList = [];
          list.forEach((item, index) => {
            titleList.push({
              text: item.name,
              top: "75%",
              left: index * 30 + 12 + "%",
              textStyle: {
                fontWeight: "normal",
                color: "#BCBCBF",
                fontSize: "12",
              },
            });
            //
            seriesList.push({
              name: item.name,
              type: "pie",
              clockWise: true,
              radius: ["50%", "66%"],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              center: [index * 30 + 20 + "%", "35%"],
              data: [
                {
                  value: item.value,
                  name: item.name,
                  label: {
                    normal: {
                      formatter: function (params) {
                        return params.value + "%";
                      },
                      position: "center",
                      show: true,
                      textStyle: {
                        fontSize: "14",
                        fontWeight: "bold",
                        color: "#FFF",
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: "#D32E58", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#F99266", // 100% 处的颜色
                          },
                        ],
                      },
                      label: {
                        // show: false
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  name: "lanweihong",
                  value: 100 - item.value,
                },
              ],
            });
          });
          let option = {
            title: titleList,
            color: ["rgba(7, 158, 254, .9)"],
            series: seriesList,
          };
          chart.setOption(option);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  watch: {
    data: {
      handler(newValue, oldValue) {
        if (oldValue != newValue) {
          this.setOptions();
        }
      },
      deep: true,
    },
  },
};
</script>