<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>

        <div class="topContent">
            <span>
                Mine
            </span>
            <span class="active">
                Browse
            </span>
            <span>
                Community
            </span>
            <span>
                Video
            </span>
        </div>

        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        
    </div>

</template>

<style lang="less" scoped>
    .topNav {
        width: 100%;
        height: .6rem;
        padding: .16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .topContent {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .15rem;
            .active { //选中加粗
                font-weight: 900;
            }
        }
    }
</style>