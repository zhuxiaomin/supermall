<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>  
    </div>
</template>

<script>


export default {
    name:"NavBar"
}
</script>
<style scoped>
.nav-bar {
display: flex;
height: 44px;
line-height: 44px;
width: 100%;

}
.left {
    width: 60px;

}
.right {
    width: 60px;
}
.center {
    /*中间部分占据剩余空间*/
    flex: 1;
}

</style>