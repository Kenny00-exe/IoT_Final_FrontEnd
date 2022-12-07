<template>
  <div
    class="main-map-chart"
    ref="dataMap"
    style="width: 100%; height: 100%"
   />
</template>
<script>
  import '../../assets/china'
  import '../../assets/map/js/world'
  import store from "@/store";
  import axios from 'axios'
let chart = null
export default {
  props: {
    title: String,
    list: Array
  },
  data () {
    return {
      config: {},
      ChinaMapList:[],
      changeProvinceMapSelect: "上海市",
    }
  },
  methods: {
    fun_test() {
      axios
        .get("http://localhost:8080/api/getProvinceLatest")
        .then(response=>{
             for(let i of response.data)
                  {
                      this.$data.ChinaMapList.push({
                      name:i.provinceName,
                      value:i.provinceConfirmedCount,
                      },
                    );
                  }
        }).catch(function (error) {
            console.log(error);
        })
    },
    initChart () {
      if (null != chart && undefined != chart) {
        chart.dispose()
      }
      chart = this.$echarts.init(this.$refs.dataMap)
      this.fun_test()
      this.setOptions()
    },
    setOptions() {
      this.list = this.$data.ChinaMapList
      let option = {
        tooltip: {
          triggerOn: 'click',//提示触发条件，mousemove鼠标移至触发，还有click点击触发
          formatter: function (e, t, n) {//判断数据，提供相应的url
          //单元格formatter(格式化器)函数，带3个参数：
          //value：字段值
          //row：行记录数据
          //index: 行索引
            return 0.5 == e.value ? e.name + ':有疑似病例' : e.seriesName + '<br />' + e.name + ':' + e.value;
          },
        },
        title: {
          text: this.title,
          top: 50,
          left: 'center',
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 24,
            color: '#BCBCBF'
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          textStyle: {
            color: 'rgba(255,255,255,0.7)'
          },
          // 图例
          pieces: [
            {
              gt: 5000,
              label: '> 5000 人',
              color: '#073067',
            },
            {
              gte: 1000,
              lte: 5000,
              label: '1000 - 5000 人',
              color: '#1260A8',
            },
            {
              gte: 500,
              lt: 1000,
              label: '500 - 1000 人',
              color: '#66A9D7',
            },
            {
              gt: 100,
              lt: 500,
              label: '100 - 500 人',
              color: '#A2CBE1',
            },
            {
              gt: 0,
              lt: 100,
              label: '< 100 人',
              color: '#B5D1E0'
            },
          ],
          show: !0,
        },
        geo: {
          map: 'china',
          roam: true, // 开启缩放和平移
          scaleLimit: {
            min: 1, // 最小缩放
            max: 3, // 最大缩放
          },
          zoom: 1.23, // 当前视角的缩放比例
          top: 120,//组件离容器上侧的距离
          label: {//地图上的文本标签，说明地图的一些数据信息
            normal: {
              show: !0,//是否显示标签
              fontSize: '19',//文字的字体大小
              color: 'rgba(255,255,255,0.7)',//文字的颜色
            },
          },
          itemStyle: {//地图区域的多边形 图形样式
            normal: {
              //color: '#FFF',//图形的颜色
              areaColor: 'rgb(255,255,255)',//地图区域的颜色
              shadowBlur: 10,//图形阴影的模糊大小
              shadowColor: 'rgba(0, 0, 0, 0.5)',//外发光 该属性配合shadowBlur一起设置图形的阴影效果
              borderColor: '#79CEED',//图形的描边颜色
            },
            emphasis: {
              // color: '#FFF',
              areaColor: '#60EFDB', // 悬浮区背景，就是鼠标移到区域上变的颜色
              // areaColor: '#2a333d',
              backgroundcolor: "#000000",
              //focus: 'self', //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果
              shadowOffsetX: 5,//阴影水平方向上的偏移距离
              shadowOffsetY: 10,//阴影垂直方向上的偏移距离
              borderWidth: 2,//描边线宽
            },
          }
        },
                  nameMap:{
"湖北": "湖北省",
"广东": "广东省",
"上海": "上海市",
"黑龙江": "黑龙江省",
"云南": "云南省",
"河南": "河南省",
"江苏": "江苏省",
"福建": "福建省",
"河北": "河北省",
"浙江": "浙江省",
"四川": "四川省",
"湖南": "湖南省",
"北京": "北京市",
"山东": "山东省",
"安徽": "安徽省",
"新疆": "新疆维吾尔自治区",
"江西": "江西省",
"辽宁": "辽宁省",
"陕西": "陕西省",
"内蒙古": "内蒙古自治区",
"重庆": "重庆市",
"吉林": "吉林省",
"天津": "天津市",
"广西": "广西壮族自治区",
"甘肃": "甘肃省",
"山西": "山西省",
"海南": "海南省",
"贵州": "贵州省",
"宁夏": "宁夏回族自治区",
"青海": "青海省",
"西藏": "西藏自治区",
          },
        series: [
          {
            name: '累计确诊病例',
            type: 'map',
            geoIndex: 0,
            data: this.list
          }
        ],
      };
      chart.on("click", function (params) {
        this.changeProvinceMapSelect = params.name;
        store.commit("increment_p", params.name);
      });
      chart.setOption(option)
    }
  },
  watch: {//监听函数
    list: {
      handler (newValue, oldValue) {
        if (oldValue != newValue) {
          this.setOptions()
        }
      },
      deep: true
    }
  }
}
</script>
