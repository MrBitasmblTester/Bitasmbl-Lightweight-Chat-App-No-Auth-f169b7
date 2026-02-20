# Bitasmbl-Lightweight-Chat-App-No-Auth-f169b7

## Description
Build a web application that allows users to join anonymous chatrooms and exchange messages in real-time using WebSockets. The focus is on fast communication, simple interface, and responsive updates without requiring user registration.

## Tech Stack
- Ember.js
- Laravel
- Socket.IO

## Requirements
- Allow users to join chatrooms without authentication
- Send and receive messages in real-time using WebSockets
- Display messages with timestamps and user identifiers (anonymous)
- Handle multiple chatrooms simultaneously
- Gracefully handle disconnected users and reconnections

## Installation
bash
git clone https://github.com/MrBitasmblTester/Bitasmbl-Lightweight-Chat-App-No-Auth-f169b7.git
cd Bitasmbl-Lightweight-Chat-App-No-Auth-f169b7


## Usage
- Run Laravel backend
- Run Ember.js frontend
- Ensure Socket.IO server is running

## Implementation Steps
1. Scaffold Ember.js app for chat UI and room selection.
2. Create Laravel backend to manage chatroom message routing.
3. Integrate Socket.IO for real-time WebSocket communication.
4. Implement anonymous user identifiers and timestamps.
5. Add support for multiple simultaneous chatrooms.
6. Handle disconnect and reconnection logic on client and server.