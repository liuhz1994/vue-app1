<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        
						<a v-for="cat in categoryList" :key="cat.id" :class="['mui-control-item',cat.id == 0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{cat.title}}
						</a>
		
					</div>
				</div>

			</div>

            <!-- 图片列表 -->
            <div class="picturelist">
                <div class="pictureitem">
                    <div class="content">
                    <img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big266000.jpg" alt="">
                    
                        <div class="title">aa</div>
                        <div class="zhaoyao">aa</div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>

//引入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'



export default {
    data:function(){
        return{
            categoryList:'',
            itemIndex:0,
        }
    },
    methods:{

        getCategory:function(){
            this.$http.get('api/getimgcategory')
            .then( result => {
                console.log("获取成功");
                this.categoryList = result.body.message;
                this.categoryList.unshift({
                    "id":0,
                    'title':'全部'
                })
            },error =>{
                console.log(error);
            })
        }
    },
    created:function(){
        this.getCategory();
    },
    mounted:function(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style lang="less" scoped>
  .picturelist{
     
      padding: 0 10px;
      
      
  }
</style>
