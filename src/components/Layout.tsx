import Wrapper from "./Wrapper";
import Main from "./Main";
import Nav from "./Nav";
import React, {useEffect, useRef} from "react";

type Props = {
    className?: string;
    scrollTop?: number;
}

const Layout: React.FunctionComponent<Props> = (props: any) => {
    const mainRef = useRef<HTMLDivElement>(null);
    //这部分代码需要等待页面刷新出来再执行，否则没有滚动条
    useEffect(() => {
        setTimeout(() => {
            if (mainRef.current) {
                console.log(props.scrollTop);
                mainRef.current.scrollTop = props.scrollTop;
            }
        }, 0);
    })
    return (
        <Wrapper>
            <Main ref={mainRef} className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    );
}
//设置组件属性的默认值
Layout.defaultProps = {
    scrollTop: 0 //鼠标移动默认为0
}

export default Layout;