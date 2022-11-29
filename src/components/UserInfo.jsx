import React, { useRef, useState } from "react";
import { Overlay, Popover, Nav, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, setUserId } from "../slices/users";

export const UserInfo1 = () => {
  const userId = useSelector(selectUserId);

  return <div>Current User ID: {userId}</div>;
};

export const UserInfo = () => {
  const userId = useSelector(selectUserId);
  const avatarUrl = `https://robohash.org/${userId}`;
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleChange = ({ target: { value } }) => {
    setShow(!show);
    dispatch(setUserId(parseInt(value)));
  };

  return (
    <div className="user-info" ref={ref}>
      <Nav.Link onClick={handleClick}>Current User ID: {userId}</Nav.Link>
      <img onClick={handleClick} className="user-info__small-avatar" src={avatarUrl}></img>

      <Overlay show={show} target={target} placement="bottom" container={ref} containerPadding={20}>
        <Popover id="popover-contained">
          <Popover.Header as="h3">Select User</Popover.Header>
          <Popover.Body>
            <img className="user-info__avatar" src={avatarUrl}></img>
            <Form.Select value={userId} onChange={handleChange}>
              {new Array(10)
                .fill(0)
                .map((_, index) => index + 1)
                .map((id) => (
                  <option key={id} value={id}>
                    {id}
                  </option>
                ))}
            </Form.Select>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};
