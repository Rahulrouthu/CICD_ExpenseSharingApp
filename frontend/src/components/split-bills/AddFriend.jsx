import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Form, FileInput } from "../ui";
import { Container } from "../ui/Containers";

const Label = styled.div`
    font-weight: 500;
    margin-top: 1rem;
    &:first-letter {
        display: inline-block;
        margin-right: 4px;
        font-size: 1.8rem;
    }
`;

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [file, setFile] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (!name) return;

        // Hand off to parent: backend will persist and return final friend with id
        onAddFriend({ name, file });

        setName("");
        setImage("");
        setFile(null); // Reset file state after form submission
    }

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        // setImage(selectedFile.name); // Display the name of the selected file
        setFile(selectedFile); // Save the file object in state
    }

    return (
        <Form className="form-add-friend" onSubmit={handleSubmit}>
            <Label>👫 Friend name</Label>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Label>🌄 Upload Image</Label>
            <FileInput
                onChange={handleFileChange}
            /><span>{image}</span>
            <Button size="sm">Add</Button>
        </Form>
    );
}

export default FormAddFriend;
