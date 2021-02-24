import {useEffect, useRef} from "react";

export const useUpdate = (fn:()=>void,deps:any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });

    //钩子函数，在values被修改时触发
    useEffect(() => {
        if (count.current > 1) { //tags从undefined初始化为空对象的时候，不执行下面的语句
            fn()
        }
    }, [deps]) //tags必须是不可变的数据，否则就算tags的值被修改了，也不会触发该事件
}