import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import FormAddFriend from '../split-bills/AddFriend';
import FriendsList from '../split-bills/FriendsList';
import FormSplitBill from '../split-bills/SplitBillForm';
import { Button, Header, Heading, Row } from "../ui";
import { friendsAPI } from '@/services/friends';
import { useAuth } from '../context/AuthContext';

// Helper to compute an image URL from a friend record
const friendImageUrl = (friend) => {
  if (friend?.imageFileName) return `/api/users/user/profileImage/${friend.imageFileName}`;
  return '/default-user.jpg';
};

const StyledContainer = styled.div`
  min-height: 60vh;
  display: grid;
  /* place-items: center; */
  grid-template-columns: 50rem 30rem;
  column-gap: 4rem;
  align-items: start;
`

const Sidebar = styled.div`
  width: fit-content;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  
  li {
    display: grid;
    grid-template-columns: 4.8rem 1fr auto;
    align-items: center;
    column-gap: 1.6rem;
    padding: 1.2rem;
    border-radius: 7px;
    transition: 0.5s;

    &.selected,
    &:hover {
      background-color: var(--color-lightest);
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
    grid-row: span 2;
  }

  h3 {
    grid-row: 1;
    grid-column: 2;
  }

  p {
    grid-row: 2;
    grid-column: 2;
  }

  .button {
    grid-row: span 2;
    grid-column: 3;
  }

  > .button {
    float: right;
    margin-right: 1.2rem;
  }

  .green {
    color: #66a80f;
  }

  .red {
    color: #e03131;
  }
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  font-size: 2.2rem;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
`;

const SplitBill = () => {
  const { loggedInUser } = useAuth();
  const [friends, setFriends] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Load friends for this user
  useEffect(() => {
    const load = async () => {
      if (!loggedInUser) return;
      try {
        const list = await friendsAPI.list(loggedInUser);
        const normalized = list.map(f => ({
          id: f.id,
          name: f.name,
          balance: Number(f.balance ?? 0),
          image: friendImageUrl(f),
        }));
        setFriends(normalized);
      } catch (e) {
        console.error('Failed to load friends', e);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  const handleShowAddFriend = () => {
    setShowAddFriend(show => !show);
  };

  const handleAddFriend = async (friend) => {
    try {
      if (!loggedInUser) return;
      let created;
      if (friend.file) {
        created = await friendsAPI.addWithImage(loggedInUser, { name: friend.name, file: friend.file });
      } else {
        created = await friendsAPI.add(loggedInUser, { name: friend.name });
      }
      const newFriend = { id: created.id, name: created.name, balance: Number(created.balance ?? 0), image: friendImageUrl(created) };
      setFriends(friends => [...friends, newFriend]);
      setShowAddFriend(false);
    } catch (e) {
      console.error('Failed to add friend', e);
    }
  };

  const handleSelection = (friend) => {
    setSelectedFriend(cur => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = async (value) => {
    if (!selectedFriend) return;
    // Optimistic update
    const targetId = selectedFriend.id;
    let rolledBack = false;
    setFriends(prev => prev.map(f => f.id === targetId ? { ...f, balance: f.balance + value } : f));
    try {
      await friendsAPI.updateBalance(targetId, value);
    } catch (e) {
      console.error('Failed to update balance', e);
      // Rollback on failure
      rolledBack = true;
      setFriends(prev => prev.map(f => f.id === targetId ? { ...f, balance: f.balance - value } : f));
      // Optionally show a toast here if you use one
    } finally {
      // Clear selection regardless; if rolled back, the list is restored
      setSelectedFriend(null);
    }
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Split Bills</Heading>
      </Row>
      <StyledContainer>
        <Sidebar>
          <Title>Friends</Title>
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
            onRemove={async (id) => {
              try {
                await friendsAPI.remove(id);
                setFriends(prev => prev.filter(f => f.id !== id));
                if (selectedFriend?.id === id) setSelectedFriend(null);
              } catch (e) {
                console.error('Failed to remove friend', e);
              }
            }}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <Button variation='text' onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </Sidebar>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </StyledContainer>
    </>
  );
};

export default SplitBill;
