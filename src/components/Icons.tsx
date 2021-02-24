import React from "react";
import classnames from 'classnames'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

type Props = {
    name?: string;
} & React.SVGAttributes<SVGElement>

function Icons(props: Props) {
    const {name, children, className, ...rest} = props;
    return (
        <svg className={classnames('icons', className)} {...rest}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
}

export default Icons;