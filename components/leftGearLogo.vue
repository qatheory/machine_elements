<template>
    <div class="parent">
        <div class="gear-box">
            <div class="gear-cover"></div>
            <div class="gear">
                <div class="center"></div>
                <div class="tooth"></div>
                <div class="tooth"></div>
                <div class="tooth"></div>
                <div class="tooth"></div>
            </div>
            <div class="gear2">
                <div class="center"></div>
                <div class="tooth2"></div>
                <div class="tooth2"></div>
                <div class="tooth2"></div>
            </div>
        </div>
    </div>
</template>
<style>
.parent {
    display: flex;
    height: 300px;
    align-items: center;
}
.gear-box {
    position: relative;
    display: flex;
    width: 350px;
    height: 100%;
    margin: auto;
}
.gear-cover {
    position: absolute;
    top: 10px;
    left: -75px;
    width: 500px;
    height: 280px;
    border-width: 7px;
    border-color: rgb(90, 90, 90);
    border-style: solid;
    border-radius: 55px;
}
.gear {
    position: relative;
    left: -14px;
    width: 200px;
    height: 200px;
    margin: auto;
    background: rgb(30, 30, 30);
    border-radius: 50%;
    animation-name: spin-cw;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.gear .center {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 10;
    width: 100px;
    height: 100px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
}

.tooth {
    position: absolute;
    top: -25px;
    left: 75px;
    z-index: 1;
    width: 45px;
    height: 250px;
    background: rgb(30, 30, 30);
}

.tooth:nth-child(2) {
    transform: rotate(45deg);
}

.tooth:nth-child(3) {
    transform: rotate(90deg);
}

.tooth:nth-child(4) {
    transform: rotate(135deg);
}

.gear2 {
    position: relative;
    left: 14px;
    width: 150px;
    height: 150px;
    margin: auto;
    background: rgb(60, 60, 60);
    border-radius: 50%;
    animation-name: spin-ccw;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.gear2 .center {
    position: absolute;
    top: 37.5px;
    left: 37.5px;
    z-index: 10;
    width: 75px;
    height: 75px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
}

.tooth2 {
    position: absolute;
    top: -25px;
    left: 50px;
    z-index: 1;
    width: 45px;
    height: 200px;
    background: rgb(60, 60, 60);
}

.tooth2:nth-child(2) {
    transform: rotate(60deg);
}

.tooth2:nth-child(3) {
    transform: rotate(120deg);
}

@keyframes spin-cw {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-ccw {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
</style>
