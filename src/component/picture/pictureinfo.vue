<template>
    <div class="pictureInfoContainer">
  
        <div class="title">{{imageInfo.title}}</div>
        <div class="subtitle">
            <span>发表时间：{{imageInfo.add_time | timeFormart}}</span>
            <span>点击：{{imageInfo.click}} 次</span>
        </div>

        <vue-preview :slides="thumimage" @close="handleClose"></vue-preview>
       

        <div class="content">
            {{imageInfo.content}}
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            imgid:this.$route.params.imgid,
            imageInfo:'',
            thumimage:[],
          
        }
    },
    methods:{
        //获取详细信息
        getImageInfo:function(){

            this.$http.get('api/getimageInfo/'+this.imgid)
            .then(result => {
                console.log('获取成功')
                this.imageInfo = result.body.message[0];
            },err => {
                console.log(err)
            })
        },
        //获取缩略图数组
        getThumimage:function(){

            this.$http.get('api/getthumimages/'+this.imgid)
            .then(result => {

                console.log('获取成功')
                this.thumimage =  result.body.message;
                this.thumimage.forEach(item => {
                    item.w = 600;
                    item.h = 400;
                    item.msrc = item.src;
                })
            },err => {
                console.log(err);
            })
        },
        handleClose () {
        console.log('close event')
      }
    },
    created:function(){
        this.getImageInfo();
        this.getThumimage();
    }
}
</script>
<style lang="less" scoped>
    .pictureInfoContainer{
        .title{
            font-size: 20px;
            text-align: center;
            margin: 10px 0;
            color: #26a2ff;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px #eee solid;
            margin: 10px 0;
        }
        
    }
</style>
