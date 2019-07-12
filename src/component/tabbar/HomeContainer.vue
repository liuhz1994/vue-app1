<template>
    <div >
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class="home_container" >
            <mt-swipe-item v-for="img in lunbotu" :key="img.id">
                <img :src="img.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></a></li>
        
    </ul> 
</div>
</template>
<script>
export default {
    data:function(){
        return{
            'lunbotu':[]
        }
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getlunbo').then(res =>{
                
        
                var json = res.body;
                console.log(json)
                var status = json.status;
                var datas = json.datas;
                if(status == 0){
                    
                    this.lunbotu = datas;
                }else{
                    console.log('error')
                }
            })
        }
    }
    ,
    created(){
        this.getLunbotu()
    }
}
</script>

<style lang="less" scoped>
// 轮播图
    .mint-swipe{
        height: 200px;

        .mint-swipe-item{
            
            &:nth-child(1){
                background-color: aqua;
            }
            &:nth-child(2){
                background-color: rebeccapurple;
            }
            &:nth-child(3){
                background-color: aquamarine;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }

        
    }
// 首页按钮
     .mui-grid-view.mui-grid-9{
            background-color: #fff ;

            .mui-table-view-cell{
                border: 0;
            }
        }
</style>



