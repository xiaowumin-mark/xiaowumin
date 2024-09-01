function Msg_init() {
    // 创建消息队列
    let msgDom = document.createElement('div');
    msgDom.className = 'msg-list';
    msgDom.id = "msg_list";

    document.body.appendChild(msgDom);

    // 创建样式
    let style = document.createElement('style');
    style.innerHTML = `
    .msg-list {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            /*鼠标穿透*/
            pointer-events: none;
            cursor: alias;
            display: flex;
            /*竖直排列并水平居中*/
            flex-direction: column;
            align-items: center;

        }

        .msg-item {
            width: auto;
            max-width: 90%;
            min-width:250px;
            height: 50px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 10px;
            background-color: rgb(32, 33, 33);
            display: flex;
            flex-direction: column;
            display: flex;
            /*水平居中*/
            justify-content: center;
            /*垂直居中*/
            align-items: center;
            border: 1px solid rgb(45, 45, 47);
            margin-top: 10px;
            transition: all 0.2s ease-in-out;
            animation: msg_fadein .2s ease-in-out;
        }
        .msg-text {
            font-size: large;
            line-height: normal;
            margin-top: 10px;
            /*禁止换行*/
            white-space: nowrap;
            
        }
        
        @keyframes msg_fadein {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100%{
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .msg-success {
            background-color: rgb(32, 184, 56);
        }
        .msg-error {
            background-color: rgb(231, 56, 48);
        }
        .msg-info {
            background-color:rgb(32, 33, 33) ;
        }
        .msg-warning {
            background-color: rgb(231, 184, 56);
        }
        `
    document.head.appendChild(style);


    return {
        addMsg(main){
            
            if (main.type == void(0)){
                main.type = 'info';
            }
            let msg = document.createElement('div');
            msg.className = 'msg-item msg-'+main.type;
            let text = document.createElement('p');
            text.className = 'msg-text';
            text.innerText = main.text;
            msg.appendChild(text);
            msgDom.appendChild(msg);
            let timer = setTimeout(()=>{
                msg.style.marginTop = '-50px';
                msg.style.opacity = '0';
                setTimeout(()=>{
                    msgDom.removeChild(msg);
                },200)
                clearTimeout(timer);
            },5000)
        }
    }
}