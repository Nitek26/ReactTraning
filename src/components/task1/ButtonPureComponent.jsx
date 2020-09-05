import React from 'react';

class ButtonPureComponent extends React.PureComponent {

    //constructor
    //this  -->this.props.title


    render() {
        return (<>
            pure class component
            <button>
                one button
            </button>
            <button>
                seconnd button
            </button>
        </>
        );
    }
}

export default ButtonPureComponent;