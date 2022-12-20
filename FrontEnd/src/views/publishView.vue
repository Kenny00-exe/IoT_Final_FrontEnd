<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="地区">
        <el-select v-model="form.location" placeholder="请选择活动区域">
          <el-option label="北京" value="北京"></el-option>
          <el-option label="美国" value="美国"></el-option>
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
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
      let formData = new FormData();
      formData.append("location", this.form.location);
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
