!function () {
    var duration = 50;
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget);//button
        let speed = $button.attr('data-speed');
        $button.addClass('active')
            .siblings('.active')
            .removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fase':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id;
        id = setTimeout(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn & fn.call();
            }
        }, duration);
    }
    let code = `
    /*
    * 首先，需要准备皮卡丘的皮
    */
    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .wrapper{
        width: 100%;
        height: 170px;
        position: relative;
    }
    .wrapper > :not(:last-child){
        z-index: 1;
    }
    /*
    * 接下来，画皮卡丘的鼻子
    */
    .nose{
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 8px 9px;
        border-color: black transparent transparent;
        border-radius: 8px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -11px;
    }
    /*
    * 接下来，画皮卡丘的眼睛
    */
    .eye{
        width: 45px;
        height: 45px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    /*
    * 眼睛里的珠子
    */
    .eye::before{
        content: '';
        display: block;
        width: 22px;
        height: 22px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    /*
    * 左眼在左边
    */
    .eye.left{
        right: 50%;
        margin-right: 55px;
    }
    /*
    * 右眼在右边
    */
    .eye.right{
        left: 50%;
        margin-left: 55px;
    }
    /*
    * 然后，画皮卡丘的脸
    */
    .face{
        width: 62px;
        height: 62px;
        background: #FC0D1C;
        border:2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 76px;
    }
    /*
    * 将脸放到正确的位置
    */
    .face.left{
        right: 50%;
        margin-right: 73px;
    }
    .face.right{
        left: 50%;
        margin-left: 73px;
    }
    /*
    * 上嘴唇
    */
    .upperLip{
        height: 18px;
        width: 64px;
        border: 2px solid black;
        position: absolute;
        top: 48px;
        background: #FDE348;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 38px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 38px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /*
    * 下嘴唇
    */
    .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -70px;
        /* z-index: -1; */
        height: 115px;
        width: 140px;
        overflow: hidden;
    }
    .lowerLip{
        width: 140px;
        height: 1500px;
        background: #990513;
        border-radius: 100px/500px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    /*
    * 小舌头
    */
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 110px;
        height: 110px;
        background: #FC4A62;
        left: 50%;
        margin-left: -55px;
        border-radius: 55px;
    }
    /*
    * 好了，皮卡丘画完了
    */
    `
    writeCode('', code)
}.call()