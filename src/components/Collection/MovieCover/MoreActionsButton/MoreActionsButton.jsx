import React from 'react'
import './MoreActionsButton.css'
import { Dropdown } from 'react-bootstrap';

function MoreActionsButton() {

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className="more-btn" id="dropdown-basic" tag="button" type="button">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default MoreActionsButton;