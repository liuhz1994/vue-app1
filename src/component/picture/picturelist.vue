<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        
						<a v-for="cat in categoryList" :key="cat.id" :class="['mui-control-item',cat.id == 0?'mui-active':'']" 
                        href="#item1mobile" data-wid="tab-top-subpage-1.html" @click="getImageslist(cat.id)">
							{{cat.title}}
						</a>
		
					</div>
				</div>

			</div>

            <!-- 图片列表 -->
            <ul class="picturelist">
                <router-link  class="pictureitem" v-for="item in imageslist" :key="item.id" :to='"/home/pictureinfo/"+item.id' tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h4>{{item.title}}</h4>
                        <div class="info-content">{{item.zhaiyao}}</div>
                    </div>
                </router-link>
            </ul>
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
            imageslist:'',
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
        },
        getImageslist:function(cateid){
            this.$http.get('api/getimages/'+cateid)
            .then(result => {
                this.imageslist = result.body.message
            },err =>{
                console.log(err);
            })
        }
    },
    created:function(){
        this.getCategory();
        this.getImageslist(0);
    },
    mounted:function(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style lang="less" scoped>
    ul li{
        list-style: none;
    }

  .picturelist{     
      padding:0 10px;
     

      .pictureitem{
        background-color: gainsboro;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        
        img{
            width: 100%;
            vertical-align: middle;
            
        }
        .info{
            position: absolute;
            bottom:0px;
            left: 0px;
            background-color: rgba(0, 0, 0, 0.4);
            max-height: 84px;
            color:#fff;
            text-align: left;
            padding-left: 5px;
            width: 100%;
            font-size: 13px;
        }

        // 懒加载图片
        img[lazy=loading] {
            width: 40px;
            height: 250px;
            margin: auto;
        }

        
      }    
  }

  
</style>
