<template>
  <div class="about">
    <div class="about-info">
      <p>本新冠疫情数据大屏使用 Vue + DataV + Echarts + Element UI 编写，数据实时且真实，来自 <a href="https://ncov.dxy.cn/ncovh5/view/pneumonia" target="_blank">全球新冠肺炎疫情地图-丁香园·丁香医生</a> 。</p>
      <p>目前仅针对 1080P 做适配，以后如果有时间可能适配更多的屏幕尺寸以及做优化。</p>
      <p>团队：{{ author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      author: '1953372 宋玥 1953378 赵翀 1951096 蓝盛霖 1950394 杨泽华',
    }
  }
}
</script>
<style  scoped>
.about-info {
  text-align: left;
}
.about-info p {
  line-height: 30px;
}
</style>