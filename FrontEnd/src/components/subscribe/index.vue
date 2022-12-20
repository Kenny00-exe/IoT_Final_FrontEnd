<template>
  <div class="subscribeBox">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="location" label="地区" width="180">
      </el-table-column>
      <el-table-column prop="new" label="新增" width="180"> </el-table-column>
      <el-table-column prop="heal" label="治愈" width="180"> </el-table-column>
      <el-table-column prop="dead" label="死亡" width="180"> </el-table-column>
      <el-table-column prop="inform" label="通知"> </el-table-column>
    </el-table>

    <el-select v-model="location" placeholder="请选择">
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>

    <el-button type="primary" @click="subscribe">订阅</el-button>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchMessages();
  },



  methods: {
    fetchMessages(){
      axios
      .get("/go/get_messages", {
        params: { userID: "jiawei" },
      })
      .then((res) => {
        for (var index in res.data) {
          this.tableData.push(eval("(" + res.data[index] + ")"));
        }

        console.log("数据：", res.data);
      });
},
    
    subscribe() {
      console.log(this.location);
      let formData = new FormData();
      formData.append("userID", "jiawei");
      formData.append("location", this.location);

      axios.post("/go/subscribe", formData).then((res) => {
        console.log("数据：", res);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  data() {
    return {
      tableData: [],

      options: [
        {
          label: '国内',
          options: [{
              value: "湖北省",
              label: "湖北省",
            },
            {
              value: "广东省",
              label: "广东省",
            },
            {
              value: "上海市",
              label: "上海市",
            },
            {
              value: "黑龙江省",
              label: "黑龙江省",
            },
            {
              value: "云南省",
              label: "云南省",
            },
            {
              value: "河南省",
              label: "河南省",
            },
            {
              value: "江苏省",
              label: "江苏省",
            },
            {
              value: "福建省",
              label: "福建省",
            },
            {
              value: "河北省",
              label: "河北省",
            },
            {
              value: "浙江省",
              label: "浙江省",
            },
            {
              value: "四川省",
              label: "四川省",
            },
            {
              value: "湖南省",
              label: "湖南省",
            },
            {
              value: "北京市",
              label: "北京市",
            },
            {
              value: "山东省",
              label: "山东省",
            },
            {
              value: "安徽省",
              label: "安徽省",
            },
            {
              value: "新疆维吾尔自治区",
              label: "新疆维吾尔自治区",
            },
            {
              value: "江西省",
              label: "江西省",
            },
            {
              value: "辽宁省",
              label: "辽宁省",
            },
            {
              value: "陕西省",
              label: "陕西省",
            },
            {
              value: "内蒙古自治区",
              label: "内蒙古自治区",
            },
            {
              value: "重庆市",
              label: "重庆市",
            },
            {
              value: "吉林省",
              label: "吉林省",
            },
            {
              value: "天津市",
              label: "天津市",
            },
            {
              value: "广西壮族自治区",
              label: "广西壮族自治区",
            },
            {
              value: "甘肃省",
              label: "甘肃省",
            },
            {
              value: "山西省",
              label: "山西省",
            },
            {
              value: "海南省",
              label: "海南省",
            },
            {
              value: "贵州省",
              label: "贵州省",
            },
            {
              value: "宁夏回族自治区",
              label: "宁夏回族自治区",
            },
            {
              value: "青海省",
              label: "青海省",
            },
            {
              value: "西藏自治区",

              label: "西藏自治区",
            },]
        }, {
          label: '国外',
          options: [{
              value: "美国",
              label: "美国",
            },]
        },
      ],
      location: "",
    };
  },
};
</script>
