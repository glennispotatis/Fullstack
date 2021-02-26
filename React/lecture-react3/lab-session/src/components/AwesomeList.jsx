import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];
const DEFAULT_CONTROLS = ['clear', 'push', 'reset'];
const DEFAULT_STATE = {
    list: INITIAL_LIST,
    input: {
        value: '',
        index: null
    }
};

class AwesomeList extends Component {
    constructor(props) {
        super(props);
        this.state = { ...DEFAULT_STATE, list: this.props.list };

        this.input = React.createRef();
        this.handleClear = this.handleClear.bind(this);
        this.handlePush = this.handlePush.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.addElement = this.addElement.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onBlurInput = this.onBlurInput.bind(this);
    }

    render() {
        return (
            <>
                <ul>
                {this.state.list.map((item, index) => {
                        return (
                            <li key={item} onClick={() => this.selectItem(item, index)} style={{ cursor: 'pointer' }}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <label htmlFor="input">List Item</label>
                    <input
                        type="text"
                        id="input"
                        value={this.state.input.value}
                        onChange={this.onChangeValue}
                        onBlur={this.onBlurInput}
                        ref={this.input}
                    />
                </div>
                {this.isControlSet('clear') && <button onClick={this.handleClear}>Clear</button>}
                {this.isControlSet('push') && <button onClick={this.handlePush}>Push random string</button>}
                {this.isControlSet('reset') && <button onClick={this.handleReset}>Reset</button>}
                <button onClick={this.addElement} disabled={this.state.input.index !== null ? true : false}>Add element</button>
            </>
        );
    }

    handleClear() {
        console.log(this.props.controls);
        this.setState({
            list: []
        });
    }

    handlePush() {
        //console.log(this.props.controls);
        const randomString = Math.random().toString(36).substring(2, 7);

        this.setState((state) => {
            return {
                list: [...state.list, randomString]
            }
        });
    }

    handleReset() {
        this.setState({
            list: this.props.list
        });
    }

    addElement() {
        console.log('addElement');

        //empty elements cannot be added to the new list
        if (!this.state.input.value)
            return;

        //add new element (index is null)
        if (this.state.input.index === null) {
            this.setState((state) => {
                return {
                    list: [...state.list, state.input.value],
                    input: {
                        value: '',
                        index: null
                    }
                }
            });
        }
    }

    onChangeValue(event) {
        console.log('onChange: ', event.target.value);
        const value = event.target.value;
        //Creating mode
        if (this.state.input.index === null) {
            this._updateInputValue(value);
        }//editing mode
        else {
            this._updateInputValueAndEditedElementInList(value);
        }
    }

    onBlurInput() {
        //if we are modifying the state, when losing focus we reset the input
        if (this.state.input.index !== null) {
            this.setState({
                input: {
                    index: null,
                    value: ''
                }
            });
        }
    }

    selectItem(item, index) {
        console.log('SelectItem; ', index);
        this.setState((state) => {
            return {
                ...state,
                input: {
                    index: index,
                    value: item
                }
            }
        }, () => this.input.current.focus());
    }

    isControlSet(controlName) {
        return this.props.controls.find(elem => elem === controlName);
    }

    _updateInputValue(value) {
        this.setState((state) => {
            return {
                ...state,
                input: {
                    ...state.input,
                    value
                }
            }
        });
    }

    _updateInputValueAndEditedElementInList(value) {
        this.setState((state) => {
            let newList = [...state.list];
            newList[state.input.index] = value;
            return {
                list: newList,
                input: {
                    ...state.input,
                    value,
                }
            }
        });
    }

    static defaultProps = {
        list: INITIAL_LIST,
        controls: DEFAULT_CONTROLS
    };
}



export default AwesomeList;