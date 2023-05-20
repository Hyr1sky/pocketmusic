<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipinzhongxin"></use>
            </svg>
            <span>MV</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-diantai"></use>
            </svg>
            <span>FM radio</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use>
            </svg>
            <span>Play List</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shengji"></use>
            </svg>
            <span>Rank</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .iconList {
        width: 100%;
        height: 2rem;
        margin-top: 10px;
        //padding: .3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .15rem;
        .iconItem {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 25%;
            height: 100%;
            .icon {
                width: .8rem;
                height: .8rem;
            }
        }
    }
</style>