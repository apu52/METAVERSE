import React from 'react'
import { Button, Menu, Text, Container } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  return (
  <header style={{ boxShadow:"2px 2px 5px 0px rgba(0,0,0,0.2)", background:"#A6D0DD"}}>
  <Container size={"lg"}>
   <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:"10px 0px"}}>
        <Text size="xl" color={"black"}>
          KhathaBook
        </Text>

        <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={220}
      withinPortal
    >
      {user && (
        <Menu.Target>
        <Button rightIcon={<IconChevronDown size="1.05rem" stroke={1.5} />} pr={12}
        color="yellow" radius="md" size="xs" uppercase>
          {user && user.name}
        </Button>
      </Menu.Target>
      )}
      <Menu.Dropdown>
        <Menu.Item onClick={logout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>

    </div>
    </Container>
    </header>
    
  )
}

export default Header