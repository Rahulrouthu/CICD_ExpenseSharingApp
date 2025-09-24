import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Select } from "../ui";

const Form = styled.form`
  width: 300px;
  font-size: 1.6rem;
  display: grid;
  align-items: center;
  /* gap: 1rem; */
  background-color: var(--color-lightest);
  border-radius: 7px;
  Button{
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  font-size: 2.2rem;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
`;

const Label = styled.div`
    font-weight: 500;
    margin-top: 1rem;
    &:first-letter {
        display: inline-block;
        margin-right: 4px;
        font-size: 1.8rem;
    }
`;

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    };

    return (
        <Form className="form-split-bill" onSubmit={handleSubmit}>
            <Title>Split a bill with {selectedFriend.name}</Title>
            <Label>💰 Bill value</Label>
            <Input
                type="number"
                min="0"
                step="any"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />
            <Label>🧍‍♀️ Your expense</Label>
            <Input
                type="number"
                min="0"
                step="any"
                value={paidByUser}
                onChange={(e) => {
                    const val = Number(e.target.value);
                    if (Number.isNaN(val)) return;
                    setPaidByUser(val > bill ? paidByUser : val);
                }}
            />
            <Label>👫 {selectedFriend.name}'s expense</Label>
            <Input type="number" disabled value={paidByFriend} />
            <Label>🤑 Who is paying the bill</Label>
            <Select
                options={[
                    { value: "user", label: "You" },
                    { value: "friend", label: `${selectedFriend.name}` }
                ]}
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
            </Select>
            <Button>Split bill</Button>
        </Form>
    );
};

export default FormSplitBill;
