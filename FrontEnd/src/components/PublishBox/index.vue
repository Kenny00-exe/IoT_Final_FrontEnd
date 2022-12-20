<template>
  <div class="publishBox">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="地区">

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

      </el-form-item>

      <el-form-item label="当日确诊">
        <el-input v-model="form.new"></el-input>
      </el-form-item>

      <el-form-item label="当日治愈">
        <el-input v-model="form.heal"></el-input>
      </el-form-item>

      <el-form-item label="当日死亡">
        <el-input v-model="form.dead"></el-input>
      </el-form-item>

      <el-form-item label="当日公告">
        <el-input v-model="form.inform"></el-input>
      </el-form-item>

      <el-form-item label="数据日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            v-model="form.date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        location: "",
        date: "",

        new: "",
        heal: "",
        dead: "",
        inform: "",
      },
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
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
      let formData = new FormData();
      formData.append("location", this.location);
      formData.append("date", this.form.date);
      formData.append("new", this.form.new);
      formData.append("heal", this.form.heal);
      formData.append("dead", this.form.dead);
      formData.append("inform", this.form.inform);

      axios.post("/publish", formData).then((res) => {
        console.log("数据：", res);
      });
    },
  },
};
</script>
