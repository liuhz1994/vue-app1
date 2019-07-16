<template>
    <div>
        图片详情{{imgid}}
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            imgid:this.$route.params.imgid
        }
    }
}
</script>
